import React, { useState } from 'react';
import { FaCog, FaVolumeUp, FaPlay, FaDownload, FaEye } from 'react-icons/fa';
import { Card, Label, Button, Select } from 'flowbite-react';
import { useVideo } from '../context/VideoContext';
import { qualityOptions, playbackSpeedOptions } from '../utils/videoUtils';

function SettingsPage() {
  const { userPreferences, updateUserPreferences } = useVideo();
  const [settings, setSettings] = useState(userPreferences);

  const handleSettingChange = (key, value) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    updateUserPreferences(newSettings);
  };

  const resetSettings = () => {
    const defaultSettings = {
      playbackSpeed: 1,
      quality: 'auto',
      autoplay: true,
      volume: 1
    };
    setSettings(defaultSettings);
    updateUserPreferences(defaultSettings);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <FaCog className="text-3xl text-gray-500" />
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Settings
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Customize your video streaming experience
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Video Player Settings */}
        <Card>
          <div className="flex items-center space-x-2 mb-4">
            <FaPlay className="text-xl text-blue-500" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Video Player Settings
            </h2>
          </div>

          <div className="space-y-6">
            {/* Autoplay */}
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="autoplay" className="text-sm font-medium">
                  Autoplay videos
                </Label>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Automatically start playing videos when selected
                </p>
              </div>
              <input
                type="checkbox"
                id="autoplay"
                checked={settings.autoplay}
                onChange={(e) => handleSettingChange('autoplay', e.target.checked)}
                className="w-6 h-6 accent-blue-500"
              />
            </div>

            {/* Default Quality */}
            <div>
              <Label htmlFor="quality" className="text-sm font-medium mb-2">
                Default Video Quality
              </Label>
              <Select
                id="quality"
                value={settings.quality}
                onChange={(e) => handleSettingChange('quality', e.target.value)}
              >
                {qualityOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
            </div>

            {/* Default Playback Speed */}
            <div>
              <Label htmlFor="playbackSpeed" className="text-sm font-medium mb-2">
                Default Playback Speed
              </Label>
              <Select
                id="playbackSpeed"
                value={settings.playbackSpeed}
                onChange={(e) => handleSettingChange('playbackSpeed', parseFloat(e.target.value))}
              >
                {playbackSpeedOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
            </div>

            {/* Default Volume */}
            <div>
              <Label htmlFor="volume" className="text-sm font-medium mb-2">
                Default Volume
              </Label>
              <div className="flex items-center space-x-3">
                <FaVolumeUp className="text-gray-400" />
                <input
                  type="range"
                  id="volume"
                  min={0}
                  max={1}
                  step={0.1}
                  value={settings.volume}
                  onChange={(e) => handleSettingChange('volume', parseFloat(e.target.value))}
                  className="flex-1"
                />
                <span className="text-sm text-gray-500 w-12">
                  {Math.round(settings.volume * 100)}%
                </span>
              </div>
            </div>
          </div>
        </Card>

        {/* Interface Settings */}
        <Card>
          <div className="flex items-center space-x-2 mb-4">
            <FaEye className="text-xl text-green-500" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Interface Settings
            </h2>
          </div>

          <div className="space-y-6">
            {/* Dark Mode Toggle */}
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="darkMode" className="text-sm font-medium">
                  Dark Mode
                </Label>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Use dark theme for better viewing experience
                </p>
              </div>
              <input
                type="checkbox"
                id="darkMode"
                checked={document.documentElement.classList.contains('dark')}
                onChange={(e) => {
                  if (e.target.checked) {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('theme', 'dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('theme', 'light');
                  }
                }}
                className="w-6 h-6 accent-blue-500"
              />
            </div>

            {/* Show Video Duration */}
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="showDuration" className="text-sm font-medium">
                  Show video duration
                </Label>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Display video length on thumbnails
                </p>
              </div>
              <input
                type="checkbox"
                id="showDuration"
                checked={true}
                disabled
                className="w-6 h-6 accent-blue-500"
              />
            </div>

            {/* Show Video Views */}
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="showViews" className="text-sm font-medium">
                  Show view count
                </Label>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Display number of views on videos
                </p>
              </div>
              <input
                type="checkbox"
                id="showViews"
                checked={true}
                disabled
                className="w-6 h-6 accent-blue-500"
              />
            </div>
          </div>
        </Card>

        {/* Download Settings */}
        <Card>
          <div className="flex items-center space-x-2 mb-4">
            <FaDownload className="text-xl text-purple-500" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Download Settings
            </h2>
          </div>

          <div className="space-y-6">
            {/* Allow Downloads */}
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="allowDownloads" className="text-sm font-medium">
                  Allow video downloads
                </Label>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Enable download functionality for videos
                </p>
              </div>
              <input
                type="checkbox"
                id="allowDownloads"
                checked={true}
                disabled
                className="w-6 h-6 accent-blue-500"
              />
            </div>

            {/* Download Quality */}
            <div>
              <Label htmlFor="downloadQuality" className="text-sm font-medium mb-2">
                Download Quality
              </Label>
              <Select
                id="downloadQuality"
                value="original"
                disabled
              >
                <option value="original">Original Quality</option>
                <option value="720p">720p</option>
                <option value="480p">480p</option>
              </Select>
            </div>
          </div>
        </Card>

        {/* Data Management */}
        <Card>
          <div className="flex items-center space-x-2 mb-4">
            <FaCog className="text-xl text-orange-500" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Data Management
            </h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-sm font-medium">
                  Clear Watch History
                </Label>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Remove all recently played videos
                </p>
              </div>
              <Button size="sm" color="red">
                Clear
              </Button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label className="text-sm font-medium">
                  Clear Favorites
                </Label>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Remove all favorite videos
                </p>
              </div>
              <Button size="sm" color="red">
                Clear
              </Button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label className="text-sm font-medium">
                  Reset All Settings
                </Label>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Restore default settings
                </p>
              </div>
              <Button size="sm" color="gray" onClick={resetSettings}>
                Reset
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default SettingsPage; 