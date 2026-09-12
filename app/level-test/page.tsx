"use client";

import { useState } from "react";
import Link from "next/link";

const questions = [
  {
    level: "A1",
    question: "She ___ to work every day.",
    options: ["go", "goes", "going", "went"],
    answer: 1,
  },
  {
    level: "A1",
    question: "They ___ football every Sunday.",
    options: ["play", "plays", "playing", "played"],
    answer: 0,
  },
  {
    level: "A1",
    question: "I ___ a student.",
    options: ["am", "is", "are", "be"],
    answer: 0,
  },
  {
    level: "A1",
    question: "We ___ from Turkey.",
    options: ["is", "am", "are", "be"],
    answer: 2,
  },
  {
    level: "A1",
    question: "He has ___ apple.",
    options: ["a", "an", "the", "some"],
    answer: 1,
  },
  {
    level: "A2",
    question: "I ___ a movie last night.",
    options: ["watch", "watched", "watching", "watches"],
    answer: 1,
  },
  {
    level: "A2",
    question: "She is ___ than her sister.",
    options: ["tall", "taller", "tallest", "more tall"],
    answer: 1,
  },
  {
    level: "A2",
    question: "We have lived here ___ 2020.",
    options: ["for", "since", "during", "from"],
    answer: 1,
  },
  {
    level: "A2",
    question: "There ___ some milk in the fridge.",
    options: ["are", "be", "is", "were"],
    answer: 2,
  },
  {
    level: "A2",
    question: "What ___ you doing right now?",
    options: ["do", "are", "is", "did"],
    answer: 1,
  },
  {
    level: "B1",
    question: "If I have enough money, I ___ a new laptop.",
    options: ["buy", "bought", "will buy", "would bought"],
    answer: 2,
  },
  {
    level: "B1",
    question: "She has already ___ her homework.",
    options: ["finish", "finished", "finishing", "finishes"],
    answer: 1,
  },
  {
    level: "B1",
    question: "I used to ___ football when I was younger.",
    options: ["play", "played", "playing", "plays"],
    answer: 0,
  },
  {
    level: "B1",
    question: "The book ___ by millions of people.",
    options: ["has read", "has been read", "read", "is reading"],
    answer: 1,
  },
  {
    level: "B1",
    question: "He asked me where I ___.",
    options: ["live", "lived", "am living", "will live"],
    answer: 1,
  },
  {
    level: "B2",
    question: "If I ___ about the problem earlier, I would have helped.",
    options: ["knew", "had known", "know", "have known"],
    answer: 1,
  },
  {
    level: "B2",
    question: "Despite ___ tired, she continued working.",
    options: ["be", "being", "was", "been"],
    answer: 1,
  },
  {
    level: "B2",
    question: "The company is expected ___ its prices next year.",
    options: ["increase", "increasing", "to increase", "increased"],
    answer: 2,
  },
  {
    level: "B2",
    question: "Had I known about the traffic, I ___ earlier.",
    options: ["leave", "would leave", "would have left", "left"],
    answer: 2,
  },
  {
    level: "B2",
    question: "It's high time you ___ more responsibility.",
    options: ["take", "took", "have taken", "will take"],
    answer: 1,
  },
];
import { supabase } from "@/app/lib/supabase";
export default function LevelTestPage() {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [finished, setFinished] = useState(false);

  const question = questions[currentQuestion];

  const handleNext = async () => {
  if (selectedAnswer === null) {
    alert("Please select an answer first.");
    return;
  }

  const newScore =
    selectedAnswer === question.answer ? score + 1 : score;

  if (currentQuestion < questions.length - 1) {
    setScore(newScore);
    setCurrentQuestion(currentQuestion + 1);
    setSelectedAnswer(null);
  } else {
    setScore(newScore);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) {
      const percentage = Math.round(
        (newScore / questions.length) * 100
      );

      let level = "";

      if (newScore <= 5) {
        level = "A1";
      } else if (newScore <= 10) {
        level = "A2";
      } else if (newScore <= 15) {
        level = "B1";
      } else {
        level = "B2";
      }

      const { error } = await supabase
        .from("level_test_results")
        .insert({
          user_id: user.id,
          score: newScore,
          total_questions: questions.length,
          percentage,
          level,
        });

      if (error) {
        console.error("Error saving level test result:", error);
      }
    }

    setFinished(true);
  }
};

  const getResult = () => {
    if (score <= 5) {
      return {
        level: "A1 – Beginner",
        course: "General English – A1",
        courseLink: "/courses/general-english-a1",
        message:
          "You are ready to build a strong foundation in English.",
      };
    }

    if (score <= 10) {
      return {
        level: "A2 – Elementary",
        course: "General English – A2",
        courseLink: "/courses/general-english-a2",
        message:
          "You have a basic understanding of English and are ready to improve your communication skills.",
      };
    }

    if (score <= 15) {
      return {
        level: "B1 – Intermediate",
        course: "General English – B1",
        courseLink: "/courses/general-english-b1",
        message:
          "You can communicate in everyday situations and are ready to develop your fluency.",
      };
    }

    return {
      level: "B2 – Upper-Intermediate",
      course: "General English – B2",
      courseLink: "/courses/general-english-b2",
      message:
        "You have a strong command of English and are ready to take your skills to the next level.",
    };
  };

  if (!started) {
    return (
      <main className="level-test-page">
        <div className="level-test-container">
          <span className="section-label">HEDEF ENGLISH</span>

          <h1>Find Your English Level</h1>

          <p className="level-test-intro">
            Take our free English level test and discover which course
            is right for you.
          </p>

          <div className="test-info">
            <div className="test-info-item">
              <strong>Free</strong>
              <span>No payment required</span>
            </div>

            <div className="test-info-item">
              <strong>Quick</strong>
              <span>Takes only a few minutes</span>
            </div>

            <div className="test-info-item">
              <strong>Easy</strong>
              <span>Simple multiple-choice questions</span>
            </div>
          </div>

          <button
            className="start-test-button"
            onClick={() => setStarted(true)}
          >
            Start the Test
            <span>→</span>
          </button>
        </div>
      </main>
    );
  }

  if (finished) {
    const result = getResult();
    const percentage = Math.round(
      (score / questions.length) * 100
    );

    return (
      <div className="test-area">
        <div className="test-header">
          <span>Test Complete</span>
          <span>100%</span>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: "100%" }}
          />
        </div>

        <div className="question-card">
          <div className="result-content">
            <span className="question-label">TEST COMPLETE</span>

            <h2>Your English Level</h2>

            <div className="score-circle">
              <div className="score-number">
                {percentage}%
              </div>

              <div className="score-label">
                YOUR SCORE
              </div>
            </div>

            <div className="result-level">
              {result.level}
            </div>

            <p className="result-message">
              {result.message}
            </p>

            <div className="result-score">
              <strong>
                {score} / {questions.length}
              </strong>

              <span>questions answered correctly</span>
            </div>

            <div className="next-step">
              <span>WHAT HAPPENS NEXT?</span>

              <p>
                Based on your results, we recommend starting with
                the course above. You can explore the course details
                and choose the learning option that works best for
                you.
              </p>
            </div>

            <div className="result-buttons">
              <Link
                href={result.courseLink}
                className="result-primary"
              >
                View Recommended Course
              </Link>

              <Link
                href="/#private-lessons"
                className="result-secondary"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const progress = Math.round(
    ((currentQuestion + 1) / questions.length) * 100
  );

  return (
    <div className="test-area">
      <div className="test-header">
        <span>
          Question {currentQuestion + 1} of {questions.length}
        </span>

        <span>{progress}%</span>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="question-card">
        <span className="question-label">
          {question.level}
        </span>

        <h2>Choose the correct answer.</h2>

        <p className="question-text">
          {question.question}
        </p>

        <div className="answer-options">
          {question.options.map((option, index) => (
            <button
              key={option}
              className="answer-option"
              onClick={() => setSelectedAnswer(index)}
              style={
                selectedAnswer === index
                  ? {
                      backgroundColor: "#173b78",
                      color: "#ffffff",
                      borderColor: "#173b78",
                    }
                  : undefined
              }
            >
              {option}
            </button>
          ))}
        </div>

        <button
          className="next-button"
          onClick={handleNext}
        >
          {currentQuestion === questions.length - 1
            ? "Finish Test"
            : "Next Question"}
          <span>→</span>
        </button>
      </div>
    </div>
  );
}