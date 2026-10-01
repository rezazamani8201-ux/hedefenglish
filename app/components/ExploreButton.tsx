"use client";

import Link from "next/link";

type ExploreButtonProps = {
  text: string;
  href: string;
};

export default function ExploreButton({
  text,
  href,
}: ExploreButtonProps) {
  return (
    <Link
      href={href}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        textDecoration: "none",
        color: "#202569",
        fontSize: "15px",
        fontWeight: 800,
        transition: "all 0.25s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.gap = "13px";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.gap = "10px";
      }}
    >
      <span>{text}</span>

      <span
        style={{
          width: "42px",
          height: "42px",
          borderRadius: "50%",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#202569",
          boxShadow: "0 6px 14px rgba(32, 37, 105, 0.20)",
          transition: "all 0.25s ease",
          flexShrink: 0,
        }}
      >
        {/* Arrow */}
        <span
          style={{
            position: "relative",
            width: "17px",
            height: "14px",
            display: "block",
          }}
        >
          {/* Arrow shaft */}
          <span
            style={{
              position: "absolute",
              left: "0",
              top: "6px",
              width: "13px",
              height: "2px",
              background: "#ffffff",
              borderRadius: "2px",
            }}
          />

          {/* Arrow head */}
          <span
            style={{
              position: "absolute",
              right: "0",
              top: "3px",
              width: "7px",
              height: "7px",
              borderTop: "2px solid #ffffff",
              borderRight: "2px solid #ffffff",
              transform: "rotate(45deg)",
            }}
          />
        </span>
      </span>
    </Link>
  );
}