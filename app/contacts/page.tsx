import type { Metadata } from "next";
import SocialIcons from "@/components/SocialIcons";
import { contactEmails, externalLinks } from "@/data/socials";

export const metadata: Metadata = {
  title: "Contacts",
  description:
    "Get in touch with Electric Circus — booking, management, and general inquiries.",
};

function FileIcon() {
  return (
    <svg viewBox="0 0 24 24" width={12} height={12} fill="currentColor" aria-hidden="true" className="opacity-70">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z" />
    </svg>
  );
}

const resourceBtn =
  "inline-flex items-center gap-2 px-5 py-2.5 border border-cream/35 text-cream text-[10px] font-semibold uppercase tracking-[0.22em] transition-colors hover:border-accent hover:text-accent";

const labelClass =
  "text-[10px] font-semibold uppercase tracking-[0.28em] text-accent";

export default function ContactsPage() {
  return (
    <main className="max-w-[700px] mx-auto px-6 md:px-12 pt-30 md:pt-40 pb-20 md:pb-30">
      <div className="mb-18 flex items-center justify-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.28em] text-accent before:block before:w-7 before:h-px before:bg-accent after:block after:w-7 after:h-px after:bg-accent">
        Contacts
      </div>

      <div className="flex flex-col">
        <div className="flex flex-col gap-2 py-9 border-y border-cream/10">
          <span className={labelClass}>
            General inquiries &amp; collaboration proposals
          </span>
          <a
            href={`mailto:${contactEmails.general}`}
            className="text-lg sm:text-[22px] font-light text-cream transition-opacity hover:opacity-70 tracking-[0.02em]"
          >
            {contactEmails.general}
          </a>
        </div>

        <div className="flex flex-col gap-2 py-9 border-b border-cream/10">
          <span className={labelClass}>Booking &amp; Management</span>
          <a
            href={`mailto:${contactEmails.booking}`}
            className="text-lg sm:text-[22px] font-light text-cream transition-opacity hover:opacity-70 tracking-[0.02em]"
          >
            {contactEmails.booking}
          </a>
        </div>

        <div className="flex flex-col gap-4 py-9 border-b border-cream/10">
          <span className={labelClass}>Resources</span>
          <div className="flex gap-4 flex-wrap">
            <a
              href={externalLinks.techRiderSextet}
              target="_blank"
              rel="noopener noreferrer"
              className={resourceBtn}
            >
              <FileIcon />
              Tech Rider
            </a>
            <a
              href={externalLinks.pressKit}
              target="_blank"
              rel="noopener noreferrer"
              className={resourceBtn}
            >
              <FileIcon />
              EPK
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-9">
          <span className={labelClass}>Links</span>
          <SocialIcons variant="labeled" gap="gap-6" />
        </div>
      </div>
    </main>
  );
}
