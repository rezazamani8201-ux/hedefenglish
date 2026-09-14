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

const boxStyle = {
  background: "#f8fafc",
  border: "1px solid #e5eaf0",
  borderRadius: "12px",
  padding: "18px 20px",
  marginBottom: "12px",
};

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

export default function DescribingPeoplePlacesPage() {
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
          href="/resources/listening-speaking/a2"
          style={{
            ...buttonStyle,
            marginBottom: "30px",
          }}
        >
          ← A2 Listening & Speaking
        </Link>

        {/* Hero */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5eaf0",
            borderRadius: "20px",
            padding: "40px 30px",
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
            LISTENING & SPEAKING — A2
          </div>

          <h1
            style={{
              fontSize: "42px",
              lineHeight: 1.15,
              color: "#173b78",
              margin: "0 0 15px",
            }}
          >
            Describing People & Places
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#667085",
              margin: 0,
            }}
          >
            Learn how to describe people, appearance, personality, homes,
            neighborhoods, cities, and places using clear and natural English.
          </p>
        </section>

        {/* Learning Goals */}
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
            <li>Describe someone&apos;s physical appearance.</li>
            <li>Talk about personality and character.</li>
            <li>Describe homes, rooms, and neighborhoods.</li>
            <li>Describe cities and interesting places.</li>
            <li>Compare people and places.</li>
            <li>Ask and answer questions about appearance and location.</li>
          </ul>
        </section>

        {/* People Vocabulary */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Key Vocabulary: Describing People
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "12px",
            }}
          >
            {[
              ["tall", "having a greater than average height"],
              ["short", "not very tall"],
              ["slim", "thin in an attractive or healthy way"],
              ["strong", "having a lot of physical strength"],
              ["young", "not old"],
              ["middle-aged", "neither young nor old"],
              ["old", "having lived for many years"],
              ["friendly", "kind and pleasant to other people"],
              ["quiet", "not talking very much"],
              ["outgoing", "friendly and comfortable meeting people"],
              ["kind", "caring and helpful"],
              ["funny", "making people laugh"],
            ].map(([word, meaning]) => (
              <div
                key={word}
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e5eaf0",
                  borderRadius: "12px",
                  padding: "16px",
                }}
              >
                <strong style={{ color: "#173b78" }}>{word}</strong>

                <p
                  style={{
                    margin: "7px 0 0",
                    color: "#667085",
                    lineHeight: 1.5,
                    fontSize: "14px",
                  }}
                >
                  {meaning}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Appearance */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Describing Appearance
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Use <strong>be</strong> for general physical descriptions and
            <strong> have</strong> for hair, eyes, and other features.
          </p>

          <div style={boxStyle}>
            <p>She is tall and slim.</p>
            <p>He is short and strong.</p>
            <p>She has long brown hair.</p>
            <p>He has short black hair.</p>
            <p>She has green eyes.</p>
            <p>He has a beard.</p>
          </div>
        </section>

        {/* Listening 1 */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Listening Practice: Describing a Friend
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Read the conversation carefully and focus on the words used to
            describe appearance and personality.
          </p>

          <div style={boxStyle}>
            <p>
              <strong>Emma:</strong> Who is your best friend?
            </p>

            <p>
              <strong>Daniel:</strong> My best friend is Alex.
            </p>

            <p>
              <strong>Emma:</strong> What does he look like?
            </p>

            <p>
              <strong>Daniel:</strong> He&apos;s tall and quite slim. He has
              short dark hair and brown eyes.
            </p>

            <p>
              <strong>Emma:</strong> What is he like?
            </p>

            <p>
              <strong>Daniel:</strong> He&apos;s very friendly and funny. He
              likes talking to people.
            </p>

            <p>
              <strong>Emma:</strong> Is he quiet?
            </p>

            <p>
              <strong>Daniel:</strong> Not really. He&apos;s very outgoing.
            </p>
          </div>
        </section>

        {/* Listening Questions */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Listening Questions
          </h2>

          <div style={boxStyle}>
            <p>1. What is the name of Daniel&apos;s best friend?</p>
            <p>2. Is Alex tall or short?</p>
            <p>3. What color are his eyes?</p>
            <p>4. What is Alex&apos;s personality like?</p>
            <p>5. Is Alex quiet?</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Answers</h3>

          <div
            style={{
              background: "#eef4ff",
              borderRadius: "12px",
              padding: "18px 20px",
              lineHeight: 1.8,
            }}
          >
            <p>1. His name is Alex.</p>
            <p>2. He is tall.</p>
            <p>3. He has brown eyes.</p>
            <p>4. He is friendly, funny, and outgoing.</p>
            <p>5. No, he isn&apos;t.</p>
          </div>
        </section>

        {/* Personality */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Talking About Personality
          </h2>

          <div style={boxStyle}>
            <p>She is very friendly.</p>
            <p>He is quite shy.</p>
            <p>She is outgoing and confident.</p>
            <p>He is usually quiet.</p>
            <p>My brother is very funny.</p>
            <p>My teacher is kind and patient.</p>
          </div>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Ask:
          </p>

          <div
            style={{
              background: "#eef4ff",
              borderRadius: "12px",
              padding: "18px 20px",
            }}
          >
            <p>What is he like?</p>
            <p>What is she like?</p>
            <p>Is he friendly?</p>
            <p>Is she outgoing?</p>
          </div>
        </section>

        {/* Places Vocabulary */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Key Vocabulary: Describing Places
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "12px",
            }}
          >
            {[
              ["crowded", "full of many people"],
              ["quiet", "with very little noise or activity"],
              ["busy", "full of activity"],
              ["modern", "new and designed in a contemporary style"],
              ["traditional", "following old or familiar styles"],
              ["beautiful", "very attractive"],
              ["peaceful", "calm and quiet"],
              ["noisy", "full of unpleasant or loud sounds"],
              ["clean", "without dirt"],
              ["safe", "not dangerous"],
              ["expensive", "costing a lot of money"],
              ["cheap", "costing little money"],
            ].map(([word, meaning]) => (
              <div
                key={word}
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e5eaf0",
                  borderRadius: "12px",
                  padding: "16px",
                }}
              >
                <strong style={{ color: "#173b78" }}>{word}</strong>

                <p
                  style={{
                    margin: "7px 0 0",
                    color: "#667085",
                    lineHeight: 1.5,
                    fontSize: "14px",
                  }}
                >
                  {meaning}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Describing a Home */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Describing a Home
          </h2>

          <div style={boxStyle}>
            <p>My apartment is small but comfortable.</p>
            <p>It has two bedrooms and a large living room.</p>
            <p>The kitchen is modern and bright.</p>
            <p>There is a small balcony next to the living room.</p>
            <p>The neighborhood is quiet and safe.</p>
          </div>
        </section>

        {/* Listening 2 */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Listening Practice: A New Neighborhood
          </h2>

          <div style={boxStyle}>
            <p>
              <strong>Lisa:</strong> How do you like your new neighborhood?
            </p>

            <p>
              <strong>Mark:</strong> I really like it. It&apos;s quiet and
              peaceful.
            </p>

            <p>
              <strong>Lisa:</strong> Is it far from the city center?
            </p>

            <p>
              <strong>Mark:</strong> No, it&apos;s quite close. There&apos;s a
              bus stop near my apartment.
            </p>

            <p>
              <strong>Lisa:</strong> Are there any shops nearby?
            </p>

            <p>
              <strong>Mark:</strong> Yes. There are several shops, two cafés,
              and a small supermarket.
            </p>

            <p>
              <strong>Lisa:</strong> That sounds convenient.
            </p>

            <p>
              <strong>Mark:</strong> Yes, it is. I can walk almost everywhere.
            </p>
          </div>
        </section>

        {/* Questions 2 */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Listening Questions
          </h2>

          <div style={boxStyle}>
            <p>1. What does Mark think about his neighborhood?</p>
            <p>2. Is it far from the city center?</p>
            <p>3. What is near his apartment?</p>
            <p>4. How many cafés are there?</p>
            <p>5. Can Mark walk to many places?</p>
          </div>

          <h3 style={{ color: "#173b78" }}>Answers</h3>

          <div
            style={{
              background: "#eef4ff",
              borderRadius: "12px",
              padding: "18px 20px",
              lineHeight: 1.8,
            }}
          >
            <p>1. He likes it. It is quiet and peaceful.</p>
            <p>2. No, it isn&apos;t.</p>
            <p>3. A bus stop is near his apartment.</p>
            <p>4. There are two cafés.</p>
            <p>5. Yes, he can.</p>
          </div>
        </section>

        {/* Useful Expressions */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Useful Expressions
          </h2>

          <div style={boxStyle}>
            <p>What does he look like?</p>
            <p>What is she like?</p>
            <p>How would you describe him?</p>
            <p>How would you describe the city?</p>
            <p>It&apos;s a beautiful place.</p>
            <p>It&apos;s quite crowded.</p>
            <p>It&apos;s very peaceful.</p>
            <p>There are lots of shops nearby.</p>
            <p>There is a park next to my house.</p>
            <p>It&apos;s close to the city center.</p>
            <p>It&apos;s a little far from here.</p>
          </div>
        </section>

        {/* Grammar */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Useful Grammar: There Is / There Are
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Use <strong>there is</strong> with singular nouns and
            <strong> there are</strong> with plural nouns.
          </p>

          <div style={boxStyle}>
            <p>There is a park near my house.</p>
            <p>There is a supermarket on the corner.</p>
            <p>There are three cafés on this street.</p>
            <p>There are many shops in the city center.</p>
          </div>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Questions:
          </p>

          <div
            style={{
              background: "#eef4ff",
              borderRadius: "12px",
              padding: "18px 20px",
            }}
          >
            <p>Is there a supermarket nearby?</p>
            <p>Are there any restaurants near here?</p>
            <p>How many parks are there?</p>
          </div>
        </section>

        {/* Comparisons */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Comparing People and Places
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Use comparative adjectives when you want to compare two people or
            places.
          </p>

          <div style={boxStyle}>
            <p>Ali is taller than Reza.</p>
            <p>This city is bigger than my hometown.</p>
            <p>My new apartment is quieter than my old apartment.</p>
            <p>This restaurant is more expensive than that one.</p>
            <p>The countryside is more peaceful than the city.</p>
          </div>
        </section>

        {/* Speaking */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Speaking Practice
          </h2>

          <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
            Answer these questions using complete sentences.
          </p>

          <div style={boxStyle}>
            <p>1. What does your best friend look like?</p>
            <p>2. What is your best friend like?</p>
            <p>3. How would you describe your hometown?</p>
            <p>4. What is your neighborhood like?</p>
            <p>5. Is your city crowded or quiet?</p>
            <p>6. What is your favorite place in your city?</p>
            <p>7. What places are near your home?</p>
            <p>8. Is your hometown bigger or smaller than your current city?</p>
          </div>
        </section>

        {/* Speaking Model */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Speaking Model
          </h2>

          <div style={boxStyle}>
            <p>
              My best friend is Sara. She is quite tall and slim. She has long
              brown hair and brown eyes. She is very friendly and outgoing.
              She loves meeting new people.
            </p>

            <p>
              I live in a small but beautiful neighborhood. It is usually
              quiet and safe. There are several shops and cafés near my home.
              There is also a large park where people go for walks.
            </p>
          </div>
        </section>

        {/* Role Play */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Role-Play: Describe a Person
          </h2>

          <div style={boxStyle}>
            <p>
              <strong>Student A:</strong> Think of a person you know.
            </p>

            <p>
              <strong>Student B:</strong> Ask questions and try to identify
              the person.
            </p>

            <p>
              Use questions such as:
            </p>

            <p>Is the person tall?</p>
            <p>Does he have dark hair?</p>
            <p>Is she outgoing?</p>
            <p>Is he friendly?</p>
            <p>What does the person look like?</p>
          </div>
        </section>

        {/* Role Play Place */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Role-Play: Describe a Place
          </h2>

          <div style={boxStyle}>
            <p>
              Choose a city, neighborhood, park, restaurant, or other place
              that you know well.
            </p>

            <p>
              Describe it without saying its name. Your partner should guess
              the place.
            </p>

            <p>
              <strong>Try to mention:</strong>
            </p>

            <p>• where it is</p>
            <p>• what it looks like</p>
            <p>• what you can find there</p>
            <p>• whether it is busy or quiet</p>
            <p>• why you like or dislike it</p>
          </div>
        </section>

        {/* Quick Practice */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Quick Practice
          </h2>

          <div style={boxStyle}>
            <p>
              1. She ______ long brown hair.
              <br />
              <strong>(has / is)</strong>
            </p>

            <p>
              2. He ______ very friendly.
              <br />
              <strong>(is / has)</strong>
            </p>

            <p>
              3. There ______ a park near my house.
              <br />
              <strong>(is / are)</strong>
            </p>

            <p>
              4. There ______ two cafés on this street.
              <br />
              <strong>(is / are)</strong>
            </p>

            <p>
              5. My city is ______ than my hometown.
              <br />
              <strong>(bigger / big)</strong>
            </p>

            <p>
              6. What ______ she like?
              <br />
              <strong>(is / does)</strong>
            </p>

            <p>
              7. What does he ______ like?
              <br />
              <strong>(look / looks)</strong>
            </p>

            <p>
              8. Are there ______ restaurants nearby?
              <br />
              <strong>(any / a)</strong>
            </p>
          </div>

          <h3 style={{ color: "#173b78" }}>Answers</h3>

          <div
            style={{
              background: "#eef4ff",
              borderRadius: "12px",
              padding: "18px 20px",
              lineHeight: 1.9,
            }}
          >
            <p>1. has</p>
            <p>2. is</p>
            <p>3. is</p>
            <p>4. are</p>
            <p>5. bigger</p>
            <p>6. is</p>
            <p>7. look</p>
            <p>8. any</p>
          </div>
        </section>

        {/* Common Mistakes */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            Common Mistakes
          </h2>

          <div style={boxStyle}>
            <p>❌ She is long brown hair.</p>
            <p>✅ She has long brown hair.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ He has very friendly.</p>
            <p>✅ He is very friendly.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ There is two restaurants nearby.</p>
            <p>✅ There are two restaurants nearby.</p>
          </div>

          <div style={boxStyle}>
            <p>❌ What does she like?</p>
            <p>✅ What is she like?</p>
            <p style={{ color: "#667085", fontSize: "14px" }}>
              Use “What is she like?” when asking about personality.
            </p>
          </div>

          <div style={boxStyle}>
            <p>❌ What does he looks like?</p>
            <p>✅ What does he look like?</p>
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

          <ul
            style={{
              lineHeight: 1.9,
              color: "#344054",
              paddingLeft: "22px",
            }}
          >
            <li>Use “be” to describe general appearance and personality.</li>
            <li>Use “have” to describe hair, eyes, and physical features.</li>
            <li>Use “What does he/she look like?” for appearance.</li>
            <li>Use “What is he/she like?” for personality.</li>
            <li>Use “There is” with singular nouns.</li>
            <li>Use “There are” with plural nouns.</li>
            <li>Use comparative adjectives to compare people and places.</li>
          </ul>

          <p
            style={{
              marginTop: "20px",
              marginBottom: 0,
              fontWeight: 600,
              color: "#173b78",
            }}
          >
            Good descriptions make conversations more natural and help you
            communicate clearly about the people and places around you.
          </p>
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
            href="/resources/listening-speaking/a2/food-eating-out"
            style={buttonStyle}
          >
            ← Food & Eating Out
          </Link>

          <Link
            href="/resources/listening-speaking/a2/opinions-preferences"
            style={buttonStyle}
          >
            Next: Opinions & Preferences →
          </Link>
        </div>
      </div>
    </main>
  );
}