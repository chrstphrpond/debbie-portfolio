import { put } from "@vercel/blob";
import fs from "fs";

const files = [
  { file: "public/email headers/email 3.jpg", name: "email-header-3.jpg" },
  { file: "public/email headers/email 4.jpg", name: "email-header-4.jpg" },
];

for (const f of files) {
  const buffer = fs.readFileSync(f.file);
  const blob = await put("email-assets/" + f.name, buffer, {
    access: "public",
    allowOverwrite: true,
  });
  console.log(`${f.name}: ${blob.url}`);
}
