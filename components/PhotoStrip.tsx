"use client";

import { ImageAutoSlider } from "@/components/ui/image-auto-slider";
import { BlurFade } from "@/components/ui/blur-fade";

const photos = [
  // 46th PNAA National Convention
  "/photos/46th PNAA National Convention/518452505_1127857659372158_3139828753740710107_n.webp",
  "/photos/46th PNAA National Convention/518365073_1129064292584828_1076160492547647114_n.webp",
  "/photos/46th PNAA National Convention/517932277_1127873502703907_9096660411409287637_n.webp",
  "/photos/46th PNAA National Convention/518478847_1127873486037242_570870553856123880_n.webp",
  // 2024 PNA NCR Regional Conference
  "/photos/2024 PNA NCR Regional Conference/481055381_1021296776694914_886846683145490923_n.webp",
  "/photos/2024 PNA NCR Regional Conference/481053477_1021298000028125_5051682618001493499_n.webp",
  "/photos/2024 PNA NCR Regional Conference/481070823_1021296876694904_7802523557201374500_n.webp",
  "/photos/2024 PNA NCR Regional Conference/481000411_1021297153361543_2672929191227991110_n.webp",
  // Community outreach
  "/photos/community-outreach/547276100_1177376797753577_4978298049702057117_n.webp",
  "/photos/community-outreach/481194831_1026167662874492_7089204945424779009_n.webp",
  "/photos/community-outreach/481290963_1026166032874655_7189448476110382926_n.webp",
  "/photos/community-outreach/548200219_1177376754420248_5383179123331527273_n.webp",
];

export default function PhotoStrip() {
  return (
    <section className="py-8">
      {/* Label */}
      <BlurFade delay={0.1} inView>
        <p
          className="text-[10px] font-bold uppercase tracking-widest mb-5 px-1"
          style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
        >
          National Convention · NCR Conference · Community Outreach
        </p>
      </BlurFade>

      {/* Slider — break out of max-w-5xl horizontally */}
      <BlurFade delay={0.2} inView>
        <div
          style={{
            width: "100vw",
            marginLeft: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <ImageAutoSlider images={photos} speed={30} />
        </div>
      </BlurFade>
    </section>
  );
}
