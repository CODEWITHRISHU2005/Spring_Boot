// src/utils/mapVideoDetails.js

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:8080/api/v1/videos";

export function mapVideoDetails(input) {
  const details = input?.video ?? input;
  const id = details?.video_id ?? details?.id;
  if (!id) throw new Error("Video ID missing");

  return {
    id,
    title: details.title,
    description: details.description || "",
    duration: details.duration || 0,
    uploadDate: details.uploadDate || details.upload_date,
    fileSize: details.fileSize ?? details.file_size,
    views: details.views ?? 0,
    thumbnailUrl:
      details.thumbnailUrl ?? details.thumbnail_url ?? `${API_BASE}/thumbnail/${id}`,
    contentType: details.contentType ?? details.content_type,
    url: details.url ?? `${API_BASE}/${id}/master.m3u8`,
  };
}
