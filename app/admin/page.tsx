"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/app/context/AuthContext";
import { supabase } from "@/app/lib/supabase";

type Profile = {
  id: string;
  username: string | null;
  email: string | null;
  created_at: string;
};
type LevelTestResult = {
  id: number;
  user_id: string;
  score: number;
  total_questions: number;
  percentage: number;
  level: string;
  created_at: string;
};

export default function AdminPage() {
  const { user, loading } = useAuth();

  const [isAdmin, setIsAdmin] = useState(false);
  const [users, setUsers] = useState<Profile[]>([]);
  const [usersLoading, setUsersLoading] = useState(false);
  const [testResults, setTestResults] = useState<LevelTestResult[]>([]);
const [testsLoading, setTestsLoading] = useState(false);

  useEffect(() => {
    if (user?.email === "rezazamani8201@gmail.com") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [user]);

  useEffect(() => {
    const loadUsers = async () => {
      if (!user || user.email !== "rezazamani8201@gmail.com") {
        return;
      }

      setUsersLoading(true);

      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error loading users:", error);
        setUsers([]);
      } else {
        setUsers(data || []);
      }

      setUsersLoading(false);
      setTestsLoading(true);

const { data: testData, error: testError } = await supabase
  .from("level_test_results")
  .select("*")
  .order("created_at", { ascending: false });

if (testError) {
  console.error("Error loading level test results:", testError);
  setTestResults([]);
} else {
  setTestResults(testData || []);
}

setTestsLoading(false);
    };

    loadUsers();
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
          padding: "20px",
        }}
      >
        <div
          style={{
            background: "#fff",
            padding: "40px",
            borderRadius: "20px",
            textAlign: "center",
            boxShadow: "0 10px 35px rgba(0,0,0,0.08)",
          }}
        >
          <h1 style={{ color: "#173b78" }}>Access Denied</h1>

          <p style={{ color: "#666" }}>
            Please log in to access the admin panel.
          </p>
        </div>
      </main>
    );
  }

  if (!isAdmin) {
    return (
      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f7f8fc",
          padding: "20px",
        }}
      >
        <div
          style={{
            background: "#fff",
            padding: "40px",
            borderRadius: "20px",
            textAlign: "center",
            boxShadow: "0 10px 35px rgba(0,0,0,0.08)",
          }}
        >
          <h1 style={{ color: "#c0392b" }}>Access Denied</h1>

          <p style={{ color: "#666" }}>
            You do not have permission to access the admin panel.
          </p>
        </div>
      </main>
    );
  }

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
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            color: "#173b78",
            fontSize: "36px",
            marginBottom: "10px",
          }}
        >
          Admin Dashboard
        </h1>

        <p
          style={{
            color: "#666",
            fontSize: "16px",
            marginBottom: "40px",
          }}
        >
          Welcome, Admin.
        </p>

        {/* Dashboard Cards */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            marginBottom: "35px",
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "30px",
              borderRadius: "18px",
              boxShadow: "0 10px 35px rgba(0,0,0,0.06)",
            }}
          >
            <h2 style={{ color: "#173b78", marginTop: 0 }}>
              Users
            </h2>

            <p
              style={{
                color: "#777",
                fontSize: "28px",
                fontWeight: 700,
                marginBottom: 0,
              }}
            >
              {users.length}
            </p>
          </div>

          <div
            style={{
              background: "#fff",
              padding: "30px",
              borderRadius: "18px",
              boxShadow: "0 10px 35px rgba(0,0,0,0.06)",
            }}
          >
            <h2 style={{ color: "#173b78", marginTop: 0 }}>
              Level Tests
            </h2>

            <p style={{ color: "#777" }}>
              View users' level test results.
            <p
  style={{
    color: "#777",
    fontSize: "28px",
    fontWeight: 700,
    marginBottom: 0,
  }}
>
  {testResults.length}
  </p>
</p>
          </div>

          <div
            style={{
              background: "#fff",
              padding: "30px",
              borderRadius: "18px",
              boxShadow: "0 10px 35px rgba(0,0,0,0.06)",
            }}
          >
            <h2 style={{ color: "#173b78", marginTop: 0 }}>
              Courses
            </h2>

            <p style={{ color: "#777" }}>
              Manage user courses.
            </p>
          </div>

          <div
            style={{
              background: "#fff",
              padding: "30px",
              borderRadius: "18px",
              boxShadow: "0 10px 35px rgba(0,0,0,0.06)",
            }}
          >
            <h2 style={{ color: "#173b78", marginTop: 0 }}>
              Statistics
            </h2>

            <p style={{ color: "#777" }}>
              View website statistics.
            </p>
          </div>
        </div>

        {/* Users Section */}

        <section
          style={{
            background: "#fff",
            padding: "30px",
            borderRadius: "18px",
            boxShadow: "0 10px 35px rgba(0,0,0,0.06)",
          }}
        >
          <h2
            style={{
              color: "#173b78",
              marginTop: 0,
              marginBottom: "25px",
            }}
          >
            Registered Users
          </h2>

          {usersLoading ? (
            <p style={{ color: "#777" }}>
              Loading users...
            </p>
          ) : users.length === 0 ? (
            <p style={{ color: "#777" }}>
              No registered users found.
            </p>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {users.map((profile) => (
                <div
                  key={profile.id}
                  style={{
                    border: "1px solid #e8ebf0",
                    borderRadius: "12px",
                    padding: "18px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "20px",
                    flexWrap: "wrap",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontWeight: 700,
                        color: "#173b78",
                        marginBottom: "5px",
                      }}
                    >
                      {profile.username || "No username"}
                    </div>

                    <div
                      style={{
                        color: "#666",
                        fontSize: "14px",
                      }}
                    >
                      {profile.email || "No email"}
                    </div>
                  </div>

                  <div
                    style={{
                      color: "#999",
                      fontSize: "13px",
                    }}
                  >
                    {new Date(
                      profile.created_at
                    ).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}