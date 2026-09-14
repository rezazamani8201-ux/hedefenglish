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

export default function TechnologyMediaPage() {
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
            B1 LISTENING & SPEAKING — LESSON 09
          </div>

          <h1
            style={{
              margin: "0 0 15px",
              color: "#173b78",
              fontSize: "40px",
              lineHeight: 1.2,
            }}
          >
            Technology & Media
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
            Talk about technology, social media, digital habits, online
            communication, and the advantages and disadvantages of modern
            technology.
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
            <li>Talk about everyday technology and digital devices.</li>
            <li>Describe your technology habits.</li>
            <li>Discuss social media and online communication.</li>
            <li>Talk about the advantages and disadvantages of technology.</li>
            <li>Express opinions about digital life.</li>
            <li>Discuss how technology may change in the future.</li>
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
            Key Technology & Media Vocabulary
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
              ["device", "a piece of electronic equipment"],
              ["smartphone", "a mobile phone with advanced computer functions"],
              ["screen time", "the amount of time spent using a screen"],
              ["social media", "websites and apps used for sharing and communication"],
              ["privacy", "the right to keep personal information protected"],
              ["password", "a secret word or combination used to access an account"],
              ["account", "a personal profile used to access an online service"],
              ["download", "to copy information from the internet to your device"],
              ["upload", "to send information from your device to the internet"],
              ["stream", "to watch or listen to online content without downloading it first"],
              ["algorithm", "a set of rules used by a computer system to process information"],
              ["artificial intelligence", "technology that allows computers to perform tasks that normally require human intelligence"],
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

        {/* Talking About Devices */}
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
            Talking About Technology
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            Use these expressions to describe the technology you use in
            everyday life.
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>I use my smartphone for almost everything.</p>
            <p>I mainly use my laptop for work.</p>
            <p>I spend several hours online every day.</p>
            <p>I use this app to communicate with my friends.</p>
            <p>I recently bought a new tablet.</p>
            <p>This device is easy to use.</p>
            <p>I&apos;m not very good at using new technology.</p>
          </div>
        </section>

        {/* Listening Practice */}
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

          <p style={{ lineHeight: 1.8 }}>
            Read the conversation and pay attention to how the speakers talk
            about their digital habits.
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
              <strong>Anna:</strong> How much time do you usually spend on your
              phone every day?
            </p>

            <p>
              <strong>Mark:</strong> Probably about four or five hours. I use
              it for work, messages, music, and social media.
            </p>

            <p>
              <strong>Anna:</strong> That&apos;s quite a lot. Do you ever try
              to reduce your screen time?
            </p>

            <p>
              <strong>Mark:</strong> Yes. I sometimes turn off notifications
              when I need to concentrate.
            </p>

            <p>
              <strong>Anna:</strong> That sounds useful. I also try not to use
              my phone before going to bed.
            </p>

            <p>
              <strong>Mark:</strong> I should probably do that too. I often
              watch videos late at night.
            </p>

            <p>
              <strong>Anna:</strong> Do you think social media is mostly
              positive or negative?
            </p>

            <p>
              <strong>Mark:</strong> I think it depends on how you use it. It
              helps me stay in contact with people, but it can also waste a lot
              of time.
            </p>

            <p>
              <strong>Anna:</strong> I agree. I think the important thing is
              to use it in moderation.
            </p>
          </div>
        </section>

        {/* Listening Comprehension */}
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
            <li>How much time does Mark spend on his phone?</li>
            <li>What does he use his phone for?</li>
            <li>What does Mark do when he needs to concentrate?</li>
            <li>What does Anna avoid doing before bed?</li>
            <li>What does Mark think about social media?</li>
            <li>What does Anna think is important?</li>
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

            <p>1. About four or five hours a day.</p>
            <p>2. For work, messages, music, and social media.</p>
            <p>3. He turns off notifications.</p>
            <p>4. She avoids using her phone before going to bed.</p>
            <p>
              5. He thinks it can be useful but can also waste a lot of time.
            </p>
            <p>6. She thinks it is important to use social media in moderation.</p>
          </div>
        </section>

        {/* Social Media */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Talking About Social Media
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Use these expressions when discussing social media and online
            communication.
          </p>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>I use social media to keep in touch with friends.</p>
            <p>I follow several educational accounts.</p>
            <p>I rarely post photos online.</p>
            <p>I often check social media during the day.</p>
            <p>Social media can be a good way to share information.</p>
            <p>There is too much unnecessary content online.</p>
            <p>I try to limit the amount of time I spend on social media.</p>
          </div>
        </section>

        {/* Online Communication */}
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
            Online Communication
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            Technology has changed the way people communicate. Discuss the
            different ways you communicate online.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "16px",
              marginTop: "20px",
            }}
          >
            {[
              ["Messaging", "I usually send a quick message when I need to contact someone."],
              ["Video Calls", "Video calls are useful when people live far away."],
              ["Email", "I use email mainly for work and formal communication."],
              ["Online Meetings", "Online meetings save time because people do not need to travel."],
            ].map(([title, text]) => (
              <div
                key={title}
                style={{
                  background: "#f8fafc",
                  borderRadius: "12px",
                  padding: "20px",
                }}
              >
                <h3 style={{ color: "#173b78", marginTop: 0 }}>
                  {title}
                </h3>
                <p style={{ lineHeight: 1.7, color: "#667085" }}>
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Advantages and Disadvantages */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Advantages & Disadvantages of Technology
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
                background: "#fff",
                borderRadius: "12px",
                padding: "20px",
              }}
            >
              <h3 style={{ color: "#173b78", marginTop: 0 }}>
                Advantages
              </h3>

              <ul style={{ lineHeight: 1.9 }}>
                <li>It makes communication faster.</li>
                <li>It gives us access to information.</li>
                <li>It can save time.</li>
                <li>It makes remote work possible.</li>
                <li>It provides many educational opportunities.</li>
                <li>It can connect people around the world.</li>
              </ul>
            </div>

            <div
              style={{
                background: "#fff",
                borderRadius: "12px",
                padding: "20px",
              }}
            >
              <h3 style={{ color: "#173b78", marginTop: 0 }}>
                Disadvantages
              </h3>

              <ul style={{ lineHeight: 1.9 }}>
                <li>People may spend too much time online.</li>
                <li>Technology can reduce face-to-face communication.</li>
                <li>Online privacy can be a problem.</li>
                <li>False information can spread quickly.</li>
                <li>Some people become too dependent on devices.</li>
                <li>Constant notifications can be distracting.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Expressing Opinions */}
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
            Expressing Opinions About Technology
          </h2>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>In my opinion, technology has made life easier.</p>
            <p>I think social media has both advantages and disadvantages.</p>
            <p>Personally, I prefer communicating face to face.</p>
            <p>As far as I&apos;m concerned, people spend too much time online.</p>
            <p>I believe artificial intelligence will change many jobs.</p>
            <p>From my point of view, technology should be used responsibly.</p>
          </div>
        </section>

        {/* Digital Habits */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Talking About Digital Habits
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Describe your normal technology routine using frequency
            expressions.
          </p>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>I always check my messages in the morning.</p>
            <p>I usually use my laptop for several hours.</p>
            <p>I often listen to podcasts while working.</p>
            <p>I sometimes watch videos before bed.</p>
            <p>I rarely post anything on social media.</p>
            <p>I never share my passwords with other people.</p>
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
            Useful Technology & Media Expressions
          </h2>

          <div style={{ overflowX: "auto", marginTop: "20px" }}>
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
                    Function
                  </th>

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
                </tr>
              </thead>

              <tbody>
                {[
                  ["Talk about habits", "I usually..."],
                  ["Give an opinion", "In my opinion..."],
                  ["Give a reason", "The main reason is..."],
                  ["Talk about advantages", "One advantage is..."],
                  ["Talk about disadvantages", "One disadvantage is..."],
                  ["Limit usage", "I try to limit my screen time."],
                  ["Agree", "I completely agree."],
                  ["Disagree", "I'm not sure I agree."],
                  ["Make a prediction", "I think technology will..."],
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
            Speak for one to two minutes about each topic. Give examples and
            explain your opinions.
          </p>

          <div
            style={{
              display: "grid",
              gap: "14px",
              marginTop: "20px",
            }}
          >
            {[
              "Describe the devices you use every day.",
              "How much time do you spend online?",
              "What are the advantages and disadvantages of social media?",
              "Do you prefer messages, phone calls, or video calls? Why?",
              "How has technology changed the way you work or study?",
              "What technology would you find difficult to live without?",
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

        {/* Discussion Challenge */}
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
            Discussion Challenge
          </h2>

          <p style={{ lineHeight: 1.8, color: "#475467" }}>
            Discuss this question with a partner:
          </p>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "22px",
              fontSize: "20px",
              lineHeight: 1.7,
              fontWeight: 600,
              color: "#173b78",
            }}
          >
            Is modern technology making our lives better or more complicated?
          </div>

          <p style={{ lineHeight: 1.8, marginTop: "20px" }}>
            Give at least two advantages and two disadvantages. Then explain
            your personal opinion and give examples from your own experience.
          </p>
        </section>

        {/* Future Technology */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Technology in the Future
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Use future forms to make predictions about technology.
          </p>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              lineHeight: 2,
            }}
          >
            <p>Technology will become even more important.</p>
            <p>More people will work remotely.</p>
            <p>Artificial intelligence may change many professions.</p>
            <p>People might use fewer physical documents.</p>
            <p>Smart devices could become more powerful.</p>
            <p>Some jobs may disappear, while new jobs will appear.</p>
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
              <strong>Situation:</strong> A company wants to improve
              communication between employees.
            </p>

            <p>
              <strong>Student A:</strong> You think the company should use a
              messaging app.
            </p>

            <p>
              <strong>Student B:</strong> You think regular face-to-face
              meetings are better.
            </p>

            <p>
              Discuss the advantages and disadvantages of both options. Try to
              reach an agreement.
            </p>

            <p>
              Use expressions such as “In my opinion...”, “I see your point,
              but...”, “One advantage is...”, and “On balance...”.
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
              ❌ I use social media since five years.
              <br />
              ✅ I have used social media for five years.
            </p>

            <p>
              ❌ I am agree with you.
              <br />
              ✅ I agree with you.
            </p>

            <p>
              ❌ Technology make life easier.
              <br />
              ✅ Technology makes life easier.
            </p>

            <p>
              ❌ I spend too many time online.
              <br />
              ✅ I spend too much time online.
            </p>

            <p>
              ❌ I am interested on technology.
              <br />
              ✅ I am interested in technology.
            </p>

            <p>
              ❌ People depends too much on their phones.
              <br />
              ✅ People depend too much on their phones.
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
            <li>Complete: “I usually ______ my phone for work.”</li>
            <li>Complete: “I spend too ______ time online.”</li>
            <li>Complete: “In my ______, technology is very useful.”</li>
            <li>Complete: “One advantage ______ social media is communication.”</li>
            <li>Complete: “Technology ______ become more important in the future.”</li>
            <li>Give one advantage of social media.</li>
            <li>Give one disadvantage of social media.</li>
            <li>How can you reduce your screen time?</li>
            <li>Give one prediction about future technology.</li>
            <li>What is one technology you cannot live without?</li>
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
              1. use
              <br />
              2. much
              <br />
              3. opinion
              <br />
              4. of
              <br />
              5. will
              <br />
              6. It helps people communicate quickly.
              <br />
              7. It can waste a lot of time.
              <br />
              8. I can turn off notifications and set limits.
              <br />
              9. Artificial intelligence may change many jobs.
              <br />
              10. Example: “I cannot live without my smartphone.”
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
            <li>Use technology vocabulary to describe digital life.</li>
            <li>Talk about your technology and social media habits.</li>
            <li>Give clear opinions and reasons.</li>
            <li>Discuss advantages and disadvantages.</li>
            <li>Talk about responsible technology use.</li>
            <li>Use future forms to make predictions.</li>
            <li>Discuss different opinions politely.</li>
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
            href="/resources/listening-speaking/b1/problem-solving-decisions"
            style={buttonStyle}
          >
            ← Problem Solving & Decisions
          </Link>

          <Link
            href="/resources/listening-speaking/b1/environment-lifestyle"
            style={buttonStyle}
          >
            Next: Environment & Lifestyle →
          </Link>
        </div>
      </div>
    </main>
  );
}