import type { Metadata } from "next";
import Image from "next/image";
import AlbumCallout from "@/components/AlbumCallout";

export const metadata: Metadata = {
  title: "Bio",
  description:
    "Electric Circus, based in Turin, blends funk groove, afrobeat, psychedelia and world music.",
};

const thanks = [
  "Valentina Maistri",
  "Roby Frignani",
  "Angelo Rodio",
  "Giulia Menzio",
  "Quique Valido Moure",
  "Gianni Marsiglia",
  "Tommaso Camarotto",
  "Tom Newton",
  "Fede Bevacqua",
  "Dario Omizzolo",
  "Luca Rabellino",
  "Matteo Contin",
  "Renato Angelone",
  "Franz Longhi",
  "Daniele Flamini",
];

export default function BioPage() {
  return (
    <main className="max-w-[860px] mx-auto px-6 md:px-12 pt-30 md:pt-40 pb-20 md:pb-30">
      <div className="mb-16 flex items-center justify-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.28em] text-accent before:block before:w-7 before:h-px before:bg-accent after:block after:w-7 after:h-px after:bg-accent">
        Bio
      </div>

      <div className="mb-12 w-full">
        <Image
          src="/img/horizontal-river.jpg"
          alt="Electric Circus band photo"
          width={1600}
          height={900}
          priority
          className="block w-full h-auto"
          style={{ filter: "saturate(0.85) contrast(1.05)" }}
        />
      </div>

      <div className="flex flex-col">
        <p className="text-base sm:text-lg font-light leading-[1.85] text-cream py-10 border-t border-cream/12 [&_strong]:font-bold [&_strong]:text-cream [&_em]:italic [&_em]:opacity-85">
          Based in <strong>Turin, Italy</strong>, Electric Circus deliver a
          musical experience that blends{" "}
          <strong>funk groove, afrobeat, psychedelia</strong> and world music.
          Following a U.S. tour and several international collaborations, the
          group earned critical and audience acclaim with their debut album{" "}
          <em>Canicola</em>.
        </p>
        <p className="text-base sm:text-lg font-light leading-[1.85] text-cream py-10 border-t border-cream/12 [&_strong]:font-bold [&_strong]:text-cream [&_em]:italic [&_em]:opacity-85">
          Their artistic evolution led to <em>On est ensemble</em>, an EP
          created with Malian duo <strong>Sahel Roots</strong>, highlighting
          their deep affinity for African sounds and musical roots and weaving
          them together with funk, blues and psychedelic elements.
        </p>
        <p className="text-base sm:text-lg font-light leading-[1.85] text-cream py-10 border-y border-cream/12">
          Building on these experiences, Electric Circus now channel all their
          influences into new compositions driven by a strong groove-oriented
          vision, offering a rich and compelling sonic journey.
        </p>
      </div>

      <AlbumCallout />

      <div className="mt-18 md:mt-[72px] pt-10 border-t border-cream/12">
        <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-accent mb-5">
          Special Thanks
        </div>
        <p className="text-[15px] font-light leading-loose italic opacity-75">
          {thanks.join(", ")}.
        </p>
      </div>
    </main>
  );
}
