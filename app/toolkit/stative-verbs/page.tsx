"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const stativeGroups = [
  {
    title: "Thinking & Opinions",
    icon: "🧠",
    verbs: [
      "agree",
      "believe",
      "doubt",
      "forget",
      "imagine",
      "know",
      "mean",
      "notice",
      "realize",
      "recognize",
      "remember",
      "suppose",
      "understand",
      "think",
    ],
  },
  {
    title: "Feelings & Preferences",
    icon: "❤️",
    verbs: [
      "care",
      "dislike",
      "fear",
      "hate",
      "like",
      "love",
      "mind",
      "need",
      "prefer",
      "want",
      "wish",
    ],
  },
  {
    title: "Senses & Perception",
    icon: "👁️",
    verbs: [
      "appear",
      "feel",
      "hear",
      "see",
      "seem",
      "smell",
      "taste",
    ],
  },
  {
    title: "Possession & Relationships",
    icon: "🔗",
    verbs: [
      "belong",
      "contain",
      "have",
      "include",
      "own",
      "possess",
    ],
  },
  {
    title: "States & Other Common Verbs",
    icon: "📌",
    verbs: [
      "be",
      "cost",
      "depend",
      "deserve",
      "exist",
      "fit",
      "matter",
      "owe",
      "resemble",
      "weigh",
    ],
  },
];

const specialVerbs = [
  {
    verb: "THINK",
    stative: "I think you're right.",
    action: "I'm thinking about my future.",
  },
  {
    verb: "HAVE",
    stative: "I have a car.",
    action: "I'm having lunch.",
  },
  {
    verb: "SEE",
    stative: "I see what you mean.",
    action: "I'm seeing my doctor tomorrow.",
  },
  {
    verb: "TASTE",
    stative: "The soup tastes great.",
    action: "She's tasting the soup.",
  },
  {
    verb: "SMELL",
    stative: "The flowers smell wonderful.",
    action: "He's smelling the flowers.",
  },
  {
    verb: "LOOK",
    stative: "You look tired.",
    action: "She's looking at me.",
  },
  {
    verb: "FEEL",
    stative: "I feel happy.",
    action: "She's feeling the fabric.",
  },
  {
    verb: "WEIGH",
    stative: "The bag weighs 10 kilos.",
    action: "He's weighing the apples.",
  },
];

