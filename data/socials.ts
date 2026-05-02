export type SocialPlatform = "instagram" | "spotify" | "bandcamp" | "youtube";

export type Social = {
  platform: SocialPlatform;
  label: string;
  url: string;
};

export const socials: Social[] = [
  {
    platform: "instagram",
    label: "Instagram",
    url: "https://www.instagram.com/electriccircus3/",
  },
  {
    platform: "spotify",
    label: "Spotify",
    url: "https://spoti.fi/2zwMTOP",
  },
  {
    platform: "bandcamp",
    label: "Bandcamp",
    url: "https://electriccircus3.bandcamp.com/",
  },
  {
    platform: "youtube",
    label: "YouTube",
    url: "https://www.youtube.com/user/electriccircus3",
  },
];

export const externalLinks = {
  presave: "https://found.ee/highfever",
  label: "https://www.killergrooverecords.com",
  pressKit: "/resources/ElectricCircus_Press_Kit.pdf",
  techRiderSextet: "/resources/ElectricCircus_Sextet_Tech_Rider.pdf",
  techRiderQuintet: "/resources/ElectricCircus_Quintet_Tech_Rider.pdf",
};

export const contactEmails = {
  general: "electriccircus3@gmail.com",
  booking: "gianniurss@gmail.com",
};

export const releaseDate = new Date("2026-05-15T00:00:00+02:00");
