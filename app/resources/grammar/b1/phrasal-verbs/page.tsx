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

export default function PhrasalVerbsPage() {
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
          style={{ ...buttonStyle, marginBottom: "30px" }}
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
            B1 GRAMMAR & VOCABULARY
          </div>

          <h1
            style={{
              fontSize: "40px",
              lineHeight: 1.2,
              color: "#173b78",
              margin: "0 0 15px",
            }}
          >
            Phrasal Verbs
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#667085",
              margin: 0,
            }}
          >
            Learn common phrasal verbs and use them naturally in everyday
            English conversations.
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
            <li>Understand what phrasal verbs are.</li>
            <li>Recognize common verb + particle combinations.</li>
            <li>Learn useful phrasal verbs for everyday situations.</li>
            <li>Understand separable and inseparable phrasal verbs.</li>
            <li>Use phrasal verbs correctly in sentences.</li>
          </ul>
        </section>

        {/* What are phrasal verbs */}
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
            1. What Is a Phrasal Verb?
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            A phrasal verb is a combination of a verb and one or more short
            words, usually a particle such as an adverb or preposition.
          </p>

          <p style={{ lineHeight: 1.8 }}>
            The combination often has a meaning that is different from the
            original verb.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
              marginTop: "20px",
            }}
          >
            <p>
              <strong>look</strong> = use your eyes
            </p>

            <p>
              <strong>look after</strong> = take care of
            </p>

            <p>
              <strong>look for</strong> = try to find
            </p>

            <p>
              <strong>look up</strong> = search for information
            </p>
          </div>
        </section>

        {/* Structure */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            2. Basic Structure
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            The basic structure is:
          </p>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              textAlign: "center",
              fontSize: "20px",
              fontWeight: 700,
              color: "#173b78",
              margin: "20px 0",
            }}
          >
            Verb + Particle
          </div>

          <div style={{ lineHeight: 2 }}>
            <p>
              <strong>get up</strong>
            </p>

            <p>
              <strong>turn off</strong>
            </p>

            <p>
              <strong>find out</strong>
            </p>

            <p>
              <strong>give up</strong>
            </p>
          </div>
        </section>

        {/* Everyday phrasal verbs */}
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
            3. Common Everyday Phrasal Verbs
          </h2>

          <div style={{ overflowX: "auto", marginTop: "20px" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: "700px",
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                      color: "#173b78",
                    }}
                  >
                    Phrasal Verb
                  </th>

                  <th
                    style={{
                      textAlign: "left",
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                      color: "#173b78",
                    }}
                  >
                    Meaning
                  </th>

                  <th
                    style={{
                      textAlign: "left",
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                      color: "#173b78",
                    }}
                  >
                    Example
                  </th>
                </tr>
              </thead>

              <tbody>
                {[
                  ["get up", "leave your bed", "I get up at 7 every morning."],
                  ["wake up", "stop sleeping", "I usually wake up early."],
                  ["sit down", "take a seat", "Please sit down."],
                  ["stand up", "rise to your feet", "Everyone stood up."],
                  ["go out", "leave home / go somewhere", "We went out last night."],
                  ["come back", "return", "She came back at six."],
                  ["come in", "enter", "Please come in."],
                  ["go away", "leave", "He told the dog to go away."],
                  ["turn on", "start a machine or light", "Turn on the TV."],
                  ["turn off", "stop a machine or light", "Turn off the lights."],
                  ["put on", "place clothes on your body", "Put on your jacket."],
                  ["take off", "remove clothes", "Take off your shoes."],
                ].map(([verb, meaning, example]) => (
                  <tr key={verb}>
                    <td
                      style={{
                        padding: "14px",
                        borderBottom: "1px solid #dbe2ea",
                        fontWeight: 600,
                      }}
                    >
                      {verb}
                    </td>

                    <td
                      style={{
                        padding: "14px",
                        borderBottom: "1px solid #dbe2ea",
                      }}
                    >
                      {meaning}
                    </td>

                    <td
                      style={{
                        padding: "14px",
                        borderBottom: "1px solid #dbe2ea",
                      }}
                    >
                      {example}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Look verbs */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            4. Useful Phrasal Verbs with LOOK
          </h2>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>
              <strong>look for</strong> = try to find something
            </p>

            <p>
              I am looking for my keys.
            </p>

            <p>
              <strong>look after</strong> = take care of someone or something
            </p>

            <p>
              She looks after her younger brother.
            </p>

            <p>
              <strong>look at</strong> = direct your eyes toward something
            </p>

            <p>
              Look at this picture.
            </p>

            <p>
              <strong>look up</strong> = search for information
            </p>

            <p>
              I looked up the word in a dictionary.
            </p>
          </div>
        </section>

        {/* Get */}
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
            5. Useful Phrasal Verbs with GET
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
              <strong>get up</strong> = leave your bed
            </p>

            <p>
              I get up at 6:30.
            </p>

            <p>
              <strong>get back</strong> = return
            </p>

            <p>
              What time did you get back?
            </p>

            <p>
              <strong>get on</strong> = enter a bus, train, or plane
            </p>

            <p>
              We got on the bus at 8.
            </p>

            <p>
              <strong>get off</strong> = leave a bus, train, or plane
            </p>

            <p>
              We got off at the next station.
            </p>

            <p>
              <strong>get along with</strong> = have a good relationship
            </p>

            <p>
              I get along well with my colleagues.
            </p>
          </div>
        </section>

        {/* Turn */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            6. Useful Phrasal Verbs with TURN
          </h2>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>
              <strong>turn on</strong> = start a device or light
            </p>

            <p>Turn on the computer.</p>

            <p>
              <strong>turn off</strong> = stop a device or light
            </p>

            <p>Turn off your phone.</p>

            <p>
              <strong>turn up</strong> = increase the volume or level
            </p>

            <p>Can you turn up the music?</p>

            <p>
              <strong>turn down</strong> = decrease the volume or level
            </p>

            <p>Please turn down the TV.</p>
          </div>
        </section>

        {/* Take Put */}
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
            7. Useful Phrasal Verbs with TAKE and PUT
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
              <strong>take off</strong> = remove clothes / leave the ground
            </p>

            <p>Take off your coat.</p>

            <p>The plane took off at 9.</p>

            <p>
              <strong>take out</strong> = remove something
            </p>

            <p>Take out the rubbish.</p>

            <p>
              <strong>put on</strong> = wear something
            </p>

            <p>Put on your shoes.</p>

            <p>
              <strong>put away</strong> = return something to its proper place
            </p>

            <p>Put your books away.</p>

            <p>
              <strong>put off</strong> = postpone something
            </p>

            <p>We put off the meeting until Friday.</p>
          </div>
        </section>

        {/* More useful verbs */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            8. More Useful Phrasal Verbs
          </h2>

          <div style={{ overflowX: "auto", marginTop: "20px" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: "700px",
                background: "#fff",
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                      color: "#173b78",
                    }}
                  >
                    Phrasal Verb
                  </th>

                  <th
                    style={{
                      textAlign: "left",
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                      color: "#173b78",
                    }}
                  >
                    Meaning
                  </th>

                  <th
                    style={{
                      textAlign: "left",
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                      color: "#173b78",
                    }}
                  >
                    Example
                  </th>
                </tr>
              </thead>

              <tbody>
                {[
                  ["find out", "discover information", "I found out the truth."],
                  ["give up", "stop trying", "Don't give up."],
                  ["carry on", "continue", "Please carry on working."],
                  ["pick up", "collect / lift", "I'll pick you up at 7."],
                  ["drop off", "take someone somewhere", "I'll drop you off at school."],
                  ["fill in", "complete a form", "Please fill in this form."],
                  ["check in", "register at a hotel or airport", "We checked in at 2."],
                  ["check out", "leave a hotel", "We checked out at noon."],
                  ["work out", "exercise / find a solution", "I work out three times a week."],
                  ["run out of", "have no more of something", "We've run out of milk."],
                ].map(([verb, meaning, example]) => (
                  <tr key={verb}>
                    <td
                      style={{
                        padding: "14px",
                        borderBottom: "1px solid #dbe2ea",
                        fontWeight: 600,
                      }}
                    >
                      {verb}
                    </td>

                    <td
                      style={{
                        padding: "14px",
                        borderBottom: "1px solid #dbe2ea",
                      }}
                    >
                      {meaning}
                    </td>

                    <td
                      style={{
                        padding: "14px",
                        borderBottom: "1px solid #dbe2ea",
                      }}
                    >
                      {example}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Separable */}
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
            9. Separable Phrasal Verbs
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Some phrasal verbs can be separated when they have an object.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
              marginTop: "20px",
            }}
          >
            <p>
              Turn <strong>off</strong> the light.
            </p>

            <p>
              Turn the light <strong>off</strong>.
            </p>

            <p>
              Put <strong>on</strong> your jacket.
            </p>

            <p>
              Put your jacket <strong>on</strong>.
            </p>
          </div>

          <p style={{ lineHeight: 1.8, marginTop: "20px" }}>
            With a pronoun, the object normally goes between the verb and the
            particle.
          </p>

          <div
            style={{
              background: "#eef4ff",
              borderRadius: "12px",
              padding: "18px",
              lineHeight: 2,
            }}
          >
            <p>
              Turn <strong>it off</strong>.
            </p>

            <p>
              Put <strong>it on</strong>.
            </p>
          </div>
        </section>

        {/* Inseparable */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            10. Inseparable Phrasal Verbs
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Some phrasal verbs cannot normally be separated.
          </p>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
              marginTop: "20px",
            }}
          >
            <p>
              I am looking <strong>for my keys</strong>.
            </p>

            <p>
              She looks <strong>after her children</strong>.
            </p>

            <p>
              We ran <strong>out of milk</strong>.
            </p>

            <p>
              He gets <strong>along with his colleagues</strong>.
            </p>
          </div>

          <p style={{ lineHeight: 1.8, marginTop: "20px" }}>
            We do not normally put the object between the verb and particle in
            these expressions.
          </p>
        </section>

        {/* Phrasal verbs in conversation */}
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
            11. Phrasal Verbs in Conversation
          </h2>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "22px",
              lineHeight: 2,
            }}
          >
            <p>
              <strong>Anna:</strong> What time do you usually get up?
            </p>

            <p>
              <strong>Ben:</strong> I get up at seven.
            </p>

            <p>
              <strong>Anna:</strong> Do you go out in the evening?
            </p>

            <p>
              <strong>Ben:</strong> Sometimes. I usually stay home and work
              out.
            </p>

            <p>
              <strong>Anna:</strong> What time do you come back?
            </p>

            <p>
              <strong>Ben:</strong> Usually around ten.
            </p>

            <p>
              <strong>Anna:</strong> Don't forget to turn off the lights when
              you leave.
            </p>
          </div>
        </section>

        {/* Common mistakes */}
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
            12. Common Mistakes
          </h2>

          <div style={{ lineHeight: 1.9 }}>
            <p>
              ❌ Please turn off <strong>it</strong>.
              <br />
              ✅ Please turn <strong>it off</strong>.
            </p>

            <p>
              ❌ I am looking <strong>my keys for</strong>.
              <br />
              ✅ I am looking <strong>for my keys</strong>.
            </p>

            <p>
              ❌ She gets along <strong>her sister with</strong>.
              <br />
              ✅ She gets along <strong>with her sister</strong>.
            </p>

            <p>
              ❌ We ran milk <strong>out of</strong>.
              <br />
              ✅ We ran <strong>out of milk</strong>.
            </p>

            <p>
              ❌ He gave <strong>up it</strong>.
              <br />
              ✅ He gave <strong>it up</strong>.
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
            13. Practice
          </h2>

          <p style={{ color: "#667085", lineHeight: 1.7 }}>
            Choose the correct phrasal verb.
          </p>

          <ol style={{ lineHeight: 2.1 }}>
            <li>
              I usually __________ at 7 a.m. (get up / give up)
            </li>

            <li>
              Please __________ the lights before you leave. (turn off / look
              for)
            </li>

            <li>
              I need to __________ my keys. (look for / get off)
            </li>

            <li>
              We __________ the bus at the next stop. (got off / put on)
            </li>

            <li>
              She __________ her little brother after school. (looks after /
              turns up)
            </li>

            <li>
              Don't __________. Keep trying! (give up / come in)
            </li>

            <li>
              We need to __________ at the hotel before going to our room.
              (check in / take off)
            </li>

            <li>
              Can you __________ this form, please? (fill in / go away)
            </li>

            <li>
              We've __________ milk. (run out of / turned on)
            </li>

            <li>
              I will __________ you __________ at the airport. (pick / up)
            </li>

            <li>
              Please turn __________ the music. It's too loud. (down / after)
            </li>

            <li>
              I __________ my jacket because it was cold. (put on / found out)
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
              1. get up
              <br />
              2. turn off
              <br />
              3. look for
              <br />
              4. got off
              <br />
              5. looks after
              <br />
              6. give up
              <br />
              7. check in
              <br />
              8. fill in
              <br />
              9. run out of
              <br />
              10. pick / up
              <br />
              11. down
              <br />
              12. put on
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
              A phrasal verb is usually a <strong>verb + particle</strong>.
            </li>

            <li>
              The meaning can be different from the original verb.
            </li>

            <li>
              <strong>Get up</strong> means to leave your bed.
            </li>

            <li>
              <strong>Look for</strong> means to try to find something.
            </li>

            <li>
              <strong>Look after</strong> means to take care of someone or
              something.
            </li>

            <li>
              <strong>Turn on</strong> means to start a device or light.
            </li>

            <li>
              <strong>Turn off</strong> means to stop a device or light.
            </li>

            <li>
              Some phrasal verbs are <strong>separable</strong>.
            </li>

            <li>
              Some phrasal verbs are <strong>inseparable</strong>.
            </li>

            <li>
              With separable phrasal verbs, pronouns usually go between the
              verb and particle: <strong>turn it off</strong>.
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
            href="/resources/grammar/b1/articles-determiners"
            style={buttonStyle}
          >
            ← Articles & Determiners
          </Link>

          <Link
            href="/resources/grammar/b1/collocations"
            style={buttonStyle}
          >
            Next: Collocations →
          </Link>
        </div>
      </div>
    </main>
  );
}