"use client";
import { useMemo, useState } from "react";
import { useData } from "@/components/DataContext";
import { profileColumns } from "@/lib/dataUtils";
import { forecast, ForecastMethod } from "@/lib/forecast";
import {
  Area, AreaChart, CartesianGrid, Line, ResponsiveContainer, Tooltip, XAxis, YAxis
} from "recharts";

export default function ForecastingPage() {
  const { rows } = useData();
  const profiles = profileColumns(rows);
  const nums = profiles.filter((p) => p.type === "number").map((p) => p.name);

  const [target, setTarget] = useState(nums[0] || "");
  const [method, setMethod] = useState<ForecastMethod>("Linear regression");
  const [horizon, setHorizon] = useState(6);

  const data = useMemo(
    () => forecast(rows, target, horizon, method),
    [rows, target, horizon, method]
  );

  return (
    <main style={{ padding: 32, minHeight: "100vh" }}>
      <h1 style={{ fontSize: 36, margin: 0 }}>Forecasting</h1>
      <p style={{ color: "#9CA3AF" }}>
        Choose a target variable and method. Forecasts are scenario estimates, not certainties.
      </p>

      <div
        style={{
          marginTop: 24,
          display: "grid",
          gridTemplateColumns: "280px 1fr",
          gap: 20
        }}
      >
        {/* LEFT: Settings */}
        <section
          style={{
            padding: 20,
            background: "#111827",
            border: "1px solid #1f2937",
            borderRadius: 16
          }}
        >
          <h3 style={{ marginTop: 0 }}>Settings</h3>

          <Field label="Target">
            <select
              style={input}
              value={target}
              onChange={(e) => setTarget(e.target.value)}
            >
              {nums.map((n) => (
                <option key={n}>{n}</option>
              ))}
            </select>
          </Field>

          <Field label="Method">
            <select
              style={input}
              value={method}
              onChange={(e) => setMethod(e.target.value as ForecastMethod)}
            >
              {["Moving average", "Linear regression", "Exponential smoothing"].map(
                (n) => (
                  <option key={n}>{n}</option>
                )
              )}
            </select>
          </Field>

          <Field label="Horizon">
            <input
              style={input}
              type="number"
              min={1}
              max={24}
              value={horizon}
              onChange={(e) => setHorizon(Number(e.target.value))}
            />
          </Field>

          <p style={{ marginTop: 18, color: "#9CA3AF", fontSize: 13, lineHeight: 1.6 }}>
            Forecasts use the labeled method only. They show best, expected, and worst-case
            scenarios, but are not guaranteed predictions.
          </p>
        </section>

        {/* RIGHT: Chart */}
        <section
          style={{
            padding: 20,
            background: "#111827",
            border: "1px solid #1f2937",
            borderRadius: 16
          }}
        >
          <h3 style={{ marginTop: 0 }}>
            {target} forecast — {method}
          </h3>
          <div style={{ height: 440 }}>
            <ResponsiveContainer>
              <AreaChart data={data}>
                <CartesianGrid stroke="rgba(255,255,255,.08)" />
                <XAxis dataKey="period" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{
                    background: "#0B1020",
                    border: "1px solid #1f2937",
                    borderRadius: 12,
                    color: "white"
                  }}
                />
                <Area dataKey="best" stroke="none" fill="#2DD4BF" fillOpacity={0.12} />
                <Area dataKey="worst" stroke="none" fill="#6366F1" fillOpacity={0.12} />
                <Line dataKey="expected" stroke="#2DD4BF" strokeWidth={3} dot={false} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
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
