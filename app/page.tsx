"use client";

import { useAuth } from "@/app/context/AuthContext";
import Link from "next/link";
import { translations } from "@/app/i18n/translations";
import { useState } from "react";

export default function Home() {
  const { user, logout } = useAuth();

  const [language, setLanguage] = useState<"en" | "tr" | "fa">("en");

  const t = translations[language];

  return (
    <main>
      {/* =========================
          NAVBAR
      ========================== */}
      <nav className="navbar">
        <div className="logo">
          Hedef <span>English</span>
        </div>

        <div className="nav-links">
          <a href="#home">{t.nav.home}</a>

          <a href="#level-test">{t.nav.levelTest}</a>

          <a href="#courses">{t.nav.courses}</a>

          <a href="#private-lessons">{t.nav.privateLessons}</a>

          <a href="#resources">{t.nav.resources}</a>
        </div>

        {user ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <Link
              href="/account"
              style={{
                fontWeight: 600,
                color: "#222",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              {user.user_metadata?.username ||
                user.user_metadata?.full_name ||
                user.email}
            </Link>

            <button
              onClick={logout}
              className="nav-button"
              style={{
                border: "none",
                cursor: "pointer",
              }}
            >
              {t.nav.logout}
            </button>
          </div>
        ) : (
          <a href="/login" className="nav-button">
            {t.nav.login}
          </a>
        )}

        <select
          value={language}
          onChange={(e) =>
            setLanguage(e.target.value as "en" | "tr" | "fa")
          }
          style={{
            padding: "8px 12px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            background: "#fff",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          <option value="en">🇬🇧 English</option>
          <option value="tr">🇹🇷 Türkçe</option>
          <option value="fa">🇮🇷 فارسی</option>
        </select>
      </nav>

      {/* =========================
          HERO
      ========================== */}
      <header className="hero" id="home">
        <div className="hero-content">
          <div className="hero-text">
            <p className="eyebrow">HEDEF ENGLISH</p>

            <h1>{t.hero.title}</h1>

            <p className="hero-description">
              {t.hero.description}
            </p>

            <div className="hero-buttons">
              <a
                href="#level-test"
                className="btn btn-primary"
              >
                {t.levelTest.button}
              </a>

              <a
                href="#courses"
                className="btn btn-secondary"
              >
                {t.courses.viewAll}
              </a>
            </div>
          </div>

          <div className="hero-image">
            <div className="image-shape"></div>

            <img
              src="/images/teacher.jpg"
              alt="Hedef English Teacher"
            />
          </div>
        </div>
      </header>

      {/* =========================
          WHY HEDEF ENGLISH
      ========================== */}
      <section className="why-section">
        <div className="section-heading">
          <p className="section-label">
            {t.why.label}
          </p>

          <h2>{t.why.title}</h2>

          <p>{t.why.description}</p>
        </div>

        <div className="feature-cards">
          <div className="feature-card">
            <div className="feature-icon">01</div>

            <h3>{t.why.card1Title}</h3>

            <p>{t.why.card1Description}</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">02</div>

            <h3>{t.why.card2Title}</h3>

            <p>{t.why.card2Description}</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">03</div>

            <h3>{t.why.card3Title}</h3>

            <p>{t.why.card3Description}</p>
          </div>
        </div>
      </section>

      {/* =========================
          LEVEL TEST
      ========================== */}
      <section
        className="level-section"
        id="level-test"
      >
        <div className="level-content">
          <div className="level-text">
            <p className="section-label">
              {t.levelTest.label}
            </p>

            <h2>{t.levelTest.title}</h2>

            <p>{t.levelTest.description}</p>

            <a
              href="/level-test"
              className="level-button"
            >
              {t.levelTest.button}

              <span>→</span>
            </a>
          </div>

          <div className="level-visual">
            <div className="level-card">
              <div className="level-card-top">
                <span>
                  {language === "en"
                    ? "Your English Level"
                    : language === "tr"
                    ? "İngilizce Seviyeniz"
                    : "سطح انگلیسی شما"}
                </span>

                <span className="level-dot"></span>
              </div>

              <div className="level-letter">
  <span style={{ fontSize: "22px", display: "block", marginBottom: "6px" }}>
    LEVEL
  </span>
  <span>CHECK</span>
</div>

              <div className="level-progress">
                <div className="progress-fill"></div>
              </div>

              <div className="level-details">
                <span>
                  {language === "en"
                    ? "Vocabulary"
                    : language === "tr"
                    ? "Kelime Bilgisi"
                    : "واژگان"}
                </span>

                <strong>
                  {language === "en"
                    ? "Good"
                    : language === "tr"
                    ? "İyi"
                    : "خوب"}
                </strong>
              </div>

              <div className="level-details">
                <span>
                  {language === "en"
                    ? "Grammar"
                    : language === "tr"
                    ? "Dil Bilgisi"
                    : "گرامر"}
                </span>

                <strong>
                  {language === "en"
                    ? "Intermediate"
                    : language === "tr"
                    ? "Orta Seviye"
                    : "متوسط"}
                </strong>
              </div>

              <div className="level-details">
                <span>
                  {language === "en"
                    ? "Communication"
                    : language === "tr"
                    ? "İletişim"
                    : "ارتباط"}
                </span>

                <strong>
                  {language === "en"
                    ? "Improving"
                    : language === "tr"
                    ? "Gelişiyor"
                    : "در حال پیشرفت"}
                </strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          COURSES
      ========================== */}
      <section
        className="courses-section"
        id="courses"
      >
        <div className="courses-heading">
          <div>
            <p className="section-label">
              {t.courses.label}
            </p>

            <h2>{t.courses.title}</h2>
          </div>

          <a
            href="/courses"
            className="courses-link"
          >
            {t.courses.viewAll} →
          </a>
        </div>

        <div className="course-cards">
          {/* A1 */}
          <div className="course-card">
            <div className="course-top">
              <span className="course-level">
                A1
              </span>

              <span className="course-tag">
                {t.courseA1.tag}
              </span>
            </div>

            <h3>{t.courseA1.title}</h3>

            <p>{t.courseA1.description}</p>

            <div className="course-info">
              <span>
                📚 {t.courseA1.lessons}
              </span>

              <span>
                ⏱ {t.courseA1.pace}
              </span>
            </div>

            <div className="course-bottom">
              <strong>
                {t.courseA1.level}
              </strong>

              <a href="/courses/general-english-a1">
                {language === "en"
                  ? "Explore"
                  : language === "tr"
                  ? "Keşfet"
                  : "مشاهده"}{" "}
                →
              </a>
            </div>
          </div>

          {/* A2 */}
          <div className="course-card featured-course">
            <div className="course-top">
              <span className="course-level">
                A2
              </span>

              <span className="course-tag">
                {t.courseA2.tag}
              </span>
            </div>

            <h3>{t.courseA2.title}</h3>

            <p>{t.courseA2.description}</p>

            <div className="course-info">
              <span>
                📚 {t.courseA2.lessons}
              </span>

              <span>
                ⏱ {t.courseA2.pace}
              </span>
            </div>

            <div className="course-bottom">
              <strong>
                {t.courseA2.level}
              </strong>

              <a href="/courses/general-english-a2">
                {language === "en"
                  ? "Explore"
                  : language === "tr"
                  ? "Keşfet"
                  : "مشاهده"}{" "}
                →
              </a>
            </div>
          </div>

          {/* B1 */}
          <div className="course-card">
            <div className="course-top">
              <span className="course-level">
                B1
              </span>

              <span className="course-tag">
                {t.courseB1.tag}
              </span>
            </div>

            <h3>{t.courseB1.title}</h3>

            <p>{t.courseB1.description}</p>

            <div className="course-info">
              <span>
                📚 {t.courseB1.lessons}
              </span>

              <span>
                ⏱ {t.courseB1.pace}
              </span>
            </div>

            <div className="course-bottom">
              <strong>
                {t.courseB1.level}
              </strong>

              <a href="/courses/general-english-b1">
                {language === "en"
                  ? "Explore"
                  : language === "tr"
                  ? "Keşfet"
                  : "مشاهده"}{" "}
                →
              </a>
            </div>
          </div>

          {/* B2 */}
          <div className="course-card">
            <div className="course-top">
              <span className="course-level">
                B2
              </span>

              <span className="course-tag">
                {t.courseB2.tag}
              </span>
            </div>

            <h3>{t.courseB2.title}</h3>

            <p>{t.courseB2.description}</p>

            <div className="course-info">
              <span>
                📚 {t.courseB2.lessons}
              </span>

              <span>
                ⏱ {t.courseB2.pace}
              </span>
            </div>

            <div className="course-bottom">
              <strong>
                {t.courseB2.level}
              </strong>

              <a href="/courses/general-english-b2">
                {language === "en"
                  ? "Explore"
                  : language === "tr"
                  ? "Keşfet"
                  : "مشاهده"}{" "}
                →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          PRIVATE LESSONS
      ========================== */}
      <section
        className="private-section"
        id="private-lessons"
      >
        <div className="private-container">
          <div className="private-visual">
            <div className="private-shape"></div>

            <div className="private-photo-placeholder">
              <img
                src="/images/teacher.jpg"
                alt="Hedef English Teacher"
              />
            </div>

            <div className="floating-card">
              <div className="floating-icon">
                📖
              </div>

              <div className="floating-content">
                <strong>English</strong>

                <span>
                  Learn • Practice • Improve
                </span>
              </div>
            </div>
          </div>

          <div className="private-text">
            <p className="section-label">
              {t.privateLessons.label}
            </p>

            <h2>
              {t.privateLessons.title}
            </h2>

            <p>
              {t.privateLessons.description}
            </p>

            <div className="private-features">
              <div className="private-feature">
                <span>✓</span>

                <div>
                  <strong>
                    {language === "en"
                      ? "Personalized Lessons"
                      : language === "tr"
                      ? "Kişiselleştirilmiş Dersler"
                      : "کلاس‌های شخصی‌سازی‌شده"}
                  </strong>

                  <p>
                    {language === "en"
                      ? "Lessons designed around your level, goals, and learning needs."
                      : language === "tr"
                      ? "Seviyenize, hedeflerinize ve öğrenme ihtiyaçlarınıza göre hazırlanan dersler."
                      : "کلاس‌هایی متناسب با سطح، اهداف و نیازهای یادگیری شما."}
                  </p>
                </div>
              </div>

              <div className="private-feature">
                <span>✓</span>

                <div>
                  <strong>
                    {language === "en"
                      ? "Speaking Practice"
                      : language === "tr"
                      ? "Konuşma Pratiği"
                      : "تمرین مکالمه"}
                  </strong>

                  <p>
                    {language === "en"
                      ? "Improve your speaking skills through real conversations and practical activities."
                      : language === "tr"
                      ? "Gerçek konuşmalar ve pratik aktivitelerle konuşma becerilerinizi geliştirin."
                      : "با مکالمات واقعی و فعالیت‌های کاربردی، مهارت گفتاری خود را تقویت کنید."}
                  </p>
                </div>
              </div>

              <div className="private-feature">
                <span>✓</span>

                <div>
                  <strong>
                    {language === "en"
                      ? "Flexible Learning"
                      : language === "tr"
                      ? "Esnek Öğrenme"
                      : "یادگیری انعطاف‌پذیر"}
                  </strong>

                  <p>
                    {language === "en"
                      ? "Learn at a time and pace that works best for you."
                      : language === "tr"
                      ? "Size en uygun zamanda ve hızda öğrenin."
                      : "در زمان و با سرعتی که برای شما مناسب است یاد بگیرید."}
                  </p>
                </div>
              </div>
            </div>

            <div className="private-buttons">
              <a
                href="https://wa.me/905531670982"
                className="private-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="social-icon"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M12 2.2A9.8 9.8 0 0 0 3.7 17.1L2.4 21.6l4.6-1.2A9.8 9.8 0 1 0 12 2.2Zm0 17.7a8 8 0 0 1-4.1-1.1l-.3-.2-2.7.7.7-2.6-.2-.3A8 8 0 1 1 12 19.9Zm4.4-5.9c-.2-.1-1.3-.7-1.5-.8-.2-.1-1.3-.7-1.5-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.7.9-.1.1-.3.2-.5.1-1.5-.7-2.5-1.3-3.5-2.9-.3-.5.3-.5.8-1.7.1-.2 0-.4-.1-.5-.1-.1-.5-1.2-1.6-1.6-.2-.4-.4-.4-.5-.4h-.4c-.2 0-.5.1-.7.3-.2.2-.8.8-.8 2s.8 2.3.9 2.5c.1.2 1.6 2.5 3.9 3.5 1.4.6 2 .7 2.7.6.4-.1 1.3-.5 1.5-1 .2-.5.2-.9.1-1-.1-.1-.3-.2-.5-.3Z"
                  />
                </svg>

                <span>
                  {t.privateLessons.whatsapp}
                </span>

                <span>→</span>
              </a>

              <a
                href="https://instagram.com/Hedef.English"
                className="private-instagram-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="social-icon"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 1.8A3.7 3.7 0 0 0 3.8 7.5v9a3.7 3.7 0 0 0 3.7 3.7h9a3.7 3.7 0 0 0 3.7-3.7v-9a3.7 3.7 0 0 0-3.7-3.7h-9Zm9.8 1.4a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4Z"
                  />
                </svg>

                <span>
                  {t.privateLessons.instagram}
                </span>

                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          RESOURCES
      ========================== */}
      <section
        className="resources-section"
        id="resources"
      >
        <div className="resources-heading">
          <div>
            <p className="section-label">
              {t.resources.label}
            </p>

            <h2>{t.resources.title}</h2>

            <p>{t.resources.description}</p>
          </div>

          <a
            href="#resources"
            className="resources-link"
          >
            {t.resources.viewAll} →
          </a>
        </div>

        <div className="resource-cards">
          {/* RESOURCE 1 */}
          <div className="resource-card">
            <div className="resource-icon">
              📘
            </div>

            <h3>
              {t.resources.card1Title}
            </h3>

            <p>
              {t.resources.card1Description}
            </p>

            <a href="#resources">
              {language === "en"
                ? t.resources.card1Link
                : language === "tr"
                ? "Kaynakları Keşfet"
                : "مشاهده منابع"}{" "}
              →
            </a>
          </div>

          {/* RESOURCE 2 */}
          <div className="resource-card">
            <div className="resource-icon">
              🎧
            </div>

            <h3>
              {t.resources.card2Title}
            </h3>

            <p>
              {t.resources.card2Description}
            </p>

            <a href="#resources">
              {language === "en"
                ? t.resources.card2Link
                : language === "tr"
                ? "تمرین را شروع کنید"
                : "شروع تمرین"}{" "}
              →
            </a>
          </div>

          {/* RESOURCE 3 */}
          <div className="resource-card">
            <div className="resource-icon">
              📝
            </div>

            <h3>
              {language === "en"
                ? "Free Learning Materials"
                : language === "tr"
                ? "Ücretsiz Öğrenme Materyalleri"
                : "مطالب آموزشی رایگان"}
            </h3>

            <p>
              {language === "en"
                ? "Access useful worksheets, exercises and free materials to support your learning."
                : language === "tr"
                ? "Öğrenmenizi desteklemek için faydalı çalışma kağıtlarına, alıştırmalara ve ücretsiz materyallere erişin."
                : "به برگه‌های تمرین، تمرین‌های کاربردی و مطالب آموزشی رایگان دسترسی داشته باشید."}
            </p>

            <a href="#resources">
              {language === "en"
                ? "View Materials"
                : language === "tr"
                ? "Materyalleri Gör"
                : "مشاهده مطالب"}{" "}
              →
            </a>
          </div>
        </div>
      </section>

      {/* =========================
          CTA
      ========================== */}
      <section className="cta-section">
        <div className="cta-content">
          <p className="section-label">
            {t.cta.label}
          </p>

          <h2>{t.cta.title}</h2>

          <p>{t.cta.description}</p>

          <div className="cta-buttons">
            <a
              href="#level-test"
              className="cta-primary"
            >
              {t.cta.testButton}
            </a>

            <a
              href="#private-lessons"
              className="cta-secondary"
            >
              {t.cta.contactButton}
            </a>
          </div>
        </div>
      </section>

      {/* =========================
          FOOTER
      ========================== */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="logo">
              Hedef <span>English</span>
            </div>

            <p>{t.footer.description}</p>
          </div>

          <div className="footer-column">
            <h3>{t.footer.quickLinks}</h3>

            <a href="#home">
              {t.footer.home}
            </a>

            <a href="#level-test">
              {t.footer.levelTest}
            </a>

            <a href="#courses">
              {t.footer.courses}
            </a>

            <a href="#private-lessons">
              {t.footer.privateLessons}
            </a>
          </div>

          <div className="footer-column">
            <h3>{t.footer.learning}</h3>

            <a href="#resources">
              {t.footer.resources}
            </a>

            <a href="#resources">
              {t.footer.grammar}
            </a>

            <a href="#resources">
              {t.footer.vocabulary}
            </a>

            <a href="#resources">
              {t.footer.speaking}
            </a>
          </div>

          <div className="footer-column">
            <h3>{t.footer.contact}</h3>

            <a
              href="https://instagram.com/Hedef.English"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.footer.instagram}
            </a>

            <a
              href="https://wa.me/905531670982"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.footer.whatsapp}
            </a>

            <a href="#private-lessons">
              {t.footer.contactMe}
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{t.footer.copyright}</p>
        </div>
      </footer>
    </main>
  );
}