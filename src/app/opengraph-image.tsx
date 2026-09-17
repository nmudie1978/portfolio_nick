import { ImageResponse } from "next/og";
import { SITE_DESCRIPTION } from "@/content/site";

export const alt = "Nick Mudie — Telecom Architecture, BSS/OSS & Transformation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background: "linear-gradient(180deg, #06202f 0%, #082c3f 100%)",
          color: "#F7FAFB",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#BFEEE4", letterSpacing: 3 }}>
          <span>NICK MUDIE</span>
          <span>TELECOM ARCHITECTURE · BSS/OSS · TRANSFORMATION</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 60, lineHeight: 1.05, letterSpacing: -2, maxWidth: 1000 }}>
            25+ years designing, transforming and operating telecom technology.
          </div>
          <div style={{ fontSize: 26, color: "#C9D9E0", maxWidth: 900, lineHeight: 1.35 }}>
            {SITE_DESCRIPTION}
          </div>
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center", fontSize: 20, color: "#5FD0D8", letterSpacing: 3 }}>
          <span>OPERATIONS</span><span style={{ color: "#7FA0AE" }}>→</span>
          <span>ASSURANCE</span><span style={{ color: "#7FA0AE" }}>→</span>
          <span>ARCHITECTURE</span><span style={{ color: "#7FA0AE" }}>→</span>
          <span>BSS/OSS</span><span style={{ color: "#7FA0AE" }}>→</span>
          <span>TRANSFORMATION</span><span style={{ color: "#7FA0AE" }}>→</span>
          <span>AI</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
