import Image from "next/image";
import CountdownTimer from "@/components/CountdownTimer";
import Ticker from "@/components/Ticker";
import InfoStrip from "@/components/InfoStrip";
import ReleaseMeta from "@/components/ReleaseMeta";
import ReleaseTimeline from "@/components/ReleaseTimeline";
import { ReleaseProvider } from "@/lib/release";
import { featuredAlbum } from "@/data/releases";

export default function Home() {
  return (
    <ReleaseProvider>
      <section className="relative overflow-hidden min-h-screen flex items-center px-6 md:px-12 pt-24 md:pt-30 pb-16 md:pb-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-[20%] -right-[10%] w-[60%] h-[90%]"
          style={{
            background:
              "radial-gradient(ellipse at center, oklch(62% 0.24 340 / 0.06) 0%, transparent 70%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[10%] left-[20%] w-[50%] h-[60%]"
          style={{
            background:
              "radial-gradient(ellipse at center, oklch(68% 0.18 196 / 0.05) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 mx-auto w-full max-w-6xl grid md:grid-cols-[1.25fr_1fr] gap-12 items-center">
          <Image
            src={featuredAlbum.cover}
            alt={`${featuredAlbum.title} album cover and vinyl`}
            width={1395}
            height={915}
            priority
            className="vinyl-img block w-full h-auto"
          />

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="text-[11px] font-medium uppercase tracking-[0.24em] text-accent">
              New Album
            </div>
            <h1 className="mt-3 text-5xl md:text-6xl font-extrabold tracking-[0.04em]">
              {featuredAlbum.title}
            </h1>
            <ReleaseMeta />
            <div className="mt-9 w-full">
              <CountdownTimer />
            </div>
          </div>
        </div>
      </section>

      <ReleaseTimeline />
      <Ticker />
      <InfoStrip />
    </ReleaseProvider>
  );
}
