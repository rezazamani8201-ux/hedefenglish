"use client";

import Link from "next/link";

type LessonNavigationProps = {
  previousHref?: string;
  previousTitle?: string;
  nextHref?: string;
  nextTitle?: string;

  backHref?: string;
  backTitle?: string;
};

function Arrow({
  direction,
}: {
  direction: "left" | "right";
}) {
  return (
    <span
      style={{
        position: "relative",
        width: "17px",
        height: "14px",
        display: "block",
        flexShrink: 0,
      }}
    >
      <span
        style={{
          position: "absolute",
          left: direction === "left" ? "4px" : "0",
          top: "6px",
          width: "13px",
          height: "2px",
          background: "#ffffff",
          borderRadius: "2px",
        }}
      />

      <span
        style={{
          position: "absolute",
          [direction === "left" ? "left" : "right"]: "0",
          top: "3px",
          width: "7px",
          height: "7px",
          borderTop: "2px solid #ffffff",
          borderRight: "2px solid #ffffff",
          transform:
            direction === "left"
              ? "rotate(-135deg)"
              : "rotate(45deg)",
        }}
      />
    </span>
  );
}

function NavigationButton({
  href,
  children,
  direction,
}: {
  href: string;
  children: React.ReactNode;
  direction: "left" | "right";
}) {
  return (
    <Link
      href={href}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        minHeight: "44px",
        padding: "0 18px",
        borderRadius: "12px",
        background: "#616161",
        color: "#ffffff",
        textDecoration: "none",
        fontSize: "14px",
        fontWeight: 700,
        boxShadow: "0 5px 14px rgba(97, 97, 97, 0.18)",
        transition: "all 0.2s ease",
      }}
    >
      {direction === "left" && (
        <Arrow direction="left" />
      )}

      <span>{children}</span>

      {direction === "right" && (
        <Arrow direction="right" />
      )}
    </Link>
  );
}

function BackButton({
  href,
  title,
}: {
  href: string;
  title: string;
}) {
  return (
    <Link
      href={href}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        minHeight: "42px",
        padding: "0 17px",
        borderRadius: "12px",
        background: "#616161",
        color: "#ffffff",
        textDecoration: "none",
        fontSize: "14px",
        fontWeight: 700,
        boxShadow: "0 5px 14px rgba(97, 97, 97, 0.16)",
        transition: "all 0.2s ease",
      }}
    >
      <Arrow direction="left" />
      <span>{title}</span>
    </Link>
  );
}

export default function LessonNavigation({
  previousHref,
  previousTitle = "Previous",
  nextHref,
  nextTitle = "Next",
  backHref,
  backTitle,
}: LessonNavigationProps) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
      }}
    >
      {/* BACK */}
      {backHref && backTitle && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <BackButton
            href={backHref}
            title={backTitle}
          />
        </div>
      )}

      {/* PREVIOUS / NEXT */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "14px",
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        {previousHref ? (
          <NavigationButton
            href={previousHref}
            direction="left"
          >
            {previousTitle}
          </NavigationButton>
        ) : (
          <span />
        )}

        {nextHref ? (
          <NavigationButton
            href={nextHref}
            direction="right"
          >
            {nextTitle}
          </NavigationButton>
        ) : (
          <span />
        )}
      </div>
    </div>
  );
}