import { ImageResponse } from "next/og";
import { BRAND_HEX } from "@/lib/brandColors";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: BRAND_HEX.primary,
          borderRadius: 14,
          color: BRAND_HEX.surface,
          fontSize: 30,
          fontWeight: 800,
          fontFamily: "sans-serif",
        }}
      >
        VN
      </div>
    ),
    { ...size },
  );
}