export default function StativeVerbsPage() {
  const [search, setSearch] = useState("");

  const filteredGroups = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return stativeGroups;

    return stativeGroups
      .map((group) => ({
        ...group,
        verbs: group.verbs.filter((verb) =>
          verb.toLowerCase().includes(query)
        ),
      }))
      .filter((group) => group.verbs.length > 0);
  }, [search]);

  const specialResults = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return specialVerbs;

    return specialVerbs.filter((item) =>
      item.verb.toLowerCase().includes(query)
    );
  }, [search]);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        padding: "32px 20px 70px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <section
          style={{
            textAlign: "center",
            marginBottom: "48px",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "8px 18px",
              borderRadius: "999px",
              background: "#e8f0ff",
              color: "#173b78",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.5px",
              marginBottom: "20px",
            }}
          >
            ENGLISH TOOLKIT
          </div>

          <h1
            style={{
              margin: "0 0 16px",
              fontSize: "clamp(38px, 6vw, 56px)",
              lineHeight: 1.1,
              color: "#173b78",
              fontWeight: 800,
            }}
          >
            Stative Verbs
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
            A practical guide to stative verbs, their common uses, and the
            difference between stative and action meanings.
          </p>
        </section>

        {/* What are Stative Verbs? */}
        <section
          style={{
            background: "#ffffff",
            border: "1px solid #e2e8f0",
            borderRadius: "20px",
            padding: "32px",
            marginBottom: "24px",
            boxShadow: "0 8px 30px rgba(15, 23, 42, 0.05)",
          }}
        >
          <h2
            style={{
              margin: "0 0 16px",
              color: "#173b78",
              fontSize: "28px",
              fontWeight: 800,
            }}
          >
            💡 What are Stative Verbs?
          </h2>

          <p
            style={{
              margin: 0,
              color: "#475569",
              fontSize: "16px",
              lineHeight: 1.8,
            }}
          >
            <strong>Stative verbs</strong> describe a state rather than an
            action. They are commonly used to talk about thoughts, feelings,
            opinions, possession, senses, and situations.
          </p>
        </section>

        {/* The -ing Rule */}
        <section
          style={{
            background: "#fffaf0",
            border: "1px solid #fde7b2",
            borderRadius: "20px",
            padding: "32px",
            marginBottom: "24px",
          }}
        >
          <h2
            style={{
              margin: "0 0 14px",
              color: "#173b78",
              fontSize: "27px",
              fontWeight: 800,
            }}
          >
            ⚠️ The -ing Rule
          </h2>

          <p
            style={{
              margin: "0 0 24px",
              color: "#475569",
              fontSize: "16px",
              lineHeight: 1.8,
            }}
          >
            Because stative verbs describe a state, we{" "}
            <strong>normally do not use them in the continuous form (-ing)</strong>.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "16px",
            }}
          >
            <div
              style={{
                background: "#ffffff",
                border: "1px solid #fecaca",
                borderRadius: "14px",
                padding: "20px",
              }}
            >
              <div
                style={{
                  color: "#dc2626",
                  fontWeight: 700,
                  marginBottom: "10px",
                }}
              >
                ❌ Incorrect
              </div>

              <div
                style={{
                  color: "#334155",
                  fontSize: "16px",
                }}
              >
                I am knowing the answer.
              </div>
            </div>

            <div
              style={{
                background: "#ffffff",
                border: "1px solid #bbf7d0",
                borderRadius: "14px",
                padding: "20px",
              }}
            >
              <div
                style={{
                  color: "#16a34a",
                  fontWeight: 700,
                  marginBottom: "10px",
                }}
              >
                ✅ Correct
              </div>

              <div
                style={{
                  color: "#334155",
                  fontSize: "16px",
                }}
              >
                I know the answer.
              </div>
            </div>

            <div
              style={{
                background: "#ffffff",
                border: "1px solid #fecaca",
                borderRadius: "14px",
                padding: "20px",
              }}
            >
              <div
                style={{
                  color: "#dc2626",
                  fontWeight: 700,
                  marginBottom: "10px",
                }}
              >
                ❌ Incorrect
              </div>

              <div
                style={{
                  color: "#334155",
                  fontSize: "16px",
                }}
              >
                She is believing me.
              </div>
            </div>

            <div
              style={{
                background: "#ffffff",
                border: "1px solid #bbf7d0",
                borderRadius: "14px",
                padding: "20px",
              }}
            >
              <div
                style={{
                  color: "#16a34a",
                  fontWeight: 700,
                  marginBottom: "10px",
                }}
              >
                ✅ Correct
              </div>

              <div
                style={{
                  color: "#334155",
                  fontSize: "16px",
                }}
              >
                She believes me.
              </div>
            </div>
          </div>
        </section>

        {/* Important Rule */}
        <section
          style={{
            background: "#ffffff",
            border: "1px solid #e2e8f0",
            borderRadius: "20px",
            padding: "32px",
            marginBottom: "40px",
            boxShadow: "0 8px 30px rgba(15, 23, 42, 0.05)",
          }}
        >
          <h2
            style={{
              margin: "0 0 14px",
              color: "#173b78",
              fontSize: "27px",
              fontWeight: 800,
            }}
          >
            ⚡ One Important Rule
          </h2>

          <p
            style={{
              margin: "0 0 20px",
              color: "#475569",
              fontSize: "16px",
              lineHeight: 1.8,
            }}
          >
            Some verbs can be <strong>stative or action verbs</strong>{" "}
            depending on their meaning. Always look at how the verb is being
            used in the sentence.
          </p>

          <div
            style={{
              display: "grid",
              gap: "12px",
            }}
          >
            <div
              style={{
                padding: "15px 18px",
                background: "#f8fafc",
                borderRadius: "12px",
                color: "#334155",
              }}
            >
              <strong>I think you're right.</strong>
              <span style={{ color: "#64748b" }}> → stative</span>
            </div>

            <div
              style={{
                padding: "15px 18px",
                background: "#f8fafc",
                borderRadius: "12px",
                color: "#334155",
              }}
            >
              <strong>I'm thinking about the problem.</strong>
              <span style={{ color: "#64748b" }}> → action</span>
            </div>
          </div>
        </section>

        {/* Search */}
        <section
          style={{
            marginBottom: "42px",
          }}
        >
          <h2
            style={{
              margin: "0 0 10px",
              color: "#173b78",
              fontSize: "28px",
              fontWeight: 800,
            }}
          >
            🔎 Is this verb stative?
          </h2>

          <p
            style={{
              margin: "0 0 18px",
              color: "#64748b",
              fontSize: "16px",
            }}
          >
            Search for a verb to check if it is commonly used as a stative
            verb.
          </p>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for a verb..."
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "18px 20px",
              borderRadius: "14px",
              border: "1px solid #dbe3ef",
              background: "#ffffff",
              color: "#173b78",
              fontSize: "16px",
              outline: "none",
              boxShadow: "0 5px 20px rgba(15, 23, 42, 0.04)",
            }}
          />
        </section>

        {/* Common Stative Verbs */}
        <section style={{ marginBottom: "48px" }}>
          <h2
            style={{
              margin: "0 0 24px",
              color: "#173b78",
              fontSize: "30px",
              fontWeight: 800,
            }}
          >
            📚 Common Stative Verbs
          </h2>

          {filteredGroups.length === 0 ? (
            <div
              style={{
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "16px",
                padding: "30px",
                textAlign: "center",
                color: "#64748b",
              }}
            >
              No stative verb found.
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "20px",
              }}
            >
              {filteredGroups.map((group) => (
                <article
                  key={group.title}
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "18px",
                    padding: "24px",
                    boxShadow: "0 6px 24px rgba(15, 23, 42, 0.04)",
                  }}
                >
                  <h3
                    style={{
                      margin: "0 0 18px",
                      color: "#173b78",
                      fontSize: "20px",
                      fontWeight: 800,
                    }}
                  >
                    {group.icon} {group.title}
                  </h3>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "9px",
                    }}
                  >
                    {group.verbs.map((verb) => (
                      <span
                        key={verb}
                        style={{
                          padding: "8px 13px",
                          borderRadius: "9px",
                          background: "#f1f5f9",
                          color: "#334155",
                          fontSize: "14px",
                          fontWeight: 600,
                        }}
                      >
                        {verb}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* Stative or Action */}
        {!search.trim() || specialResults.length > 0 ? (
          <section style={{ marginBottom: "50px" }}>
            <h2
              style={{
                margin: "0 0 10px",
                color: "#173b78",
                fontSize: "30px",
                fontWeight: 800,
              }}
            >
              ⚖️ Stative or Action?
            </h2>

            <p
              style={{
                margin: "0 0 24px",
                color: "#64748b",
                fontSize: "16px",
                lineHeight: 1.7,
              }}
            >
              Some verbs can be used as either stative or action verbs,
              depending on their meaning.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "18px",
              }}
            >
              {specialResults.map((item) => (
                <article
                  key={item.verb}
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "18px",
                    padding: "24px",
                    boxShadow: "0 6px 24px rgba(15, 23, 42, 0.04)",
                  }}
                >
                  <h3
                    style={{
                      margin: "0 0 18px",
                      color: "#173b78",
                      fontSize: "21px",
                      fontWeight: 800,
                    }}
                  >
                    {item.verb}
                  </h3>

                  <div
                    style={{
                      background: "#eff6ff",
                      borderRadius: "12px",
                      padding: "15px",
                      marginBottom: "10px",
                    }}
                  >
                    <div
                      style={{
                        color: "#2563eb",
                        fontWeight: 700,
                        fontSize: "13px",
                        marginBottom: "7px",
                      }}
                    >
                      STATIVE
                    </div>

                    <div
                      style={{
                        color: "#334155",
                        fontSize: "15px",
                        lineHeight: 1.6,
                      }}
                    >
                      {item.stative}
                    </div>
                  </div>

                  <div
                    style={{
                      background: "#f0fdf4",
                      borderRadius: "12px",
                      padding: "15px",
                    }}
                  >
                    <div
                      style={{
                        color: "#16a34a",
                        fontWeight: 700,
                        fontSize: "13px",
                        marginBottom: "7px",
                      }}
                    >
                      ACTION
                    </div>

                    <div
                      style={{
                        color: "#334155",
                        fontSize: "15px",
                        lineHeight: 1.6,
                      }}
                    >
                      {item.action}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {/* Back */}
        <div
          style={{
            textAlign: "center",
            marginTop: "45px",
          }}
        >
          <Link
            href="/toolkit"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 20px",
              background: "#ffffff",
              color: "#173b78",
              border: "1px solid #e2e8f0",
              borderRadius: "11px",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 700,
              boxShadow: "0 4px 14px rgba(15, 23, 42, 0.05)",
            }}
          >
            ← Back to English Toolkit
          </Link>
        </div>
      </div>
    </main>
  );
}