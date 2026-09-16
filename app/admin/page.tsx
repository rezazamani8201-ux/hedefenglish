"use client";

import { useEffect, useMemo, useState } from "react";
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

type WebsiteVisit = {
  id: string;
  user_id: string | null;
  visitor_id: string;
  page: string;
  created_at: string;
};

type FileDownload = {
  id: string;
  user_id: string | null;
  visitor_id: string;
  file_name: string;
  file_path: string;
  created_at: string;
};

type Section =
  | "overview"
  | "users"
  | "tests"
  | "visitors"
  | "downloads";

export default function AdminPage() {
const { user, loading } = useAuth();
const isAdmin = user?.email === "rezazamani8201@gmail.com";

  const [users, setUsers] = useState<Profile[]>([]);
  const [testResults, setTestResults] = useState<LevelTestResult[]>([]);
  const [visits, setVisits] = useState<WebsiteVisit[]>([]);
  const [downloads, setDownloads] = useState<FileDownload[]>([]);

  const [dataLoading, setDataLoading] = useState(true);
  const [activeSection, setActiveSection] =
    useState<Section>("overview");

  

  useEffect(() => {
    const loadDashboard = async () => {
      if (!user || user.email !== "rezazamani8201@gmail.com") {
        return;
      }

      setDataLoading(true);

      const [
        usersResponse,
        testsResponse,
        visitsResponse,
        downloadsResponse,
      ] = await Promise.all([
        supabase
          .from("profiles")
          .select("*")
          .order("created_at", { ascending: false }),

        supabase
          .from("level_test_results")
          .select("*")
          .order("created_at", { ascending: false }),

        supabase
          .from("website_visits")
          .select("*")
          .order("created_at", { ascending: false }),

        supabase
          .from("file_downloads")
          .select("*")
          .order("created_at", { ascending: false }),
      ]);

      if (usersResponse.error) {
        console.error(
          "Error loading users:",
          usersResponse.error
        );
        setUsers([]);
      } else {
        setUsers(usersResponse.data || []);
      }

      if (testsResponse.error) {
        console.error(
          "Error loading level tests:",
          testsResponse.error
        );
        setTestResults([]);
      } else {
        setTestResults(testsResponse.data || []);
      }

      if (visitsResponse.error) {
        console.error(
          "Error loading website visits:",
          visitsResponse.error
        );
        setVisits([]);
      } else {
        setVisits(visitsResponse.data || []);
      }

      if (downloadsResponse.error) {
        console.error(
          "Error loading downloads:",
          downloadsResponse.error
        );
        setDownloads([]);
      } else {
        setDownloads(downloadsResponse.data || []);
      }

      setDataLoading(false);
    };

    loadDashboard();
  }, [user]);

  const uniqueVisitors = useMemo(() => {
    return new Set(
      visits
        .map((visit) => visit.visitor_id)
        .filter(Boolean)
    ).size;
  }, [visits]);

  const getUserName = (userId: string | null) => {
    if (!userId) {
      return "Anonymous visitor";
    }

    const profile = users.find(
      (item) => item.id === userId
    );

    return (
      profile?.username ||
      profile?.email ||
      "Registered user"
    );
  };

  if (loading) {
    return (
      <main style={styles.centerPage}>
        <div style={styles.loadingText}>
          Loading Admin Dashboard...
        </div>
      </main>
    );
  }

  if (!user) {
    return (
      <main style={styles.centerPage}>
        <div style={styles.accessCard}>
          <h1 style={styles.accessTitle}>
            Access Denied
          </h1>

          <p style={styles.muted}>
            Please log in to access the admin panel.
          </p>
        </div>
      </main>
    );
  }

  if (!isAdmin) {
    return (
      <main style={styles.centerPage}>
        <div style={styles.accessCard}>
          <h1 style={styles.accessTitle}>
            Access Denied
          </h1>

          <p style={styles.muted}>
            You do not have permission to access the admin
            panel.
          </p>
        </div>
      </main>
    );
  }

  const renderOverview = () => (
    <>
      <div style={styles.statsGrid}>
        <button
          style={styles.statCard}
          onClick={() => setActiveSection("users")}
        >
          <div style={styles.statIcon}>👥</div>
          <div style={styles.statTitle}>Users</div>
          <div style={styles.statNumber}>
            {users.length}
          </div>
          <div style={styles.statHint}>
            View registered users
          </div>
        </button>

        <button
          style={styles.statCard}
          onClick={() => setActiveSection("tests")}
        >
          <div style={styles.statIcon}>📝</div>
          <div style={styles.statTitle}>
            Level Tests
          </div>
          <div style={styles.statNumber}>
            {testResults.length}
          </div>
          <div style={styles.statHint}>
            View test results
          </div>
        </button>

        <button
          style={styles.statCard}
          onClick={() => setActiveSection("visitors")}
        >
          <div style={styles.statIcon}>🌐</div>
          <div style={styles.statTitle}>
            Unique Visitors
          </div>
          <div style={styles.statNumber}>
            {uniqueVisitors}
          </div>
          <div style={styles.statHint}>
            View website visits
          </div>
        </button>

        <button
          style={styles.statCard}
          onClick={() => setActiveSection("downloads")}
        >
          <div style={styles.statIcon}>📥</div>
          <div style={styles.statTitle}>
            Downloads
          </div>
          <div style={styles.statNumber}>
            {downloads.length}
          </div>
          <div style={styles.statHint}>
            View downloaded files
          </div>
        </button>
      </div>

      <div style={styles.infoGrid}>
        <div style={styles.infoCard}>
          <h2 style={styles.sectionTitle}>
            Website Activity
          </h2>

          <p style={styles.infoText}>
            Total recorded visits:
            <strong> {visits.length}</strong>
          </p>

          <p style={styles.infoText}>
            Unique visitors:
            <strong> {uniqueVisitors}</strong>
          </p>
        </div>

        <div style={styles.infoCard}>
          <h2 style={styles.sectionTitle}>
            Learning Activity
          </h2>

          <p style={styles.infoText}>
            Registered users:
            <strong> {users.length}</strong>
          </p>

          <p style={styles.infoText}>
            Level tests completed:
            <strong> {testResults.length}</strong>
          </p>
        </div>
      </div>
    </>
  );

  const renderUsers = () => (
    <section style={styles.sectionCard}>
      <SectionHeader
        title="Registered Users"
        onBack={() => setActiveSection("overview")}
      />

      {dataLoading ? (
        <p style={styles.muted}>Loading users...</p>
      ) : users.length === 0 ? (
        <p style={styles.muted}>
          No registered users found.
        </p>
      ) : (
        <div style={styles.list}>
          {users.map((profile) => (
            <div
              key={profile.id}
              style={styles.listItem}
            >
              <div>
                <div style={styles.itemTitle}>
                  {profile.username ||
                    "No username"}
                </div>

                <div style={styles.itemSubtitle}>
                  {profile.email || "No email"}
                </div>
              </div>

              <div style={styles.itemDate}>
                {new Date(
                  profile.created_at
                ).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );

  const renderTests = () => (
    <section style={styles.sectionCard}>
      <SectionHeader
        title="Level Test Results"
        onBack={() => setActiveSection("overview")}
      />

      {dataLoading ? (
        <p style={styles.muted}>
          Loading test results...
        </p>
      ) : testResults.length === 0 ? (
        <p style={styles.muted}>
          No level test results found.
        </p>
      ) : (
        <div style={styles.list}>
          {testResults.map((result) => (
            <div
              key={result.id}
              style={styles.listItem}
            >
              <div>
                <div style={styles.itemTitle}>
                  {getUserName(result.user_id)}
                </div>

                <div style={styles.itemSubtitle}>
                  Score: {result.score}/
                  {result.total_questions} •{" "}
                  {result.percentage}% • Level{" "}
                  {result.level}
                </div>
              </div>

              <div style={styles.itemDate}>
                {new Date(
                  result.created_at
                ).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );

  const renderVisitors = () => (
    <section style={styles.sectionCard}>
      <SectionHeader
        title="Website Visitors"
        onBack={() => setActiveSection("overview")}
      />

      <div style={styles.summaryBox}>
        <div>
          <span style={styles.summaryLabel}>
            Total visits
          </span>
          <strong style={styles.summaryNumber}>
            {visits.length}
          </strong>
        </div>

        <div>
          <span style={styles.summaryLabel}>
            Unique visitors
          </span>
          <strong style={styles.summaryNumber}>
            {uniqueVisitors}
          </strong>
        </div>
      </div>

      {dataLoading ? (
        <p style={styles.muted}>
          Loading visitors...
        </p>
      ) : visits.length === 0 ? (
        <p style={styles.muted}>
          No visits have been recorded yet.
        </p>
      ) : (
        <div style={styles.list}>
          {visits.slice(0, 100).map((visit) => (
            <div
              key={visit.id}
              style={styles.listItem}
            >
              <div>
                <div style={styles.itemTitle}>
                  {getUserName(visit.user_id)}
                </div>

                <div style={styles.itemSubtitle}>
                  Page: {visit.page}
                </div>
              </div>

              <div style={styles.itemDate}>
                {new Date(
                  visit.created_at
                ).toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );

  const renderDownloads = () => (
    <section style={styles.sectionCard}>
      <SectionHeader
        title="File Downloads"
        onBack={() => setActiveSection("overview")}
      />

      {dataLoading ? (
        <p style={styles.muted}>
          Loading downloads...
        </p>
      ) : downloads.length === 0 ? (
        <p style={styles.muted}>
          No downloads have been recorded yet.
        </p>
      ) : (
        <div style={styles.list}>
          {downloads.slice(0, 100).map((download) => (
            <div
              key={download.id}
              style={styles.listItem}
            >
              <div>
                <div style={styles.itemTitle}>
                  {download.file_name}
                </div>

                <div style={styles.itemSubtitle}>
                  {getUserName(download.user_id)}
                </div>

                <div style={styles.filePath}>
                  {download.file_path}
                </div>
              </div>

              <div style={styles.itemDate}>
                {new Date(
                  download.created_at
                ).toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );

  return (
    <main style={styles.page}>
      <div style={styles.container}>
        <header style={styles.header}>
          <div>
            <div style={styles.brand}>
              Hedef{" "}
              <span style={styles.brandBlue}>
                English
              </span>
            </div>

            <h1 style={styles.heading}>
              Admin Dashboard
            </h1>

            <p style={styles.subtitle}>
              Manage users, tests, visitors and downloads.
            </p>
          </div>

          <a href="/" style={styles.homeButton}>
            ← Back to Website
          </a>
        </header>

        {dataLoading && (
          <div style={styles.loadingBar}>
            Updating dashboard...
          </div>
        )}

        {activeSection === "overview" &&
          renderOverview()}

        {activeSection === "users" &&
          renderUsers()}

        {activeSection === "tests" &&
          renderTests()}

        {activeSection === "visitors" &&
          renderVisitors()}

        {activeSection === "downloads" &&
          renderDownloads()}
      </div>
    </main>
  );
}

function SectionHeader({
  title,
  onBack,
}: {
  title: string;
  onBack: () => void;
}) {
  return (
    <div style={styles.sectionHeader}>
      <h2 style={styles.sectionTitle}>
        {title}
      </h2>

      <button
        onClick={onBack}
        style={styles.backButton}
      >
        ← Dashboard
      </button>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "#f7f8fc",
    padding: "50px 20px",
  },

  container: {
    maxWidth: "1150px",
    margin: "0 auto",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    gap: "30px",
    marginBottom: "35px",
    flexWrap: "wrap",
  },

  brand: {
    fontSize: "22px",
    fontWeight: 800,
    color: "#173b78",
    marginBottom: "15px",
  },

  brandBlue: {
    color: "#3b82f6",
  },

  heading: {
    margin: 0,
    color: "#173b78",
    fontSize: "38px",
  },

  subtitle: {
    marginTop: "10px",
    color: "#6b7280",
    fontSize: "16px",
  },

  homeButton: {
    textDecoration: "none",
    background: "#173b78",
    color: "#fff",
    padding: "12px 18px",
    borderRadius: "10px",
    fontWeight: 600,
    whiteSpace: "nowrap",
  },

  loadingBar: {
    background: "#eef5ff",
    color: "#2563eb",
    padding: "12px 16px",
    borderRadius: "10px",
    marginBottom: "20px",
    fontSize: "14px",
  },

  statsGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    marginBottom: "30px",
  },

  statCard: {
    border: "none",
    textAlign: "left",
    background: "#fff",
    padding: "28px",
    borderRadius: "18px",
    boxShadow:
      "0 10px 35px rgba(0,0,0,0.06)",
    cursor: "pointer",
    transition: "transform 0.2s ease",
  },

  statIcon: {
    fontSize: "30px",
    marginBottom: "15px",
  },

  statTitle: {
    color: "#173b78",
    fontSize: "18px",
    fontWeight: 700,
    marginBottom: "8px",
  },

  statNumber: {
    color: "#111827",
    fontSize: "34px",
    fontWeight: 800,
  },

  statHint: {
    color: "#8a94a6",
    fontSize: "13px",
    marginTop: "8px",
  },

  infoGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
  },

  infoCard: {
    background: "#fff",
    padding: "28px",
    borderRadius: "18px",
    boxShadow:
      "0 10px 35px rgba(0,0,0,0.06)",
  },

  sectionCard: {
    background: "#fff",
    padding: "30px",
    borderRadius: "18px",
    boxShadow:
      "0 10px 35px rgba(0,0,0,0.06)",
  },

  sectionHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    marginBottom: "25px",
    flexWrap: "wrap",
  },

  sectionTitle: {
    color: "#173b78",
    fontSize: "22px",
    margin: 0,
  },

  backButton: {
    border: "1px solid #dce2ea",
    background: "#fff",
    color: "#173b78",
    padding: "9px 14px",
    borderRadius: "9px",
    cursor: "pointer",
    fontWeight: 600,
  },

  infoText: {
    color: "#6b7280",
    lineHeight: 1.8,
    margin: "8px 0",
  },

  list: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  listItem: {
    border: "1px solid #e8ebf0",
    borderRadius: "12px",
    padding: "18px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    flexWrap: "wrap",
  },

  itemTitle: {
    fontWeight: 700,
    color: "#173b78",
    marginBottom: "5px",
  },

  itemSubtitle: {
    color: "#666",
    fontSize: "14px",
  },

  filePath: {
    color: "#9ca3af",
    fontSize: "12px",
    marginTop: "5px",
  },

  itemDate: {
    color: "#999",
    fontSize: "13px",
  },

  summaryBox: {
    display: "flex",
    gap: "50px",
    background: "#f7f9fc",
    borderRadius: "12px",
    padding: "20px",
    marginBottom: "25px",
    flexWrap: "wrap",
  },

  summaryLabel: {
    display: "block",
    color: "#777",
    fontSize: "13px",
    marginBottom: "5px",
  },

  summaryNumber: {
    display: "block",
    color: "#173b78",
    fontSize: "26px",
  },

  muted: {
    color: "#777",
  },

  centerPage: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f7f8fc",
    padding: "20px",
  },

  loadingText: {
    color: "#173b78",
    fontSize: "18px",
  },

  accessCard: {
    background: "#fff",
    padding: "40px",
    borderRadius: "20px",
    textAlign: "center",
    boxShadow:
      "0 10px 35px rgba(0,0,0,0.08)",
  },

  accessTitle: {
    color: "#173b78",
    marginBottom: "10px",
  },
};