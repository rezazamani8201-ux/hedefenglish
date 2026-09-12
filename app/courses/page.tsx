import Link from "next/link";
import BackToHome from "@/app/components/BackToHome";
export default function CoursesPage() {
  const courses = [
    {
      level: "A1",
      title: "English Foundations",
      description:
        "Build a strong foundation in English and start communicating with confidence.",
      lessons: "12 Lessons",
      href: "/courses/general-english-a1",
    },
    {
      level: "A2",
      title: "Everyday English",
      description:
        "Learn practical English for everyday conversations and real-life situations.",
      lessons: "16 Lessons",
      href: "/courses/general-english-a2",
    },
    {
      level: "B1",
      title: "Confident Communication",
      description:
        "Improve your speaking skills and communicate more naturally in everyday situations.",
      lessons: "20 Lessons",
      href: "/courses/general-english-b1",
    },
    {
      level: "B2",
      title: "Advanced English Skills",
      description:
        "Develop advanced communication skills and express your ideas with greater accuracy and confidence.",
      lessons: "24 Lessons",
      href: "/courses/general-english-b2",
    },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8f9fc",
        padding: "80px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <BackToHome />
        <div
          style={{
            textAlign: "center",
            marginBottom: "55px",
          }}
        >
          <div
            style={{
              display: "inline-block",
              background: "#e8eef9",
              color: "#173b78",
              padding: "8px 18px",
              borderRadius: "30px",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "1px",
              marginBottom: "18px",
            }}
          >
            HEDEF ENGLISH
          </div>

          <h1
            style={{
              fontSize: "42px",
              color: "#173b78",
              margin: "0 0 14px",
              fontWeight: 700,
            }}
          >
            Choose Your English Course
          </h1>

          <p
            style={{
              fontSize: "17px",
              color: "#666",
              margin: 0,
            }}
          >
            Explore our English courses and find the right level for you.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "24px",
          }}
        >
          {courses.map((course) => (
            <div
              key={course.level}
              style={{
                background: "#fff",
                borderRadius: "20px",
                padding: "30px",
                boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "14px",
                  background: "#e8eef9",
                  color: "#173b78",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                  fontWeight: 700,
                  marginBottom: "22px",
                }}
              >
                {course.level}
              </div>

              <h2
                style={{
                  fontSize: "24px",
                  color: "#173b78",
                  margin: "0 0 12px",
                }}
              >
                {course.title}
              </h2>

              <p
                style={{
                  fontSize: "15px",
                  lineHeight: 1.7,
                  color: "#666",
                  margin: "0 0 20px",
                  flex: 1,
                }}
              >
                {course.description}
              </p>

              <div
                style={{
                  fontSize: "14px",
                  color: "#777",
                  marginBottom: "20px",
                  fontWeight: 600,
                }}
              >
                {course.lessons}
              </div>

              <Link
                href={course.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "48px",
                  background: "#173b78",
                  color: "#fff",
                  borderRadius: "10px",
                  textDecoration: "none",
                  fontSize: "15px",
                  fontWeight: 600,
                }}
              >
                Explore Course
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}