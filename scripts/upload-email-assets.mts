import { put } from "@vercel/blob";
import fs from "fs";
import path from "path";

const assets = [
  { file: "public/photos/headshots/cutout-headshot.webp",     name: "cutout-headshot.webp" },
  { file: "public/photos/headshots/cutout-headshot.png",      name: "cutout-headshot.png" },
  { file: "public/photos/headshots/og-headshot.png",          name: "og-headshot.png" },
  { file: "public/photos/community-outreach/481194831_1026167662874492_7089204945424779009_n.webp", name: "community-outreach-1.webp" },
  { file: "public/photos/2024 PNA NCR Regional Conference/481000411_1021297153361543_2672929191227991110_n.webp", name: "conference-2024.webp" },
  { file: "public/photos/46th PNAA National Convention/518452505_1127857659372158_3139828753740710107_n.webp", name: "convention-46th.webp" },
  { file: "public/initials-logo-2.png",                       name: "initials-logo.png" },
  { file: "public/photos/logos/campaign-logo.png",            name: "campaign-logo.png" },
  { file: "public/photos/logos/pnna-cnky logo.png",           name: "pnaa-ncr-logo.png" },
  { file: "public/1080x1350-socialmedia-post/SOCIAL (1).jpg", name: "social-post-1.jpg" },
  { file: "public/1080x1350-socialmedia-post/Social (2).jpg", name: "social-post-2.jpg" },
];

const results: Record<string, string> = {};

for (const asset of assets) {
  const filePath = path.resolve(asset.file);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Not found: ${asset.file}`);
    continue;
  }
  const buffer = fs.readFileSync(filePath);
  const blob = await put(`email-assets/${asset.name}`, buffer, {
    access: "public",
    allowOverwrite: true,
  });
  results[asset.name] = blob.url;
  console.log(`✓ ${asset.name}\n  ${blob.url}`);
}

console.log("\n── URL Map ──");
console.log(JSON.stringify(results, null, 2));
