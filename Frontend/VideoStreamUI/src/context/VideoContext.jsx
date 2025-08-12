// src/context/VideoContext.js

import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useCallback,
  useMemo
} from 'react';
import { videoAPI } from '../utils/api';
import toast from 'react-hot-toast';
import { mapVideoDetails } from '../utils/mapVideoDetails';

const VideoContext = createContext();

const initialState = {
  videos: [],
  currentVideo: null,
  playlist: [],
  currentPlaylistIndex: 0,
  isPlaying: false,
  isLoading: false,
  searchQuery: '',
  filters: {
    duration: 'all',
    date: 'all',
    quality: 'all'
  },
  userPreferences: {
    playbackSpeed: 1,
    quality: 'auto',
    autoplay: true,
    volume: 1
  },
  recentlyPlayed: [],
  favorites: []
};

function videoReducer(state, action) {
  switch (action.type) {
    case 'PLAY_VIDEO': {
      const video = action.payload;
      if (!video) {
        return { ...state, currentVideo: null, isPlaying: false };
      }
      const recent = state.recentlyPlayed.filter(v => v?.id !== video.id);
      return {
        ...state,
        currentVideo: video,
        isPlaying: true,
        recentlyPlayed: [video, ...recent].slice(0, 10)
      };
    }

    case 'SET_VIDEOS':
      return { ...state, videos: action.payload };

    case 'SET_CURRENT_VIDEO':
      return { ...state, currentVideo: action.payload };

    case 'SET_PLAYLIST':
      return { ...state, playlist: action.payload };

    case 'ADD_TO_PLAYLIST':
      return { ...state, playlist: [...state.playlist, action.payload] };

    case 'REMOVE_FROM_PLAYLIST':
      return {
        ...state,
        playlist: state.playlist.filter(v => v.id !== action.payload)
      };

    case 'SET_CURRENT_PLAYLIST_INDEX':
      return { ...state, currentPlaylistIndex: action.payload };

    case 'SET_IS_PLAYING':
      return { ...state, isPlaying: action.payload };

    case 'PAUSE_VIDEO':
      return { ...state, isPlaying: false };

    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };

    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload };

    case 'SET_FILTERS':
      return { ...state, filters: { ...state.filters, ...action.payload } };

    case 'SET_USER_PREFERENCES':
      return {
        ...state,
        userPreferences: { ...state.userPreferences, ...action.payload }
      };

    case 'ADD_TO_RECENTLY_PLAYED': {
      const video = action.payload;
      const recent = state.recentlyPlayed.filter(v => v?.id !== video?.id);
      return {
        ...state,
        recentlyPlayed: [video, ...recent].slice(0, 10)
      };
    }

    case 'TOGGLE_FAVORITE': {
      const exists = state.favorites.some(v => v.id === action.payload.id);
      return {
        ...state,
        favorites: exists
          ? state.favorites.filter(v => v.id !== action.payload.id)
          : [...state.favorites, action.payload]
      };
    }

    case 'SET_FAVORITES':
      return { ...state, favorites: action.payload };

    case 'SET_RECENTLY_PLAYED':
      return { ...state, recentlyPlayed: action.payload };

    case 'NEXT_VIDEO': {
      const nextIndex = state.currentPlaylistIndex + 1;
      if (nextIndex < state.playlist.length) {
        return {
          ...state,
          currentPlaylistIndex: nextIndex,
          currentVideo: state.playlist[nextIndex]
        };
      }
      return state;
    }

    case 'PREVIOUS_VIDEO': {
      const prevIndex = state.currentPlaylistIndex - 1;
      if (prevIndex >= 0) {
        return {
          ...state,
          currentPlaylistIndex: prevIndex,
          currentVideo: state.playlist[prevIndex]
        };
      }
      return state;
    }

    default:
      return state;
  }
}

