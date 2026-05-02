import logoMark from '../assets/generated/logo_mark.png';
import magicCircle from '../assets/generated/magic_circle.png';
import ribbonBow from '../assets/generated/ribbon_bow.png';
import sakuraCluster from '../assets/generated/sakura_cluster.png';
import sparkleStar from '../assets/generated/sparkle_star.png';

export function Hero({ featuredScreen }) {
  return (
    <section className="relative mx-auto grid min-h-[calc(100vh-2rem)] w-full max-w-7xl gap-8 px-5 pb-8 pt-10 sm:min-h-[760px] sm:px-8 sm:pb-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-10 lg:py-16">
      <img
        src={magicCircle}
        alt=""
        className="pointer-events-none absolute right-2 top-16 hidden w-44 opacity-35 blur-[0.2px] sm:block lg:right-[42%] lg:top-24"
      />
      <img
        src={sakuraCluster}
        alt=""
        className="pointer-events-none absolute left-2 top-[58%] hidden w-28 opacity-75 sm:block lg:left-10"
      />

      <div className="max-w-2xl space-y-6">
        <div className="inline-flex items-center gap-3 rounded-full border border-pink-200/25 bg-white/10 px-4 py-2 text-sm text-pink-100 shadow-lg shadow-pink-950/20 backdrop-blur-md">
          <img src={sparkleStar} alt="" className="h-5 w-5 object-contain" />
          <span className="font-handwriting">魔法少女風ノベルゲーム UI コレクション</span>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img src={logoMark} alt="" className="h-14 w-14 object-contain sm:h-16 sm:w-16" />
            <p className="font-script text-2xl text-pink-200 sm:text-3xl">ノベルゲームUI</p>
          </div>
          <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-normal text-white sm:text-5xl lg:text-6xl">
            星と桜がきらめく、恋愛ノベルゲームの世界。
          </h1>
          <p className="max-w-xl font-handwriting text-lg leading-8 text-pink-50/85 sm:text-xl">
            生成済みの画面PNGを主役に、ダークワイン、ピンク、スカイブルー、ラベンダーの光で
            作品の空気感を伝えるトップページです。
          </p>
        </div>

        <div className="flex flex-wrap gap-3 text-sm font-bold text-white">
          <a
            href="#screens"
            className="rounded-full bg-pink-400 px-5 py-3 shadow-lg shadow-pink-900/40 transition hover:-translate-y-0.5 hover:bg-pink-300 focus:outline-none focus:ring-2 focus:ring-sky-200"
          >
            画面一覧を見る
          </a>
          <span className="rounded-full border border-sky-200/35 bg-sky-200/10 px-5 py-3 text-sky-100">
            UI素材 8画面
          </span>
        </div>
      </div>

      <div className="relative min-w-0">
        <div className="absolute -inset-5 rounded-[2rem] bg-pink-400/20 blur-3xl" />
        <img
          src={ribbonBow}
          alt=""
          className="pointer-events-none absolute -right-2 -top-5 z-20 w-20 rotate-6 object-contain drop-shadow-[0_12px_24px_rgba(80,10,48,0.45)] sm:w-28"
        />
        <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#451332]/70 p-3 shadow-2xl shadow-pink-950/50 backdrop-blur-md">
          <img
            src={featuredScreen.image}
            alt={featuredScreen.title}
            className="aspect-video w-full rounded-xl bg-[#1a0a14] object-contain"
          />
          <div className="pointer-events-none absolute inset-3 rounded-xl ring-1 ring-inset ring-white/20" />
        </div>
      </div>
    </section>
  );
}
