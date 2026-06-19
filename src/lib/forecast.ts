import { Row } from "@/components/DataContext";
import { numericValues, mean } from "./dataUtils";

export type ForecastMethod =
  | "Moving average"
  | "Linear regression"
  | "Exponential smoothing";

export function forecast(
  rows: Row[],
  target: string,
  horizon: number,
  method: ForecastMethod
) {
  const vals = numericValues(rows, target);
  if (!vals.length) return [];
  const out: { period: string; expected: number; best: number; worst: number }[] = [];
  const m = mean(vals);
  const vol = Math.sqrt(mean(vals.map((v) => (v - m) ** 2))) || 1;

  for (let i = 1; i <= horizon; i++) {
    let expected = vals[vals.length - 1];

    if (method === "Moving average") {
      expected = mean(vals.slice(-Math.min(4, vals.length)));
    } else if (method === "Linear regression") {
      const n = vals.length;
      const xs = vals.map((_, idx) => idx + 1);
      const mx = mean(xs);
      const my = mean(vals);
      const b =
        xs.reduce((s, x, j) => s + (x - mx) * (vals[j] - my), 0) /
        (xs.reduce((s, x) => s + (x - mx) ** 2, 0) || 1);
      const a = my - b * mx;
      expected = a + b * (n + i);
    } else {
      let level = vals[0];
      vals.forEach((v) => (level = 0.35 * v + 0.65 * level));
      expected = level;
    }

    out.push({
      period: `+${i}`,
      expected,
      best: expected + vol * 0.45,
      worst: expected - vol * 0.45
    });
  }

  return out;
}
