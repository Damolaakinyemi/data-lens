import { Row } from "@/components/DataContext";
import { summaryStats } from "./dataUtils";

export function buildInsights(
  rows: Row[],
  chartType: string,
  x: string,
  y: string
) {
  const s = summaryStats(rows, y, x);

  const corr =
    s.correlation === undefined
      ? ""
      : ` The correlation between ${x} and ${y} is ${s.correlation.toFixed(
          2
        )}, which should be read as association rather than causation.`;

  const simple = `${y} shows a ${s.trend} pattern across the selected data. The average value is ${s.mean.toFixed(
    2
  )}, with values ranging from ${s.min.toFixed(2)} to ${s.max.toFixed(2)}.${corr}`;

  const academic = `Using a ${chartType} specification with ${x} as the horizontal axis and ${y} as the measured series, the data is consistent with a ${s.trend} descriptive trend. The observed mean is ${s.mean.toFixed(
    2
  )}, bounded by [${s.min.toFixed(2)}, ${s.max.toFixed(
    2
  )}]. ${corr} Causal interpretation would require an explicit identification strategy.`;

  const takeaways = [
    `${y} appears ${s.trend} over the selected observations.`,
    `Average ${y}: ${s.mean.toFixed(2)} across ${s.count} usable points.`,
    s.correlation !== undefined
      ? `Correlation with ${x}: ${s.correlation.toFixed(
          2
        )} — do not treat as causal.`
      : `No correlation shown (only one numeric series selected).`
  ];

  const report = `This analysis examines ${y} relative to ${x}. The data suggests a ${s.trend} trend with a mean of ${s.mean.toFixed(
    2
  )} and a range of ${s.min.toFixed(2)} to ${s.max.toFixed(
    2
  )}. Findings should be interpreted as descriptive evidence rather than causal proof.`;

  return { simple, academic, takeaways, report };
}
