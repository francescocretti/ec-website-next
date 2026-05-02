export type Show = {
  date: string;
  venue: string;
  city: string;
  event?: string;
  url?: string;
};

export const shows: Show[] = [
  {
    date: "2026-05-23",
    venue: "Parco XXII Aprile",
    city: "Modena",
    event: "Revol Experience Festival",
  },
  {
    date: "2026-05-24",
    venue: "Deposito",
    city: "Verona",
  },
  {
    date: "2026-06-06",
    venue: "TBA",
    city: "Liguria",
  },
  {
    date: "2026-06-25",
    venue: "Le Serre",
    city: "Bologna",
  },
  {
    date: "2026-07-23",
    venue: "nUovo",
    city: "Cuneo",
  },
  {
    date: "2026-07-25",
    venue: "Arci Festa",
    city: "Cremona",
  },
  {
    date: "2026-07-28",
    venue: "Birrificio Impavida",
    city: "Riva del Garda",
    event: "Garda Jazz Cafè",
  },
  {
    date: "2026-07-30",
    venue: "Forte di Exilles",
    city: "Borgate dal Vivo",
    event: "opening Bandakadabra",
  },
  {
    date: "2026-07-31",
    venue: "Imbarchino × Mixer",
    city: "Torino",
  },
];
