"use client";
import { useData } from "@/components/DataContext";
import { profileColumns } from "@/lib/dataUtils";
import { buildInsights } from "@/lib/insights";

export default function Reports() {
  const { rows, datasetName } = useData();
  const profiles = profileColumns(rows);

  const numeric =
    profiles.find((p) => p.type === "number")?.name ||
    profiles[0]?.name ||
    "Value";
  const x =
    profiles.find((p) => p.name !== numeric)?.name ||
    profiles[0]?.name ||
    "Index";

  const insights = buildInsights(rows, "line", x, numeric);

  return (
    <main style={{ padding: 32, minHeight: "100vh" }}>
      <h1 style={{ fontSize: 36, margin: 0 }}>Reports</h1>
      <p style={{ color: "#9CA3AF" }}>Export a polished research summary.</p>

      <article
        id="report"
        style={{
          marginTop: 24,
          maxWidth: 900,
          padding: 40,
          background: "white",
          color: "#0F172A",
          borderRadius: 16
        }}
      >
        <p style={{ letterSpacing: 4, fontSize: 12, color: "#64748B" }}>
          DATA LENS RESEARCH REPORT
        </p>
        <h1 style={{ fontSize: 36, margin: "10px 0 0" }}>
          Economic Data Analysis Summary
        </h1>
        <p style={{ color: "#475569", marginTop: 6 }}>
          Dataset analyzed: {datasetName}
        </p>

        <h2 style={{ marginTop: 28 }}>Methodology</h2>
        <p style={{ lineHeight: 1.7 }}>
          This report uses deterministic summary statistics and chart-level
          analysis before generating explanatory language. Findings are
          descriptive and should not be interpreted as causal without additional
          research design.
        </p>

        <h2>Key findings</h2>
        <ul style={{ lineHeight: 1.7 }}>
          {insights.takeaways.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>

        <h2>Interpretation</h2>
        <p style={{ lineHeight: 1.7 }}>{insights.academic}</p>

        <h2>Conclusion</h2>
        <p style={{ lineHeight: 1.7 }}>{insights.report}</p>
      </article>

      <div style={{ marginTop: 20, display: "flex", gap: 12 }}>
        <button
          onClick={() => window.print()}
          style={{
            padding: "12px 22px",
            background: "linear-gradient(90deg, #6366F1, #2DD4BF)",
            border: "none",
            borderRadius: 10,
            color: "white",
            fontWeight: 700,
            cursor: "pointer"
          }}
        >
          Print / Save PDF
        </button>
        <button
          onClick={() =>
            navigator.clipboard.writeText(
              document.getElementById("report")?.innerText || ""
            )
          }
          style={{
            padding: "12px 22px",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 10,
            color: "white",
            cursor: "pointer"
          }}
        >
          Copy report text
        </button>
      </div>
    </main>
  );
}
