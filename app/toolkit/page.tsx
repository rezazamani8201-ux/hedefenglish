import Link from "next/link";

export default function EnglishToolkitPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        padding: "70px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* Hero */}
        <section
          style={{
            textAlign: "center",
            marginBottom: "55px",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "8px 16px",
              borderRadius: "999px",
              background: "#e8f0ff",
              color: "#173b78",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.5px",
              marginBottom: "18px",
            }}
          >
            ENGLISH TOOLKIT
          </div>

          <h1
            style={{
              margin: "0 0 18px",
              fontSize: "clamp(34px, 5vw, 52px)",
              lineHeight: 1.1,
              color: "#173b78",
              fontWeight: 800,
            }}
          >
            English Reference & Tools
          </h1>

          <p
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              fontSize: "17px",
              lineHeight: 1.8,
              color: "#64748b",
            }}
          >
            Useful English reference materials designed to help you quickly
            review grammar, vocabulary, and important language patterns.
          </p>
        </section>

        {/* Cards */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {/* Irregular Verbs */}
          <Link
            href="/toolkit/irregular-verbs"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <article
              style={{
                height: "100%",
                boxSizing: "border-box",
                background: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "20px",
                padding: "32px",
                boxShadow: "0 8px 30px rgba(15, 23, 42, 0.06)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "14px",
                  background: "#e8f0ff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "27px",
                  marginBottom: "22px",
                }}
              >
                ↔
              </div>

              <h2
                style={{
                  margin: "0 0 12px",
                  color: "#173b78",
                  fontSize: "25px",
                }}
              >
                Irregular Verbs
              </h2>

              <p
                style={{
                  margin: "0 0 24px",
                  color: "#64748b",
                  lineHeight: 1.7,
                  fontSize: "15px",
                }}
              >
                A clear reference table of common irregular verbs with their
                Base Form, Past Simple, and Past Participle forms.
              </p>

              <span
                style={{
                  color: "#2563eb",
                  fontWeight: 700,
                  fontSize: "14px",
                }}
              >
                View Irregular Verbs →
              </span>
            </article>
          </Link>

          {/* Stative Verbs */}
          <Link
            href="/toolkit/stative-verbs"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <article
              style={{
                height: "100%",
                boxSizing: "border-box",
                background: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "20px",
                padding: "32px",
                boxShadow: "0 8px 30px rgba(15, 23, 42, 0.06)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "14px",
                  background: "#eef7f2",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "27px",
                  marginBottom: "22px",
                }}
              >
                💭
              </div>

              <h2
                style={{
                  margin: "0 0 12px",
                  color: "#173b78",
                  fontSize: "25px",
                }}
              >
                Stative Verbs
              </h2>

              <p
                style={{
                  margin: "0 0 24px",
                  color: "#64748b",
                  lineHeight: 1.7,
                  fontSize: "15px",
                }}
              >
                Learn how stative verbs work, when they are normally used,
                and discover important exceptions and special uses.
              </p>

              <span
                style={{
                  color: "#2563eb",
                  fontWeight: 700,
                  fontSize: "14px",
                }}
              >
                Explore Stative Verbs →
              </span>
            </article>
          </Link>
        </section>

        {/* Back */}
        <div
          style={{
            textAlign: "center",
            marginTop: "45px",
          }}
        >
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "11px 18px",
              background: "#ffffff",
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
        </div>
      </div>
    </main>
  );
}