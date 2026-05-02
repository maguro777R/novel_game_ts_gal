const screenCopy = {
  title: {
    title: 'タイトル',
    description: 'ロゴ、開始導線、魔法の空気感をまとめたオープニング画面。',
  },
  menu: {
    title: 'メニュー',
    description: 'はじめから、つづきから、設定へ進むためのホーム画面。',
  },
  novel: {
    title: 'ノベル',
    description: 'キャラクターと会話文を読みやすく見せる物語画面。',
  },
  'character-select': {
    title: 'キャラクター選択',
    description: 'ヒロインルートやプロフィールを選ぶための画面。',
  },
  gallery: {
    title: 'ギャラリー',
    description: '解放済みイラストや思い出のシーンを眺めるコレクション画面。',
  },
  'save-load': {
    title: 'セーブ / ロード',
    description: '進行状況を保存し、任意のスロットから再開する管理画面。',
  },
  config: {
    title: 'コンフィグ',
    description: '音量、文字速度、表示などプレイ環境を調整する設定画面。',
  },
  palette: {
    title: 'パレット',
    description: '色、文字、装飾の方向性を確認するデザイン参照画面。',
  },
};

export function ScreenGrid({ screens, activeId, onSelect }) {
  return (
    <section id="screens" className="space-y-6 scroll-mt-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <p className="font-script text-xl text-pink-200">画面ギャラリー</p>
          <h2 className="text-2xl font-bold tracking-normal text-white sm:text-3xl">
            画面カード一覧
          </h2>
        </div>
        <p className="max-w-md font-handwriting text-base leading-7 text-pink-50/75">
          各カードは書き出し済みPNGをそのまま表示しています。カードを選ぶと下のビューアに反映されます。
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {screens.map((screen) => {
          const isActive = screen.id === activeId;
          const copy = screenCopy[screen.id] ?? screen;

          return (
            <button
              key={screen.id}
              type="button"
              onClick={() => onSelect?.(screen.id)}
              aria-current={isActive ? 'true' : undefined}
              className={`group overflow-hidden rounded-lg border bg-[#351025]/80 text-left shadow-xl shadow-pink-950/25 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-pink-200/35 hover:shadow-pink-700/25 focus:outline-none focus:ring-2 focus:ring-sky-200 ${
                isActive ? 'border-sky-200/80 ring-2 ring-sky-200/30' : 'border-white/10'
              }`}
            >
              <div className="relative overflow-hidden bg-[#1b0714]">
                <img
                  src={screen.image}
                  alt={copy.title}
                  className="aspect-video w-full bg-[#1a0a14] object-contain transition duration-500 group-hover:scale-[1.02]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#210919]/30 via-transparent to-sky-200/10" />
              </div>
              <div className="min-h-[154px] space-y-2 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-200">
                  {screen.orderLabel}
                </p>
                <h3 className="text-lg font-bold text-white">{copy.title}</h3>
                <p className="font-handwriting text-sm leading-6 text-pink-50/75">
                  {copy.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
