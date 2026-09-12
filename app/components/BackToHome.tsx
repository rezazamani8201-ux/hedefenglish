"use client";

import Link from "next/link";

export default function BackToHome() {
  return (
    <Link
      href="/"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "11px 18px",
        background: "#fff",
        color: "#173b78",
        border: "1px solid #e5e7eb",
        borderRadius: "10px",
        textDecoration: "none",
        fontSize: "14px",
        fontWeight: 600,
        boxShadow: "0 4px 14px rgba(0,0,0,0.05)",
      }}
    >
      ← Back to Home
    </Link>
  );
}