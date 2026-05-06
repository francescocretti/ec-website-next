import Image from "next/image";
import CountdownTimer from "@/components/CountdownTimer";
import Ticker from "@/components/Ticker";
import InfoStrip from "@/components/InfoStrip";
import ReleaseMeta from "@/components/ReleaseMeta";
import VinylCaption from "@/components/VinylCaption";
import HeroArtwork from "@/components/HeroArtwork";
import { ReleaseProvider } from "@/lib/release";

export default function Home() {
  return (
    <ReleaseProvider>
      <section className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-12 pt-24 md:pt-30 pb-16 md:pb-20">
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

        <div className="relative z-10 flex flex-col items-center max-w-3xl w-full">
          <div className="mb-5 flex items-center justify-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.24em] text-accent before:block before:w-7 before:h-px before:bg-accent after:block after:w-7 after:h-px after:bg-accent">
            New Single
          </div>

          <h1 className="w-full">
            <Image
              src="/img/high-fever.png"
              alt="High Fever"
              width={960}
              height={320}
              priority
              className="block mx-auto w-full max-w-[480px] h-auto"
            />
          </h1>

          <ReleaseMeta />

          <div className="mt-9 w-full">
            <CountdownTimer />
          </div>
        </div>

        <div className="relative z-10 mt-15 md:mt-15 w-full flex flex-col items-center">
          <div className="relative w-full max-w-150">
            <HeroArtwork />
          </div>
          <VinylCaption />
        </div>
      </section>

      <Ticker />
      <InfoStrip />
    </ReleaseProvider>
  );
}
