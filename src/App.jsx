import { useState } from 'react';
import { Decorations } from './components/Decorations';
import { Hero } from './components/Hero';
import { ScreenGrid } from './components/ScreenGrid';
import { Viewer } from './components/Viewer';
import { screens } from './data/screens';

export default function App() {
  const [activeScreenId, setActiveScreenId] = useState(screens[0]?.id);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#210919] text-white">
      <Decorations />

      <div className="relative z-10">
        <Hero featuredScreen={screens[0]} />

        <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 pb-16 pt-4 sm:px-8 lg:pb-24">
          <div className="grid gap-6 rounded-lg border border-white/10 bg-[#3a1029]/65 p-5 shadow-2xl shadow-pink-950/30 backdrop-blur-md sm:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div className="space-y-3">
              <p className="font-script text-lg text-pink-200">作品紹介</p>
              <h2 className="text-2xl font-bold tracking-normal text-white sm:text-3xl">
                星明かりと桜の魔法で包む、恋愛ノベルゲームのランディングページ。
              </h2>
            </div>
            <p className="font-handwriting text-base leading-8 text-pink-50/85 sm:text-lg">
              ダークワインの奥行き、ピンクの光、スカイブルーのきらめき、ラベンダーの余韻で
              生成済みUIを引き立てます。画面UIはPNGを正本として表示し、DOMでは再描画しません。
            </p>
          </div>

          <ScreenGrid
            screens={screens}
            activeId={activeScreenId}
            onSelect={setActiveScreenId}
          />

          <section className="space-y-4" aria-label="選択中の画面プレビュー">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-script text-xl text-pink-200">画面プレビュー</p>
                <h2 className="text-2xl font-bold tracking-normal text-white sm:text-3xl">
                  選択した画面を大きく確認
                </h2>
              </div>
              <p className="max-w-md font-handwriting text-base leading-7 text-pink-50/75">
                カードを選ぶと、このビューアに反映されます。拡大表示ではPNGの細部を確認できます。
              </p>
            </div>
            <Viewer activeId={activeScreenId} onSelect={setActiveScreenId} />
          </section>
        </section>
      </div>
    </main>
  );
}
