"use client";

import Link from "next/link";
import { supabase } from "@/app/lib/supabase";
const grammarFiles = [
  "Comparative & Superlative.pdf",
  "Conditional Sentences – Mixed Practice (Type 0 1 2).pdf",
  "future simple (Will Be Going To Present Continuous).pdf",
  "future simple.pdf",
  "MOdals (can could should must).pdf",
  "Passive Voice (advanced).pdf",
  "Passive Voice Mixed Practice.pdf",
  "Past Continuous.pdf",
  "Past Simple or Past Continuous.pdf",
  "past simple.pdf",
  "Present Perfect Simple vs. Present Perfect Continuous.pdf",
  "Present Perfect Simple.pdf",
  "Present Perfect vs. Past Simple.pdf",
  "Present Simple vs. Present Continuous.pdf",
  "present simple.pdf",
  "Quantifiers.pdf",
  "Relative Clause.pdf",
  "zero or first conditional..pdf",
];

export default function GrammarExercises() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8fbff",
        paddingBottom: "80px",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          background: "#ffffff",
          borderBottom: "1px solid #e8edf3",
          padding: "28px 6%",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
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

          <Link
            href="/exercises"
            style={{
              textDecoration: "none",
              color: "#4b5563",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            ← Back to Exercises
          </Link>
        </div>
      </header>

      {/* CONTENT */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "70px 6% 0",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          <p
            style={{
              margin: "0 0 12px",
              color: "#3b82f6",
              fontSize: "13px",
              fontWeight: 800,
              letterSpacing: "1.5px",
            }}
          >
            HEDEF ENGLISH
          </p>

          <h1
            style={{
              margin: "0 0 16px",
              color: "#13294b",
              fontSize: "clamp(36px, 5vw, 54px)",
              fontWeight: 800,
            }}
          >
            Grammar Exercises
          </h1>

          <p
            style={{
              margin: "0 auto",
              maxWidth: "650px",
              color: "#64748b",
              fontSize: "17px",
              lineHeight: 1.7,
            }}
          >
            Practice English grammar with downloadable exercises and
            worksheets.
          </p>
        </div>

        {/* GRAMMAR PDF FILES */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "22px",
          }}
        >
          {grammarFiles.map((file) => {
            const fileUrl = `/exercises/grammar/${encodeURIComponent(file)}`;

            return (
              <div
                key={file}
                style={{
                  background: "#ffffff",
                  border: "1px solid #e8edf3",
                  borderRadius: "16px",
                  padding: "26px",
                  boxShadow: "0 8px 25px rgba(23, 59, 120, 0.05)",
                }}
              >
                <h2
                  style={{
                    margin: "0 0 12px",
                    color: "#173b78",
                    fontSize: "19px",
                    lineHeight: 1.4,
                  }}
                >
                  {file.replace(".pdf", "")}
                </h2>

                <p
                  style={{
                    margin: "0 0 20px",
                    color: "#64748b",
                    lineHeight: 1.6,
                    fontSize: "14px",
                  }}
                >
                  Grammar practice worksheet.
                </p>

                <button
  onClick={async () => {
    try {
      let visitorId = localStorage.getItem("hedef_visitor_id");

      if (!visitorId) {
        visitorId = crypto.randomUUID();
        localStorage.setItem("hedef_visitor_id", visitorId);
      }

      await supabase.from("file_downloads").insert({
        user_id: null,
        visitor_id: visitorId,
        file_name: file,
        file_path: fileUrl,
      });

      window.location.href = fileUrl;
    } catch (error) {
      console.error("Failed to record file download:", error);
      window.location.href = fileUrl;
    }
  }}
  style={{
    display: "inline-block",
    padding: "10px 16px",
    background: "#173b78",
    color: "#ffffff",
    textDecoration: "none",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: 700,
    border: "none",
    cursor: "pointer",
  }}
>
  Download PDF
</button>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}