"use client";
import Link from "next/link";

const linkStyle: React.CSSProperties = {
  color: "#9CA3AF",
  padding: "8px 14px",
  borderRadius: "10px",
  fontSize: "14px"
};

export default function Nav() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        padding: "16px 32px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "rgba(10, 15, 30, 0.7)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)"
      }}
    >
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: 8,
            background: "linear-gradient(135deg, #6366F1, #2DD4BF)"
          }}
        />
        <span style={{ fontWeight: 700, fontSize: 18, color: "white" }}>
          Data Lens
        </span>
      </Link>

      <div style={{ display: "flex", gap: 4 }}>
        <Link href="/" style={linkStyle}>Overview</Link>
        <Link href="/upload" style={linkStyle}>Upload</Link>
        <Link href="/workspace" style={linkStyle}>Workspace</Link>
        <Link href="/forecasting" style={linkStyle}>Forecasting</Link>
        <Link href="/reports" style={linkStyle}>Reports</Link>
      </div>
    </nav>
  );
}
