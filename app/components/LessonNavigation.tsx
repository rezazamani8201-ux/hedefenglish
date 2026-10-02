"use client";

import Link from "next/link";
import type { CSSProperties } from "react";

type Lesson = {
  title: string;
  slug: string;
};

type LessonNavigationProps = {
  currentSlug: string;
  lessons?: Lesson[];
  basePath?: string;
  backLabel?: string;
  backHref?: string;
  hideNextWhenLast?: boolean;
};

const defaultLessons: Lesson[] = [
  { title: "Verb to Be", slug: "verb-to-be" },
  { title: "Subject Pronouns", slug: "subject-pronouns" },
  { title: "Possessive Adjectives", slug: "possessive-adjectives" },
  { title: "Articles", slug: "articles" },
  { title: "Plural Nouns", slug: "plural-nouns" },
  { title: "This / That / These / Those", slug: "this-that-these-those" },
  { title: "Have / Has", slug: "have-has" },
  { title: "There is / There are", slug: "there-is-there-are" },
  { title: "Present Simple", slug: "present-simple" },
  { title: "Adverbs of Frequency", slug: "adverbs-of-frequency" },
  { title: "Can / Can't", slug: "can-cant" },
  { title: "Imperatives", slug: "imperatives" },
  { title: "Prepositions of Place", slug: "prepositions-of-place" },
  { title: "Prepositions of Time", slug: "prepositions-of-time" },
  { title: "Question Words", slug: "question-words" },
  { title: "Basic Conjunctions", slug: "basic-conjunctions" },
];

const buttonStyle: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "12px",
  minHeight: "50px",
  padding: "0 20px",
  borderRadius: "999px",
  border: "1px solid #474747",
  background: "#474747",
  color: "#ffffff",
  textDecoration: "none",
  fontSize: "15px",
  fontWeight: 700,
  transition: "all 0.25s ease",
  boxSizing: "border-box",
  boxShadow: "0 5px 12px rgba(0, 0, 0, 0.12)",
};

const backButtonStyle: CSSProperties = {
  ...buttonStyle,
  background: "#ffffff",
  color: "#474747",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.06)",
};

function Arrow({
  direction,
}: {
  direction: "left" | "right";
}) {
  const isLeft = direction === "left";

  return (
    <svg
      width="25"
      height="20"
      viewBox="0 0 25 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{
        display: "block",
        flexShrink: 0,
      }}
    >
      {isLeft ? (
        <path
          d="M23 10H3M3 10L10 3M3 10L10 17"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="M2 10H22M22 10L15 3M22 10L15 17"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}

export default function LessonNavigation({
  currentSlug,
  lessons = defaultLessons,
  basePath = "/resources/grammar/a1",
  backLabel = "Back to A1 Grammar",
  backHref = "/resources/grammar/a1",
  hideNextWhenLast = false,
}: LessonNavigationProps) {
  const currentIndex = lessons.findIndex(
    (lesson) => lesson.slug === currentSlug
  );

  if (currentIndex === -1) {
    return null;
  }

  const previousLesson =
    currentIndex > 0 ? lessons[currentIndex - 1] : null;

  const nextLesson =
    currentIndex < lessons.length - 1
      ? lessons[currentIndex + 1]
      : null;

  return (
    <nav
    
      aria-label="Lesson navigation"
      style={{
        width: "100%",
        marginTop: "36px",
        marginBottom: "36px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "14px",
          flexWrap: "wrap",
        }}
      >
        {/* PREVIOUS */}

        <div
          style={{
            flex: "1 1 220px",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          {previousLesson ? (
            <Link
              href={`${basePath}/${previousLesson.slug}`}
              style={buttonStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#3b3b3b";
                e.currentTarget.style.borderColor = "#3b3b3b";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 18px rgba(0, 0, 0, 0.16)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#474747";
                e.currentTarget.style.borderColor = "#474747";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 5px 12px rgba(0, 0, 0, 0.12)";
              }}
            >
              <Arrow direction="left" />
              <span>Previous</span>
            </Link>
          ) : (
            <Link
              href={backHref}
              style={backButtonStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#f5f5f5";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#ffffff";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <Arrow direction="left" />
              <span>{backLabel}</span>
            </Link>
          )}
        </div>

        {/* BACK TO LEVEL */}

        <div
          style={{
            flex: "1 1 220px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Link
            href={backHref}
            style={backButtonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#f5f5f5";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#ffffff";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <span>{backLabel}</span>
          </Link>
        </div>

        {/* NEXT */}
<div
  style={{
    flex: "1 1 220px",
    display: "flex",
    justifyContent: "flex-end",
  }}
>
  {nextLesson ? (
    <Link
      href={`${basePath}/${nextLesson.slug}`}
      style={buttonStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "#3b3b3b";
        e.currentTarget.style.borderColor = "#3b3b3b";
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow =
          "0 8px 18px rgba(0, 0, 0, 0.16)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "#474747";
        e.currentTarget.style.borderColor = "#474747";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow =
          "0 5px 12px rgba(0, 0, 0, 0.12)";
      }}
    >
      <span>Next</span>
      <Arrow direction="right" />
    </Link>
  ) : hideNextWhenLast ? null : (
    <Link
      href={backHref}
      style={backButtonStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "#f5f5f5";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "#ffffff";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <span>Back</span>
      <Arrow direction="right" />
    </Link>
  )}
</div>
      </div>
    </nav>
  );
}