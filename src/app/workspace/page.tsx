"use client";
import { useMemo, useState } from "react";
import { useData } from "@/components/DataContext";
import { profileColumns } from "@/lib/dataUtils";
import { buildInsights } from "@/lib/insights";
import {
  Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Line, LineChart,
  Pie, PieChart, ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis
} from "recharts";

type ChartType = "line" | "bar" | "area" | "scatter" | "pie";

export default function Workspace() {
  const { rows, datasetName } = useData();
  const profiles = useMemo(() => profileColumns(rows), [rows]);
  const cols = profiles.map((p) => p.name);
  const nums = profiles.filter((p) => p.type === "number").map((p) => p.name);

  const [chart, setChart] = useState<ChartType>("line");
  const [x, setX] = useState(cols[0] || "");
  const [y, setY] = useState(nums[0] || cols[1] || "");
  const [mode, setMode] = useState<"Simple" | "Academic">("Simple");

  const data = rows.map((r) => ({ ...r, [y]: Number(r[y]) }));
  const insights = buildInsights(rows, chart, x, y);
  const colors = ["#6366F1", "#2DD4BF", "#F59E0B", "#F472B6", "#8B5CF6"];

  return (
    <main style={{ padding: "32px", minHeight: "100vh" }}>
      <h1 style={{ fontSize: 36, margin: 0 }}>Analysis Workspace</h1>
      <p style={{ color: "#9CA3AF" }}>Dataset: {datasetName}</p>

      <div
        style={{
          marginTop: 24,
          display: "grid",
          gridTemplateColumns: "260px 1fr 320px",
          gap: 20
        }}
      >
        {/* LEFT: Controls */}
        <section
          style={{
            padding: 20,
            background: "#111827",
            border: "1px solid #1f2937",
            borderRadius: 16
          }}
        >
          <h3 style={{ marginTop: 0 }}>Controls</h3>
          <Field label="Chart">
            <select
              value={chart}
              onChange={(e) => setChart(e.target.value as ChartType)}
              style={input}
            >
              {["line", "bar", "area", "scatter", "pie"].map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </Field>
          <Field label="X variable">
            <select value={x} onChange={(e) => setX(e.target.value)} style={input}>
              {cols.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </Field>
          <Field label="Y variable">
            <select value={y} onChange={(e) => setY(e.target.value)} style={input}>
              {cols.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </Field>
        </section>

        {/* CENTER: Chart */}
        <section
          style={{
            padding: 20,
            background: "#111827",
            border: "1px solid #1f2937",
            borderRadius: 16
          }}
        >
          <h3 style={{ marginTop: 0 }}>Visualization</h3>
          <div style={{ height: 440 }}>
            <ResponsiveContainer>
              {chart === "line" ? (
                <LineChart data={data}>
                  <CartesianGrid stroke="rgba(255,255,255,.08)" />
                  <XAxis dataKey={x} stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Line dataKey={y} stroke="#2DD4BF" strokeWidth={3} dot={false} />
                </LineChart>
              ) : chart === "bar" ? (
                <BarChart data={data}>
                  <CartesianGrid stroke="rgba(255,255,255,.08)" />
                  <XAxis dataKey={x} stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Bar dataKey={y} fill="#6366F1" radius={[8, 8, 0, 0]} />
                </BarChart>
              ) : chart === "area" ? (
                <AreaChart data={data}>
                  <CartesianGrid stroke="rgba(255,255,255,.08)" />
                  <XAxis dataKey={x} stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Area dataKey={y} stroke="#2DD4BF" fill="#2DD4BF" fillOpacity={0.2} />
                </AreaChart>
              ) : chart === "scatter" ? (
                <ScatterChart>
                  <CartesianGrid stroke="rgba(255,255,255,.08)" />
                  <XAxis dataKey={x} stroke="#9CA3AF" />
                  <YAxis dataKey={y} stroke="#9CA3AF" />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Scatter data={data} fill="#2DD4BF" />
                </ScatterChart>
              ) : (
                <PieChart>
                  <Tooltip contentStyle={tooltipStyle} />
                  <Pie
                    data={data.slice(0, 8)}
                    dataKey={y}
                    nameKey={x}
                    innerRadius={70}
                    outerRadius={130}
                  >
                    {data.slice(0, 8).map((_, i) => (
                      <Cell key={i} fill={colors[i % colors.length]} />
                    ))}
                  </Pie>
                </PieChart>
              )}
            </ResponsiveContainer>
          </div>
        </section>

        {/* RIGHT: Insights */}
        <section
          style={{
            padding: 20,
            background: "#111827",
            border: "1px solid #1f2937",
            borderRadius: 16
          }}
        >
          <div
            style={{
              display: "flex",
              background: "rgba(255,255,255,0.06)",
              borderRadius: 12,
              padding: 4
            }}
          >
            {(["Simple", "Academic"] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                style={{
                  flex: 1,
                  padding: "8px 12px",
                  borderRadius: 8,
                  border: "none",
                  cursor: "pointer",
                  background:
                    mode === m
                      ? m === "Simple"
                        ? "#2DD4BF"
                        : "#6366F1"
                      : "transparent",
                  color: mode === m ? "white" : "#9CA3AF",
                  fontWeight: 600
                }}
              >
                {m}
              </button>
            ))}
          </div>

          <h4 style={{ marginTop: 20 }}>Explanation</h4>
          <p style={{ color: "#E8EEFF", lineHeight: 1.6, fontSize: 14 }}>
            {mode === "Simple" ? insights.simple : insights.academic}
          </p>

          <h4>Key takeaways</h4>
          <ul style={{ color: "#9CA3AF", lineHeight: 1.7, fontSize: 14 }}>
            {insights.takeaways.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>

          <h4>Report summary</h4>
          <p style={{ color: "#9CA3AF", lineHeight: 1.7, fontSize: 14 }}>
            {insights.report}
          </p>

          <button
            onClick={() => navigator.clipboard.writeText(insights.report)}
            style={{
              marginTop: 10,
              width: "100%",
              padding: 10,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 10,
              color: "white",
              cursor: "pointer"
            }}
          >
            Copy report
          </button>
        </section>
      </div>
    </main>
  );
}

const input: React.CSSProperties = {
  width: "100%",
  marginTop: 6,
  padding: "10px 12px",
  background: "#0B1020",
  color: "white",
  border: "1px solid #1f2937",
  borderRadius: 10
};

const tooltipStyle: React.CSSProperties = {
  background: "#111827",
  border: "1px solid #1f2937",
  borderRadius: 12,
  color: "white"
};

function Field({
  label,
  children
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ marginTop: 14 }}>
      <div
        style={{
          fontSize: 12,
          color: "#9CA3AF",
          textTransform: "uppercase",
          letterSpacing: 2
        }}
      >
        {label}
      </div>
      {children}
    </div>
  );
}
