"use client";

import Link from "next/link";
import type { CSSProperties } from "react";

const lessons = [
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
  padding: "12px 18px",
  borderRadius: "10px",
  border: "1px solid #dbe2ea",
  background: "#fff",
  color: "#173b78",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: 600,
};

export default function LessonNavigation({
  currentSlug,
}: {
  currentSlug: string;
}) {
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
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "15px",
        marginTop: "35px",
        flexWrap: "wrap",
      }}
    >
      {previousLesson ? (
        <Link
          href={`/resources/grammar/a1/${previousLesson.slug}`}
          style={buttonStyle}
        >
          ← {previousLesson.title}
        </Link>
      ) : (
        <Link href="/resources/grammar/a1" style={buttonStyle}>
          ← A1 Grammar
        </Link>
      )}

      {nextLesson ? (
        <Link
          href={`/resources/grammar/a1/${nextLesson.slug}`}
          style={buttonStyle}
        >
          Next: {nextLesson.title} →
        </Link>
      ) : (
        <Link href="/resources/grammar/a1" style={buttonStyle}>
          A1 Grammar ✓
        </Link>
      )}
    </div>
  );
}