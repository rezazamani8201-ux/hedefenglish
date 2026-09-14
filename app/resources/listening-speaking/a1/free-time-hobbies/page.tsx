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

export default function FreeTimeHobbiesPage() {
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
            Free Time & Hobbies
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#667085",
              margin: 0,
            }}
          >
            Learn how to talk about your free time, hobbies, interests, and
            activities you enjoy.
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
            <li>Talk about your hobbies and free-time activities.</li>
            <li>Say what you like and dislike doing.</li>
            <li>Ask someone about their hobbies.</li>
            <li>Talk about how often you do an activity.</li>
            <li>Practice simple conversations about free time.</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            1. Common Hobbies
          </h2>

          <div style={phraseStyle}>
            <strong>reading</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              I like reading books.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>watching movies</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              I enjoy watching movies.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>listening to music</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              She likes listening to music.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>cooking</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              He enjoys cooking.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>playing football</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              They play football on weekends.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>swimming</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              I go swimming on Sundays.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>drawing</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              She likes drawing pictures.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>playing games</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              I sometimes play computer games.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>traveling</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              We love traveling.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>taking photos</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              He likes taking photos.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            2. Talking About Likes and Dislikes
          </h2>

          <div style={phraseStyle}>
            <strong>I like reading.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>I love listening to music.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>I enjoy watching movies.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>I don&apos;t like cooking.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>I don&apos;t enjoy playing tennis.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>My favorite hobby is swimming.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>My favorite activity is reading.</strong>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            3. Asking About Hobbies
          </h2>

          <div style={phraseStyle}>
            <strong>What do you do in your free time?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What are your hobbies?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What do you like doing?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Do you like reading?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Do you play any sports?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What is your favorite hobby?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What do you usually do at the weekend?</strong>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            4. How Often?
          </h2>

          <p style={{ color: "#667085", lineHeight: 1.7 }}>
            Use these expressions to talk about how often you do an activity.
          </p>

          <div style={phraseStyle}>
            <strong>every day</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              I read every day.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>every weekend</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              I play football every weekend.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>once a week</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              I go swimming once a week.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>twice a week</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              She goes to the gym twice a week.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>sometimes</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              I sometimes watch movies.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>usually</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              I usually listen to music in the evening.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>never</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              I never play golf.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            5. Talking About Free Time
          </h2>

          <div style={phraseStyle}>
            <strong>
              In my free time, I like watching movies.
            </strong>
          </div>

          <div style={phraseStyle}>
            <strong>
              At the weekend, I usually meet my friends.
            </strong>
          </div>

          <div style={phraseStyle}>
            <strong>
              After work, I like listening to music.
            </strong>
          </div>

          <div style={phraseStyle}>
            <strong>
              I usually stay at home and read books.
            </strong>
          </div>

          <div style={phraseStyle}>
            <strong>
              Sometimes I go out with my friends.
            </strong>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            6. Listening Practice
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
              <strong>Anna:</strong> What do you do in your free time?
            </p>

            <p>
              <strong>Ben:</strong> I like watching movies and listening to
              music.
            </p>

            <p>
              <strong>Anna:</strong> Do you play any sports?
            </p>

            <p>
              <strong>Ben:</strong> Yes. I play football every weekend.
            </p>

            <p>
              <strong>Anna:</strong> That sounds fun. Do you like reading?
            </p>

            <p>
              <strong>Ben:</strong> Yes, I do. I usually read before bed.
            </p>

            <p>
              <strong>Anna:</strong> What is your favorite book?
            </p>

            <p>
              <strong>Ben:</strong> My favorite book is a mystery story.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            7. Speaking Practice
          </h2>

          <p style={{ color: "#667085", lineHeight: 1.7 }}>
            Answer these questions aloud.
          </p>

          <div style={phraseStyle}>
            <strong>What do you do in your free time?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What are your hobbies?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Do you like watching movies?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Do you like reading books?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What sports do you like?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>How often do you meet your friends?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What do you usually do at the weekend?</strong>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            8. Role Play
          </h2>

          <p style={{ color: "#667085", lineHeight: 1.7 }}>
            Imagine you are meeting a new friend. Ask about their hobbies
            and talk about your own interests.
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
              <strong>You:</strong> What do you do in your free time?
            </p>

            <p>
              <strong>Friend:</strong> I like ______.
            </p>

            <p>
              <strong>You:</strong> Do you like ______?
            </p>

            <p>
              <strong>Friend:</strong> Yes, I do. / No, I don&apos;t.
            </p>

            <p>
              <strong>You:</strong> What is your favorite hobby?
            </p>

            <p>
              <strong>Friend:</strong> My favorite hobby is ______.
            </p>

            <p>
              <strong>You:</strong> I like ______ in my free time.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            9. Quick Practice
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
            <p>1. I like ______ books.</p>
            <p>2. I enjoy ______ to music.</p>
            <p>3. My favorite hobby is ______.</p>
            <p>4. I play football every ______.</p>
            <p>5. I ______ watch movies with my friends.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Useful Expressions
          </h2>

          <div style={phraseStyle}>
            <strong>What do you do in your free time?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What are your hobbies?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>I like reading books.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>I enjoy listening to music.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>I love watching movies.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>My favorite hobby is swimming.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>I usually meet my friends at the weekend.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>I sometimes go out in the evening.</strong>
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
            href="/resources/listening-speaking/a1/travel-transport"
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
            ← Travel & Transport
          </Link>

          <Link
            href="/resources/listening-speaking/a1/weather-seasons"
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
            Next: Weather & Seasons →
          </Link>
        </div>
      </div>
    </main>
  );
}