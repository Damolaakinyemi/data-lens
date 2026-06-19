import Papa from "papaparse";
import * as XLSX from "xlsx";
import { Row } from "@/components/DataContext";

export async function parseFile(file: File): Promise<Row[]> {
  if (file.name.toLowerCase().endsWith(".csv")) {
    const text = await file.text();
    const parsed = Papa.parse<Row>(text, {
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true
    });
    return parsed.data;
  }
  const buffer = await file.arrayBuffer();
  const wb = XLSX.read(buffer);
  const sheet = wb.Sheets[wb.SheetNames[0]];
  return XLSX.utils.sheet_to_json<Row>(sheet, { defval: null });
}

export type ColumnProfile = {
  name: string;
  type: "number" | "date" | "category" | "empty";
  missing: number;
  unique: number;
};

export function profileColumns(rows: Row[]): ColumnProfile[] {
  const keys = Object.keys(rows[0] || {});
  return keys.map((name) => {
    const vals = rows.map((r) => r[name]).filter((v) => v !== null && v !== "");
    const missing = rows.length - vals.length;
    const numeric = vals.filter(
      (v) => typeof v === "number" || (!isNaN(Number(v)) && String(v).trim() !== "")
    ).length;
    const dates = vals.filter((v) => !isNaN(Date.parse(String(v)))).length;
    const type =
      vals.length === 0
        ? "empty"
        : numeric / vals.length > 0.8
        ? "number"
        : dates / vals.length > 0.8
        ? "date"
        : "category";
    return { name, type, missing, unique: new Set(vals.map(String)).size };
  });
}

export function numericValues(rows: Row[], col: string): number[] {
  return rows.map((r) => Number(r[col])).filter(Number.isFinite);
}

export function mean(a: number[]) {
  return a.length ? a.reduce((x, y) => x + y, 0) / a.length : 0;
}

export function correlation(xs: number[], ys: number[]) {
  const n = Math.min(xs.length, ys.length);
  if (n < 2) return 0;
  const x = xs.slice(0, n), y = ys.slice(0, n);
  const mx = mean(x), my = mean(y);
  const num = x.reduce((s, xi, i) => s + (xi - mx) * (y[i] - my), 0);
  const den = Math.sqrt(
    x.reduce((s, xi) => s + (xi - mx) ** 2, 0) *
      y.reduce((s, yi) => s + (yi - my) ** 2, 0)
  );
  return den ? num / den : 0;
}

export function summaryStats(rows: Row[], y: string, x?: string) {
  const values = numericValues(rows, y);
  const first = values[0] ?? 0;
  const last = values[values.length - 1] ?? 0;
  const trend = last > first ? "upward" : last < first ? "downward" : "mostly flat";
  return {
    count: values.length,
    mean: mean(values),
    min: values.length ? Math.min(...values) : 0,
    max: values.length ? Math.max(...values) : 0,
    trend,
    correlation: x ? correlation(numericValues(rows, x), values) : undefined
  };
}
