import Image from "next/image";
import CountdownTimer from "@/components/CountdownTimer";
import Ticker from "@/components/Ticker";
import InfoStrip from "@/components/InfoStrip";

export default function Home() {
  return (
    <>
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

        <div className="relative z-10 flex flex-col items-center max-w-[860px] w-full">
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

          <div className="mt-4 text-xs uppercase tracking-[0.12em] opacity-55">
            Out May 15, 2026 · Killer Groove Records
          </div>

          <div className="mt-9">
            <CountdownTimer />
          </div>
        </div>

        <div className="relative z-10 mt-15 md:mt-15 w-full flex flex-col items-center">
          <div className="relative w-full max-w-150">
            <Image
              src="/img/high-fever-mockup.png"
              alt="High Fever 7-inch vinyl"
              width={1200}
              height={1200}
              priority
              className="vinyl-img block w-full h-auto"
            />
          </div>
          <p className="mt-5 text-base font-bold uppercase tracking-[0.2em] text-accent">
            Limited edition 7&quot; vinyl available soon!
          </p>
        </div>
      </section>

      <Ticker />
      <InfoStrip />
    </>
  );
}
