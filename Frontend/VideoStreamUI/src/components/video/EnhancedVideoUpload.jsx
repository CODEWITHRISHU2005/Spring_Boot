import React, { useState, useRef, useCallback } from "react";
import { FaCloudUploadAlt, FaTimes, FaCheck, FaExclamationTriangle, FaVideo, FaFile, FaImage } from "react-icons/fa";
import { Button, Card, Label, TextInput, Textarea, Progress, Alert, Badge } from "flowbite-react";
import { videoAPI } from "../../utils/api";
import { validateVideoFile, validateImageFile, formatFileSize } from "../../utils/videoUtils";
import toast from "react-hot-toast";

function EnhancedVideoUpload() {
  const [selectedVideoFile, setSelectedVideoFile] = useState(null);
  const [selectedImageFile, setSelectedImageFile] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState(null);
  const [meta, setMeta] = useState({
    title: "",
    description: "",
    tags: "",
    isPublic: true
  });
  const [validationErrors, setValidationErrors] = useState({});
  const videoInputRef = useRef(null);
  const imageInputRef = useRef(null);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      const file = files[0];
      if (file.type.startsWith('video/')) {
        handleVideoFileSelect(file);
      } else if (file.type.startsWith('image/')) {
        handleImageFileSelect(file);
      } else {
        toast.error("Unsupported file type. Please upload a video or image.");
      }
    }
  }, []);

  const handleVideoFileSelect = (file) => {
    const validation = validateVideoFile(file);
    
    if (!validation.isValid) {
      toast.error(validation.error);
      setValidationErrors(prev => ({ ...prev, videoFile: validation.error }));
      return;
    }

    setSelectedVideoFile(file);
    setValidationErrors(prev => ({ ...prev, videoFile: null }));
    
    // Auto-fill title if empty
    if (!meta.title) {
      setMeta(prev => ({
        ...prev,
        title: file.name.replace(/\.[^/.]+$/, "") // Remove file extension
      }));
    }
  };

  const handleImageFileSelect = (file) => {
    const validation = validateImageFile(file);

    if (!validation.isValid) {
      toast.error(validation.error);
      setValidationErrors(prev => ({ ...prev, imageFile: validation.error }));
      return;
    }

    setSelectedImageFile(file);
    setValidationErrors(prev => ({ ...prev, imageFile: null }));
  };

  const handleVideoInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleVideoFileSelect(file);
    }
  };

  const handleImageInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleImageFileSelect(file);
    }
  };

  const handleMetaChange = (e) => {
    const { name, value } = e.target;
    setMeta(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear validation error when user starts typing
    if (validationErrors[name]) {
      setValidationErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const validateForm = () => {
    const errors = {};
    
    if (!selectedVideoFile) {
      errors.videoFile = "Please select a video file";
    }
    
    if (!selectedImageFile) {
      errors.imageFile = "Please select a thumbnail image";
    }

    if (!meta.title.trim()) {
      errors.title = "Title is required";
    }
    
    if (meta.title.length > 100) {
      errors.title = "Title must be less than 100 characters";
    }
    
    if (meta.description.length > 500) {
      errors.description = "Description must be less than 500 characters";
    }
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsUploading(true);
    setUploadStatus({ type: 'uploading', message: 'Uploading video and thumbnail...' });

    try {
      const formData = new FormData();
      formData.append("title", meta.title.trim());
      formData.append("description", meta.description.trim());
      formData.append("tags", meta.tags.trim());
      formData.append("isPublic", meta.isPublic);
      formData.append("videoFile", selectedVideoFile);
      formData.append("thumbnailFile", selectedImageFile);

      const response = await videoAPI.upload(formData, (progress) => {
        setUploadProgress(progress);
      });

      setUploadStatus({
        type: 'success',
        message: `Video uploaded successfully! Video ID: ${response.videoId}`,
        videoId: response.videoId
      });
      
      toast.success("Video uploaded successfully!");
      resetForm();
      
    } catch (error) {
      console.error('Upload error:', error);
      setUploadStatus({
        type: 'error',
        message: error.response?.data?.message || 'Upload failed. Please try again.'
      });
      toast.error("Upload failed. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  const resetForm = () => {
    setSelectedVideoFile(null);
    setSelectedImageFile(null);
    setMeta({
      title: "",
      description: "",
      tags: "",
      isPublic: true
    });
    setUploadProgress(0);
    setUploadStatus(null);
    setValidationErrors({});
    if (videoInputRef.current) {
      videoInputRef.current.value = "";
    }
    if (imageInputRef.current) {
      imageInputRef.current.value = "";
    }
  };

  const removeVideoFile = () => {
    setSelectedVideoFile(null);
    setValidationErrors(prev => ({ ...prev, videoFile: null }));
    if (videoInputRef.current) {
      videoInputRef.current.value = "";
    }
  };

  const removeImageFile = () => {
    setSelectedImageFile(null);
    setValidationErrors(prev => ({ ...prev, imageFile: null }));
    if (imageInputRef.current) {
      imageInputRef.current.value = "";
    }
  };

  const getVideoFileIcon = () => {
    if (!selectedVideoFile) return <FaVideo className="text-4xl text-gray-400" />;
    
    const fileType = selectedVideoFile.type;
    if (fileType.startsWith('video/')) {
      return <FaVideo className="text-4xl text-blue-500" />;
    }
    return <FaFile className="text-4xl text-gray-400" />;
  };

  const getImageFileIcon = () => {
    if (!selectedImageFile) return <FaImage className="text-4xl text-gray-400" />;
    
    const fileType = selectedImageFile.type;
    if (fileType.startsWith('image/')) {
      return <FaImage className="text-4xl text-blue-500" />;
    }
    return <FaFile className="text-4xl text-gray-400" />;
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="shadow-lg">
        <div className="flex items-center space-x-2 mb-6">
          <FaCloudUploadAlt className="text-2xl text-blue-500" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Upload Video
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Video File Upload Area */}
          <div>
            <Label htmlFor="video-file-upload" value="Video File *" />
            
            <div
              className={`mt-2 border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                isDragOver
                  ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                  : "border-gray-300 dark:border-gray-600 hover:border-gray-400"
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              {selectedVideoFile ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-3">
                    {getVideoFileIcon()}
                    <div className="text-left">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {selectedVideoFile.name}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {formatFileSize(selectedVideoFile.size)}
                      </p>
                    </div>
                    <Button
                      size="sm"
                      color="red"
                      onClick={removeVideoFile}
                      className="ml-2"
                    >
                      <FaTimes />
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-2">
                    <Badge color="green" size="sm">
                      <FaCheck className="mr-1" />
                      Video file selected
                    </Badge>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <FaCloudUploadAlt className="mx-auto text-4xl text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <span className="font-medium text-blue-600 dark:text-blue-400">
                        Click to upload
                      </span>{" "}
                      or drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      MP4, WebM, AVI up to 500MB
                    </p>
                  </div>
                </div>
              )}
              
              <input
                ref={videoInputRef}
                id="video-file-upload"
                name="videoFile"
                type="file"
                accept="video/*"
                onChange={handleVideoInputChange}
                className="hidden"
              />
              
              {!selectedVideoFile && (
                <Button
                  type="button"
                  color="gray"
                  onClick={() => videoInputRef.current?.click()}
                  className="mt-4"
                >
                  Choose Video File
                </Button>
              )}
            </div>
            
            {validationErrors.videoFile && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                {validationErrors.videoFile}
              </p>
            )}
          </div>

          {/* Thumbnail Image Upload Area */}
          <div>
            <Label htmlFor="image-file-upload" value="Thumbnail Image *" />
            
            <div
              className={`mt-2 border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                isDragOver
                  ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                  : "border-gray-300 dark:border-gray-600 hover:border-gray-400"
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              {selectedImageFile ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-3">
                    {getImageFileIcon()}
                    <div className="text-left">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {selectedImageFile.name}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {formatFileSize(selectedImageFile.size)}
                      </p>
                    </div>
                    <Button
                      size="sm"
                      color="red"
                      onClick={removeImageFile}
                      className="ml-2"
                    >
                      <FaTimes />
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-2">
                    <Badge color="green" size="sm">
                      <FaCheck className="mr-1" />
                      Image file selected
                    </Badge>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <FaCloudUploadAlt className="mx-auto text-4xl text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <span className="font-medium text-blue-600 dark:text-blue-400">
                        Click to upload
                      </span>{" "}
                      or drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      PNG, JPG, GIF up to 5MB
                    </p>
                  </div>
                </div>
              )}
              
              <input
                ref={imageInputRef}
                id="image-file-upload"
                name="imageFile"
                type="file"
                accept="image/*"
                onChange={handleImageInputChange}
                className="hidden"
              />
              
              {!selectedImageFile && (
                <Button
                  type="button"
                  color="gray"
                  onClick={() => imageInputRef.current?.click()}
                  className="mt-4"
                >
                  Choose Image File
                </Button>
              )}
            </div>
            
            {validationErrors.imageFile && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                {validationErrors.imageFile}
              </p>
            )}
          </div>

          {/* Video Metadata */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="title" value="Title *" />
              <TextInput
                id="title"
                name="title"
                value={meta.title}
                onChange={handleMetaChange}
                placeholder="Enter video title"
                className="mt-1"
                color={validationErrors.title ? "failure" : "gray"}
                helperText={validationErrors.title}
              />
            </div>
            
            <div>
              <Label htmlFor="tags" value="Tags" />
              <TextInput
                id="tags"
                name="tags"
                value={meta.tags}
                onChange={handleMetaChange}
                placeholder="Enter tags (comma separated)"
                className="mt-1"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="description" value="Description" />
            <Textarea
              id="description"
              name="description"
              value={meta.description}
              onChange={handleMetaChange}
              placeholder="Enter video description..."
              rows={4}
              className="mt-1"
              color={validationErrors.description ? "failure" : "gray"}
              helperText={validationErrors.description}
            />
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="isPublic"
              name="isPublic"
              checked={meta.isPublic}
              onChange={(e) => setMeta(prev => ({ ...prev, isPublic: e.target.checked }))}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <Label htmlFor="isPublic" value="Make video public" />
          </div>

          {/* Upload Progress */}
          {isUploading && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Uploading...</span>
                <span>{uploadProgress}%</span>
              </div>
              <Progress progress={uploadProgress} color="blue" size="lg" />
            </div>
          )}

          {/* Upload Status */}
          {uploadStatus && (
            <Alert
              color={uploadStatus.type === 'success' ? 'success' : uploadStatus.type === 'error' ? 'failure' : 'info'}
              className="mt-4"
            >
              <div className="flex items-center space-x-2">
                {uploadStatus.type === 'success' ? (
                  <FaCheck className="text-green-500" />
                ) : uploadStatus.type === 'error' ? (
                  <FaExclamationTriangle className="text-red-500" />
                ) : (
                  <FaCloudUploadAlt className="text-blue-500" />
                )}
                <span>{uploadStatus.message}</span>
              </div>
            </Alert>
          )}

          {/* Action Buttons */}
          <div className="flex items-center justify-end space-x-3">
            <Button
              type="button"
              color="gray"
              onClick={resetForm}
              disabled={isUploading}
            >
              Reset
            </Button>
            
            <Button
              type="submit"
              color="blue"
              disabled={!selectedVideoFile || !selectedImageFile || isUploading}
              className="min-w-[100px]"
            >
              {isUploading ? "Uploading..." : "Upload Video"}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default EnhancedVideoUpload;