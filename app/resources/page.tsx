"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";

export default function ResourcesPage() {
    const router = useRouter();
  const { user, loading } = useAuth();
  
  const [language, setLanguage] = useState<"en" | "tr" | "fa">("en");

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login");
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return null;
  }

  

  const content = {
    en: {
      back: "← Back to Home",
      label: "LEARNING RESOURCES",
      title: "English Resources",
      description:
        "Explore our free English learning resources and choose the level that matches your needs.",
      grammar: "Grammar & Vocabulary",
      grammarDesc:
        "Build your grammar and vocabulary with structured resources for every level.",
      listening: "Listening & Speaking",
      listeningDesc:
        "Improve your listening and speaking skills with practical English materials.",
      materials: "Free Learning Materials",
      materialsDesc:
        "Access useful worksheets, exercises, and other learning materials.",
    },
    tr: {
      back: "← Ana Sayfaya Dön",
      label: "ÖĞRENME KAYNAKLARI",
      title: "İngilizce Kaynakları",
      description:
        "Ücretsiz İngilizce öğrenme kaynaklarımızı keşfedin ve seviyenize uygun kaynakları seçin.",
      grammar: "Dil Bilgisi ve Kelime Bilgisi",
      grammarDesc:
        "Her seviyeye uygun düzenli kaynaklarla dil bilgisi ve kelime bilginizi geliştirin.",
      listening: "Dinleme ve Konuşma",
      listeningDesc:
        "Pratik İngilizce materyalleriyle dinleme ve konuşma becerilerinizi geliştirin.",
      materials: "Ücretsiz Öğrenme Materyalleri",
      materialsDesc:
        "Faydalı çalışma kağıtlarına, alıştırmalara ve diğer öğrenme materyallerine erişin.",
    },
    fa: {
      back: "← بازگشت به خانه",
      label: "منابع یادگیری",
      title: "منابع آموزش زبان انگلیسی",
      description:
        "منابع رایگان آموزش زبان انگلیسی را بررسی کنید و سطح مناسب خود را انتخاب کنید.",
      grammar: "گرامر و واژگان",
      grammarDesc:
        "با منابع ساختاریافته متناسب با هر سطح، گرامر و واژگان خود را تقویت کنید.",
      listening: "Listening و Speaking",
      listeningDesc:
        "با استفاده از مطالب کاربردی زبان انگلیسی، مهارت شنیداری و مکالمه خود را تقویت کنید.",
      materials: "مطالب آموزشی رایگان",
      materialsDesc:
        "به ورک‌شیت‌ها، تمرین‌ها و سایر مطالب آموزشی کاربردی دسترسی داشته باشید.",
    },
  };

  const t = content[language];

  const levels = ["A1", "A2", "B1", "B2"];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        color: "#172033",
        direction: language === "fa" ? "rtl" : "ltr",
      }}
    >
      <header
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "28px 24px 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Link
          href="/"
          style={{
            color: "#173b78",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "14px",
          }}
        >
          {t.back}
        </Link>

        <select
          value={language}
          onChange={(e) =>
            setLanguage(e.target.value as "en" | "tr" | "fa")
          }
          style={{
            padding: "9px 12px",
            borderRadius: "9px",
            border: "1px solid #dbe2ea",
            background: "#fff",
            color: "#172033",
            cursor: "pointer",
          }}
        >
          <option value="en">🇬🇧 English</option>
          <option value="tr">🇹🇷 Türkçe</option>
          <option value="fa">🇮🇷 فارسی</option>
        </select>
      </header>

      <section
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "70px 24px 90px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "55px" }}>
          <div
            style={{
              color: "#2563eb",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "1.5px",
              marginBottom: "14px",
            }}
          >
            {t.label}
          </div>

          <h1
            style={{
              fontSize: "clamp(34px, 5vw, 54px)",
              lineHeight: 1.1,
              margin: "0 0 18px",
              color: "#173b78",
            }}
          >
            {t.title}
          </h1>

          <p
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              color: "#64748b",
              fontSize: "17px",
              lineHeight: 1.7,
            }}
          >
            {t.description}
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {/* Grammar & Vocabulary */}
          <div
            style={{
              background: "#fff",
              borderRadius: "18px",
              padding: "32px",
              boxShadow: "0 10px 30px rgba(15, 23, 42, 0.07)",
              border: "1px solid #e8edf3",
            }}
          >
            <div style={{ fontSize: "36px", marginBottom: "18px" }}>📘</div>

            <h2
              style={{
                margin: "0 0 10px",
                color: "#173b78",
                fontSize: "22px",
              }}
            >
              {t.grammar}
            </h2>

            <p
              style={{
                color: "#64748b",
                lineHeight: 1.6,
                minHeight: "76px",
              }}
            >
              {t.grammarDesc}
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "10px",
                marginTop: "22px",
              }}
            >
              {levels.map((level) => (
                <Link
                  key={level}
                  href={`/resources/grammar/${level.toLowerCase()}`}
                  style={{
                    textDecoration: "none",
                    textAlign: "center",
                    padding: "13px 10px",
                    borderRadius: "10px",
                    background: "#eef4ff",
                    color: "#173b78",
                    fontWeight: 700,
                    border: "1px solid #dbe7ff",
                  }}
                >
                  {level}
                </Link>
              ))}
            </div>
          </div>

          {/* Listening & Speaking */}
          <div
            style={{
              background: "#fff",
              borderRadius: "18px",
              padding: "32px",
              boxShadow: "0 10px 30px rgba(15, 23, 42, 0.07)",
              border: "1px solid #e8edf3",
            }}
          >
            <div style={{ fontSize: "36px", marginBottom: "18px" }}>🎧</div>

            <h2
              style={{
                margin: "0 0 10px",
                color: "#173b78",
                fontSize: "22px",
              }}
            >
              {t.listening}
            </h2>

            <p
              style={{
                color: "#64748b",
                lineHeight: 1.6,
                minHeight: "76px",
              }}
            >
              {t.listeningDesc}
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "10px",
                marginTop: "22px",
              }}
            >
              {levels.map((level) => (
                <Link
                  key={level}
                  href={`/resources/listening-speaking/${level.toLowerCase()}`}
                  style={{
                    textDecoration: "none",
                    textAlign: "center",
                    padding: "13px 10px",
                    borderRadius: "10px",
                    background: "#eef4ff",
                    color: "#173b78",
                    fontWeight: 700,
                    border: "1px solid #dbe7ff",
                  }}
                >
                  {level}
                </Link>
              ))}
            </div>
          </div>

          {/* Free Learning Materials */}
          <div
            style={{
              background: "#fff",
              borderRadius: "18px",
              padding: "32px",
              boxShadow: "0 10px 30px rgba(15, 23, 42, 0.07)",
              border: "1px solid #e8edf3",
            }}
          >
            <div style={{ fontSize: "36px", marginBottom: "18px" }}>📝</div>

            <h2
              style={{
                margin: "0 0 10px",
                color: "#173b78",
                fontSize: "22px",
              }}
            >
              {t.materials}
            </h2>

            <p
              style={{
                color: "#64748b",
                lineHeight: 1.6,
                minHeight: "76px",
              }}
            >
              {t.materialsDesc}
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "10px",
                marginTop: "22px",
              }}
            >
              {levels.map((level) => (
                <Link
                  key={level}
                  href={`/resources/materials/${level.toLowerCase()}`}
                  style={{
                    textDecoration: "none",
                    textAlign: "center",
                    padding: "13px 10px",
                    borderRadius: "10px",
                    background: "#eef4ff",
                    color: "#173b78",
                    fontWeight: 700,
                    border: "1px solid #dbe7ff",
                  }}
                >
                  {level}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
