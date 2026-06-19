export default function Home() {
return (
  <>
    <nav
     style={{
  position: "absolute",
  top: "0",
  left: "0",
  right: "0",
  padding: "20px 40px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "rgba(10, 15, 30, 0.6)",
  backdropFilter: "blur(10px)",
  borderBottom: "1px solid rgba(255,255,255,0.1)"
}}

    >
      <div style={{ fontWeight: "bold", fontSize: "20px" }}>
        Data Lens
      </div>

      <div style={{ display: "flex", gap: "20px", color: "#aaa" }}>
        <span>Dashboard</span>
        <span>Upload</span>
        <span>Reports</span>
      </div>
    </nav>

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
  <div style={{ fontWeight: "bold", fontSize: "20px" }}>
    Data Lens
  </div>

  <div style={{ display: "flex", gap: "20px", color: "#aaa" }}>
    <span>Dashboard</span>
    <span>Upload</span>
    <span>Reports</span>
  </div>
</nav>

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
  <div
  style={{
    width: "250px",
    padding: "24px",
    background: "#111827",
    borderRadius: "16px",
    border: "1px solid #1f2937",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    textAlign: "left"
  }}
>
    <h3>Upload Data</h3>
    <p style={{ color: "#aaa" }}>
      Easily upload CSV and Excel files for analysis.
    </p>
  </div>

 <div
  style={{
    width: "250px",
    padding: "24px",
    background: "#111827",
    borderRadius: "16px",
    border: "1px solid #1f2937",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    textAlign: "left"
  }}
>
    <h3>Visualize Trends</h3>
    <p style={{ color: "#aaa" }}>
      Create charts and explore patterns quickly.
    </p>
  </div>

 <div
  style={{
    width: "250px",
    padding: "24px",
    background: "#111827",
    borderRadius: "16px",
    border: "1px solid #1f2937",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    textAlign: "left"
  }}
>
    <h3>Generate Insights</h3>
    <p style={{ color: "#aaa" }}>
      Turn data into clear explanations and reports.
    </p>
  </div>
</div>
    </main>
  </>
  );
}
