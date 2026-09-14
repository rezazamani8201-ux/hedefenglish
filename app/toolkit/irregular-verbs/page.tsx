"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Verb = {
  base: string;
  past: string;
  participle: string;
};

const verbs: Verb[] = [
  { base: "arise", past: "arose", participle: "arisen" },
  { base: "be", past: "was / were", participle: "been" },
  { base: "bear", past: "bore", participle: "borne / born" },
  { base: "beat", past: "beat", participle: "beaten" },
  { base: "become", past: "became", participle: "become" },
  { base: "begin", past: "began", participle: "begun" },
  { base: "bend", past: "bent", participle: "bent" },
  { base: "bet", past: "bet", participle: "bet" },
  { base: "bite", past: "bit", participle: "bitten" },
  { base: "blow", past: "blew", participle: "blown" },
  { base: "break", past: "broke", participle: "broken" },
  { base: "bring", past: "brought", participle: "brought" },
  { base: "build", past: "built", participle: "built" },
  { base: "buy", past: "bought", participle: "bought" },
  { base: "catch", past: "caught", participle: "caught" },
  { base: "choose", past: "chose", participle: "chosen" },
  { base: "come", past: "came", participle: "come" },
  { base: "cost", past: "cost", participle: "cost" },
  { base: "cut", past: "cut", participle: "cut" },
  { base: "deal", past: "dealt", participle: "dealt" },
  { base: "dig", past: "dug", participle: "dug" },
  { base: "do", past: "did", participle: "done" },
  { base: "draw", past: "drew", participle: "drawn" },
  { base: "drink", past: "drank", participle: "drunk" },
  { base: "drive", past: "drove", participle: "driven" },
  { base: "eat", past: "ate", participle: "eaten" },
  { base: "fall", past: "fell", participle: "fallen" },
  { base: "feed", past: "fed", participle: "fed" },
  { base: "feel", past: "felt", participle: "felt" },
  { base: "fight", past: "fought", participle: "fought" },
  { base: "find", past: "found", participle: "found" },
  { base: "fly", past: "flew", participle: "flown" },
  { base: "forget", past: "forgot", participle: "forgotten" },
  { base: "forgive", past: "forgave", participle: "forgiven" },
  { base: "freeze", past: "froze", participle: "frozen" },
  { base: "get", past: "got", participle: "got / gotten" },
  { base: "give", past: "gave", participle: "given" },
  { base: "go", past: "went", participle: "gone" },
  { base: "grow", past: "grew", participle: "grown" },
  { base: "have", past: "had", participle: "had" },
  { base: "hear", past: "heard", participle: "heard" },
  { base: "hide", past: "hid", participle: "hidden" },
  { base: "hit", past: "hit", participle: "hit" },
  { base: "hold", past: "held", participle: "held" },
  { base: "hurt", past: "hurt", participle: "hurt" },
  { base: "keep", past: "kept", participle: "kept" },
  { base: "know", past: "knew", participle: "known" },
  { base: "lead", past: "led", participle: "led" },
  { base: "leave", past: "left", participle: "left" },
  { base: "lend", past: "lent", participle: "lent" },
  { base: "let", past: "let", participle: "let" },
  { base: "lie", past: "lay", participle: "lain" },
  { base: "lose", past: "lost", participle: "lost" },
  { base: "make", past: "made", participle: "made" },
  { base: "mean", past: "meant", participle: "meant" },
  { base: "meet", past: "met", participle: "met" },
  { base: "pay", past: "paid", participle: "paid" },
  { base: "put", past: "put", participle: "put" },
  { base: "read", past: "read", participle: "read" },
  { base: "ride", past: "rode", participle: "ridden" },
  { base: "ring", past: "rang", participle: "rung" },
  { base: "rise", past: "rose", participle: "risen" },
  { base: "run", past: "ran", participle: "run" },
  { base: "say", past: "said", participle: "said" },
  { base: "see", past: "saw", participle: "seen" },
  { base: "sell", past: "sold", participle: "sold" },
  { base: "send", past: "sent", participle: "sent" },
  { base: "set", past: "set", participle: "set" },
  { base: "shake", past: "shook", participle: "shaken" },
  { base: "shine", past: "shone", participle: "shone" },
  { base: "shoot", past: "shot", participle: "shot" },
  { base: "show", past: "showed", participle: "shown / showed" },
  { base: "shut", past: "shut", participle: "shut" },
  { base: "sing", past: "sang", participle: "sung" },
  { base: "sink", past: "sank", participle: "sunk" },
  { base: "sit", past: "sat", participle: "sat" },
  { base: "sleep", past: "slept", participle: "slept" },
  { base: "speak", past: "spoke", participle: "spoken" },
  { base: "spend", past: "spent", participle: "spent" },
  { base: "stand", past: "stood", participle: "stood" },
  { base: "steal", past: "stole", participle: "stolen" },
  { base: "swim", past: "swam", participle: "swum" },
  { base: "take", past: "took", participle: "taken" },
  { base: "teach", past: "taught", participle: "taught" },
  { base: "tear", past: "tore", participle: "torn" },
  { base: "tell", past: "told", participle: "told" },
  { base: "think", past: "thought", participle: "thought" },
  { base: "throw", past: "threw", participle: "thrown" },
  { base: "understand", past: "understood", participle: "understood" },
  { base: "wake", past: "woke", participle: "woken" },
  { base: "wear", past: "wore", participle: "worn" },
  { base: "win", past: "won", participle: "won" },
  { base: "write", past: "wrote", participle: "written" },
];

