export default function Home() {
  return (
    <main
      style={{
        background: "#070A13",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "40px"
      }}
    >
      <h1 style={{ fontSize: "64px", fontWeight: "bold" }}>
        Data Lens
      </h1>

      <p style={{ fontSize: "20px", marginTop: "20px", maxWidth: "600px" }}>
        Transform raw data into clear insights, visualizations, and research-grade analysis.
      </p>

      <button
        style={{
          marginTop: "30px",
          padding: "12px 24px",
          background: "#6366F1",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        Start Analyzing
      </button>
      <div style={{ marginTop: "60px", maxWidth: "800px" }}>
  <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
    What Data Lens Does
  </h2>

  <p style={{ color: "#aaa", lineHeight: "1.6" }}>
    Upload datasets, analyze trends, visualize patterns, forecast future values,
    and generate professional economic summaries — all in one platform.
  </p>
</div>
      <div
  style={{
    marginTop: "80px",
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    justifyContent: "center"
  }}
>
  <div style={{ width: "250px", padding: "20px", background: "#111827", borderRadius: "12px" }}>
    <h3>Upload Data</h3>
    <p style={{ color: "#aaa" }}>
      Easily upload CSV and Excel files for analysis.
    </p>
  </div>

  <div style={{ width: "250px", padding: "20px", background: "#111827", borderRadius: "12px" }}>
    <h3>Visualize Trends</h3>
    <p style={{ color: "#aaa" }}>
      Create charts and explore patterns quickly.
    </p>
  </div>

  <div style={{ width: "250px", padding: "20px", background: "#111827", borderRadius: "12px" }}>
    <h3>Generate Insights</h3>
    <p style={{ color: "#aaa" }}>
      Turn data into clear explanations and reports.
    </p>
  </div>
</div>

    </main>
  );
}
