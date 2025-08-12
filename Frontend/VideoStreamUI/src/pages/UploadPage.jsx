import React from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import EnhancedVideoUpload from '../components/video/EnhancedVideoUpload';

function UploadPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <FaCloudUploadAlt className="text-3xl text-blue-500" />
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Upload Video
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Share your videos with the world
          </p>
        </div>
      </div>

      <EnhancedVideoUpload />
    </div>
  );
}

export default UploadPage; 