"use client";

import Link from "next/link";

const navStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "11px 18px",
  borderRadius: "10px",
  border: "1px solid #e5e7eb",
  background: "#fff",
  color: "#173b78",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: 600,
};

const boxStyle = {
  background: "#f8fafc",
  padding: "18px",
  borderRadius: "10px",
  marginTop: "15px",
  lineHeight: 1.8,
};

export default function LinkingDevicesComplexSentencesPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        color: "#172033",
        padding: "50px 20px",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <Link
          href="/resources/grammar/b2"
          style={{ ...navStyle, marginBottom: "30px" }}
        >
          ← B2 Grammar
        </Link>

        {/* Hero */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "22px",
            padding: "40px 32px",
            marginBottom: "25px",
            boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "7px 13px",
              borderRadius: "999px",
              background: "#eef4ff",
              color: "#173b78",
              fontSize: "12px",
              fontWeight: 700,
              marginBottom: "15px",
            }}
          >
            B2 GRAMMAR
          </div>

          <h1
            style={{
              color: "#173b78",
              fontSize: "38px",
              lineHeight: 1.25,
              margin: "0 0 15px",
            }}
          >
            Linking Devices & Complex Sentences
          </h1>

          <p
            style={{
              color: "#667085",
              fontSize: "17px",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            Learn how to connect ideas clearly and naturally using advanced
            linking devices and complex sentence structures.
          </p>
        </section>

        {/* What You Will Learn */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "28px",
            marginBottom: "25px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            What You Will Learn
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            In this lesson, you will learn how to organize ideas, show
            relationships between sentences, and build clear complex
            structures.
          </p>

          <ul
            style={{
              color: "#475467",
              lineHeight: 1.9,
              paddingLeft: "22px",
              marginBottom: 0,
            }}
          >
            <li>Adding and connecting ideas</li>
            <li>Showing contrast</li>
            <li>Showing cause and effect</li>
            <li>Showing purpose</li>
            <li>Showing results</li>
            <li>Giving examples</li>
            <li>Showing conditions</li>
            <li>Using concession</li>
            <li>Using reference words</li>
            <li>Building complex sentences</li>
          </ul>
        </section>

        {/* What Are Linking Devices */}
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
            1. What Are Linking Devices?
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Linking devices are words and phrases that connect ideas and show
            the relationship between them.
          </p>

          <div style={boxStyle}>
            <strong>Addition:</strong> furthermore, moreover, in addition
            <br />
            <strong>Contrast:</strong> however, nevertheless, whereas
            <br />
            <strong>Cause:</strong> because, since, due to
            <br />
            <strong>Result:</strong> therefore, consequently, as a result
            <br />
            <strong>Purpose:</strong> so that, in order to
          </div>
        </section>

        {/* Addition */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            2. Adding Ideas
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Use linking expressions such as <strong>in addition</strong>,{" "}
            <strong>furthermore</strong>, and <strong>moreover</strong> to add
            related information.
          </p>

          <div style={boxStyle}>
            The course is affordable. <strong>In addition</strong>, it is
            completely online.
            <br />
            <br />
            The hotel is comfortable. <strong>Furthermore</strong>, it is close
            to the city center.
            <br />
            <br />
            The job is well paid. <strong>Moreover</strong>, it offers flexible
            working hours.
          </div>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            These expressions are especially useful in formal and academic
            English.
          </p>
        </section>

        {/* Contrast */}
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
            3. Showing Contrast
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Use <strong>however</strong>, <strong>nevertheless</strong>,{" "}
            <strong>in contrast</strong>, and <strong>whereas</strong> to show
            differences between ideas.
          </p>

          <div style={boxStyle}>
            The weather was terrible. <strong>However</strong>, we decided to
            continue our trip.
            <br />
            <br />
            The task was difficult. <strong>Nevertheless</strong>, she
            completed it successfully.
            <br />
            <br />
            My brother enjoys cities, <strong>whereas</strong> I prefer the
            countryside.
          </div>
        </section>

        {/* Although */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            4. Although, Even Though, and While
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            These conjunctions introduce a contrast or unexpected situation.
          </p>

          <div style={boxStyle}>
            <strong>Although</strong> it was raining, we went for a walk.
            <br />
            <br />
            <strong>Even though</strong> he was tired, he continued working.
            <br />
            <br />
            <strong>While</strong> I understand your point, I disagree with
            your conclusion.
          </div>
        </section>

        {/* Cause */}
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
            5. Showing Cause
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Use <strong>because</strong>, <strong>since</strong>,{" "}
            <strong>as</strong>, <strong>due to</strong>, and{" "}
            <strong>owing to</strong> to explain reasons.
          </p>

          <div style={boxStyle}>
            We stayed home <strong>because</strong> the weather was terrible.
            <br />
            <br />
            <strong>Since</strong> the roads were closed, we had to wait.
            <br />
            <br />
            The flight was delayed <strong>due to</strong> bad weather.
            <br />
            <br />
            The event was canceled <strong>owing to</strong> technical
            problems.
          </div>
        </section>

        {/* Result */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            6. Showing Results
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Use <strong>therefore</strong>, <strong>consequently</strong>,{" "}
            <strong>as a result</strong>, and <strong>thus</strong> to show
            the result of an action or situation.
          </p>

          <div style={boxStyle}>
            The company increased prices. <strong>As a result</strong>, fewer
            people bought the product.
            <br />
            <br />
            He forgot to set his alarm. <strong>Consequently</strong>, he was
            late for work.
            <br />
            <br />
            The evidence was insufficient. <strong>Therefore</strong>, the
            case was closed.
            <br />
            <br />
            The system was updated and <strong>thus</strong> became more
            reliable.
          </div>
        </section>

        {/* Purpose */}
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
            7. Showing Purpose
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Use <strong>in order to</strong>, <strong>so as to</strong>, and{" "}
            <strong>so that</strong> to explain the purpose of an action.
          </p>

          <div style={boxStyle}>
            She left early <strong>in order to</strong> catch the train.
            <br />
            <br />
            He spoke quietly <strong>so as not to</strong> wake the baby.
            <br />
            <br />
            We left early <strong>so that</strong> we could avoid the traffic.
          </div>
        </section>

        {/* Examples */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            8. Giving Examples
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Use expressions such as <strong>for example</strong>,{" "}
            <strong>for instance</strong>, and <strong>such as</strong> to
            introduce examples.
          </p>

          <div style={boxStyle}>
            There are many ways to improve your English.{" "}
            <strong>For example</strong>, you can listen to podcasts every day.
            <br />
            <br />
            Some activities, <strong>such as</strong> reading and speaking,
            require regular practice.
            <br />
            <br />
            Many countries have beautiful cities.{" "}
            <strong>For instance</strong>, Istanbul attracts millions of
            visitors every year.
          </div>
        </section>

        {/* Condition */}
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
            9. Showing Conditions
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Conditions can be introduced with expressions such as{" "}
            <strong>provided that</strong>, <strong>as long as</strong>,{" "}
            <strong>unless</strong>, and <strong>in case</strong>.
          </p>

          <div style={boxStyle}>
            You can borrow my car <strong>as long as</strong> you drive
            carefully.
            <br />
            <br />
            We will go ahead <strong>provided that</strong> everyone agrees.
            <br />
            <br />
            You won't improve <strong>unless</strong> you practice regularly.
            <br />
            <br />
            Take an umbrella <strong>in case</strong> it rains.
          </div>
        </section>

        {/* Concession */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            10. Concession and Unexpected Results
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Concession means showing that something happened despite another
            fact or expectation.
          </p>

          <div style={boxStyle}>
            <strong>Despite</strong> the heavy traffic, we arrived on time.
            <br />
            <br />
            <strong>In spite of</strong> being tired, she continued studying.
            <br />
            <br />
            <strong>Despite the fact that</strong> he was inexperienced, he
            performed very well.
          </div>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Remember that <strong>despite</strong> and{" "}
            <strong>in spite of</strong> are followed by a noun, pronoun, or
            gerund.
          </p>
        </section>

        {/* Reference Words */}
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
            11. Reference Words
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Words such as <strong>this</strong>, <strong>that</strong>,{" "}
            <strong>these</strong>, and <strong>such</strong> can connect one
            sentence to information mentioned earlier.
          </p>

          <div style={boxStyle}>
            The company changed its policy. <strong>This</strong> caused
            confusion among employees.
            <br />
            <br />
            The team missed several deadlines. <strong>Such behavior</strong>{" "}
            cannot continue.
            <br />
            <br />
            She failed to prepare properly. <strong>That</strong> was the main
            reason for her poor result.
          </div>
        </section>

        {/* Complex Sentences */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            12. Building Complex Sentences
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            A complex sentence contains a main clause and one or more
            dependent clauses.
          </p>

          <div style={boxStyle}>
            <strong>Although</strong> the project was difficult, we completed
            it on time.
            <br />
            <br />
            We canceled the trip <strong>because</strong> the weather was
            dangerous.
            <br />
            <br />
            She studied hard <strong>so that</strong> she could pass the exam.
            <br />
            <br />
            <strong>If</strong> you practice regularly, your English will
            improve.
          </div>
        </section>

        {/* Combining Ideas */}
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
            13. Combining Several Ideas
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            At B2 level, you should be able to connect several ideas naturally
            instead of writing many short sentences.
          </p>

          <div style={boxStyle}>
            <strong>Basic:</strong>
            <br />
            The course was difficult. I practiced every day. I improved
            quickly.
            <br />
            <br />
            <strong>Advanced:</strong>
            <br />
            Although the course was difficult, I practiced every day and, as a
            result, improved quickly.
          </div>

          <div style={boxStyle}>
            <strong>Basic:</strong>
            <br />
            The hotel was expensive. It was comfortable. It was close to the
            beach.
            <br />
            <br />
            <strong>Advanced:</strong>
            <br />
            Although the hotel was expensive, it was extremely comfortable and,
            moreover, it was close to the beach.
          </div>
        </section>

        {/* Formal Linking */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            14. Formal Linking in Academic English
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Formal writing often uses precise linking expressions to make the
            relationship between ideas clear.
          </p>

          <div style={boxStyle}>
            The results were unexpected. <strong>Nevertheless</strong>, they
            were consistent with previous research.
            <br />
            <br />
            The sample size was relatively small.{" "}
            <strong>Therefore</strong>, the findings should be interpreted with
            caution.
            <br />
            <br />
            The method is relatively simple. <strong>Furthermore</strong>, it
            can be applied to different situations.
          </div>
        </section>

        {/* Punctuation */}
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
            15. Punctuation with Linking Devices
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Punctuation is important when using formal linking expressions.
          </p>

          <div style={boxStyle}>
            <strong>Correct:</strong>
            <br />
            The weather was bad. However, we continued our journey.
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            The weather was bad; however, we continued our journey.
            <br />
            <br />
            <strong>Incorrect:</strong>
            <br />
            The weather was bad, however we continued our journey.
          </div>
        </section>

        {/* Common Mistakes */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            16. Common Mistakes
          </h2>

          <div style={boxStyle}>
            <strong>Incorrect:</strong>
            <br />
            Despite it was raining, we went outside.
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            Despite the rain, we went outside.
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            Despite the fact that it was raining, we went outside.
          </div>

          <div style={boxStyle}>
            <strong>Incorrect:</strong>
            <br />
            Because of it was raining, we stayed home.
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            Because it was raining, we stayed home.
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            Because of the rain, we stayed home.
          </div>

          <div style={boxStyle}>
            <strong>Incorrect:</strong>
            <br />
            Although of the problem, we continued.
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            Although there was a problem, we continued.
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            Despite the problem, we continued.
          </div>
        </section>

        {/* Quick Practice */}
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
            Quick Practice
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Complete or combine the sentences using an appropriate linking
            device.
          </p>

          <div style={boxStyle}>
            <strong>1.</strong> The hotel was expensive. It was comfortable.
            <br />
            → The hotel was expensive. <strong>However</strong>, it was
            comfortable.
            <br />
            <br />

            <strong>2.</strong> It was raining. We went for a walk.
            <br />
            → <strong>Although</strong> it was raining, we went for a walk.
            <br />
            <br />

            <strong>3.</strong> He studied hard. He passed the exam.
            <br />
            → He studied hard. <strong>As a result</strong>, he passed the
            exam.
            <br />
            <br />

            <strong>4.</strong> She left early. She wanted to catch the train.
            <br />
            → She left early <strong>in order to</strong> catch the train.
            <br />
            <br />

            <strong>5.</strong> You can use my laptop. You must be careful.
            <br />
            → You can use my laptop <strong>as long as</strong> you are
            careful.
            <br />
            <br />

            <strong>6.</strong> The flight was delayed because of bad weather.
            <br />
            → The flight was delayed <strong>due to</strong> bad weather.
            <br />
            <br />

            <strong>7.</strong> The method is simple. It is also effective.
            <br />
            → The method is simple. <strong>Furthermore</strong>, it is
            effective.
          </div>
        </section>

        {/* Key Point */}
        <section
          style={{
            background: "#173b78",
            color: "#fff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "30px",
          }}
        >
          <h2 style={{ marginTop: 0 }}>Key Point</h2>

          <p style={{ lineHeight: 1.8, marginBottom: 0 }}>
            Strong B2 writing and speaking require more than correct grammar.
            You should also be able to connect ideas clearly using the right
            linking device for addition, contrast, cause, result, purpose,
            condition, and concession.
          </p>
        </section>

        {/* Navigation */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/resources/grammar/b2/cleft-sentences-focus-structures"
            style={navStyle}
          >
            ← Previous Lesson
          </Link>

          <Link
            href="/resources/grammar/b2/advanced-communication-functional-english"
            style={{
              ...navStyle,
              background: "#173b78",
              color: "#fff",
              border: "1px solid #173b78",
            }}
          >
            Next Lesson →
          </Link>
        </div>
      </div>
    </main>
  );
}