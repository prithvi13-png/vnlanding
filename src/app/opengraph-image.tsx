import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";
import { BRAND_HEX } from "@/lib/brandColors";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: BRAND_HEX.primary,
          color: BRAND_HEX.surface,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 800, letterSpacing: -1 }}>{siteConfig.name}</div>
        <div style={{ marginTop: 20, height: 6, width: 140, background: BRAND_HEX.gold, borderRadius: 999 }} />
        <div style={{ marginTop: 28, fontSize: 34, opacity: 0.9 }}>{siteConfig.tagline}</div>
      </div>
    ),
    { ...size },
  );
}
