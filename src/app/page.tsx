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
        style={{
          background: "#070A13",
          color: "white",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "120px 40px 60px"
        }}
      >
        <h1
          style={{
            fontSize: "72px",
            fontWeight: "bold",
            letterSpacing: "-2px",
            background: "linear-gradient(90deg, #6366F1, #2DD4BF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          Data Lens
        </h1>

        <p
          style={{
            fontSize: "20px",
            marginTop: "20px",
            maxWidth: "650px",
            lineHeight: "1.7",
            color: "#9CA3AF"
          }}
        >
          Transform raw data into clear insights, visualizations, and
          research-grade analysis.
        </p>

        <button
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow =
              "0 15px 35px rgba(99,102,241,0.4)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow =
              "0 10px 25px rgba(99,102,241,0.3)";
          }}
          style={{
            marginTop: "30px",
            padding: "14px 28px",
            background: "linear-gradient(90deg, #6366F1, #2DD4BF)",
            color: "white",
            border: "none",
            borderRadius: "10px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 10px 25px rgba(99,102,241,0.3)",
            transition: "all 0.2s ease"
          }}

        <div style={{ marginTop: "60px", maxWidth: "800px" }}>
          <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
            What Data Lens Does
          </h2>

          <p style={{ color: "#aaa", lineHeight: "1.6" }}>
            Upload datasets, analyze trends, visualize patterns, forecast future
            values, and generate professional economic summaries — all in one
            platform.
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
