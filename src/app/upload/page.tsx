"use client";
import { useData } from "@/components/DataContext";
import { parseFile, profileColumns } from "@/lib/dataUtils";

export default function UploadPage() {
  const { rows, datasetName, setData } = useData();
  const profiles = profileColumns(rows);

  async function onFile(f: File) {
    const parsed = await parseFile(f);
    setData(parsed, f.name);
  }

  return (
    <main style={{ padding: "40px 32px", minHeight: "100vh" }}>
      <h1 style={{ fontSize: 40, marginBottom: 6 }}>Upload Dataset</h1>
      <p style={{ color: "#9CA3AF" }}>
        Drop a CSV or Excel file. Data Lens will profile your columns automatically.
      </p>

      <label
        style={{
          marginTop: 28,
          display: "block",
          padding: 40,
          border: "1px dashed rgba(45,212,191,0.4)",
          borderRadius: 20,
          background: "rgba(255,255,255,0.03)",
          textAlign: "center",
          cursor: "pointer"
        }}
      >
        <input
          type="file"
          accept=".csv,.xlsx,.xls"
          style={{ display: "none" }}
          onChange={(e) => e.target.files?.[0] && onFile(e.target.files[0])}
        />
        <h3 style={{ marginTop: 0 }}>Choose CSV or Excel file</h3>
        <p style={{ color: "#9CA3AF" }}>
          Currently loaded: <b>{datasetName}</b> · {rows.length} rows
        </p>
      </label>

      <h2 style={{ marginTop: 40 }}>Schema</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 14
        }}
      >
        {profiles.map((p) => (
          <div
            key={p.name}
            style={{
              padding: 14,
              background: "#111827",
              border: "1px solid #1f2937",
              borderRadius: 12
            }}
          >
            <div style={{ fontWeight: 700 }}>{p.name}</div>
            <div style={{ color: "#9CA3AF", fontSize: 13 }}>
              {p.type} · {p.missing} missing · {p.unique} unique
            </div>
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: 40 }}>Preview</h2>
      <div
        style={{
          overflow: "auto",
          maxHeight: 420,
          border: "1px solid #1f2937",
          borderRadius: 16
        }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
          <thead>
            <tr style={{ background: "#111827" }}>
              {Object.keys(rows[0] || {}).map((c) => (
                <th
                  key={c}
                  style={{ textAlign: "left", padding: 10, color: "#9CA3AF" }}
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.slice(0, 50).map((r, i) => (
              <tr key={i} style={{ borderTop: "1px solid #1f2937" }}>
                {Object.keys(rows[0] || {}).map((c) => (
                  <td key={c} style={{ padding: 10 }}>
                    {String(r[c] ?? "")}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
