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
          background: "#131416",
          color: "#ECE9E2",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#8E8C87", letterSpacing: 3 }}>
          <span>NICK MUDIE</span>
          <span>TELECOM ARCHITECTURE · BSS/OSS · TRANSFORMATION</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 60, lineHeight: 1.05, letterSpacing: -2, maxWidth: 1000 }}>
            25+ years designing, transforming and operating telecom technology.
          </div>
          <div style={{ fontSize: 26, color: "#B4B1AA", maxWidth: 900, lineHeight: 1.35 }}>
            {SITE_DESCRIPTION}
          </div>
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center", fontSize: 20, color: "#C98F5D", letterSpacing: 3 }}>
          <span>OPERATIONS</span><span style={{ color: "#8E8C87" }}>→</span>
          <span>ASSURANCE</span><span style={{ color: "#8E8C87" }}>→</span>
          <span>ARCHITECTURE</span><span style={{ color: "#8E8C87" }}>→</span>
          <span>BSS/OSS</span><span style={{ color: "#8E8C87" }}>→</span>
          <span>TRANSFORMATION</span><span style={{ color: "#8E8C87" }}>→</span>
          <span>AI</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
