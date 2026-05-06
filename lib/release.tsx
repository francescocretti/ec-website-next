"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { release } from "@/data/socials";

type Remaining = {
  days: number;
  hours: number;
  mins: number;
  secs: number;
} | null;

type ReleaseState = {
  isReleased: boolean;
  remaining: Remaining;
  hydrated: boolean;
};

const ReleaseContext = createContext<ReleaseState>({
  isReleased: false,
  remaining: null,
  hydrated: false,
});

function diffToParts(targetMs: number, nowMs: number): Remaining {
  let diff = targetMs - nowMs;
  if (diff <= 0) return null;
  const days = Math.floor(diff / 86_400_000);
  diff -= days * 86_400_000;
  const hours = Math.floor(diff / 3_600_000);
  diff -= hours * 3_600_000;
  const mins = Math.floor(diff / 60_000);
  diff -= mins * 60_000;
  const secs = Math.floor(diff / 1_000);
  return { days, hours, mins, secs };
}

export function ReleaseProvider({ children }: { children: ReactNode }) {
  const [hydrated, setHydrated] = useState(false);
  const [remaining, setRemaining] = useState<Remaining>(null);

  useEffect(() => {
    const targetMs = new Date(
      release.year,
      release.month - 1,
      release.day,
      0,
      0,
      0,
    ).getTime();
    setHydrated(true);
    setRemaining(diffToParts(targetMs, Date.now()));
    const id = setInterval(() => {
      setRemaining(diffToParts(targetMs, Date.now()));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const isReleased = hydrated && remaining === null;

  return (
    <ReleaseContext.Provider value={{ isReleased, remaining, hydrated }}>
      {children}
    </ReleaseContext.Provider>
  );
}

export function useReleaseState(): ReleaseState {
  return useContext(ReleaseContext);
}

export function useIsReleased(): boolean {
  return useContext(ReleaseContext).isReleased;
}
