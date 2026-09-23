"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./exercise.css";

const lessons = [
  {
    slug: "family-friends",
    title: "Family & Friends",
  },
  {
    slug: "daily-routines",
    title: "Daily Routines",
  },
  {
    slug: "home-rooms",
    title: "Home & Rooms",
  },
  {
    slug: "food-drinks",
    title: "Food & Drinks",
  },
  {
    slug: "clothes-colors",
    title: "Clothes & Colors",
  },
  {
    slug: "weather",
    title: "Weather",
  },
  {
    slug: "places-town",
    title: "Places in Town",
  },
  {
    slug: "transport",
    title: "Transport",
  },
  {
    slug: "house-furniture",
    title: "House & Furniture",
  },
  {
    slug: "shopping-money",
    title: "Shopping & Money",
  },
  {
    slug: "school-classroom",
    title: "School & Classroom",
  },
  {
    slug: "body-health",
    title: "Body & Health",
  },
  {
    slug: "animals-pets",
    title: "Animals & Pets",
  },
  {
    slug: "holidays-travel",
    title: "Holidays & Travel",
  },
];

export default function A1VocabularyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isA1HomePage =
    pathname === "/exercises/vocabulary/a1";

  const currentSlug = pathname
    .split("/")
    .filter(Boolean)
    .pop();

  const currentIndex = lessons.findIndex(
    (lesson) => lesson.slug === currentSlug
  );

  const previousLesson =
    currentIndex > 0
      ? lessons[currentIndex - 1]
      : null;

  const nextLesson =
    currentIndex >= 0 &&
    currentIndex < lessons.length - 1
      ? lessons[currentIndex + 1]
      : null;

  return (
    <div
      className="a1-exercises-theme"
      style={{
        width: "100%",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      }}
    >
      {!isA1HomePage && (
    <header
  className="a1-shared-header"
  style={{
    width: "100vw",
    maxWidth: "100vw",
    margin: 0,
    borderRadius: 0,
    boxSizing: "border-box",
  }}
        >
          <div
            className="a1-shared-header-inner"
            style={{
              width: "100%",
              maxWidth: "1100px",
              margin: "0 auto",
              padding: 0,
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Link href="/" className="a1-logo">
              Hedef <span>English</span>
            </Link>

            <Link
              href="/exercises/vocabulary/a1"
              className="a1-back-link"
            >
              ← Back to A1 Vocabulary
            </Link>
          </div>
        </header>
      )}

      {children}

      {currentIndex !== -1 && (
        <div className="a1-lesson-navigation">
          {previousLesson ? (
            <Link
              href={`/exercises/vocabulary/a1/${previousLesson.slug}`}
              className="a1-nav-button a1-nav-previous"
            >
              <span>←</span>

              <div>
                <small>Previous Lesson</small>
                <strong>{previousLesson.title}</strong>
              </div>
            </Link>
          ) : (
            <div className="a1-nav-button a1-nav-disabled">
              <span>←</span>

              <div>
                <small>Previous Lesson</small>
                <strong>First Lesson</strong>
              </div>
            </div>
          )}

          <Link
            href="/exercises/vocabulary/a1"
            className="a1-nav-center"
          >
            A1 Vocabulary
          </Link>

          {nextLesson ? (
            <Link
              href={`/exercises/vocabulary/a1/${nextLesson.slug}`}
              className="a1-nav-button a1-nav-next"
            >
              <div>
                <small>Next Lesson</small>
                <strong>{nextLesson.title}</strong>
              </div>

              <span>→</span>
            </Link>
          ) : (
            <div className="a1-nav-button a1-nav-disabled">
              <div>
                <small>Next Lesson</small>
                <strong>Last Lesson</strong>
              </div>

              <span>→</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}