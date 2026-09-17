"use client";

import { useId, useState } from "react";
import type { WorkVideo } from "@/lib/data";

export default function WorkVideoPlayer({
  videos,
  basePath = "",
}: {
  videos: WorkVideo[];
  basePath?: string;
}) {
  const [current, setCurrent] = useState(0);
  const groupId = useId();
  const video = videos[current];

  return (
    <div>
      {videos.length > 1 && (
        <div
          role="tablist"
          aria-label="操作デモ動画の切り替え"
          className="mb-4 flex flex-wrap gap-2"
        >
          {videos.map((item, index) => {
            const selected = index === current;
            return (
              <button
                key={item.src}
                type="button"
                role="tab"
                id={`${groupId}-tab-${index}`}
                aria-selected={selected}
                aria-controls={`${groupId}-panel-${index}`}
                onClick={() => setCurrent(index)}
                className={`rounded-full px-4 py-2 text-sm font-bold transition duration-200 ${
                  selected
                    ? "bg-navy-800 text-white shadow-card"
                    : "bg-white text-navy-600 ring-1 ring-navy-100 hover:text-navy-900 hover:ring-navy-200"
                }`}
              >
                {item.tab}
              </button>
            );
          })}
        </div>
      )}
      <div
        role={videos.length > 1 ? "tabpanel" : undefined}
        id={`${groupId}-panel-${current}`}
        aria-labelledby={videos.length > 1 ? `${groupId}-tab-${current}` : undefined}
      >
        <video
          key={video.src}
          controls
          muted
          loop
          playsInline
          preload="metadata"
          poster={video.poster ? `${basePath}${video.poster}` : undefined}
          aria-label={video.label}
          className="aspect-video w-full rounded-2xl bg-navy-900 object-contain shadow-card ring-1 ring-navy-900/10"
        >
          <source src={`${basePath}${video.src}`} type={video.type} />
          お使いのブラウザーでは動画を再生できません。
        </video>
      </div>
      <p className="mt-4 text-center text-sm text-navy-600">{video.caption}</p>
    </div>
  );
}
