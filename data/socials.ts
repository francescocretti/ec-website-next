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
    url: "https://open.spotify.com/artist/1U6ZJR2dru7HSglnG1MPn6?si=T6ZoSirNQUOSrkDUF8GB6w",
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

export const release = { year: 2026, month: 5, day: 15 } as const;