export default function IrregularVerbsPage() {
  const [search, setSearch] = useState("");
  const [letter, setLetter] = useState("All");

  const letters = ["All", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

  const filteredVerbs = useMemo(() => {
    return verbs.filter((verb) => {
      const matchesSearch =
        verb.base.toLowerCase().includes(search.toLowerCase()) ||
        verb.past.toLowerCase().includes(search.toLowerCase()) ||
        verb.participle.toLowerCase().includes(search.toLowerCase());

      const matchesLetter =
        letter === "All" || verb.base.toUpperCase().startsWith(letter);

      return matchesSearch && matchesLetter;
    });
  }, [search, letter]);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        padding: "60px 20px 80px",
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
            marginBottom: "40px",
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
              margin: "0 0 16px",
              color: "#173b78",
              fontSize: "clamp(34px, 5vw, 50px)",
              fontWeight: 800,
            }}
          >
            Irregular Verbs
          </h1>

          <p
            style={{
              maxWidth: "680px",
              margin: "0 auto",
              color: "#64748b",
              fontSize: "16px",
              lineHeight: 1.8,
            }}
          >
            A quick reference guide to common irregular verbs in English.
          </p>
        </section>

        {/* Search */}
        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto 25px",
          }}
        >
          <input
            type="text"
            placeholder="Search for a verb..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "15px 18px",
              border: "1px solid #dbe2ea",
              borderRadius: "12px",
              background: "#ffffff",
              color: "#173b78",
              fontSize: "15px",
              outline: "none",
              boxShadow: "0 4px 15px rgba(15, 23, 42, 0.04)",
            }}
          />
        </div>

        {/* Alphabet */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "7px",
            marginBottom: "28px",
          }}
        >
          {letters.map((item) => (
            <button
              key={item}
              onClick={() => setLetter(item)}
              style={{
                minWidth: item === "All" ? "48px" : "34px",
                height: "34px",
                padding: "0 8px",
                borderRadius: "8px",
                border:
                  letter === item
                    ? "1px solid #173b78"
                    : "1px solid #dbe2ea",
                background: letter === item ? "#173b78" : "#ffffff",
                color: letter === item ? "#ffffff" : "#475569",
                fontSize: "13px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Table */}
        <div
          style={{
            background: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: "18px",
            overflow: "hidden",
            boxShadow: "0 8px 30px rgba(15, 23, 42, 0.05)",
          }}
        >
          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: "600px",
              }}
            >
              <thead>
                <tr
                  style={{
                    background: "#173b78",
                    color: "#ffffff",
                  }}
                >
                  <th
                    style={{
                      padding: "17px 20px",
                      textAlign: "left",
                      fontSize: "14px",
                    }}
                  >
                    Base Form
                  </th>
                  <th
                    style={{
                      padding: "17px 20px",
                      textAlign: "left",
                      fontSize: "14px",
                    }}
                  >
                    Past Simple
                  </th>
                  <th
                    style={{
                      padding: "17px 20px",
                      textAlign: "left",
                      fontSize: "14px",
                    }}
                  >
                    Past Participle
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredVerbs.map((verb, index) => (
                  <tr
                    key={verb.base}
                    style={{
                      borderBottom:
                        index === filteredVerbs.length - 1
                          ? "none"
                          : "1px solid #eef2f7",
                    }}
                  >
                    <td
                      style={{
                        padding: "14px 20px",
                        color: "#173b78",
                        fontWeight: 700,
                      }}
                    >
                      {verb.base}
                    </td>

                    <td
                      style={{
                        padding: "14px 20px",
                        color: "#475569",
                      }}
                    >
                      {verb.past}
                    </td>

                    <td
                      style={{
                        padding: "14px 20px",
                        color: "#475569",
                      }}
                    >
                      {verb.participle}
                    </td>
                  </tr>
                ))}

                {filteredVerbs.length === 0 && (
                  <tr>
                    <td
                      colSpan={3}
                      style={{
                        padding: "40px 20px",
                        textAlign: "center",
                        color: "#64748b",
                      }}
                    >
                      No verbs found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Result count */}
        <p
          style={{
            textAlign: "center",
            marginTop: "18px",
            color: "#64748b",
            fontSize: "13px",
          }}
        >
          Showing {filteredVerbs.length} verbs
        </p>

        {/* Navigation */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            flexWrap: "wrap",
            marginTop: "38px",
          }}
        >
          <Link
            href="/toolkit"
            style={{
              display: "inline-flex",
              alignItems: "center",
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
            ← English Toolkit
          </Link>

          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
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