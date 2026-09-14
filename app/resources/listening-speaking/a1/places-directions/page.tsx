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

export default function PlacesDirectionsPage() {
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
            Places & Directions
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#667085",
              margin: 0,
            }}
          >
            Learn how to talk about common places and ask for and give simple
            directions.
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
            <li>Name common places in a town or city.</li>
            <li>Ask where a place is.</li>
            <li>Understand simple directions.</li>
            <li>Give basic directions.</li>
            <li>Practice asking for help in the street.</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            1. Common Places
          </h2>

          <div style={phraseStyle}>
            <strong>school</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              My children go to school.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>hospital</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              The hospital is near my house.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>bank</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              The bank is next to the supermarket.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>supermarket</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              I go to the supermarket on Saturday.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>pharmacy</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              There is a pharmacy near here.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>restaurant</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              There is a good restaurant on this street.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>bus stop</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              The bus stop is near the bank.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>train station</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              The train station is in the city center.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>park</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              The park is behind the school.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            2. Asking for Directions
          </h2>

          <div style={phraseStyle}>
            <strong>Excuse me, where is the bank?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Where is the nearest supermarket?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>How can I get to the train station?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Is there a pharmacy near here?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Can you help me find the hospital?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Is this the way to the city center?</strong>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            3. Basic Directions
          </h2>

          <div style={phraseStyle}>
            <strong>Go straight.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Turn left.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Turn right.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Go straight for two minutes.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Turn left at the traffic lights.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Turn right at the corner.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>It&apos;s on your left.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>It&apos;s on your right.</strong>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            4. Location Words
          </h2>

          <div style={phraseStyle}>
            <strong>next to</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              The bank is next to the supermarket.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>opposite</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              The pharmacy is opposite the bank.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>near</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              The restaurant is near the park.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>behind</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              The school is behind the library.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>in front of</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              The bus stop is in front of the bank.
            </p>
          </div>

          <div style={phraseStyle}>
            <strong>between</strong>
            <p style={{ margin: "6px 0 0", color: "#667085" }}>
              The cafe is between the bank and the pharmacy.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            5. Useful Street Words
          </h2>

          <div style={phraseStyle}>
            <strong>street</strong>
          </div>

          <div style={phraseStyle}>
            <strong>road</strong>
          </div>

          <div style={phraseStyle}>
            <strong>corner</strong>
          </div>

          <div style={phraseStyle}>
            <strong>traffic lights</strong>
          </div>

          <div style={phraseStyle}>
            <strong>crossing</strong>
          </div>

          <div style={phraseStyle}>
            <strong>city center</strong>
          </div>

          <div style={phraseStyle}>
            <strong>building</strong>
          </div>

          <div style={phraseStyle}>
            <strong>block</strong>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            6. Listening Practice
          </h2>

          <p style={{ color: "#667085", lineHeight: 1.7 }}>
            Read the conversation carefully and imagine that you are hearing
            it on the street.
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
              <strong>Tourist:</strong> Excuse me. Where is the train station?
            </p>

            <p>
              <strong>Man:</strong> Go straight and turn right at the traffic
              lights.
            </p>

            <p>
              <strong>Tourist:</strong> Is it far?
            </p>

            <p>
              <strong>Man:</strong> No, it&apos;s about five minutes from here.
            </p>

            <p>
              <strong>Tourist:</strong> Is it on the left or the right?
            </p>

            <p>
              <strong>Man:</strong> It&apos;s on your left.
            </p>

            <p>
              <strong>Tourist:</strong> Thank you very much.
            </p>

            <p>
              <strong>Man:</strong> You&apos;re welcome.
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
            <strong>Where is the nearest supermarket?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Is there a pharmacy near your home?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Where is your favorite restaurant?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>How do you get to work or school?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Is your home near the city center?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>What places are near your home?</strong>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            8. Role Play
          </h2>

          <p style={{ color: "#667085", lineHeight: 1.7 }}>
            Imagine you are lost in a new city. Ask someone for directions to
            the train station.
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
              <strong>You:</strong> Excuse me. Where is the ______?
            </p>

            <p>
              <strong>Person:</strong> Go ______.
            </p>

            <p>
              <strong>You:</strong> Do I turn left or right?
            </p>

            <p>
              <strong>Person:</strong> Turn ______ at the ______.
            </p>

            <p>
              <strong>You:</strong> Is it far?
            </p>

            <p>
              <strong>Person:</strong> No, it&apos;s ______ minutes from here.
            </p>

            <p>
              <strong>You:</strong> Thank you very much.
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
            <p>1. Go ______.</p>
            <p>2. Turn ______ at the corner.</p>
            <p>3. The bank is ______ to the supermarket.</p>
            <p>4. The pharmacy is ______ the bank.</p>
            <p>5. The restaurant is ______ the park.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Useful Expressions
          </h2>

          <div style={phraseStyle}>
            <strong>Excuse me, where is...?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>How can I get to...?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Is there a ... near here?</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Go straight.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Turn left.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>Turn right.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>It&apos;s on your left.</strong>
          </div>

          <div style={phraseStyle}>
            <strong>It&apos;s on your right.</strong>
          </div>
        </section>

        {/* Bottom Navigation */}
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
            href="/resources/listening-speaking/a1/shopping"
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
            ← Shopping
          </Link>

          <Link
            href="/resources/listening-speaking/a1/restaurant"
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
            Next: At the Restaurant →
          </Link>
        </div>
      </div>
    </main>
  );
}