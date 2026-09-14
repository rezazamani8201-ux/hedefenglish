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

export default function CommunicationReviewPage() {
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
            B1 LISTENING & SPEAKING — LESSON 12
          </div>

          <h1
            style={{
              margin: "0 0 15px",
              color: "#173b78",
              fontSize: "40px",
              lineHeight: 1.2,
            }}
          >
            Communication Review
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
            Review the key listening and speaking skills from the B1 course.
            Practice conversations, opinions, advice, problem solving,
            storytelling, and real-life communication.
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
            <li>Review important B1 communication functions.</li>
            <li>Understand longer everyday conversations.</li>
            <li>Express opinions and support them with reasons.</li>
            <li>Give advice, suggestions, and explanations.</li>
            <li>Describe experiences and tell stories clearly.</li>
            <li>Handle real-life situations with confidence.</li>
          </ul>
        </section>

        {/* Communication Skills */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Key Communication Skills
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "15px",
            }}
          >
            {[
              [
                "Giving Opinions",
                "I think..., In my opinion..., From my point of view...",
              ],
              [
                "Agreeing",
                "I agree. That's a good point. Exactly.",
              ],
              [
                "Disagreeing",
                "I'm not sure I agree. I see your point, but...",
              ],
              [
                "Giving Advice",
                "You should..., You could..., If I were you...",
              ],
              [
                "Making Suggestions",
                "Why don't we...? How about...? We could...",
              ],
              [
                "Clarifying",
                "What do you mean? Could you explain that?",
              ],
              [
                "Showing Interest",
                "Really? That's interesting. What happened next?",
              ],
              [
                "Giving Reasons",
                "because..., since..., the main reason is...",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                style={{
                  background: "#fff",
                  borderRadius: "12px",
                  padding: "20px",
                }}
              >
                <h3
                  style={{
                    color: "#173b78",
                    marginTop: 0,
                    marginBottom: "8px",
                  }}
                >
                  {title}
                </h3>

                <p
                  style={{
                    margin: 0,
                    color: "#667085",
                    lineHeight: 1.7,
                  }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Listening Practice 1 */}
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
            Listening Review 1 — Making Plans
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
              <strong>Anna:</strong> Are you doing anything this weekend?
            </p>

            <p>
              <strong>Mark:</strong> Not yet. Why?
            </p>

            <p>
              <strong>Anna:</strong> I was thinking about going hiking on
              Saturday.
            </p>

            <p>
              <strong>Mark:</strong> That sounds good. Where are you thinking
              of going?
            </p>

            <p>
              <strong>Anna:</strong> There&apos;s a trail about an hour from
              the city. The views are supposed to be beautiful.
            </p>

            <p>
              <strong>Mark:</strong> Great. What time should we leave?
            </p>

            <p>
              <strong>Anna:</strong> How about eight in the morning?
            </p>

            <p>
              <strong>Mark:</strong> That works for me. Should I bring some
              food?
            </p>

            <p>
              <strong>Anna:</strong> Yes. I&apos;ll bring sandwiches, and you
              can bring some water.
            </p>
          </div>

          <h3 style={{ color: "#173b78", marginTop: "25px" }}>
            Comprehension
          </h3>

          <ol style={{ lineHeight: 2 }}>
            <li>What are Anna and Mark planning to do?</li>
            <li>Where is the activity?</li>
            <li>What time will they leave?</li>
            <li>What will Anna bring?</li>
            <li>What will Mark bring?</li>
          </ol>

          <div
            style={{
              background: "#eef4ff",
              borderRadius: "12px",
              padding: "18px",
              lineHeight: 1.9,
            }}
          >
            <strong style={{ color: "#173b78" }}>Answers:</strong>
            <p>1. They are planning to go hiking.</p>
            <p>2. On a trail about an hour from the city.</p>
            <p>3. At eight in the morning.</p>
            <p>4. Sandwiches.</p>
            <p>5. Water.</p>
          </div>
        </section>

        {/* Opinions */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Expressing and Supporting Opinions
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            At B1 level, try to give more than a short opinion. State your
            position, explain why, and give an example when possible.
          </p>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>
              <strong>Basic:</strong> I think working from home is good.
            </p>

            <p>
              <strong>Better:</strong> I think working from home is useful
              because people can save time commuting.
            </p>

            <p>
              <strong>Strong B1 answer:</strong> In my opinion, working from
              home can be very useful because employees save commuting time
              and often have a quieter environment. However, it can also be
              difficult to communicate with colleagues.
            </p>
          </div>
        </section>

        {/* Listening Review 2 */}
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
            Listening Review 2 — A Problem at Work
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
              <strong>James:</strong> You look worried. Is everything okay?
            </p>

            <p>
              <strong>Sara:</strong> Not really. I have to finish this report
              today, but my computer has stopped working.
            </p>

            <p>
              <strong>James:</strong> Have you tried restarting it?
            </p>

            <p>
              <strong>Sara:</strong> Yes, but it didn&apos;t help.
            </p>

            <p>
              <strong>James:</strong> Why don&apos;t you contact the IT
              department?
            </p>

            <p>
              <strong>Sara:</strong> I already called them. They said someone
              could come in about an hour.
            </p>

            <p>
              <strong>James:</strong> In that case, you could use my computer
              for now.
            </p>

            <p>
              <strong>Sara:</strong> Really? That would be a huge help. Thank
              you.
            </p>
          </div>

          <h3 style={{ color: "#173b78", marginTop: "25px" }}>
            Comprehension
          </h3>

          <ol style={{ lineHeight: 2 }}>
            <li>What problem does Sara have?</li>
            <li>What has she already tried?</li>
            <li>Who did she contact?</li>
            <li>How long will she have to wait?</li>
            <li>What solution does James offer?</li>
          </ol>

          <div
            style={{
              background: "#eef4ff",
              borderRadius: "12px",
              padding: "18px",
              lineHeight: 1.9,
            }}
          >
            <strong style={{ color: "#173b78" }}>Answers:</strong>
            <p>1. Her computer has stopped working.</p>
            <p>2. She tried restarting it.</p>
            <p>3. She contacted the IT department.</p>
            <p>4. About an hour.</p>
            <p>5. She can use his computer.</p>
          </div>
        </section>

        {/* Storytelling */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Storytelling & Experiences
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Use sequencing expressions to make your stories easier to follow.
          </p>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>First, I arrived at the station.</p>
            <p>Then, I realized that I had forgotten my ticket.</p>
            <p>After that, I called my friend.</p>
            <p>Meanwhile, the train was getting ready to leave.</p>
            <p>Eventually, my friend brought the ticket.</p>
            <p>In the end, I managed to catch the train.</p>
          </div>

          <h3 style={{ color: "#173b78" }}>
            Useful Sequencing Expressions
          </h3>

          <p style={{ lineHeight: 2 }}>
            First → Then → After that → Meanwhile → Later → Eventually → In
            the end
          </p>
        </section>

        {/* Real Life Situations */}
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
            Real-Life Communication
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Practice responding naturally in common situations.
          </p>

          <div style={{ display: "grid", gap: "15px" }}>
            {[
              [
                "At a Restaurant",
                "Your order is wrong. Politely explain the problem and ask for the correct dish.",
              ],
              [
                "At a Hotel",
                "Your room is noisy. Explain the problem and ask for another room.",
              ],
              [
                "At Work",
                "You cannot finish a task on time. Explain why and suggest a solution.",
              ],
              [
                "With a Friend",
                "Your friend wants to choose an activity you do not like. Disagree politely and suggest another option.",
              ],
              [
                "At the Airport",
                "Your luggage is missing. Explain the situation and ask what you should do.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                style={{
                  background: "#f8fafc",
                  borderRadius: "12px",
                  padding: "20px",
                }}
              >
                <h3
                  style={{
                    color: "#173b78",
                    marginTop: 0,
                  }}
                >
                  {title}
                </h3>

                <p
                  style={{
                    margin: 0,
                    lineHeight: 1.7,
                    color: "#667085",
                  }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Listening Strategies */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            B1 Listening Strategies
          </h2>

          <ul style={{ lineHeight: 2 }}>
            <li>Listen for the main idea before focusing on details.</li>
            <li>Pay attention to names, numbers, times, and places.</li>
            <li>Listen for words that signal contrast or change.</li>
            <li>Do not worry if you do not understand every word.</li>
            <li>Use the context to guess unfamiliar vocabulary.</li>
            <li>Listen for the speaker&apos;s attitude and intention.</li>
          </ul>
        </section>

        {/* Speaking Strategies */}
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
            B1 Speaking Strategies
          </h2>

          <ul style={{ lineHeight: 2 }}>
            <li>Give complete answers instead of one-word responses.</li>
            <li>Explain your ideas with reasons and examples.</li>
            <li>Use linking words to connect your ideas.</li>
            <li>Ask follow-up questions to keep conversations going.</li>
            <li>Use polite language when disagreeing.</li>
            <li>Do not be afraid to correct yourself while speaking.</li>
          </ul>
        </section>

        {/* Useful Expressions */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Essential B1 Expressions
          </h2>

          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: "650px",
                background: "#fff",
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "14px",
                      background: "#f8fafc",
                      color: "#173b78",
                    }}
                  >
                    Function
                  </th>

                  <th
                    style={{
                      textAlign: "left",
                      padding: "14px",
                      background: "#f8fafc",
                      color: "#173b78",
                    }}
                  >
                    Useful Expressions
                  </th>
                </tr>
              </thead>

              <tbody>
                {[
                  ["Opinion", "I believe..., In my opinion..., I would say..."],
                  ["Agreement", "I completely agree. That's true."],
                  ["Disagreement", "I see your point, but..."],
                  ["Suggestion", "Why don't we...? We could..."],
                  ["Advice", "If I were you, I'd..."],
                  ["Clarification", "Could you explain what you mean?"],
                  ["Example", "For example..., For instance..."],
                  ["Contrast", "However..., On the other hand..."],
                  ["Result", "Therefore..., As a result..."],
                  ["Storytelling", "First..., Then..., Eventually..."],
                  ["Problem", "There seems to be a problem with..."],
                  ["Solution", "One possible solution would be..."],
                ].map(([functionName, expression]) => (
                  <tr key={functionName}>
                    <td
                      style={{
                        padding: "14px",
                        borderBottom: "1px solid #e5eaf0",
                        fontWeight: 600,
                      }}
                    >
                      {functionName}
                    </td>

                    <td
                      style={{
                        padding: "14px",
                        borderBottom: "1px solid #e5eaf0",
                        color: "#667085",
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

        {/* Speaking Challenge */}
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
            Final Speaking Challenge
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Choose one topic and speak for two to three minutes. Try to give
            reasons, examples, and personal details.
          </p>

          <ol style={{ lineHeight: 2 }}>
            <li>Describe a memorable trip you have taken.</li>
            <li>Discuss the advantages and disadvantages of social media.</li>
            <li>Describe a difficult decision you had to make.</li>
            <li>Talk about a skill you would like to improve.</li>
            <li>Describe a problem you solved successfully.</li>
            <li>Give advice to someone who wants to learn English.</li>
            <li>Discuss your ideal lifestyle.</li>
            <li>Talk about an important goal you have for the future.</li>
          </ol>
        </section>

        {/* Role Play */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Final Role-Play
          </h2>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "22px",
              lineHeight: 1.9,
            }}
          >
            <p>
              <strong>Situation:</strong> You and your friend are planning a
              holiday, but you have different ideas about the destination,
              budget, transportation, and activities.
            </p>

            <p>
              <strong>Student A:</strong> Explain your preferred plan and
              give reasons for your choices.
            </p>

            <p>
              <strong>Student B:</strong> Ask questions, disagree politely,
              suggest alternatives, and negotiate a final plan.
            </p>

            <p>
              Try to use at least five expressions from this lesson.
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
            Common B1 Communication Mistakes
          </h2>

          <div style={{ lineHeight: 1.9 }}>
            <p>
              ❌ I agree you.
              <br />
              ✅ I agree with you.
            </p>

            <p>
              ❌ In my opinion is good.
              <br />
              ✅ In my opinion, it is good.
            </p>

            <p>
              ❌ I think so because is useful.
              <br />
              ✅ I think so because it is useful.
            </p>

            <p>
              ❌ What you think about it?
              <br />
              ✅ What do you think about it?
            </p>

            <p>
              ❌ If I will have time, I will travel.
              <br />
              ✅ If I have time, I will travel.
            </p>

            <p>
              ❌ I have visited there last year.
              <br />
              ✅ I visited there last year.
            </p>
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

          <ol style={{ lineHeight: 2.1 }}>
            <li>Give your opinion about online learning.</li>
            <li>Agree politely with someone&apos;s opinion.</li>
            <li>Disagree politely with someone&apos;s opinion.</li>
            <li>Give advice to a friend with a difficult problem.</li>
            <li>Make a suggestion for a weekend activity.</li>
            <li>Ask someone to clarify what they said.</li>
            <li>Describe a problem and suggest a solution.</li>
            <li>Tell a short story using three sequencing expressions.</li>
            <li>Compare two ways of traveling.</li>
            <li>Ask a follow-up question to continue a conversation.</li>
          </ol>

          <div
            style={{
              background: "#fff",
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
              1. In my opinion, online learning is useful because it is
              flexible.
            </p>

            <p>2. I completely agree with you.</p>

            <p>
              3. I see your point, but I think there are some disadvantages.
            </p>

            <p>
              4. If I were you, I&apos;d talk to someone you trust.
            </p>

            <p>5. Why don&apos;t we go for a walk?</p>

            <p>6. Could you explain what you mean?</p>

            <p>
              7. There seems to be a problem. One possible solution would be
              to contact the manager.
            </p>

            <p>
              8. First, I arrived at the station. Then, I realized I had
              forgotten my ticket. Eventually, I found a solution.
            </p>

            <p>
              9. The train is more comfortable, while the bus is usually
              cheaper.
            </p>

            <p>
              10. That sounds interesting. What happened next?
            </p>
          </div>
        </section>

        {/* Final Review */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "30px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            B1 Listening & Speaking — Final Review
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            You have now reviewed the main communication skills covered in
            the B1 Listening & Speaking section.
          </p>

          <ul style={{ lineHeight: 2 }}>
            <li>Understand conversations about everyday situations.</li>
            <li>Talk about work, education, travel, health, and relationships.</li>
            <li>Express and support opinions.</li>
            <li>Agree and disagree politely.</li>
            <li>Give advice and make suggestions.</li>
            <li>Discuss problems and possible solutions.</li>
            <li>Talk about technology, environment, and lifestyle.</li>
            <li>Describe experiences and tell stories.</li>
            <li>Handle practical travel and social situations.</li>
            <li>Communicate with greater confidence at B1 level.</li>
          </ul>

          <div
            style={{
              marginTop: "25px",
              padding: "20px",
              background: "#eef4ff",
              borderRadius: "12px",
              textAlign: "center",
            }}
          >
            <strong
              style={{
                color: "#173b78",
                fontSize: "18px",
              }}
            >
              Great work! Keep practicing, keep speaking, and keep improving.
            </strong>
          </div>
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
            href="/resources/listening-speaking/b1/travel-planning"
            style={buttonStyle}
          >
            ← Travel & Planning
          </Link>

          <Link
            href="/resources/listening-speaking/b1"
            style={buttonStyle}
          >
            Back to B1 Listening & Speaking →
          </Link>
        </div>
      </div>
    </main>
  );
}