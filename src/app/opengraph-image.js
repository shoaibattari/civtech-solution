import { ImageResponse } from "next/og";
import { company } from "@/lib/site";

export const alt = `${company.name} — ${company.tagline}`;
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
          padding: 80,
          background: "linear-gradient(135deg, #0b1430 0%, #1b2a5e 100%)",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 6,
            color: "#d4b060",
          }}
        >
          CIVTECH SOLUTION
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.05 }}>
            Expertly crafted.
          </div>
          <div
            style={{
              fontSize: 84,
              fontWeight: 700,
              lineHeight: 1.05,
              color: "#d4b060",
            }}
          >
            Smartly managed.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#c3cce6" }}>
          Civil engineering & construction · PEC {company.pec.category} ·
          Karachi, Pakistan
        </div>
      </div>
    ),
    size,
  );
}