export const VideoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(videoReducer, initialState);

  useEffect(() => {
    const prefs = localStorage.getItem('userPreferences');
    if (prefs) dispatch({ type: 'SET_USER_PREFERENCES', payload: JSON.parse(prefs) });

    const recent = localStorage.getItem('recentlyPlayed');
    if (recent) dispatch({ type: 'SET_RECENTLY_PLAYED', payload: JSON.parse(recent) });

    const favs = localStorage.getItem('favorites');
    if (favs) dispatch({ type: 'SET_FAVORITES', payload: JSON.parse(favs) });
  }, []);

  useEffect(() => {
    localStorage.setItem('userPreferences', JSON.stringify(state.userPreferences));
  }, [state.userPreferences]);

  useEffect(() => {
    localStorage.setItem('recentlyPlayed', JSON.stringify(state.recentlyPlayed));
  }, [state.recentlyPlayed]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(state.favorites));
  }, [state.favorites]);

  const fetchVideos = useCallback(async () => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const resp = await videoAPI.getAll();
      const payload = resp.data ?? resp;
      const rawList = Array.isArray(payload.videos)
        ? payload.videos
        : Array.isArray(payload)
        ? payload
        : [];

      const videos = rawList.map(mapVideoDetails).filter(Boolean);
      dispatch({ type: 'SET_VIDEOS', payload: videos });
    } catch (err) {
      console.error('Error fetching videos:', err);
      toast.error('Failed to load videos');
      dispatch({ type: 'SET_VIDEOS', payload: [] });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  }, []);

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  const searchVideos = useCallback(async (query, keepPlaybackState = false) => {
    if (!keepPlaybackState) {
      dispatch({ type: 'SET_CURRENT_VIDEO', payload: null });
      dispatch({ type: 'SET_PLAYLIST', payload: [] });
      dispatch({ type: 'SET_IS_PLAYING', payload: false });
    }

    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const resp = await videoAPI.search(query);
      const payload = resp.data ?? resp;
      const rawList = Array.isArray(payload.videos)
        ? payload.videos
        : Array.isArray(payload)
        ? payload
        : [];

      const vids = rawList.map(mapVideoDetails).filter(Boolean);
      dispatch({ type: 'SET_VIDEOS', payload: vids });
      dispatch({ type: 'SET_SEARCH_QUERY', payload: query });
    } catch (err) {
      console.error('Error searching videos:', err);
      toast.error('Search failed');
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  }, []);

  const playVideo = useCallback(video => {
    dispatch({ type: 'PLAY_VIDEO', payload: mapVideoDetails(video) });
  }, []);

  const playPlaylist = useCallback((playlist, startIndex = 0) => {
    const mappedPlaylist = playlist.map(mapVideoDetails).filter(Boolean);
    dispatch({ type: 'SET_PLAYLIST', payload: mappedPlaylist });
    dispatch({ type: 'SET_CURRENT_PLAYLIST_INDEX', payload: startIndex });
    dispatch({ type: 'SET_CURRENT_VIDEO', payload: mappedPlaylist[startIndex] });
  }, []);

  const nextVideo = useCallback(() => dispatch({ type: 'NEXT_VIDEO' }), []);
  const previousVideo = useCallback(() => dispatch({ type: 'PREVIOUS_VIDEO' }), []);

  const toggleFavorite = useCallback(video => {
    const mapped = mapVideoDetails(video);
    const exists = state.favorites.some(v => v.id === mapped.id);
    dispatch({ type: 'TOGGLE_FAVORITE', payload: mapped });
    toast.success(exists ? 'Removed from favorites' : 'Added to favorites');
  }, [state.favorites]);

  const updateUserPreferences = useCallback(prefs => {
    dispatch({ type: 'SET_USER_PREFERENCES', payload: prefs });
  }, []);

  const contextValue = useMemo(() => ({
    ...state,
    fetchVideos,
    searchVideos,
    playVideo,
    playPlaylist,
    nextVideo,
    previousVideo,
    toggleFavorite,
    updateUserPreferences
  }), [
    state,
    fetchVideos,
    searchVideos,
    playVideo,
    playPlaylist,
    nextVideo,
    previousVideo,
    toggleFavorite,
    updateUserPreferences
  ]);

  return (
    <VideoContext.Provider value={contextValue}>
      {children}
    </VideoContext.Provider>
  );
};

export function useVideo() {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error('useVideo must be used within a VideoProvider');
  }
  return context;
}
