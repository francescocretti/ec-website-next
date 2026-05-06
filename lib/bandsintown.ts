import "server-only";

const APP_ID = process.env.BANDSINTOWN_APP_ID;
const ARTIST_NAME = "Electric Circus";
const REVALIDATE_SECONDS = 900;
const PAST_EVENTS_LIMIT = 12;

type BandsintownOffer = {
  type: string;
  url: string;
  status: string;
};

type BandsintownVenue = {
  name: string;
  city: string;
  region: string;
  country: string;
  latitude: string;
  longitude: string;
};

type BandsintownEvent = {
  id: string;
  artist_id: string;
  url: string;
  datetime: string;
  description: string;
  title: string;
  venue: BandsintownVenue;
  offers: BandsintownOffer[];
  lineup: string[];
  sold_out: boolean;
};

export type Show = {
  id: string;
  date: string;
  venue: string;
  city: string;
  event?: string;
  url?: string;
  soldOut?: boolean;
};

export type ShowsResult = {
  shows: Show[];
  source: "upcoming" | "past" | "empty";
};

async function fetchEvents(date?: "past"): Promise<BandsintownEvent[]> {
  if (!APP_ID) {
    console.error(
      "Bandsintown: BANDSINTOWN_APP_ID env var is not set — skipping fetch",
    );
    return [];
  }

  const params = new URLSearchParams({ app_id: APP_ID });
  if (date) params.set("date", date);
  const url = `https://rest.bandsintown.com/artists/${encodeURIComponent(
    ARTIST_NAME,
  )}/events?${params.toString()}`;

  try {
    const res = await fetch(url, {
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) {
      console.error(
        `Bandsintown API error: ${res.status} ${res.statusText}`,
      );
      return [];
    }
    const data = (await res.json()) as BandsintownEvent[];
    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.error("Bandsintown fetch failed:", err);
    return [];
  }
}

function pickTicketUrl(event: BandsintownEvent): string | undefined {
  const ticket = event.offers.find(
    (o) => o.type.toLowerCase() === "tickets" && o.status !== "off-sale",
  );
  return ticket?.url ?? event.url ?? undefined;
}

function toShow(event: BandsintownEvent): Show {
  const dateOnly = event.datetime ? event.datetime.split("T")[0] : "";
  const description = event.description?.trim();
  const title = event.title?.trim();
  return {
    id: event.id,
    date: dateOnly,
    venue: event.venue.name || "TBA",
    city: event.venue.city,
    event: description || title || undefined,
    url: pickTicketUrl(event),
    soldOut: event.sold_out,
  };
}

export async function getShows(): Promise<ShowsResult> {
  const upcoming = await fetchEvents();
  if (upcoming.length > 0) {
    const shows = upcoming
      .slice()
      .sort((a, b) => a.datetime.localeCompare(b.datetime))
      .map(toShow);
    return { shows, source: "upcoming" };
  }

  const past = await fetchEvents("past");
  if (past.length === 0) return { shows: [], source: "empty" };

  const shows = past
    .slice()
    .sort((a, b) => b.datetime.localeCompare(a.datetime))
    .slice(0, PAST_EVENTS_LIMIT)
    .map(toShow);
  return { shows, source: "past" };
}
