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
    </main>
  );
}
