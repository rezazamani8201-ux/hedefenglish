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

export default function GerundsInfinitivesVerbPatternsPage() {
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
            Gerunds, Infinitives & Verb Patterns
          </h1>

          <p
            style={{
              color: "#667085",
              fontSize: "17px",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            Learn how to choose between gerunds and infinitives and use
            advanced verb patterns accurately in natural and formal English.
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
            In this lesson, you will learn which verbs are followed by
            gerunds, infinitives, or both, and how meaning can change depending
            on the structure you choose.
          </p>

          <ul
            style={{
              color: "#475467",
              lineHeight: 1.9,
              paddingLeft: "22px",
              marginBottom: 0,
            }}
          >
            <li>Gerunds and their functions</li>
            <li>Infinitives and their functions</li>
            <li>Verbs followed by gerunds</li>
            <li>Verbs followed by infinitives</li>
            <li>Verbs followed by objects and infinitives</li>
            <li>Verbs followed by either form</li>
            <li>Structures where meaning changes</li>
            <li>Advanced verb patterns</li>
          </ul>
        </section>

        {/* Gerunds */}
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
            1. Gerunds
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            A gerund is the <strong>-ing</strong> form of a verb used as a
            noun.
          </p>

          <div style={boxStyle}>
            <strong>Swimming</strong> is good exercise.
            <br />
            <br />
            I enjoy <strong>reading</strong>.
            <br />
            <br />
            She is interested in <strong>learning</strong> languages.
          </div>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Gerunds can function as subjects, objects, and complements.
          </p>
        </section>

        {/* Infinitives */}
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
            2. Infinitives
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            The infinitive is usually formed with <strong>to + base verb</strong>.
          </p>

          <div style={boxStyle}>
            I want <strong>to improve</strong> my English.
            <br />
            <br />
            She decided <strong>to leave</strong> early.
            <br />
            <br />
            They hope <strong>to win</strong> the competition.
          </div>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Infinitives are often used to express intentions, plans, wishes,
            and purposes.
          </p>
        </section>

        {/* Verbs + Gerund */}
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
            3. Verbs Followed by Gerunds
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Many common verbs are followed by a gerund rather than an
            infinitive.
          </p>

          <div style={boxStyle}>
            <strong>enjoy</strong> → I enjoy learning new things.
            <br />
            <br />
            <strong>avoid</strong> → He avoids driving at night.
            <br />
            <br />
            <strong>admit</strong> → She admitted making a mistake.
            <br />
            <br />
            <strong>deny</strong> → He denied taking the money.
            <br />
            <br />
            <strong>consider</strong> → They are considering moving abroad.
            <br />
            <br />
            <strong>suggest</strong> → She suggested taking a taxi.
            <br />
            <br />
            <strong>recommend</strong> → I recommend visiting the museum.
          </div>
        </section>

        {/* Verbs + Infinitive */}
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
            4. Verbs Followed by Infinitives
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Other verbs are normally followed by a <strong>to-infinitive</strong>.
          </p>

          <div style={boxStyle}>
            <strong>decide</strong> → We decided to stay.
            <br />
            <br />
            <strong>agree</strong> → They agreed to help.
            <br />
            <br />
            <strong>refuse</strong> → He refused to answer.
            <br />
            <br />
            <strong>promise</strong> → She promised to call.
            <br />
            <br />
            <strong>manage</strong> → He managed to solve the problem.
            <br />
            <br />
            <strong>afford</strong> → We cannot afford to buy a new car.
          </div>
        </section>

        {/* Object + Infinitive */}
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
            5. Verb + Object + Infinitive
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Some verbs are followed by an object and then a{" "}
            <strong>to-infinitive</strong>.
          </p>

          <div style={boxStyle}>
            <strong>want</strong> → I want you to stay.
            <br />
            <br />
            <strong>expect</strong> → We expect them to arrive soon.
            <br />
            <br />
            <strong>advise</strong> → She advised me to wait.
            <br />
            <br />
            <strong>encourage</strong> → They encouraged him to apply.
            <br />
            <br />
            <strong>persuade</strong> → She persuaded me to join.
            <br />
            <br />
            <strong>remind</strong> → He reminded us to call.
          </div>
        </section>

        {/* Gerund after Prepositions */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            6. Gerunds After Prepositions
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            After a preposition, use a gerund rather than an infinitive.
          </p>

          <div style={boxStyle}>
            She is interested in <strong>learning</strong> English.
            <br />
            <br />
            He left without <strong>saying</strong> goodbye.
            <br />
            <br />
            They talked about <strong>moving</strong> to another city.
            <br />
            <br />
            I am tired of <strong>waiting</strong>.
          </div>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Remember that <strong>to</strong> can sometimes be a preposition,
            not an infinitive marker.
          </p>

          <div style={boxStyle}>
            I look forward to <strong>meeting</strong> you.
            <br />
            <br />
            She is used to <strong>working</strong> late.
          </div>
        </section>

        {/* Both Forms Same Meaning */}
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
            7. Verbs That Can Take Both Forms
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Some verbs can be followed by either a gerund or an infinitive
            without a major change in meaning.
          </p>

          <div style={boxStyle}>
            <strong>begin</strong>
            <br />
            It began to rain.
            <br />
            It began raining.
            <br />
            <br />

            <strong>start</strong>
            <br />
            She started to work.
            <br />
            She started working.
            <br />
            <br />

            <strong>continue</strong>
            <br />
            He continued to study.
            <br />
            He continued studying.
            <br />
            <br />

            <strong>like</strong>
            <br />
            I like to read.
            <br />
            I like reading.
          </div>
        </section>

        {/* Meaning Changes */}
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
            8. Verbs Where the Meaning Changes
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            With some verbs, choosing a gerund or infinitive changes the
            meaning of the sentence.
          </p>

          <div style={boxStyle}>
            <strong>remember + -ing</strong>
            <br />
            I remember meeting her.
            <br />
            → I have a memory of the event.
            <br />
            <br />

            <strong>remember + to-infinitive</strong>
            <br />
            Remember to lock the door.
            <br />
            → Do not forget to perform the action.
          </div>

          <div style={boxStyle}>
            <strong>stop + -ing</strong>
            <br />
            He stopped smoking.
            <br />
            → He quit the activity.
            <br />
            <br />

            <strong>stop + to-infinitive</strong>
            <br />
            He stopped to smoke.
            <br />
            → He stopped another activity in order to smoke.
          </div>

          <div style={boxStyle}>
            <strong>try + -ing</strong>
            <br />
            Try restarting the computer.
            <br />
            → Experiment with this method.
            <br />
            <br />

            <strong>try + to-infinitive</strong>
            <br />
            Try to restart the computer.
            <br />
            → Make an effort to do it.
          </div>
        </section>

        {/* Regret / Mean / Go On */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            9. More Meaning Changes
          </h2>

          <div style={boxStyle}>
            <strong>regret + -ing</strong>
            <br />
            I regret saying that.
            <br />
            → I am sorry about something I said.
            <br />
            <br />

            <strong>regret + to-infinitive</strong>
            <br />
            We regret to inform you that your application was unsuccessful.
            <br />
            → A formal way of giving bad news.
          </div>

          <div style={boxStyle}>
            <strong>mean + -ing</strong>
            <br />
            This job means working at weekends.
            <br />
            → It involves this activity.
            <br />
            <br />

            <strong>mean + to-infinitive</strong>
            <br />
            I meant to call you.
            <br />
            → I intended to call you.
          </div>

          <div style={boxStyle}>
            <strong>go on + -ing</strong>
            <br />
            She went on talking.
            <br />
            → She continued the same activity.
            <br />
            <br />

            <strong>go on + to-infinitive</strong>
            <br />
            She went on to explain the problem.
            <br />
            → She moved to a new activity.
          </div>
        </section>

        {/* Bare Infinitive */}
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
            10. The Bare Infinitive
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Some structures use the base form of the verb without{" "}
            <strong>to</strong>.
          </p>

          <div style={boxStyle}>
            After modal verbs:
            <br />
            You should <strong>leave</strong> now.
            <br />
            <br />
            After <strong>let</strong>:
            <br />
            Let me <strong>explain</strong>.
            <br />
            <br />
            After <strong>make</strong>:
            <br />
            The teacher made us <strong>repeat</strong> the exercise.
          </div>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            In the passive, however, <strong>make</strong> is followed by a
            to-infinitive.
          </p>

          <div style={boxStyle}>
            We were made <strong>to wait</strong> outside.
          </div>
        </section>

        {/* Perfect Forms */}
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
            11. Perfect Gerunds and Infinitives
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Advanced English can use perfect forms to show that one action
            happened before another.
          </p>

          <div style={boxStyle}>
            <strong>Perfect gerund:</strong>
            <br />
            He denied <strong>having taken</strong> the money.
            <br />
            <br />

            <strong>Perfect infinitive:</strong>
            <br />
            She seems <strong>to have forgotten</strong> the appointment.
          </div>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            These forms are especially useful when the time relationship
            between two actions needs to be clear.
          </p>
        </section>

        {/* Passive Forms */}
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
            12. Passive Gerunds and Infinitives
          </h2>

          <div style={boxStyle}>
            <strong>Passive gerund:</strong>
            <br />
            She dislikes <strong>being criticized</strong>.
            <br />
            <br />

            <strong>Perfect passive gerund:</strong>
            <br />
            He denied <strong>having been informed</strong>.
            <br />
            <br />

            <strong>Passive infinitive:</strong>
            <br />
            The documents need <strong>to be signed</strong>.
            <br />
            <br />

            <strong>Perfect passive infinitive:</strong>
            <br />
            He is believed <strong>to have been promoted</strong>.
          </div>
        </section>

        {/* Advanced Patterns */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            13. Advanced Verb Patterns
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Some verbs can be used in several patterns, but the grammatical
            structure must match the meaning.
          </p>

          <div style={boxStyle}>
            <strong>allow + object + to-infinitive</strong>
            <br />
            The teacher allowed the students to leave.
            <br />
            <br />

            <strong>allow + -ing</strong>
            <br />
            The system allows working remotely.
            <br />
            <br />

            <strong>advise + object + to-infinitive</strong>
            <br />
            She advised me to wait.
            <br />
            <br />

            <strong>advise + -ing</strong>
            <br />
            She advised waiting until morning.
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
            14. Common Mistakes
          </h2>

          <div style={boxStyle}>
            <strong>Incorrect:</strong>
            <br />
            I enjoy to read books.
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            I enjoy reading books.
          </div>

          <div style={boxStyle}>
            <strong>Incorrect:</strong>
            <br />
            She suggested to take a taxi.
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            She suggested taking a taxi.
          </div>

          <div style={boxStyle}>
            <strong>Incorrect:</strong>
            <br />
            I look forward to meet you.
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            I look forward to meeting you.
          </div>

          <div style={boxStyle}>
            <strong>Incorrect:</strong>
            <br />
            He made me to wait.
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            He made me wait.
          </div>

          <div style={boxStyle}>
            <strong>Incorrect:</strong>
            <br />
            She advised me waiting.
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            She advised me to wait.
          </div>
        </section>

        {/* Quick Practice */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Quick Practice
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Complete the sentences using the correct form of the verb.
          </p>

          <div style={boxStyle}>
            <strong>1.</strong> I enjoy ______ new languages.
            <br />
            <strong>Answer:</strong> learning
            <br />
            <br />

            <strong>2.</strong> She decided ______ early.
            <br />
            <strong>Answer:</strong> to leave
            <br />
            <br />

            <strong>3.</strong> They suggested ______ a taxi.
            <br />
            <strong>Answer:</strong> taking
            <br />
            <br />

            <strong>4.</strong> He encouraged me ______ for the job.
            <br />
            <strong>Answer:</strong> to apply
            <br />
            <br />

            <strong>5.</strong> I remember ______ her at the conference.
            <br />
            <strong>Answer:</strong> meeting
            <br />
            <br />

            <strong>6.</strong> Remember ______ the door.
            <br />
            <strong>Answer:</strong> to lock
            <br />
            <br />

            <strong>7.</strong> The students were made ______ the exercise
            again.
            <br />
            <strong>Answer:</strong> to repeat
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
            Choosing between a gerund and an infinitive depends on the verb,
            the grammatical structure, and sometimes the intended meaning.
            Mastering common verb patterns will make your English more accurate
            and natural.
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
            href="/resources/grammar/b2/advanced-relative-clauses"
            style={navStyle}
          >
            ← Previous Lesson
          </Link>

          <Link
            href="/resources/grammar/b2/articles-determiners-quantifiers"
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