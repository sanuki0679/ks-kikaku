import Image from "next/image";
import type { Work } from "@/lib/data";

const visualCopy = {
  reservation: { title: "予約を、ひとつに。", subtitle: "受付から座席の割当まで" },
  shift: { title: "みんなの希望を、シフトに。", subtitle: "希望の登録から週ごとの作成まで" },
  transport: { title: "その場で、記録が残る。", subtitle: "送迎時の操作をスマホで" },
};

function FeatureDiagram({ kind }: { kind: Work["id"] }) {
  if (kind === "reservation") {
    return (
      <div className="w-full max-w-sm">
        <div className="grid grid-cols-3 gap-2 text-center text-sm font-medium text-navy-700">
          {["電話", "Web", "LINE"].map((source) => (
            <div key={source} className="rounded-lg border border-navy-200 bg-white px-2 py-3">{source}</div>
          ))}
        </div>
        <div aria-hidden="true" className="py-3 text-center text-2xl text-navy-600">↓</div>
        <div className="overflow-hidden rounded-xl bg-white shadow-sm">
          <div className="bg-navy-800 px-5 py-3 text-base font-bold text-white">予約一覧</div>
          <div className="divide-y divide-gray-100 px-5">
            {["受付内容をまとめて確認", "座席を割り当て", "キャンセルを管理"].map((label, index) => (
              <div key={label} className="flex items-center gap-3 py-4 text-sm text-navy-800">
                <span className="text-navy-600">0{index + 1}</span>{label}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (kind === "shift") {
    return (
      <div className="w-full max-w-sm">
        <div className="flex items-center justify-between gap-3 rounded-lg border border-navy-200 bg-white px-4 py-3 text-sm text-navy-700">
          <span>スタッフが希望を登録</span>
          <span className="shrink-0 rounded bg-navy-50 px-2 py-1">希望休も</span>
        </div>
        <div aria-hidden="true" className="py-3 text-center text-2xl text-navy-600">↓</div>
        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="text-base font-bold text-navy-800">週ごとのシフト表を作成</p>
          <div aria-hidden="true" className="mt-5 grid grid-cols-7 gap-1.5 text-center text-sm">
            {["月", "火", "水", "木", "金", "土", "日"].map((day) => (
              <span key={day} className="pb-2 text-navy-600">{day}</span>
            ))}
            {Array.from({ length: 21 }, (_, index) => (
              <span key={index} className={`h-7 rounded ${[2, 5, 7, 11, 16, 20].includes(index) ? "border border-navy-100 bg-white" : "bg-navy-200"}`} />
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-600">集まった希望を、見やすい一覧に。</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-64 rounded-[2rem] border-4 border-navy-800 bg-white p-5 shadow-sm">
      <div aria-hidden="true" className="mx-auto mb-5 h-1 w-10 rounded-full bg-navy-200" />
      <p className="text-center text-base font-bold text-navy-900">送迎の記録</p>
      <div className="mt-5 space-y-3">
        {["出発を記録", "到着を記録"].map((label, index) => (
          <div key={label} className={`rounded-xl px-3 py-4 text-center text-base font-bold ${index === 0 ? "bg-navy-800 text-white" : "bg-navy-50 text-navy-800"}`}>
            {label}
          </div>
        ))}
      </div>
      <div className="mt-5 space-y-2 border-t border-gray-100 pt-4 text-sm text-gray-600">
        <p>GPS・車両運行記録</p>
        <p>アルコールチェック</p>
      </div>
    </div>
  );
}

export default function WorkVisual({ work }: { work: Work }) {
  const copy = visualCopy[work.id];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <figure className="flex min-w-0 flex-col justify-center border-b border-gray-200 bg-navy-50 px-5 py-8 sm:px-8 lg:border-r lg:border-b-0 lg:py-10">
      {work.video ? (
        <video
          controls
          muted
          loop
          playsInline
          preload="metadata"
          poster={work.video.poster ? `${basePath}${work.video.poster}` : undefined}
          aria-label={work.video.label}
          className="aspect-video w-full rounded-lg border border-navy-100 bg-navy-900 object-contain shadow-sm"
        >
          <source src={`${basePath}${work.video.src}`} type={work.video.type} />
          お使いのブラウザーでは動画を再生できません。
        </video>
      ) : work.screenshot ? (
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${work.screenshot.src}`}
          alt={work.screenshot.alt}
          width={work.screenshot.width}
          height={work.screenshot.height}
          sizes="(min-width: 1024px) 520px, 100vw"
          className="h-auto w-full rounded-lg border border-navy-100 object-contain shadow-sm"
        />
      ) : (
        <>
          <div className="text-center">
            <p className="text-xl font-bold text-navy-900 sm:text-2xl">{copy.title}</p>
            <p className="mt-2 text-sm text-navy-600">{copy.subtitle}</p>
          </div>
          <div className="flex min-h-80 items-center justify-center py-6" role="img" aria-label={`${work.title}の機能説明図。${work.outcome}`}>
            <div aria-hidden="true" className="flex w-full justify-center">
              <FeatureDiagram kind={work.id} />
            </div>
          </div>
        </>
      )}
      <figcaption className="mt-4 text-center text-sm text-navy-600">
        {work.video?.caption ?? work.screenshot?.caption ?? "機能のイメージ（実際の画面ではありません）"}
      </figcaption>
    </figure>
  );
}
