"use client";

import { useState } from "react";
import Link from "next/link";
import { supabase } from "@/app/lib/supabase";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username,
        },
      },
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert(
      "Account created successfully. Please check your email to confirm your account."
    );

    window.location.href = "/login";
  };

  const handleGoogleRegister = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/`,
      },
    });

    if (error) {
      alert(error.message);
    }
  };

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
          width: "100%",
          maxWidth: "430px",
          background: "#ffffff",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <h1
            style={{
              margin: 0,
              color: "#173b78",
              fontSize: "30px",
              fontWeight: 700,
            }}
          >
            Hedef <span style={{ color: "#2563eb" }}>English</span>
          </h1>

          <p
            style={{
              marginTop: "12px",
              color: "#666",
              fontSize: "15px",
            }}
          >
            Create your account to get started.
          </p>
        </div>

        <form onSubmit={handleRegister}>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: 600,
              color: "#333",
            }}
          >
            Username
          </label>

          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "14px 15px",
              marginBottom: "20px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              fontSize: "15px",
            }}
          />

          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: 600,
              color: "#333",
            }}
          >
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "14px 15px",
              marginBottom: "20px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              fontSize: "15px",
            }}
          />

          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: 600,
              color: "#333",
            }}
          >
            Password
          </label>

          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "14px 15px",
              marginBottom: "22px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              fontSize: "15px",
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "14px",
              border: "none",
              borderRadius: "10px",
              background: "#173b78",
              color: "#fff",
              fontSize: "16px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Create Account
          </button>
        </form>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            margin: "25px 0",
            color: "#999",
            fontSize: "14px",
          }}
        >
          <div style={{ flex: 1, height: "1px", background: "#ddd" }} />
          or
          <div style={{ flex: 1, height: "1px", background: "#ddd" }} />
        </div>

        <button
          type="button"
          onClick={handleGoogleRegister}
          style={{
            width: "100%",
            padding: "13px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            background: "#fff",
            color: "#333",
            fontSize: "15px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Continue with Google
        </button>

        <p
          style={{
            textAlign: "center",
            marginTop: "25px",
            color: "#666",
            fontSize: "14px",
          }}
        >
          Already have an account?{" "}
          <Link
            href="/login"
            style={{
              color: "#173b78",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Log in
          </Link>
        </p>
      </div>
    </main>
  );
}