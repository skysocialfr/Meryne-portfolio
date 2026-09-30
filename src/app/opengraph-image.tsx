import { ImageResponse } from "next/og";
import { personal } from "@/data/content";

// Share card used by LinkedIn, WhatsApp, X… when the site link is posted.
// Generated at build time from the content file, so the status stays in sync.
export const alt = `${personal.name} — ${personal.role}`;
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
          justifyContent: "space-between",
          padding: 72,
          background: "#F4EFE6",
          color: "#111111",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 4, textTransform: "uppercase" }}>
          {personal.role}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 128, fontWeight: 800, lineHeight: 0.95, letterSpacing: -4 }}>
            Meryne
          </div>
          <div style={{ fontSize: 128, fontWeight: 800, lineHeight: 0.95, letterSpacing: -4, color: "#FF3D2E" }}>
            Ndjeyi.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 32 }}>{personal.availability}</div>
      </div>
    ),
    size
  );
}
