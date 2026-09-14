"use client";

import Link from "next/link";

const buttonStyle = {
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
};

export default function FirstConditionalPage() {
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
          href="/resources/grammar/b1"
          style={{
            ...buttonStyle,
            marginBottom: "30px",
          }}
        >
          ← B1 Grammar
        </Link>

        {/* Hero */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "20px",
            padding: "40px 30px",
            marginBottom: "25px",
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
            B1 GRAMMAR
          </div>

          <h1
            style={{
              fontSize: "40px",
              lineHeight: 1.2,
              color: "#173b78",
              margin: "0 0 15px",
            }}
          >
            First Conditional
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#667085",
              margin: 0,
            }}
          >
            Learn how to talk about real and possible future situations and
            their likely results using the First Conditional.
          </p>
        </section>

        {/* Learning Goals */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Learning Goals
          </h2>

          <ul style={{ lineHeight: 1.9, color: "#475467" }}>
            <li>Understand the structure of the First Conditional.</li>
            <li>Talk about real and possible future situations.</li>
            <li>Describe likely results of future conditions.</li>
            <li>Use if, unless, when, and other time expressions correctly.</li>
            <li>Use the First Conditional in everyday conversations.</li>
          </ul>
        </section>

        {/* What Is First Conditional */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            1. What Is the First Conditional?
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            We use the First Conditional to talk about a future situation that
            is possible or likely, and the result that may happen because of
            it.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              marginTop: "20px",
              lineHeight: 2,
            }}
          >
            <p>
              <strong>
                If it rains, I will stay at home.
              </strong>
            </p>

            <p>
              → The rain is a possible future condition.
              <br />
              → Staying at home is the possible result.
            </p>
          </div>
        </section>

        {/* Form */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            2. Form
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            The basic structure is:
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              marginTop: "20px",
              lineHeight: 2,
            }}
          >
            <p style={{ fontFamily: "monospace" }}>
              If + Present Simple, will + base verb
            </p>

            <p>
              <strong>If I study, I will pass the exam.</strong>
            </p>

            <p>
              <strong>If she comes early, we will have coffee together.</strong>
            </p>

            <p>
              <strong>If they leave now, they will arrive on time.</strong>
            </p>
          </div>

          <p style={{ lineHeight: 1.8, marginTop: "20px" }}>
            The condition uses the <strong>Present Simple</strong>, while the
            result normally uses <strong>will + base verb</strong>.
          </p>
        </section>

        {/* Important Rule */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            3. Important Rule
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Do <strong>not</strong> normally use <strong>will</strong> directly
            after <strong>if</strong> in the First Conditional.
          </p>

          <div style={{ lineHeight: 2, marginTop: "20px" }}>
            <p>
              ❌ If I <strong>will study</strong>, I will pass.
            </p>

            <p>
              ✅ If I <strong>study</strong>, I will pass.
            </p>

            <p>
              ❌ If she <strong>will come</strong>, we will start.
            </p>

            <p>
              ✅ If she <strong>comes</strong>, we will start.
            </p>
          </div>
        </section>

        {/* Two Word Orders */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            4. Two Possible Word Orders
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            The two parts can change position without changing the meaning.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              marginTop: "20px",
              lineHeight: 2,
            }}
          >
            <p>
              <strong>If I finish work early, I will call you.</strong>
            </p>

            <p>
              <strong>I will call you if I finish work early.</strong>
            </p>
          </div>

          <p style={{ lineHeight: 1.8, marginTop: "20px" }}>
            When the sentence starts with <strong>if</strong>, use a comma
            between the two clauses.
          </p>
        </section>

        {/* Uses */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            5. Common Uses
          </h2>

          <h3 style={{ color: "#173b78" }}>
            Real Future Possibilities
          </h3>

          <p style={{ lineHeight: 1.8 }}>
            If I have time, I will help you.
          </p>

          <p style={{ lineHeight: 1.8 }}>
            If the weather is good, we will go hiking.
          </p>

          <h3 style={{ color: "#173b78" }}>
            Warnings
          </h3>

          <p style={{ lineHeight: 1.8 }}>
            If you don&apos;t hurry, you will miss the bus.
          </p>

          <p style={{ lineHeight: 1.8 }}>
            If you touch that wire, you will get hurt.
          </p>

          <h3 style={{ color: "#173b78" }}>
            Plans and Consequences
          </h3>

          <p style={{ lineHeight: 1.8 }}>
            If I finish my homework tonight, I will watch a movie.
          </p>

          <p style={{ lineHeight: 1.8 }}>
            If we save enough money, we will travel next summer.
          </p>
        </section>

        {/* Unless */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            6. Using Unless
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            <strong>Unless</strong> means &quot;if not&quot;.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              marginTop: "20px",
              lineHeight: 2,
            }}
          >
            <p>
              <strong>Unless you hurry, you will miss the bus.</strong>
            </p>

            <p>
              = If you don&apos;t hurry, you will miss the bus.
            </p>

            <p>
              <strong>Unless it rains, we will play outside.</strong>
            </p>

            <p>
              = If it doesn&apos;t rain, we will play outside.
            </p>
          </div>

          <p style={{ lineHeight: 1.8, marginTop: "20px" }}>
            Avoid using another negative after <strong>unless</strong>.
          </p>

          <p style={{ lineHeight: 1.8 }}>
            ❌ Unless you don&apos;t study, you won&apos;t pass.
          </p>

          <p style={{ lineHeight: 1.8 }}>
            ✅ Unless you study, you won&apos;t pass.
          </p>
        </section>

        {/* Other Modals */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            7. Other Possible Result Forms
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            The result clause does not always have to use <strong>will</strong>.
            We can also use other modal verbs or an imperative.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              marginTop: "20px",
              lineHeight: 2,
            }}
          >
            <p>
              If you finish early, you <strong>can</strong> go home.
            </p>

            <p>
              If you feel sick, you <strong>should</strong> see a doctor.
            </p>

            <p>
              If you need help, you <strong>can</strong> call me.
            </p>

            <p>
              If you see Sarah, <strong>tell</strong> her to call me.
            </p>
          </div>
        </section>

        {/* When */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            8. If and When
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            <strong>If</strong> suggests a condition that may or may not
            happen.
          </p>

          <p style={{ lineHeight: 1.8 }}>
            <strong>When</strong> suggests that the speaker expects the event
            to happen.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              marginTop: "20px",
              lineHeight: 2,
            }}
          >
            <p>
              <strong>If</strong> I have enough money, I will buy a new laptop.
            </p>

            <p>
              → It is possible, but I am not sure.
            </p>

            <p>
              <strong>When</strong> I finish work, I will call you.
            </p>

            <p>
              → I expect to finish work.
            </p>
          </div>
        </section>

        {/* Unless / If Not Comparison */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            9. Compare the Meanings
          </h2>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>
              <strong>If you study, you will pass.</strong>
              <br />
              → Studying is a condition for the expected result.
            </p>

            <p>
              <strong>If you don&apos;t study, you won&apos;t pass.</strong>
              <br />
              → Not studying has a negative result.
            </p>

            <p>
              <strong>Unless you study, you won&apos;t pass.</strong>
              <br />
              → This has almost the same meaning as the sentence above.
            </p>
          </div>
        </section>

        {/* Everyday Examples */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            10. Everyday Examples
          </h2>

          <div style={{ lineHeight: 2 }}>
            <p>
              If I get home early, I will cook dinner.
            </p>

            <p>
              If you need anything, I will help you.
            </p>

            <p>
              If she calls me, I will tell her the news.
            </p>

            <p>
              If we don&apos;t leave now, we will be late.
            </p>

            <p>
              If the weather improves, they will go to the beach.
            </p>

            <p>
              If he studies harder, he will get better results.
            </p>
          </div>
        </section>

        {/* Common Mistakes */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            11. Common Mistakes
          </h2>

          <div style={{ lineHeight: 1.9 }}>
            <p>
              ❌ If it will rain, I will stay home.
              <br />
              ✅ If it rains, I will stay home.
            </p>

            <p>
              ❌ If I will have time, I will call you.
              <br />
              ✅ If I have time, I will call you.
            </p>

            <p>
              ❌ If she study, she will pass.
              <br />
              ✅ If she studies, she will pass.
            </p>

            <p>
              ❌ If he doesn&apos;t will come, we will leave.
              <br />
              ✅ If he doesn&apos;t come, we will leave.
            </p>

            <p>
              ❌ Unless you don&apos;t hurry, you will be late.
              <br />
              ✅ Unless you hurry, you will be late.
            </p>
          </div>
        </section>

        {/* Practice */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            12. Practice
          </h2>

          <p style={{ color: "#667085", lineHeight: 1.7 }}>
            Complete the sentences with the correct form.
          </p>

          <ol style={{ lineHeight: 2.1 }}>
            <li>
              If it __________ (rain), we will stay at home.
            </li>

            <li>
              If I __________ (finish) work early, I will call you.
            </li>

            <li>
              She will be happy if she __________ (pass) the exam.
            </li>

            <li>
              If they don&apos;t leave now, they __________ (miss) the train.
            </li>

            <li>
              If you __________ (need) help, you can call me.
            </li>

            <li>
              Unless he __________ (study), he won&apos;t pass the test.
            </li>

            <li>
              If the weather __________ (be) good, we will go hiking.
            </li>

            <li>
              When I __________ (get) home, I will send you a message.
            </li>

            <li>
              If she __________ (not / hurry), she will be late.
            </li>

            <li>
              If we save enough money, we __________ (travel) next summer.
            </li>

            <li>
              If you see Tom, __________ (tell) him to call me.
            </li>

            <li>
              If I have enough time, I __________ (help) you with the project.
            </li>
          </ol>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              marginTop: "25px",
              lineHeight: 2,
            }}
          >
            <h3 style={{ color: "#173b78", marginTop: 0 }}>
              Answers
            </h3>

            <p>
              1. rains
              <br />
              2. finish
              <br />
              3. passes
              <br />
              4. will miss
              <br />
              5. need
              <br />
              6. studies
              <br />
              7. is
              <br />
              8. get
              <br />
              9. doesn&apos;t hurry
              <br />
              10. will travel
              <br />
              11. tell
              <br />
              12. will help
            </p>
          </div>
        </section>

        {/* Quick Review */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "30px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Quick Review
          </h2>

          <ul style={{ lineHeight: 1.9 }}>
            <li>
              Use the First Conditional for real or possible future
              situations.
            </li>

            <li>
              The basic structure is{" "}
              <strong>if + Present Simple, will + base verb</strong>.
            </li>

            <li>
              Do not normally use <strong>will</strong> after{" "}
              <strong>if</strong>.
            </li>

            <li>
              Use <strong>unless</strong> to mean &quot;if not&quot;.
            </li>

            <li>
              The result can also use modal verbs such as{" "}
              <strong>can</strong> or <strong>should</strong>.
            </li>

            <li>
              The two clauses can change order without changing the basic
              meaning.
            </li>
          </ul>
        </section>

        {/* Navigation */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "15px",
            flexWrap: "wrap",
            marginTop: "30px",
          }}
        >
          <Link
            href="/resources/grammar/b1/future-forms"
            style={buttonStyle}
          >
            ← Future Forms
          </Link>

          <Link
            href="/resources/grammar/b1/second-conditional"
            style={buttonStyle}
          >
            Next: Second Conditional →
          </Link>
        </div>
      </div>
    </main>
  );
}