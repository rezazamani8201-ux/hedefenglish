"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/app/context/AuthContext";
import { supabase } from "@/app/lib/supabase";

export default function AccountPage() {
  const { user, loading, logout } = useAuth();
  const [latestResult, setLatestResult] = useState<any>(null);
const [courses, setCourses] = useState<any[]>([]);
useEffect(() => {
  const loadLatestResult = async () => {
    if (!user) return;

    const { data } = await supabase
      .from("level_test_results")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    setLatestResult(data);
    const { data: courseData } = await supabase
  .from("user_courses")
  .select("*")
  .eq("user_id", user.id)
  .order("created_at", { ascending: false });

setCourses(courseData || []);
  };

  loadLatestResult();
}, [user]);

  if (loading) {
    return (
      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f7f8fc",
          color: "#173b78",
          fontSize: "18px",
        }}
      >
        Loading...
      </main>
    );
  }

  if (!user) {
    return (
      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f7f8fc",
          padding: "40px 20px",
        }}
      >
        <div
          style={{
            background: "#fff",
            padding: "40px",
            borderRadius: "20px",
            textAlign: "center",
            boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
          }}
        >
          <h1 style={{ color: "#173b78", marginBottom: "15px" }}>
            Please Log In
          </h1>

          <p style={{ color: "#666", marginBottom: "25px" }}>
            You need to log in to view your account.
          </p>

          <Link
            href="/login"
            style={{
              display: "inline-block",
              padding: "13px 25px",
              background: "#173b78",
              color: "#fff",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Go to Login
          </Link>
        </div>
      </main>
    );
  }

  const name =
    user.user_metadata?.username ||
    user.user_metadata?.full_name ||
    user.email?.split("@")[0] ||
    "User";

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f7f8fc",
        padding: "60px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <div style={{ marginBottom: "35px" }}>
          <h1
            style={{
              margin: 0,
              color: "#173b78",
              fontSize: "36px",
            }}
          >
            My Account
          </h1>

          <p
            style={{
              marginTop: "10px",
              color: "#666",
              fontSize: "16px",
            }}
          >
            Welcome back, {name}!
          </p>
        </div>

        <div
          style={{
            background: "#fff",
            padding: "30px",
            borderRadius: "18px",
            boxShadow: "0 10px 35px rgba(0,0,0,0.06)",
            marginBottom: "25px",
          }}
        >
          <h2
            style={{
              marginTop: 0,
              color: "#173b78",
            }}
          >
            Account Information
          </h2>

          <p style={{ color: "#555" }}>
            <strong>Name:</strong> {name}
          </p>

          <p style={{ color: "#555" }}>
            <strong>Email:</strong> {user.email}
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "25px",
              borderRadius: "18px",
              boxShadow: "0 10px 35px rgba(0,0,0,0.06)",
            }}
          >
            <h3 style={{ color: "#173b78", marginTop: 0 }}>
              My Courses
            </h3>

            {courses.length > 0 ? (
  <div>
    {courses.map((course) => (
      <div
        key={course.id}
        style={{
          padding: "15px",
          border: "1px solid #eee",
          borderRadius: "12px",
          marginTop: "12px",
        }}
      >
        <strong style={{ color: "#173b78" }}>
          {course.course_name}
        </strong>

        <p style={{ margin: "6px 0 0", color: "#777" }}>
          Level: {course.course_level}
        </p>
      </div>
    ))}
  </div>
) : (
  <p style={{ color: "#777" }}>
  You have not enrolled in any courses yet.
</p>
)}
          </div>

          <div
            style={{
              background: "#fff",
              padding: "25px",
              borderRadius: "18px",
              boxShadow: "0 10px 35px rgba(0,0,0,0.06)",
            }}
          >
            <h3 style={{ color: "#173b78", marginTop: 0 }}>
              Level Test
            </h3>
{latestResult ? (
  <div style={{ color: "#555" }}>
    <p>
      <strong>Level:</strong> {latestResult.level}
    </p>

    <p>
      <strong>Score:</strong> {latestResult.score} /{" "}
      {latestResult.total_questions}
    </p>

    <p>
      <strong>Percentage:</strong> {latestResult.percentage}%
    </p>
  </div>
) : (
  <p style={{ color: "#777" }}>
    You have not taken the level test yet.
  </p>
)}
            
            
          </div>

          <div
            style={{
              background: "#fff",
              padding: "25px",
              borderRadius: "18px",
              boxShadow: "0 10px 35px rgba(0,0,0,0.06)",
            }}
          >
            <h3 style={{ color: "#173b78", marginTop: 0 }}>
              My Progress
            </h3>

            <p style={{ color: "#777" }}>
              Your learning progress will appear here.
              </p>
           
          </div>
        </div>

        <button
          onClick={logout}
          style={{
            padding: "13px 25px",
            border: "none",
            borderRadius: "10px",
            background: "#173b78",
            color: "#fff",
            fontSize: "15px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>
    </main>
  );
}