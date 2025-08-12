// src/pages/WatchPage.jsx

import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import VideoPlayer from "../components/VideoPlayer";
import { useVideo } from "../context/VideoContext";
import { videoAPI } from "../utils/api";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:8080/api/v1/videos";

export default function WatchPage() {
  const { videoId } = useParams();
  const { playVideo, isPlaying, currentVideo } = useVideo();
  const [isLoading, setIsLoading] = useState(true);

  const fetchVideoDetails = useCallback(async () => {
    if (!videoId) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    try {
      const resp = await videoAPI.getById(videoId);
      const payload = resp.data ?? resp;
      const details = payload.video ?? payload;
      const id = details.video_id ?? details.id;
      if (!id) throw new Error("Video ID missing in API response");

      const mapped = {
        id,
        title: details.title,
        description: details.description || "",
        duration: details.duration || 0,
        uploadDate: details.uploadDate || details.upload_date,
        fileSize: details.fileSize ?? details.file_size,
        views: details.views ?? 0,
        thumbnailUrl: details.thumbnailUrl ?? details.thumbnail_url ?? `${API_BASE}/thumbnail/${id}`,
        contentType: details.contentType ?? details.content_type,
        url: details.url ?? `${API_BASE}/${id}/master.m3u8`, // fallback
      };

      console.debug("Mapped videoData:", mapped);
      playVideo(mapped);
    } catch (err) {
      console.error("Error fetching video details:", err);
      toast.error(err?.message || "Failed to load video details");
    } finally {
      setIsLoading(false);
    }
  }, [videoId, playVideo]);

  useEffect(() => {
    fetchVideoDetails();
  }, [fetchVideoDetails]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96 bg-black text-white">
        Loading video…
      </div>
    );
  }

  if (!currentVideo) {
    return (
      <div className="flex items-center justify-center h-96 bg-black text-red-400">
        Video not found or failed to load.
      </div>
    );
  }

  return (
    <div className="relative">
      {console.log('WatchPage - currentVideo:', currentVideo, 'isPlaying:', isPlaying)}
      <VideoPlayer
        videoData={currentVideo}
        userPreferences={{ autoplay: true, subtitlesOn: false }}
        isPlaying={isPlaying}
      />
    </div>
  );
}
