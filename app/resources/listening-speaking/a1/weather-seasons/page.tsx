"use client";

import Link from "next/link";

const sectionStyle = {
  background: "#fff",
  border: "1px solid #e5eaf0",
  borderRadius: "18px",
  padding: "30px",
  marginBottom: "25px",
  boxShadow: "0 5px 18px rgba(0,0,0,0.03)",
};

const phraseStyle = {
  background: "#f8fafc",
  border: "1px solid #e5eaf0",
  borderRadius: "12px",
  padding: "16px 18px",
  marginBottom: "12px",
};

export default function WeatherSeasonsPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        color: "#172033",
        padding: "50px 20px",
      }}
    >
      <div style={{ maxWidth: "950px", margin: "0 auto" }}>
        <Link
          href="/resources/listening-speaking/a1"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "11px 18px",
            background: "#fff",
            color: "#173b78",
            border: "1px solid #dbe2ea",
            borderRadius: "10px",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: 600,
            marginBottom: "30px",
          }}
        >
          ← A1 Listening & Speaking
        </Link>

        <section
          style={{
            background: "#fff",
            borderRadius: "20px",
            padding: "40px 30px",
            border: "1px solid #e5eaf0",
            marginBottom: "30px",
            boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "7px 12px",
              borderRadius: "999px",
              background: "#eef4ff",
              color: "#173b78",
              fontSize: "12px",
              fontWeight: 700,
              marginBottom: "15px",
            }}
          >
            LISTENING & SPEAKING — A1
          </div>

          <h1
            style={{
              fontSize: "42px",
              lineHeight: 1.15,
              color: "#173b78",
              margin: "0 0 15px",
            }}
          >
            Weather & Seasons
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#667085",
              margin: 0,
            }}
          >
            Learn how to talk about the weather, seasons, temperatures, and
            your favorite kind of weather.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Learning Goals
          </h2>

          <ul
            style={{
              lineHeight: 1.9,
              color: "#4b5563",
              paddingLeft: "22px",
            }}
          >
            <li>Describe the weather.</li>
            <li>Talk about the four seasons.</li>
            <li>Ask and answer questions about the weather.</li>
            <li>Talk about temperature.</li>
            <li>Practice simple conversations about weather and seasons.</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            1. Weather Words
          </h2>

          <div style={phraseStyle}>
            <strong>sunny</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              It is sunny today.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>cloudy</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              It is cloudy this morning.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>rainy</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              It is rainy today.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>windy</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              It is very windy outside.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>snowy</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              It is snowy in the mountains.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>foggy</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              It is foggy this morning.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>stormy</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              The weather is stormy.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>hot</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              It is very hot today.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>cold</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              It is cold outside.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>cool</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              The weather is cool today.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            2. The Four Seasons
          </h2>

          <div style={phraseStyle}>
            <strong>Spring</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              Spring is usually mild and rainy.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>Summer</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              Summer is usually hot and sunny.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>Autumn</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              Autumn is often cool and windy.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>Winter</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              Winter is usually cold.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            3. Talking About the Weather
          </h2>

          <div style={phraseStyle}>
            <strong>It is sunny today.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>It is raining.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>It is very cold outside.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>It is hot and sunny.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>It is cloudy today.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>It is windy this morning.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>It looks like rain.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>The weather is beautiful today.</strong>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            4. Asking About the Weather
          </h2>

          <div style={phraseStyle}>
            <strong>What is the weather like?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>How is the weather today?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Is it raining?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Is it cold outside?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Is it sunny today?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What is the temperature?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Is it going to rain?</strong>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            5. Talking About Temperature
          </h2>

          <div style={phraseStyle}>
            <strong>It is 30 degrees.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>It is 20 degrees today.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>It is very hot.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>It is quite cold.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>It is warm today.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>It is a little cold.</strong>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            6. Favorite Seasons
          </h2>

          <div style={phraseStyle}>
            <strong>My favorite season is summer.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>I like spring because it is warm.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>I love winter because I like snow.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Autumn is my favorite season.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>I don&apos;t like very hot weather.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>I prefer cool weather.</strong>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            7. Listening Practice
          </h2>

          <p style={{ color: "#667085", lineHeight: 1.7 }}>
            Read the conversation carefully and imagine that you are hearing
            it between two friends.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "14px",
              padding: "22px",
              lineHeight: 1.9,
            }}
          >
            <p>
              <strong>Emma:</strong> What is the weather like today?
            </p>

            <p>
              <strong>Jack:</strong> It is sunny and warm.
            </p>

            <p>
              <strong>Emma:</strong> That&apos;s nice. Is it windy?
            </p>

            <p>
              <strong>Jack:</strong> No, it isn&apos;t. It is very calm.
            </p>

            <p>
              <strong>Emma:</strong> What is the temperature?
            </p>

            <p>
              <strong>Jack:</strong> It is about 25 degrees.
            </p>

            <p>
              <strong>Emma:</strong> Perfect! Let&apos;s go for a walk.
            </p>

            <p>
              <strong>Jack:</strong> Good idea!
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            8. Speaking Practice
          </h2>

          <p style={{ color: "#667085", lineHeight: 1.7 }}>
            Answer these questions aloud.
          </p>

          <div style={phraseStyle}>
            <strong>What is the weather like today?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What is your favorite season?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Do you like hot weather?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Do you like cold weather?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Do you like rainy days?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What do you usually do on a sunny day?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What do you do when it rains?</strong>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            9. Role Play
          </h2>

          <p style={{ color: "#667085", lineHeight: 1.7 }}>
            Imagine you are talking to a friend about tomorrow&apos;s
            weather.
          </p>

          <div
            style={{
              background: "#eef4ff",
              borderRadius: "14px",
              padding: "22px",
              lineHeight: 1.9,
            }}
          >
            <p>
              <strong>You:</strong> What is the weather going to be like
              tomorrow?
            </p>

            <p>
              <strong>Friend:</strong> I think it will be ______.
            </p>

            <p>
              <strong>You:</strong> Will it be hot or cold?
            </p>

            <p>
              <strong>Friend:</strong> It will be ______.
            </p>

            <p>
              <strong>You:</strong> Will it rain?
            </p>

            <p>
              <strong>Friend:</strong> Yes, it will. / No, it won&apos;t.
            </p>

            <p>
              <strong>You:</strong> What should we do?
            </p>

            <p>
              <strong>Friend:</strong> Let&apos;s ______.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            10. Quick Practice
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Complete the sentences:
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "14px",
              padding: "22px",
              lineHeight: 2,
            }}
          >
            <p>1. It is ______ today. (sun)</p>
            <p>2. Winter is usually ______.</p>
            <p>3. Summer is usually ______ and sunny.</p>
            <p>4. What is the weather ______?</p>
            <p>5. What is the ______ today?</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Useful Expressions
          </h2>

          <div style={phraseStyle}>
            <strong>What is the weather like?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>How is the weather today?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>It is sunny today.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>It is raining.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>It is very cold outside.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What is the temperature?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>My favorite season is summer.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>I prefer cool weather.</strong>
          </div>
        </section>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "15px",
            flexWrap: "wrap",
            marginTop: "35px",
          }}
        >
          <Link
            href="/resources/listening-speaking/a1/free-time-hobbies"
            style={{
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
            }}
          >
            ← Free Time & Hobbies
          </Link>

          <Link
            href="/resources/listening-speaking/a1/everyday-conversations"
            style={{
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
            }}
          >
            Next: Everyday Conversations →
          </Link>
        </div>
      </div>
    </main>
  );
}