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

export default function AdvancedCommunicationFunctionalEnglishPage() {
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
            Advanced Communication & Functional English
          </h1>

          <p
            style={{
              color: "#667085",
              fontSize: "17px",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            Develop the language skills you need to communicate clearly,
            naturally, and effectively in real-life and professional
            situations.
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
            This lesson brings together advanced functional language for
            expressing ideas, managing conversations, handling problems, and
            communicating confidently in different situations.
          </p>

          <ul
            style={{
              color: "#475467",
              lineHeight: 1.9,
              paddingLeft: "22px",
              marginBottom: 0,
            }}
          >
            <li>Expressing opinions clearly</li>
            <li>Agreeing and disagreeing politely</li>
            <li>Making suggestions and recommendations</li>
            <li>Giving advice</li>
            <li>Making requests and responding to them</li>
            <li>Clarifying and checking information</li>
            <li>Managing conversations</li>
            <li>Handling complaints and problems</li>
            <li>Negotiating and reaching agreements</li>
            <li>Using professional and formal English</li>
          </ul>
        </section>

        {/* Opinions */}
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
            1. Expressing Opinions
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            At B2 level, you should be able to express opinions with different
            degrees of certainty and formality.
          </p>

          <div style={boxStyle}>
            <strong>In my opinion,</strong> the project needs more time.
            <br />
            <br />
            <strong>From my point of view,</strong> this approach is more
            effective.
            <br />
            <br />
            <strong>I would argue that</strong> regular practice is essential.
            <br />
            <br />
            <strong>It seems to me that</strong> we need a different strategy.
            <br />
            <br />
            <strong>As far as I&apos;m concerned,</strong> the decision was
            reasonable.
          </div>
        </section>

        {/* Agreeing */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            2. Agreeing and Disagreeing
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Effective communication often requires agreeing or disagreeing
            without sounding too direct.
          </p>

          <div style={boxStyle}>
            <strong>Agreeing:</strong>
            <br />
            I completely agree with you.
            <br />
            That&apos;s exactly how I see it.
            <br />
            You have a good point.
            <br />
            I couldn&apos;t agree more.
            <br />
            <br />
            <strong>Disagreeing politely:</strong>
            <br />
            I see your point, but I&apos;m not sure I agree.
            <br />
            I understand what you mean; however, I see it differently.
            <br />
            I&apos;m afraid I have a different view.
          </div>
        </section>

        {/* Suggestions */}
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
            3. Making Suggestions
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Use different structures depending on how direct or formal your
            suggestion needs to be.
          </p>

          <div style={boxStyle}>
            <strong>We could</strong> try a different approach.
            <br />
            <br />
            <strong>Why don&apos;t we</strong> discuss the problem tomorrow?
            <br />
            <br />
            <strong>How about</strong> meeting after work?
            <br />
            <br />
            <strong>It might be worth</strong> checking the figures again.
            <br />
            <br />
            <strong>I would suggest</strong> contacting the manager.
          </div>
        </section>

        {/* Recommendations */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            4. Giving Recommendations
          </h2>

          <div style={boxStyle}>
            I&apos;d strongly recommend booking in advance.
            <br />
            <br />
            You might want to consider taking an earlier train.
            <br />
            <br />
            If I were you, I&apos;d speak to the manager.
            <br />
            <br />
            It would be a good idea to review the contract carefully.
            <br />
            <br />
            I think your best option would be to wait.
          </div>
        </section>

        {/* Requests */}
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
            5. Making Polite Requests
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Polite requests are particularly important in professional and
            formal situations.
          </p>

          <div style={boxStyle}>
            <strong>Could you possibly</strong> send me the report?
            <br />
            <br />
            <strong>Would you mind</strong> checking this for me?
            <br />
            <br />
            <strong>I was wondering if you could</strong> help me with this.
            <br />
            <br />
            <strong>Would it be possible to</strong> change the appointment?
            <br />
            <br />
            <strong>I&apos;d appreciate it if you could</strong> reply by
            Friday.
          </div>
        </section>

        {/* Offers */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            6. Offers and Invitations
          </h2>

          <div style={boxStyle}>
            <strong>Would you like me to</strong> help you?
            <br />
            <br />
            <strong>Can I</strong> get you something to drink?
            <br />
            <br />
            <strong>Shall I</strong> call them for you?
            <br />
            <br />
            <strong>Would you like to</strong> join us for dinner?
            <br />
            <br />
            <strong>We&apos;d be delighted if you could</strong> join us.
          </div>
        </section>

        {/* Clarifying */}
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
            7. Clarifying and Checking Information
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Good communicators check information when something is unclear
            instead of making assumptions.
          </p>

          <div style={boxStyle}>
            <strong>Do you mean</strong> that the meeting has been canceled?
            <br />
            <br />
            <strong>Could you clarify</strong> what you mean by that?
            <br />
            <br />
            <strong>If I understand you correctly,</strong> you want us to
            start again.
            <br />
            <br />
            <strong>Just to make sure I&apos;ve understood,</strong> the
            deadline is Friday, correct?
            <br />
            <br />
            <strong>Could you explain what you mean by</strong> &quot;urgent&quot;?
          </div>
        </section>

        {/* Interruptions */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            8. Managing a Conversation
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Advanced speakers need language for entering, interrupting,
            continuing, and ending conversations politely.
          </p>

          <div style={boxStyle}>
            <strong>Entering:</strong>
            <br />
            Could I just add something here?
            <br />
            <br />
            <strong>Interrupting politely:</strong>
            <br />
            Sorry to interrupt, but could I make a point?
            <br />
            <br />
            <strong>Returning to a topic:</strong>
            <br />
            Coming back to what you said earlier...
            <br />
            <br />
            <strong>Changing the topic:</strong>
            <br />
            That reminds me of something else.
            <br />
            <br />
            <strong>Ending:</strong>
            <br />
            I think we&apos;ve covered everything.
          </div>
        </section>

        {/* Complaints */}
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
            9. Making Complaints
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Complaints should be clear and firm without being unnecessarily
            aggressive.
          </p>

          <div style={boxStyle}>
            <strong>I&apos;m afraid there seems to be</strong> a problem with
            my order.
            <br />
            <br />
            <strong>I&apos;d like to make a complaint about</strong> the
            service.
            <br />
            <br />
            <strong>I&apos;m not satisfied with</strong> the way this has been
            handled.
            <br />
            <br />
            <strong>Unfortunately, this is not what I was expecting.</strong>
            <br />
            <br />
            <strong>Could you please look into this matter?</strong>
          </div>
        </section>

        {/* Responding */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            10. Responding to Complaints
          </h2>

          <div style={boxStyle}>
            <strong>I&apos;m very sorry to hear that.</strong>
            <br />
            <br />
            <strong>I completely understand your frustration.</strong>
            <br />
            <br />
            <strong>Let me see what I can do.</strong>
            <br />
            <br />
            <strong>We&apos;ll look into the matter immediately.</strong>
            <br />
            <br />
            <strong>I&apos;ll make sure this is dealt with as soon as
            possible.</strong>
          </div>
        </section>

        {/* Negotiation */}
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
            11. Negotiating
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Negotiation language helps you discuss different possibilities and
            reach an agreement.
          </p>

          <div style={boxStyle}>
            <strong>Would you be willing to</strong> consider another option?
            <br />
            <br />
            <strong>Could we possibly</strong> reduce the price?
            <br />
            <br />
            <strong>How about</strong> meeting halfway?
            <br />
            <br />
            <strong>I&apos;m prepared to</strong> accept those conditions.
            <br />
            <br />
            <strong>That sounds reasonable.</strong>
            <br />
            <br />
            <strong>That&apos;s acceptable, provided that</strong> we have
            everything in writing.
          </div>
        </section>

        {/* Agreement */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            12. Reaching an Agreement
          </h2>

          <div style={boxStyle}>
            <strong>So, are we agreed?</strong>
            <br />
            <br />
            <strong>That works for me.</strong>
            <br />
            <br />
            <strong>I think we have a deal.</strong>
            <br />
            <br />
            <strong>We seem to be in agreement.</strong>
            <br />
            <br />
            <strong>Let&apos;s go ahead with that, then.</strong>
          </div>
        </section>

        {/* Advice */}
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
            13. Giving Advice in Difficult Situations
          </h2>

          <div style={boxStyle}>
            <strong>If I were in your position, I would</strong> talk to your
            manager.
            <br />
            <br />
            <strong>Have you considered</strong> asking for professional
            advice?
            <br />
            <br />
            <strong>You might want to think about</strong> the long-term
            consequences.
            <br />
            <br />
            <strong>It might be worth</strong> discussing the issue openly.
            <br />
            <br />
            <strong>One option would be to</strong> postpone the decision.
          </div>
        </section>

        {/* Professional */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            14. Professional English
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Professional communication often requires a more careful and
            diplomatic style.
          </p>

          <div style={boxStyle}>
            <strong>Informal:</strong>
            <br />
            Can you send me the file?
            <br />
            <br />
            <strong>Professional:</strong>
            <br />
            Could you please send me the file at your earliest convenience?
            <br />
            <br />

            <strong>Informal:</strong>
            <br />
            I don&apos;t agree.
            <br />
            <br />
            <strong>Professional:</strong>
            <br />
            I understand your point; however, I have some reservations about
            this approach.
          </div>
        </section>

        {/* Diplomatic Language */}
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
            15. Diplomatic Language
          </h2>

          <p style={{ color: "#475467", lineHeight: 1.8 }}>
            Diplomacy allows you to communicate difficult ideas without
            sounding unnecessarily direct.
          </p>

          <div style={boxStyle}>
            <strong>Instead of:</strong> That&apos;s wrong.
            <br />
            <strong>Say:</strong> I&apos;m not sure that&apos;s quite correct.
            <br />
            <br />

            <strong>Instead of:</strong> You need to change this.
            <br />
            <strong>Say:</strong> It might be worth reconsidering this part.
            <br />
            <br />

            <strong>Instead of:</strong> I don&apos;t like your idea.
            <br />
            <strong>Say:</strong> I&apos;m not entirely convinced by that
            approach.
          </div>
        </section>

        {/* Functional Review */}
        <section
          style={{
            background: "#eef4ff",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "22px",
          }}
        >
          <h2 style={{ color: "#173b78", marginTop: 0 }}>
            16. Functional English Review
          </h2>

          <div style={boxStyle}>
            <strong>Opinion:</strong> From my point of view...
            <br />
            <br />
            <strong>Agreement:</strong> I completely agree with you.
            <br />
            <br />
            <strong>Disagreement:</strong> I see your point, but...
            <br />
            <br />
            <strong>Suggestion:</strong> It might be worth...
            <br />
            <br />
            <strong>Request:</strong> I was wondering if you could...
            <br />
            <br />
            <strong>Clarification:</strong> Could you clarify...?
            <br />
            <br />
            <strong>Complaint:</strong> I&apos;d like to make a complaint
            about...
            <br />
            <br />
            <strong>Negotiation:</strong> Would you be willing to...?
            <br />
            <br />
            <strong>Agreement:</strong> That works for me.
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
            17. Common Mistakes
          </h2>

          <div style={boxStyle}>
            <strong>Incorrect:</strong>
            <br />
            I suggest you to contact the manager.
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            I suggest that you contact the manager.
            <br />
            <br />
            <strong>Also correct:</strong>
            <br />
            I suggest contacting the manager.
          </div>

          <div style={boxStyle}>
            <strong>Incorrect:</strong>
            <br />
            Would you mind to help me?
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            Would you mind helping me?
          </div>

          <div style={boxStyle}>
            <strong>Incorrect:</strong>
            <br />
            I am agree with you.
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            I agree with you.
          </div>

          <div style={boxStyle}>
            <strong>Incorrect:</strong>
            <br />
            Can you explain me the problem?
            <br />
            <br />
            <strong>Correct:</strong>
            <br />
            Can you explain the problem to me?
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
            Rewrite each sentence using more advanced and natural functional
            English.
          </p>

          <div style={boxStyle}>
            <strong>1.</strong> Give me the report.
            <br />
            → Could you please send me the report?
            <br />
            <br />

            <strong>2.</strong> I don&apos;t agree.
            <br />
            → I see your point, but I&apos;m not sure I agree.
            <br />
            <br />

            <strong>3.</strong> You should talk to your manager.
            <br />
            → If I were you, I&apos;d talk to your manager.
            <br />
            <br />

            <strong>4.</strong> Explain that again.
            <br />
            → Could you clarify what you mean?
            <br />
            <br />

            <strong>5.</strong> Your idea is wrong.
            <br />
            → I&apos;m not entirely convinced by that approach.
            <br />
            <br />

            <strong>6.</strong> We can reduce the price.
            <br />
            → We might be able to reduce the price.
            <br />
            <br />

            <strong>7.</strong> I want to complain about the service.
            <br />
            → I&apos;d like to make a complaint about the service.
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
            Advanced English is not only about grammar. Effective B2
            communication means choosing the right expressions for the
            situation, adjusting your level of formality, expressing ideas
            diplomatically, and responding naturally to other people.
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
            href="/resources/grammar/b2/linking-devices-complex-sentences"
            style={navStyle}
          >
            ← Previous Lesson
          </Link>

          <Link
            href="/resources/grammar/b2"
            style={{
              ...navStyle,
              background: "#173b78",
              color: "#fff",
              border: "1px solid #173b78",
            }}
          >
            Back to B2 Grammar →
          </Link>
        </div>
      </div>
    </main>
  );
}