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

export default function WorkEducationPage() {
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
            B1 LISTENING & SPEAKING — LESSON 07
          </div>

          <h1
            style={{
              margin: "0 0 15px",
              color: "#173b78",
              fontSize: "40px",
              lineHeight: 1.2,
            }}
          >
            Work & Education
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
            Talk confidently about your job, education, skills, career plans,
            workplace experiences, and future goals.
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
            <li>Talk about your job and educational background.</li>
            <li>Describe your responsibilities and daily tasks.</li>
            <li>Discuss skills and qualifications.</li>
            <li>Talk about workplace experiences.</li>
            <li>Discuss career plans and future goals.</li>
            <li>Ask and answer questions in professional conversations.</li>
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
            Key Work & Education Vocabulary
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
              ["qualification", "an official skill, certificate, or degree"],
              ["degree", "a qualification awarded by a university"],
              ["experience", "knowledge or skill gained from doing something"],
              ["responsibility", "something that is part of your job or duty"],
              ["colleague", "someone you work with"],
              ["employer", "a person or organization that gives you a job"],
              ["employee", "a person who works for an organization"],
              ["skill", "an ability to do something well"],
              ["career", "the series of jobs you have during your working life"],
              ["promotion", "a move to a higher position at work"],
              ["interview", "a formal meeting to decide if someone is suitable for a job"],
              ["deadline", "the latest time by which something must be completed"],
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

        {/* Talking About Your Job */}
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
            Talking About Your Job
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            Use these expressions when describing what you do for a living.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>I work as a teacher.</p>
            <p>I work for an international company.</p>
            <p>I work in the marketing department.</p>
            <p>I&apos;m responsible for training new employees.</p>
            <p>I mainly deal with customers.</p>
            <p>I work full-time.</p>
            <p>I work remotely three days a week.</p>
            <p>I&apos;ve been working there for five years.</p>
          </div>
        </section>

        {/* Daily Responsibilities */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Talking About Responsibilities
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            When describing a job, explain what you usually do during a normal
            working day.
          </p>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>I usually start work at 9 a.m.</p>
            <p>I check my emails every morning.</p>
            <p>I attend meetings with my team.</p>
            <p>I prepare reports and presentations.</p>
            <p>I communicate with customers.</p>
            <p>I organize my tasks and manage deadlines.</p>
            <p>I often work on several projects at the same time.</p>
          </div>
        </section>

        {/* Listening Practice */}
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
            Listening Practice
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            Read the conversation and pay attention to how the speakers talk
            about work, education, experience, and future plans.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "22px",
              lineHeight: 2,
              marginTop: "20px",
            }}
          >
            <p>
              <strong>Sarah:</strong> What do you do for a living?
            </p>

            <p>
              <strong>James:</strong> I work as a software developer for a
              small technology company.
            </p>

            <p>
              <strong>Sarah:</strong> That sounds interesting. What are you
              responsible for?
            </p>

            <p>
              <strong>James:</strong> I mainly develop websites and work with
              a small team of designers.
            </p>

            <p>
              <strong>Sarah:</strong> How long have you been doing that?
            </p>

            <p>
              <strong>James:</strong> I&apos;ve been working in the field for
              about four years. Before that, I studied computer science at
              university.
            </p>

            <p>
              <strong>Sarah:</strong> Do you enjoy your job?
            </p>

            <p>
              <strong>James:</strong> Yes, I do. I like solving problems and
              learning new technologies.
            </p>

            <p>
              <strong>Sarah:</strong> What are your plans for the future?
            </p>

            <p>
              <strong>James:</strong> I&apos;d like to become a team leader
              eventually. I&apos;m also planning to take a professional
              management course next year.
            </p>
          </div>
        </section>

        {/* Comprehension */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Listening Comprehension
          </h2>

          <ol style={{ lineHeight: 2 }}>
            <li>What is James&apos;s job?</li>
            <li>What is he mainly responsible for?</li>
            <li>What did he study at university?</li>
            <li>How long has he worked in the field?</li>
            <li>What does he enjoy about his job?</li>
            <li>What are his future plans?</li>
          </ol>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              marginTop: "20px",
              lineHeight: 1.9,
            }}
          >
            <h3 style={{ color: "#173b78", marginTop: 0 }}>
              Answers
            </h3>

            <p>1. He is a software developer.</p>
            <p>2. He develops websites and works with designers.</p>
            <p>3. He studied computer science.</p>
            <p>4. He has worked in the field for about four years.</p>
            <p>5. He enjoys solving problems and learning new technologies.</p>
            <p>6. He wants to become a team leader and take a management course.</p>
          </div>
        </section>

        {/* Education */}
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
            Talking About Education
          </h2>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>I studied business administration at university.</p>
            <p>I graduated from university in 2022.</p>
            <p>I have a degree in engineering.</p>
            <p>I took an English course last year.</p>
            <p>I&apos;m currently studying for a professional qualification.</p>
            <p>I&apos;m interested in improving my communication skills.</p>
            <p>I&apos;d like to take a course in digital marketing.</p>
          </div>
        </section>

        {/* Skills */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Talking About Skills
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            When talking about your professional profile, mention both
            technical and personal skills.
          </p>

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
                background: "#fff",
                borderRadius: "12px",
                padding: "20px",
              }}
            >
              <h3 style={{ color: "#173b78", marginTop: 0 }}>
                Professional Skills
              </h3>

              <p>computer skills</p>
              <p>communication skills</p>
              <p>project management</p>
              <p>problem-solving</p>
              <p>customer service</p>
              <p>presentation skills</p>
            </div>

            <div
              style={{
                background: "#fff",
                borderRadius: "12px",
                padding: "20px",
              }}
            >
              <h3 style={{ color: "#173b78", marginTop: 0 }}>
                Personal Qualities
              </h3>

              <p>reliable</p>
              <p>organized</p>
              <p>creative</p>
              <p>patient</p>
              <p>flexible</p>
              <p>hard-working</p>
            </div>
          </div>
        </section>

        {/* Job Interview */}
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
            Job Interview Practice
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            Practice answering common interview questions using complete
            sentences and specific examples.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>Tell me about yourself.</p>
            <p>What do you do currently?</p>
            <p>What are your main responsibilities?</p>
            <p>What are your strongest skills?</p>
            <p>What is one skill you would like to improve?</p>
            <p>Why are you interested in this position?</p>
            <p>What are your career goals?</p>
            <p>Where do you see yourself in five years?</p>
          </div>
        </section>

        {/* Future Goals */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Talking About Career Goals
          </h2>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>I&apos;d like to develop my professional skills.</p>
            <p>I&apos;m hoping to get a promotion next year.</p>
            <p>I&apos;d like to take on more responsibility.</p>
            <p>I&apos;m planning to study for a new qualification.</p>
            <p>I hope to start my own business one day.</p>
            <p>My long-term goal is to become a manager.</p>
            <p>I&apos;d like to gain more experience in this field.</p>
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
            Useful Work & Education Expressions
          </h2>

          <div
            style={{
              overflowX: "auto",
              marginTop: "20px",
            }}
          >
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
                      background: "#eef4ff",
                      color: "#173b78",
                    }}
                  >
                    Expression
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "14px",
                      background: "#eef4ff",
                      color: "#173b78",
                    }}
                  >
                    Example
                  </th>
                </tr>
              </thead>

              <tbody>
                {[
                  [
                    "I work as...",
                    "I work as a graphic designer.",
                  ],
                  [
                    "I&apos;m responsible for...",
                    "I&apos;m responsible for customer support.",
                  ],
                  [
                    "I&apos;ve been working...",
                    "I&apos;ve been working there for three years.",
                  ],
                  [
                    "I have experience in...",
                    "I have experience in sales.",
                  ],
                  [
                    "I&apos;m interested in...",
                    "I&apos;m interested in digital marketing.",
                  ],
                  [
                    "I&apos;d like to...",
                    "I&apos;d like to become a manager.",
                  ],
                ].map(([expression, example]) => (
                  <tr key={expression}>
                    <td
                      style={{
                        padding: "14px",
                        borderBottom: "1px solid #e5eaf0",
                        fontWeight: 600,
                      }}
                    >
                      {expression}
                    </td>
                    <td
                      style={{
                        padding: "14px",
                        borderBottom: "1px solid #e5eaf0",
                        color: "#667085",
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
            Speak for one to two minutes about each topic. Try to give
            specific details and examples.
          </p>

          <div
            style={{
              display: "grid",
              gap: "14px",
              marginTop: "20px",
            }}
          >
            {[
              "Describe your current job or the job you would like to have.",
              "Talk about your educational background.",
              "Describe three skills you have.",
              "Talk about a skill you would like to improve.",
              "Describe your ideal workplace.",
              "Talk about your short-term and long-term career goals.",
            ].map((topic, index) => (
              <div
                key={topic}
                style={{
                  background: "#fff",
                  borderRadius: "12px",
                  padding: "18px",
                  lineHeight: 1.7,
                }}
              >
                <strong style={{ color: "#173b78" }}>
                  Topic {index + 1}
                </strong>

                <p style={{ margin: "8px 0 0" }}>{topic}</p>
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
              padding: "22px",
              lineHeight: 1.9,
            }}
          >
            <p>
              <strong>Situation:</strong> You are applying for a new job.
            </p>

            <p>
              <strong>Student A:</strong> You are the interviewer. Ask about
              the candidate&apos;s experience, education, skills, and future
              goals.
            </p>

            <p>
              <strong>Student B:</strong> You are the candidate. Answer the
              questions and explain why you are suitable for the position.
            </p>

            <p>
              Try to use expressions such as “I have experience in...”, “I&apos;m
              responsible for...”, and “I&apos;d like to...”.
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
              ❌ I work like a teacher.
              <br />
              ✅ I work as a teacher.
            </p>

            <p>
              ❌ I am working here since 2022.
              <br />
              ✅ I have been working here since 2022.
            </p>

            <p>
              ❌ I have experience about marketing.
              <br />
              ✅ I have experience in marketing.
            </p>

            <p>
              ❌ I am responsible to manage the team.
              <br />
              ✅ I am responsible for managing the team.
            </p>

            <p>
              ❌ I studied in university computer science.
              <br />
              ✅ I studied computer science at university.
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
            <li>Complete: “I work ______ a teacher.”</li>
            <li>Complete: “I&apos;m responsible ______ customer support.”</li>
            <li>Complete: “I have experience ______ sales.”</li>
            <li>What do we call someone who works with you?</li>
            <li>What do we call an official university qualification?</li>
            <li>Say one sentence about your education.</li>
            <li>Say one sentence about your professional experience.</li>
            <li>Say one sentence about a skill you want to improve.</li>
            <li>Say one sentence about a future career goal.</li>
            <li>What is a deadline?</li>
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
              1. as
              <br />
              2. for
              <br />
              3. in
              <br />
              4. A colleague.
              <br />
              5. A degree.
              <br />
              6. “I studied business administration at university.”
              <br />
              7. “I have five years of experience in sales.”
              <br />
              8. “I&apos;d like to improve my presentation skills.”
              <br />
              9. “My long-term goal is to become a manager.”
              <br />
              10. The latest time by which something must be completed.
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
            <li>Use “work as” when describing your profession.</li>
            <li>Use “responsible for” to describe your duties.</li>
            <li>Use “experience in” when talking about professional areas.</li>
            <li>Talk about education using degrees, courses, and qualifications.</li>
            <li>Describe both professional skills and personal qualities.</li>
            <li>Use specific examples when answering interview questions.</li>
            <li>Talk about both short-term and long-term career goals.</li>
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
            href="/resources/listening-speaking/b1/opinions-discussions"
            style={buttonStyle}
          >
            ← Opinions & Discussions
          </Link>

          <Link
            href="/resources/listening-speaking/b1/work-professional-communication"
            style={buttonStyle}
          >
            Next: Professional Communication →
          </Link>
        </div>
      </div>
    </main>
  );
}