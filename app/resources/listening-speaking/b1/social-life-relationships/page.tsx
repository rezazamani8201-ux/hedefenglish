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

export default function SocialLifeRelationshipsPage() {
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
          href="/resources/listening-speaking/b1"
          style={{ ...buttonStyle, marginBottom: "30px" }}
        >
          ← B1 Listening & Speaking
        </Link>

        {/* Hero */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "22px",
            padding: "42px 32px",
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
              letterSpacing: "0.4px",
              marginBottom: "15px",
            }}
          >
            B1 LISTENING & SPEAKING — LESSON 05
          </div>

          <h1
            style={{
              margin: "0 0 15px",
              color: "#173b78",
              fontSize: "40px",
              lineHeight: 1.2,
            }}
          >
            Social Life & Relationships
          </h1>

          <p
            style={{
              margin: 0,
              color: "#667085",
              fontSize: "18px",
              lineHeight: 1.8,
              maxWidth: "800px",
            }}
          >
            Practice natural English for talking about friends, relationships,
            social activities, invitations, plans, and everyday interactions.
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
            <li>Talk about friends and personal relationships.</li>
            <li>Describe people&apos;s personalities and qualities.</li>
            <li>Invite someone to an activity and respond naturally.</li>
            <li>Make plans and arrange social activities.</li>
            <li>Agree and disagree politely.</li>
            <li>Talk about social experiences and relationships.</li>
          </ul>
        </section>

        {/* Key Vocabulary */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Key Vocabulary
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "14px",
            }}
          >
            {[
              ["close friend", "a friend you know very well and trust"],
              ["acquaintance", "someone you know, but not very well"],
              ["reliable", "someone you can trust and depend on"],
              ["supportive", "helpful and encouraging"],
              ["outgoing", "friendly and comfortable meeting people"],
              ["generous", "happy to give time, money, or help to others"],
              ["get along", "to have a good relationship with someone"],
              ["hang out", "to spend relaxed time with someone"],
              ["invitation", "a request for someone to attend an event"],
              ["relationship", "the connection between two or more people"],
            ].map(([word, meaning]) => (
              <div
                key={word}
                style={{
                  background: "#fff",
                  borderRadius: "12px",
                  padding: "18px",
                  border: "1px solid #e5eaf0",
                }}
              >
                <div
                  style={{
                    color: "#173b78",
                    fontWeight: 700,
                    marginBottom: "7px",
                  }}
                >
                  {word}
                </div>

                <div
                  style={{
                    color: "#667085",
                    fontSize: "14px",
                    lineHeight: 1.6,
                  }}
                >
                  {meaning}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Describing People */}
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
            Describing People
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            Use personality adjectives to describe the people in your life.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>She&apos;s very friendly and easy to talk to.</p>
            <p>He&apos;s reliable, so I can always count on him.</p>
            <p>My sister is quite outgoing and loves meeting new people.</p>
            <p>My best friend is really supportive.</p>
            <p>He can be a little shy when he meets new people.</p>
            <p>She&apos;s very patient and understanding.</p>
          </div>
        </section>

        {/* Listening Conversation */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Listening Practice
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            Read the conversation and notice how the speakers describe their
            friends and make plans.
          </p>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "22px",
              lineHeight: 2,
              marginTop: "20px",
            }}
          >
            <p>
              <strong>Emma:</strong> Are you doing anything this weekend?
            </p>

            <p>
              <strong>Daniel:</strong> Not really. Why?
            </p>

            <p>
              <strong>Emma:</strong> I&apos;m having dinner with some friends
              on Saturday. Would you like to join us?
            </p>

            <p>
              <strong>Daniel:</strong> Sure. That sounds great. Who&apos;s
              coming?
            </p>

            <p>
              <strong>Emma:</strong> Sarah, Tom, and a couple of people from
              work.
            </p>

            <p>
              <strong>Daniel:</strong> I don&apos;t think I&apos;ve met Tom
              before.
            </p>

            <p>
              <strong>Emma:</strong> He&apos;s really friendly. I&apos;m sure
              you&apos;ll get along with him.
            </p>

            <p>
              <strong>Daniel:</strong> Great. What time should I be there?
            </p>

            <p>
              <strong>Emma:</strong> Around seven. I&apos;ll send you the
              address later.
            </p>

            <p>
              <strong>Daniel:</strong> Perfect. See you then!
            </p>
          </div>
        </section>

        {/* Listening Questions */}
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
            Listening Comprehension
          </h2>

          <ol style={{ lineHeight: 2 }}>
            <li>What is Emma doing on Saturday?</li>
            <li>Who is coming to the dinner?</li>
            <li>Has Daniel met Tom before?</li>
            <li>What does Emma say about Tom?</li>
            <li>What time should Daniel arrive?</li>
          </ol>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              marginTop: "20px",
              lineHeight: 1.9,
            }}
          >
            <h3 style={{ color: "#173b78", marginTop: 0 }}>
              Answers
            </h3>

            <p>1. She is having dinner with some friends.</p>
            <p>2. Sarah, Tom, and some people from work.</p>
            <p>3. No, he hasn&apos;t.</p>
            <p>4. He is really friendly.</p>
            <p>5. Around seven.</p>
          </div>
        </section>

        {/* Invitations */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Making Invitations
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Here are some natural ways to invite someone to do something.
          </p>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>Would you like to come with us?</p>
            <p>Do you want to join us for dinner?</p>
            <p>Would you like to go out this evening?</p>
            <p>Are you free on Saturday?</p>
            <p>How about meeting for coffee?</p>
            <p>Why don&apos;t we go to the cinema?</p>
            <p>Would you like to come to my party?</p>
          </div>
        </section>

        {/* Accepting and Refusing */}
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
            Accepting and Refusing Invitations
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "18px",
            }}
          >
            <div
              style={{
                background: "#f8fafc",
                borderRadius: "12px",
                padding: "20px",
              }}
            >
              <h3 style={{ color: "#173b78", marginTop: 0 }}>
                Accepting
              </h3>

              <p>Sure, I&apos;d love to.</p>
              <p>That sounds great.</p>
              <p>Absolutely!</p>
              <p>Count me in.</p>
              <p>Thanks for inviting me.</p>
            </div>

            <div
              style={{
                background: "#f8fafc",
                borderRadius: "12px",
                padding: "20px",
              }}
            >
              <h3 style={{ color: "#173b78", marginTop: 0 }}>
                Refusing Politely
              </h3>

              <p>I&apos;d love to, but I&apos;m busy.</p>
              <p>Thanks, but I can&apos;t make it.</p>
              <p>Sorry, I already have plans.</p>
              <p>I&apos;m afraid I can&apos;t come.</p>
              <p>Maybe another time.</p>
            </div>
          </div>
        </section>

        {/* Making Plans */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Making Social Plans
          </h2>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>What are you doing this weekend?</p>
            <p>Are you free on Friday evening?</p>
            <p>What time should we meet?</p>
            <p>Where should we meet?</p>
            <p>How about meeting at seven?</p>
            <p>Let&apos;s meet outside the restaurant.</p>
            <p>I&apos;ll text you when I arrive.</p>
            <p>Does six o&apos;clock work for you?</p>
          </div>
        </section>

        {/* Relationship Conversation */}
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
            Talking About Relationships
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
              <strong>Alex:</strong> How do you know Maria?
            </p>

            <p>
              <strong>James:</strong> We used to work together.
            </p>

            <p>
              <strong>Alex:</strong> Really? How long have you known her?
            </p>

            <p>
              <strong>James:</strong> About five years.
            </p>

            <p>
              <strong>Alex:</strong> You seem to get along really well.
            </p>

            <p>
              <strong>James:</strong> Yes. She&apos;s one of my closest
              friends. She&apos;s always supportive when I have a problem.
            </p>

            <p>
              <strong>Alex:</strong> That&apos;s great. Good friends are hard
              to find.
            </p>

            <p>
              <strong>James:</strong> I completely agree.
            </p>
          </div>
        </section>

        {/* Agreeing and Disagreeing */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Agreeing and Disagreeing Politely
          </h2>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>I completely agree.</p>
            <p>That&apos;s true.</p>
            <p>Exactly.</p>
            <p>I think you&apos;re right.</p>
            <p>I&apos;m not sure I agree.</p>
            <p>I see your point, but I think differently.</p>
            <p>I understand what you mean, but...</p>
            <p>That&apos;s an interesting point.</p>
          </div>
        </section>

        {/* Useful Expressions */}
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
            Useful Social Expressions
          </h2>

          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: "650px",
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
                    Situation
                  </th>

                  <th
                    style={{
                      textAlign: "left",
                      padding: "14px",
                      borderBottom: "1px solid #dbe2ea",
                      color: "#173b78",
                    }}
                  >
                    Useful Expression
                  </th>
                </tr>
              </thead>

              <tbody>
                {[
                  ["Invite someone", "Would you like to join us?"],
                  ["Accept", "I'd love to."],
                  ["Refuse politely", "I'd love to, but I can't."],
                  ["Make a plan", "How about meeting at seven?"],
                  ["Confirm", "Does seven work for you?"],
                  ["Ask about a person", "How do you know him?"],
                  ["Describe a friendship", "We've been friends for years."],
                  ["Talk about compatibility", "We get along really well."],
                  ["Show agreement", "I completely agree."],
                  ["Disagree politely", "I'm not sure I agree."],
                ].map(([situation, expression]) => (
                  <tr key={situation}>
                    <td
                      style={{
                        padding: "14px",
                        borderBottom: "1px solid #dbe2ea",
                        fontWeight: 600,
                      }}
                    >
                      {situation}
                    </td>

                    <td
                      style={{
                        padding: "14px",
                        borderBottom: "1px solid #dbe2ea",
                      }}
                    >
                      {expression}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Speaking Practice */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Speaking Practice
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            Speak for one to two minutes about each situation.
          </p>

          <div
            style={{
              display: "grid",
              gap: "14px",
              marginTop: "20px",
            }}
          >
            {[
              "Describe your best friend and explain why you like spending time together.",
              "Talk about a person who has influenced you.",
              "Invite a friend to do something this weekend.",
              "Politely refuse an invitation because you already have plans.",
              "Describe a social activity you really enjoy.",
              "Talk about what makes someone a good friend.",
            ].map((situation, index) => (
              <div
                key={situation}
                style={{
                  background: "#fff",
                  borderRadius: "12px",
                  padding: "18px",
                  lineHeight: 1.7,
                }}
              >
                <strong style={{ color: "#173b78" }}>
                  Situation {index + 1}
                </strong>

                <p style={{ margin: "8px 0 0" }}>{situation}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Role Play */}
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
            Role-Play
          </h2>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 1.9,
            }}
          >
            <p>
              <strong>Situation:</strong> You want to organize a weekend
              activity with a friend.
            </p>

            <p>
              Suggest an activity, discuss the time and place, and ask your
              friend if they are available.
            </p>

            <p>
              Then change roles. The second person should suggest a different
              activity.
            </p>
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
            Common Mistakes
          </h2>

          <div style={{ lineHeight: 1.9 }}>
            <p>
              ❌ We are friends since five years.
              <br />
              ✅ We have been friends for five years.
            </p>

            <p>
              ❌ I am agree with you.
              <br />
              ✅ I agree with you.
            </p>

            <p>
              ❌ Do you want joining us?
              <br />
              ✅ Do you want to join us?
            </p>

            <p>
              ❌ We get well along.
              <br />
              ✅ We get along well.
            </p>

            <p>
              ❌ I&apos;d love, but I&apos;m busy.
              <br />
              ✅ I&apos;d love to, but I&apos;m busy.
            </p>
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

          <ol style={{ lineHeight: 2.1 }}>
            <li>Complete: “Would you like to ______ us?”</li>
            <li>Give a polite way to refuse an invitation.</li>
            <li>Complete: “We&apos;ve been friends ______ five years.”</li>
            <li>Describe someone who is reliable.</li>
            <li>Complete: “We get ______ really well.”</li>
            <li>Invite a friend to have coffee.</li>
            <li>Give one expression for agreeing.</li>
            <li>Give one expression for disagreeing politely.</li>
            <li>Ask someone how they know another person.</li>
            <li>Suggest a time for meeting.</li>
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
              Sample Answers
            </h3>

            <p>
              1. join
              <br />
              2. “I&apos;d love to, but I can&apos;t make it.”
              <br />
              3. for
              <br />
              4. “Someone who is reliable is someone you can depend on.”
              <br />
              5. along
              <br />
              6. “Would you like to meet for coffee?”
              <br />
              7. “I completely agree.”
              <br />
              8. “I&apos;m not sure I agree.”
              <br />
              9. “How do you know her?”
              <br />
              10. “How about meeting at seven?”
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
            <li>Use personality adjectives to describe people naturally.</li>
            <li>Use get along and hang out when talking about social relationships.</li>
            <li>Learn different ways to make and respond to invitations.</li>
            <li>Use polite expressions when accepting or refusing invitations.</li>
            <li>Practice arranging times and places for social activities.</li>
            <li>Agree and disagree politely in conversations.</li>
            <li>Use realistic conversations to improve your speaking confidence.</li>
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
            marginTop: "35px",
          }}
        >
          <Link
            href="/resources/listening-speaking/b1/health-well-being"
            style={buttonStyle}
          >
            ← Health & Well-being
          </Link>

          <Link
            href="/resources/listening-speaking/b1/opinions-discussions"
            style={buttonStyle}
          >
            Next: Opinions & Discussions →
          </Link>
        </div>
      </div>
    </main>
  );
}