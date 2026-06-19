"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        background: "#070A13",
        color: "white",
        minHeight: "100vh",
        padding: "80px 32px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <h1
        style={{
          fontSize: "72px",
          fontWeight: 800,
          letterSpacing: "-2px",
          background: "linear-gradient(90deg, #6366F1, #2DD4BF)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textAlign: "center",
          margin: 0
        }}
      >
        Data Lens
      </h1>

      <p
        style={{
          fontSize: "20px",
          marginTop: "20px",
          maxWidth: "650px",
          textAlign: "center",
          lineHeight: 1.7,
          color: "#9CA3AF"
        }}
      >
        An AI-powered economic research copilot. Upload data, visualize trends,
        forecast values, and generate research-grade summaries.
      </p>

      <div style={{ display: "flex", gap: 12, marginTop: 30 }}>
        /upload"
          style={{
            padding: "14px 28px",
            background: "linear-gradient(90deg, #6366F1, #2DD4BF)",
            color: "white",
            borderRadius: 10,
            fontWeight: 700
          }}
        >
          Upload Dataset
        </Link>

        /workspace"
          style={{
            padding: "14px 28px",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 10,
            fontWeight: 600,
            color: "white"
          }}
        >
          Start Research
        </Link>
      </div>

      <div
        style={{
          marginTop: 80,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 20,
          width: "100%",
          maxWidth: 1100
        }}
      >
        {[
          ["Upload data", "CSV and Excel parsing with auto schema detection."],
          ["Visualize trends", "Premium interactive charts for any series."],
          ["AI explanations", "Beginner and academic interpretations."],
          ["Research reports", "Polished outputs ready for class or papers."]
        ].map(([t, d]) => (
          <div
            key={t}
            style={{
              padding: 24,
              background: "#111827",
              border: "1px solid #1f2937",
              borderRadius: 16
            }}
          >
            <h3 style={{ margin: 0 }}>{t}</h3>
            <p style={{ color: "#9CA3AF", marginTop: 10, lineHeight: 1.6 }}>
              {d}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
