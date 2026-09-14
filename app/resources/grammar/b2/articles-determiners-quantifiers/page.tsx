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

export default function ArticlesDeterminersQuantifiersPage() {
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
            Articles, Determiners & Quantifiers
          </h1>

          <p
            style={{
              color: "#667085",
              fontSize: "17px",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            Master advanced choices of articles, determiners, and quantifiers
            to make your English more precise, natural, and sophisticated.
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
            In this lesson, you will review the main article system and learn
            how determiners and quantifiers change meaning and precision.
          </p>

          <ul
            style={{
              color: "#475467",
              lineHeight: 1.9,
              paddingLeft: "22px",
              marginBottom: 0,
            }}
          >
            <li>Definite and indefinite articles</li>
            <li>Zero article</li>
            <li>Articles with abstract and uncountable nouns</li>
            <li>Determiners and their functions</li>
            <li>Quantifiers with countable nouns</li>
            <li>Quantifiers with uncountable nouns</li>
            <li>Advanced quantity expressions</li>
            <li>Common advanced mistakes</li>
          </ul>
        </section>

        {/* A / An */}
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
            1. A and An
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            We use <strong>a</strong> or <strong>an</strong> with singular
            countable nouns when we are talking about one non-specific member
            of a group.
          </p>

          <div style={boxStyle}>
            I saw <strong>a</strong> strange man outside.
            <br />
            <br />
            She is <strong>an</strong> experienced teacher.
            <br />
            <br />
            He wants to buy <strong>a</strong> new laptop.
          </div>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            The choice depends on sound, not simply spelling.
          </p>

          <div style={boxStyle}>
            <strong>an hour</strong>
            <br />
            <strong>a university</strong>
            <br />
            <strong>an honest person</strong>
            <br />
            <strong>a European country</strong>
          </div>
        </section>

        {/* The */}
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
            2. The Definite Article
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            We use <strong>the</strong> when the listener or reader can identify
            the specific person, thing, place, or idea we mean.
          </p>

          <div style={boxStyle}>
            I saw a dog. <strong>The dog</strong> was wearing a red collar.
            <br />
            <br />
            Please close <strong>the door</strong>.
            <br />
            <br />
            Where is <strong>the book</strong> I gave you?
          </div>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            We also use <strong>the</strong> with things that are unique or
            understood as unique in a particular context.
          </p>

          <div style={boxStyle}>
            <strong>the sun</strong>
            <br />
            <strong>the internet</strong>
            <br />
            <strong>the environment</strong>
            <br />
            <strong>the government</strong>
          </div>
        </section>

        {/* Zero Article */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            3. The Zero Article
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Sometimes we use no article at all. This is known as the{" "}
            <strong>zero article</strong>.
          </p>

          <div style={boxStyle}>
            <strong>Books</strong> can change the way we think.
            <br />
            <br />
            <strong>Water</strong> is essential for life.
            <br />
            <br />
            <strong>Education</strong> is important.
            <br />
            <br />
            She speaks <strong>English</strong>.
          </div>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            We commonly use the zero article when speaking generally about
            plural countable nouns, uncountable nouns, languages, subjects,
            and many activities.
          </p>
        </section>

        {/* Abstract Nouns */}
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
            4. Articles with Abstract Nouns
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Abstract nouns can be used with or without an article depending on
            whether we mean the concept generally or a specific instance.
          </p>

          <div style={boxStyle}>
            <strong>Life</strong> is unpredictable.
            <br />
            <br />
            He has had <strong>a difficult life</strong>.
            <br />
            <br />
            <strong>Knowledge</strong> is valuable.
            <br />
            <br />
            She has <strong>a good knowledge of</strong> modern technology.
          </div>
        </section>

        {/* General vs Specific */}
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
            5. General vs Specific Meaning
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Article choice can change whether we are talking about something
            generally or about a particular example.
          </p>

          <div style={boxStyle}>
            <strong>Children</strong> need support.
            <br />
            → Children in general.
            <br />
            <br />
            <strong>The children</strong> need support.
            <br />
            → A particular group of children.
          </div>

          <div style={boxStyle}>
            <strong>Technology</strong> has changed our lives.
            <br />
            → Technology in general.
            <br />
            <br />
            <strong>The technology</strong> used by the company is advanced.
            <br />
            → Specific technology.
          </div>
        </section>

        {/* Determiners */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            6. Determiners
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Determiners come before nouns and help identify, limit, or describe
            them.
          </p>

          <div style={boxStyle}>
            <strong>this</strong> book
            <br />
            <strong>my</strong> car
            <br />
            <strong>each</strong> student
            <br />
            <strong>every</strong> lesson
            <br />
            <strong>either</strong> option
            <br />
            <strong>neither</strong> answer
            <br />
            <strong>some</strong> information
            <br />
            <strong>which</strong> method
          </div>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Different determiners communicate different relationships between
            the speaker, the listener, and the noun.
          </p>
        </section>

        {/* Each Every */}
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
            7. Each and Every
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Both <strong>each</strong> and <strong>every</strong> are followed
            by singular countable nouns, but they emphasize different ideas.
          </p>

          <div style={boxStyle}>
            <strong>Each student</strong> received individual feedback.
            <br />
            → Focus on individuals.
            <br />
            <br />
            <strong>Every student</strong> must complete the assignment.
            <br />
            → Focus on the whole group.
          </div>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            <strong>Each</strong> can also be used with a plural noun after{" "}
            <strong>of</strong>.
          </p>

          <div style={boxStyle}>
            <strong>Each of the students</strong> received a certificate.
          </div>
        </section>

        {/* Either Neither */}
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
            8. Either, Neither, Both
          </h2>

          <div style={boxStyle}>
            <strong>Both</strong> answers are correct.
            <br />
            → Two out of two.
            <br />
            <br />
            <strong>Either</strong> answer is acceptable.
            <br />
            → One of two possibilities.
            <br />
            <br />
            <strong>Neither</strong> answer is correct.
            <br />
            → Not one and not the other.
          </div>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            These structures are especially useful when discussing two
            alternatives.
          </p>
        </section>

        {/* Many Much */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            9. Many, Much, Few and Little
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            These quantifiers depend on whether the noun is countable or
            uncountable.
          </p>

          <div style={boxStyle}>
            <strong>many</strong> + plural countable noun
            <br />
            There are many students here.
            <br />
            <br />
            <strong>much</strong> + uncountable noun
            <br />
            We do not have much time.
            <br />
            <br />
            <strong>few</strong> + plural countable noun
            <br />
            Few people understood the problem.
            <br />
            <br />
            <strong>little</strong> + uncountable noun
            <br />
            There is little information available.
          </div>
        </section>

        {/* A Few A Little */}
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
            10. A Few and A Little
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Adding <strong>a</strong> changes the meaning from a negative or
            limited idea to a more positive idea.
          </p>

          <div style={boxStyle}>
            I have <strong>few friends</strong>.
            <br />
            → Almost none.
            <br />
            <br />
            I have <strong>a few friends</strong>.
            <br />
            → Some friends.
            <br />
            <br />
            There is <strong>little hope</strong>.
            <br />
            → Almost no hope.
            <br />
            <br />
            There is <strong>a little hope</strong>.
            <br />
            → Some hope.
          </div>
        </section>

        {/* Some Any */}
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
            11. Some and Any
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            <strong>Some</strong> and <strong>any</strong> can be used with
            plural countable nouns and uncountable nouns.
          </p>

          <div style={boxStyle}>
            I bought <strong>some books</strong>.
            <br />
            <br />
            We need <strong>some information</strong>.
            <br />
            <br />
            I don't have <strong>any money</strong>.
            <br />
            <br />
            Are there <strong>any questions</strong>?
          </div>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            <strong>Some</strong> can also appear in offers and requests when
            we expect the answer to be positive.
          </p>

          <div style={boxStyle}>
            Would you like <strong>some coffee</strong>?
            <br />
            Could I have <strong>some water</strong>?
          </div>
        </section>

        {/* All Whole Both */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            12. All, Whole and Both
          </h2>

          <div style={boxStyle}>
            <strong>All the students</strong> passed the exam.
            <br />
            <br />
            She worked <strong>all day</strong>.
            <br />
            <br />
            He spent <strong>the whole day</strong> studying.
            <br />
            <br />
            <strong>Both of the answers</strong> are possible.
          </div>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            <strong>All</strong> can refer to three or more people or things,
            while <strong>both</strong> refers specifically to two.
          </p>
        </section>

        {/* Each Every Quantifier */}
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
            13. Advanced Quantity Expressions
          </h2>

          <div style={boxStyle}>
            <strong>a great deal of</strong> + uncountable noun
            <br />
            She has a great deal of experience.
            <br />
            <br />
            <strong>a large amount of</strong> + uncountable noun
            <br />
            The project requires a large amount of money.
            <br />
            <br />
            <strong>a large number of</strong> + plural countable noun
            <br />
            A large number of people attended.
            <br />
            <br />
            <strong>a significant number of</strong> + plural countable noun
            <br />
            A significant number of students participated.
          </div>
        </section>

        {/* Plenty Enough */}
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
            14. Plenty of, Enough and Too Much
          </h2>

          <div style={boxStyle}>
            We have <strong>plenty of time</strong>.
            <br />
            → More than enough.
            <br />
            <br />
            There are <strong>enough chairs</strong> for everyone.
            <br />
            → The required quantity is available.
            <br />
            <br />
            There is <strong>too much noise</strong>.
            <br />
            → More than is desirable.
            <br />
            <br />
            There are <strong>too many people</strong> here.
            <br />
            → An excessive number.
          </div>
        </section>

        {/* Most Majority */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            15. Most, Most of and The Majority of
          </h2>

          <div style={boxStyle}>
            <strong>Most people</strong> enjoy music.
            <br />
            → People in general.
            <br />
            <br />
            <strong>Most of the people</strong> at the meeting agreed.
            <br />
            → A specific group.
            <br />
            <br />
            <strong>The majority of students</strong> passed the test.
            <br />
            → More than half of a particular group.
          </div>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            The difference between <strong>most</strong> and{" "}
            <strong>most of</strong> is often about whether the noun is being
            used generally or specifically.
          </p>
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
            16. Common Mistakes
          </h2>

          <div style={boxStyle}>
            <strong>Incorrect:</strong>
            <br />
            I need an information.
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            I need some information.
          </div>

          <div style={boxStyle}>
            <strong>Incorrect:</strong>
            <br />
            She gave me an advice.
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            She gave me some advice.
          </div>

          <div style={boxStyle}>
            <strong>Incorrect:</strong>
            <br />
            There are much people here.
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            There are many people here.
          </div>

          <div style={boxStyle}>
            <strong>Incorrect:</strong>
            <br />
            I have a few money.
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            I have a little money.
          </div>

          <div style={boxStyle}>
            <strong>Incorrect:</strong>
            <br />
            Most of people agree.
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            Most people agree.
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
            Choose the correct article, determiner, or quantifier.
          </p>

          <div style={boxStyle}>
            <strong>1.</strong> I need ______ information about the course.
            <br />
            <strong>Answer:</strong> some
            <br />
            <br />

            <strong>2.</strong> She is ______ honest person.
            <br />
            <strong>Answer:</strong> an
            <br />
            <br />

            <strong>3.</strong> ______ students in my class speak English
            fluently.
            <br />
            <strong>Answer:</strong> Most
            <br />
            <br />

            <strong>4.</strong> There isn't ______ time left.
            <br />
            <strong>Answer:</strong> much
            <br />
            <br />

            <strong>5.</strong> I have ______ good news for you.
            <br />
            <strong>Answer:</strong> some
            <br />
            <br />

            <strong>6.</strong> ______ of the two answers is acceptable.
            <br />
            <strong>Answer:</strong> Either
            <br />
            <br />

            <strong>7.</strong> We spent ______ whole afternoon there.
            <br />
            <strong>Answer:</strong> the
            <br />
            <br />

            <strong>8.</strong> There are ______ people waiting outside.
            <br />
            <strong>Answer:</strong> a lot of
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
            Articles, determiners, and quantifiers help you communicate exactly
            how specific, general, limited, or extensive something is.
            Accurate choices make your English clearer, more natural, and more
            precise.
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
            href="/resources/grammar/b2/gerunds-infinitives-verb-patterns"
            style={navStyle}
          >
            ← Previous Lesson
          </Link>

          <Link
            href="/resources/grammar/b2/phrasal-verbs-idiomatic-expressions"
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