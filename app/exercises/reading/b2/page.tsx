import Link from "next/link";
import ExploreButton from "../../../components/ExploreButton";

const readings = [
  {
    title: "A Changing Workplace",
    slug: "a-changing-workplace",
    description:
      "Explore how technology and new working styles are changing modern workplaces.",
  },
  {
    title: "Digital Learning",
    slug: "digital-learning",
    description:
      "Read about the benefits and challenges of learning through digital platforms.",
  },
  {
    title: "The Future of Cities",
    slug: "the-future-of-cities",
    description:
      "Discover how cities are changing as populations, technology, and environmental needs evolve.",
  },
  {
    title: "Social Media and Society",
    slug: "social-media-and-society",
    description:
      "Examine how social media influences communication, relationships, and modern society.",
  },
  {
    title: "The Importance of Critical Thinking",
    slug: "the-importance-of-critical-thinking",
    description:
      "Learn why critical thinking is important when evaluating information and making decisions.",
  },
  {
    title: "Artificial Intelligence in Everyday Life",
    slug: "artificial-intelligence-in-everyday-life",
    description:
      "Explore how artificial intelligence is becoming part of everyday activities and services.",
  },
  {
    title: "Work-Life Balance",
    slug: "work-life-balance",
    description:
      "Read about the challenges of balancing professional responsibilities with personal life.",
  },
  {
    title: "The Psychology of Advertising",
    slug: "the-psychology-of-advertising",
    description:
      "Discover how advertising techniques influence consumer attention and behavior.",
  },
  {
    title: "Globalization and Culture",
    slug: "globalization-and-culture",
    description:
      "Explore how globalization affects cultures, traditions, communication, and lifestyles.",
  },
  {
    title: "Climate Change and Everyday Choices",
    slug: "climate-change-and-everyday-choices",
    description:
      "Read about the relationship between climate change and individual everyday choices.",
  },
  {
    title: "The Value of Lifelong Learning",
    slug: "the-value-of-lifelong-learning",
    description:
      "Discover why learning and developing new skills can continue throughout adulthood.",
  },
  {
    title: "Living in a Connected World",
    slug: "living-in-a-connected-world",
    description:
      "Explore how constant digital connectivity has changed the way people communicate and live.",
  },
];

export default function B2ReadingPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f7fb",
        padding: "50px 20px 80px",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {/* BACK TO READING */}
        <Link
          href="/exercises/reading"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            color: "#2563eb",
            textDecoration: "none",
            fontSize: "15px",
            fontWeight: 600,
            marginBottom: "30px",
          }}
        >
          &larr; Back to Reading
        </Link>

        {/* HEADER */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "45px",
          }}
        >
          <div
            style={{
              display: "inline-block",
              background: "#eef2ff",
              color: "#4f46e5",
              padding: "8px 18px",
              borderRadius: "999px",
              fontSize: "14px",
              fontWeight: 700,
              marginBottom: "16px",
            }}
          >
            B2 Reading
          </div>

          <h1
            style={{
              fontSize: "42px",
              fontWeight: 800,
              color: "#111827",
              margin: "0 0 14px",
            }}
          >
            B2 Reading Exercises
          </h1>

          <p
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              color: "#6b7280",
              fontSize: "17px",
              lineHeight: 1.7,
            }}
          >
            Improve your reading comprehension with advanced texts,
            vocabulary, inference, and critical thinking exercises.
          </p>
        </div>

        {/* READING CARDS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "22px",
          }}
        >
          {readings.map((reading, index) => (
            <article
              key={reading.slug}
              style={{
                background: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "18px",
                padding: "26px",
                minHeight: "190px",
                boxShadow:
                  "0 4px 14px rgba(15, 23, 42, 0.06)",
                transition:
                  "transform 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              {/* NUMBER */}
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "12px",
                  background: "#eef2ff",
                  color: "#4f46e5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  fontSize: "16px",
                  marginBottom: "18px",
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* TITLE */}
              <h2
                style={{
                  fontSize: "21px",
                  fontWeight: 750,
                  color: "#111827",
                  margin: "0 0 10px",
                }}
              >
                {reading.title}
              </h2>

              {/* DESCRIPTION */}
              <p
                style={{
                  color: "#6b7280",
                  fontSize: "14px",
                  lineHeight: 1.65,
                  margin: "0 0 20px",
                }}
              >
                {reading.description}
              </p>

              {/* EXPLORE BUTTON */}
              <ExploreButton
                text="Start Reading"
                href={`/exercises/reading/b2/${reading.slug}`}
              />
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}