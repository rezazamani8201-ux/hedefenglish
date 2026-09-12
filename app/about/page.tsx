"use client";

import { useState } from "react";
import Link from "next/link";
import { translations } from "@/app/i18n/translations";

export default function AboutPage() {
  const [language, setLanguage] = useState<"en" | "tr" | "fa">("en");

  const t = translations[language];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        color: "#172033",
        direction: language === "fa" ? "rtl" : "ltr",
      }}
    >
      {/* =========================
          NAVBAR
      ========================== */}
      <nav
        style={{
          height: "76px",
          background: "#ffffff",
          borderBottom: "1px solid #e8edf3",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 6%",
          position: "sticky",
          top: 0,
          zIndex: 20,
        }}
      >
        <Link
          href="/"
          style={{
            textDecoration: "none",
            color: "#173b78",
            fontSize: "22px",
            fontWeight: 800,
          }}
        >
          Hedef <span style={{ color: "#3b82f6" }}>English</span>
        </Link>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
          }}
        >
          <Link
            href="/"
            style={{
              textDecoration: "none",
              color: "#4b5563",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            {t.nav.home}
          </Link>

          <select
            value={language}
            onChange={(e) =>
              setLanguage(e.target.value as "en" | "tr" | "fa")
            }
            style={{
              padding: "8px 12px",
              borderRadius: "8px",
              border: "1px solid #dce2ea",
              background: "#fff",
              cursor: "pointer",
              fontSize: "14px",
              outline: "none",
            }}
          >
            <option value="en">🇬🇧 English</option>
            <option value="tr">🇹🇷 Türkçe</option>
            <option value="fa">🇮🇷 فارسی</option>
          </select>
        </div>
      </nav>

      {/* =========================
          HERO
      ========================== */}
      <section
        style={{
          padding: "90px 6% 80px",
          background:
            "linear-gradient(135deg, #f8fbff 0%, #eef5ff 100%)",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            textAlign: language === "fa" ? "right" : "left",
          }}
        >
          <p
            style={{
              margin: "0 0 18px",
              color: "#3b82f6",
              fontSize: "13px",
              fontWeight: 800,
              letterSpacing: "1.5px",
            }}
          >
            {t.about.label}
          </p>

          <h1
            style={{
              margin: "0 0 24px",
              maxWidth: "800px",
              fontSize: "clamp(40px, 6vw, 68px)",
              lineHeight: 1.08,
              fontWeight: 800,
              color: "#13294b",
            }}
          >
            {t.about.title}
          </h1>

          <p
            style={{
              maxWidth: "780px",
              margin: 0,
              fontSize: "18px",
              lineHeight: 1.9,
              color: "#5b6678",
            }}
          >
            {t.about.description}
          </p>
        </div>
      </section>

      {/* =========================
          ABOUT CARDS
      ========================== */}
      <section
        style={{
          padding: "80px 6%",
          background: "#ffffff",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {/* Mission */}
          <div
            style={{
              background: "#f8fafc",
              border: "1px solid #e8edf3",
              borderRadius: "20px",
              padding: "32px",
              boxShadow: "0 8px 30px rgba(15, 23, 42, 0.04)",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "14px",
                background: "#e8f1ff",
                color: "#2563eb",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                marginBottom: "22px",
              }}
            >
              01
            </div>

            <h2
              style={{
                margin: "0 0 14px",
                fontSize: "24px",
                color: "#173b78",
              }}
            >
              {t.about.missionTitle}
            </h2>

            <p
              style={{
                margin: 0,
                color: "#667085",
                lineHeight: 1.8,
                fontSize: "15px",
              }}
            >
              {t.about.missionDescription}
            </p>
          </div>

          {/* Approach */}
          <div
            style={{
              background: "#f8fafc",
              border: "1px solid #e8edf3",
              borderRadius: "20px",
              padding: "32px",
              boxShadow: "0 8px 30px rgba(15, 23, 42, 0.04)",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "14px",
                background: "#eef7f2",
                color: "#159a63",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                marginBottom: "22px",
              }}
            >
              02
            </div>

            <h2
              style={{
                margin: "0 0 14px",
                fontSize: "24px",
                color: "#173b78",
              }}
            >
              {t.about.approachTitle}
            </h2>

            <p
              style={{
                margin: 0,
                color: "#667085",
                lineHeight: 1.8,
                fontSize: "15px",
              }}
            >
              {t.about.approachDescription}
            </p>
          </div>

          {/* Progress */}
          <div
            style={{
              background: "#f8fafc",
              border: "1px solid #e8edf3",
              borderRadius: "20px",
              padding: "32px",
              boxShadow: "0 8px 30px rgba(15, 23, 42, 0.04)",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "14px",
                background: "#fff4e8",
                color: "#ea7a17",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                marginBottom: "22px",
              }}
            >
              03
            </div>

            <h2
              style={{
                margin: "0 0 14px",
                fontSize: "24px",
                color: "#173b78",
              }}
            >
              {t.about.progressTitle}
            </h2>

            <p
              style={{
                margin: 0,
                color: "#667085",
                lineHeight: 1.8,
                fontSize: "15px",
              }}
            >
              {t.about.progressDescription}
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          CTA
      ========================== */}
      <section
        style={{
          padding: "85px 6%",
          background: "#173b78",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            maxWidth: "850px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              margin: "0 0 18px",
              fontSize: "clamp(30px, 5vw, 46px)",
              lineHeight: 1.2,
              fontWeight: 800,
            }}
          >
            {t.about.ctaTitle}
          </h2>

          <p
            style={{
              margin: "0 auto 32px",
              maxWidth: "650px",
              color: "#dbe7f7",
              fontSize: "17px",
              lineHeight: 1.8,
            }}
          >
            {t.about.ctaDescription}
          </p>

          <Link
            href="/level-test"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              padding: "15px 28px",
              background: "#ffffff",
              color: "#173b78",
              borderRadius: "12px",
              textDecoration: "none",
              fontSize: "15px",
              fontWeight: 700,
              boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
            }}
          >
            {t.about.ctaButton}
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* =========================
          FOOTER
      ========================== */}
      <footer
        style={{
          background: "#ffffff",
          borderTop: "1px solid #e8edf3",
          padding: "28px 6%",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              color: "#173b78",
              fontWeight: 800,
              fontSize: "18px",
            }}
          >
            Hedef <span style={{ color: "#3b82f6" }}>English</span>
          </div>

          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <Link
              href="/"
              style={{
                color: "#667085",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              {t.nav.home}
            </Link>

            <Link
              href="/level-test"
              style={{
                color: "#667085",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              {t.nav.levelTest}
            </Link>

            <Link
              href="/courses"
              style={{
                color: "#667085",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              {t.nav.courses}
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}