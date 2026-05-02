import { useEffect, useMemo, useState } from 'react';
import { screens } from '../data/screens';

export function Viewer({ activeId, onSelect }) {
  const firstScreen = screens[0];
  const [localActiveId, setLocalActiveId] = useState(firstScreen?.id);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isImageEntered, setIsImageEntered] = useState(true);

  const activeScreen = useMemo(() => {
    const requestedId = activeId ?? localActiveId;
    return screens.find((screen) => screen.id === requestedId) ?? firstScreen;
  }, [activeId, firstScreen, localActiveId]);

  const activeIndex = Math.max(
    0,
    screens.findIndex((screen) => screen.id === activeScreen?.id),
  );

  const selectScreen = (screenId) => {
    if (!screenId || screenId === activeScreen?.id) {
      return;
    }

    setLocalActiveId(screenId);
    onSelect?.(screenId);
  };

  const move = (direction) => {
    const nextIndex = (activeIndex + direction + screens.length) % screens.length;
    selectScreen(screens[nextIndex]?.id);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        move(-1);
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault();
        move(1);
      }

      if (event.key === 'Escape') {
        setIsModalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, activeScreen?.id]);

  useEffect(() => {
    setIsImageEntered(false);
    const frameId = window.requestAnimationFrame(() => {
      setIsImageEntered(true);
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [activeScreen?.id]);

  if (!activeScreen) {
    return null;
  }

  return (
    <section className="space-y-5" aria-label="画面ビューア">
      <div className="overflow-hidden rounded-lg border border-white/10 bg-[#351025]/80 shadow-2xl shadow-pink-950/30 backdrop-blur-md">
        <div className="flex flex-col gap-4 p-4 sm:p-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0 space-y-1">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-200">
              {activeScreen.orderLabel}
            </p>
            <h2 className="text-xl font-bold tracking-normal text-white sm:text-2xl">
              {activeScreen.title}
            </h2>
            <p className="font-handwriting text-sm leading-6 text-pink-50/75 sm:text-base">
              {activeScreen.description}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:flex sm:shrink-0 sm:items-center">
            <button
              type="button"
              onClick={() => move(-1)}
              className="rounded-md border border-white/10 bg-white/10 px-3 py-2 text-sm font-bold text-white transition hover:border-pink-200/40 hover:bg-pink-200/15 focus:outline-none focus:ring-2 focus:ring-sky-200"
            >
              前へ
            </button>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="rounded-md border border-pink-200/25 bg-pink-300/20 px-3 py-2 text-sm font-bold text-white transition hover:border-pink-100/60 hover:bg-pink-200/25 focus:outline-none focus:ring-2 focus:ring-sky-200"
            >
              拡大
            </button>
            <button
              type="button"
              onClick={() => move(1)}
              className="rounded-md border border-white/10 bg-white/10 px-3 py-2 text-sm font-bold text-white transition hover:border-pink-200/40 hover:bg-pink-200/15 focus:outline-none focus:ring-2 focus:ring-sky-200"
            >
              次へ
            </button>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="group block w-full bg-[#1b0714] p-3 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-200 sm:p-4"
          aria-label={`${activeScreen.title}を拡大表示`}
        >
          <img
            src={activeScreen.image}
            alt={activeScreen.title}
            className="mx-auto aspect-video max-h-[72vh] w-full rounded-md object-contain transition duration-200 ease-out"
            style={{
              opacity: isImageEntered ? 1 : 0.85,
              transform: isImageEntered ? 'scale(1)' : 'scale(0.985)',
            }}
          />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
        {screens.map((screen) => {
          const isActive = screen.id === activeScreen.id;

          return (
            <button
              key={screen.id}
              type="button"
              onClick={() => selectScreen(screen.id)}
              aria-current={isActive ? 'true' : undefined}
              className={`group min-w-0 rounded-lg border p-2 text-left transition focus:outline-none focus:ring-2 focus:ring-sky-200 ${
                isActive
                  ? 'border-sky-200 bg-sky-200/15'
                  : 'border-white/10 bg-white/5 hover:border-pink-200/35 hover:bg-pink-200/10'
              }`}
            >
              <img
                src={screen.image}
                alt=""
                className="aspect-video w-full rounded object-contain"
              />
              <span className="mt-2 block truncate text-xs font-bold text-white">
                {screen.title}
              </span>
            </button>
          );
        })}
      </div>

      {isModalOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#12040d]/90 p-3 backdrop-blur-sm sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeScreen.title}の拡大プレビュー`}
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="flex max-h-full w-full max-w-7xl flex-col gap-3"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3">
              <p className="truncate text-sm font-bold text-white sm:text-base">
                {activeScreen.orderLabel} / {activeScreen.title}
              </p>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="shrink-0 rounded-md border border-white/15 bg-white/10 px-3 py-2 text-sm font-bold text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-sky-200"
              >
                閉じる
              </button>
            </div>
            <img
              src={activeScreen.image}
              alt={activeScreen.title}
              className="mx-auto aspect-video max-h-[84vh] w-full rounded-lg object-contain"
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}
