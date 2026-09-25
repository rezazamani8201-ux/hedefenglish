"use client";

import ExerciseTemplate, {
  ExerciseData,
} from "../../a2/template/ExerciseTemplate";

const data: ExerciseData = {
  title: "Health, Medicine & Well-being",
  level: "B2 Vocabulary Worksheet",
  description:
    "Develop advanced vocabulary for health, medical conditions, treatment, prevention, fitness, mental well-being, and healthy lifestyles.",

  section1: [
    {
      question:
        "Regular exercise can significantly ________ the risk of developing certain chronic diseases.",
      options: ["reduce", "withdraw", "interrupt", "neglect"],
      correct: "reduce",
    },
    {
      question:
        "The doctor recommended a series of tests to ________ the cause of his symptoms.",
      options: ["determine", "dismiss", "conceal", "withdraw"],
      correct: "determine",
    },
    {
      question:
        "She has been advised to ________ her intake of processed food.",
      options: ["limit", "expand", "interrupt", "ignore"],
      correct: "limit",
    },
    {
      question:
        "The medication may cause mild side ________, including headaches and nausea.",
      options: ["effects", "issues", "conditions", "symptoms"],
      correct: "effects",
    },
    {
      question:
        "He made a complete recovery after undergoing ________ treatment.",
      options: ["intensive", "temporary", "casual", "irrelevant"],
      correct: "intensive",
    },
    {
      question:
        "Doctors are encouraging people to take a more ________ approach to their health.",
      options: ["preventive", "confrontational", "passive", "temporary"],
      correct: "preventive",
    },
    {
      question:
        "Long-term stress can have a serious ________ on both physical and mental health.",
      options: ["impact", "withdrawal", "obstacle", "hesitation"],
      correct: "impact",
    },
    {
      question:
        "The patient was asked to ________ from eating before the medical examination.",
      options: ["refrain", "recover", "maintain", "enhance"],
      correct: "refrain",
    },
    {
      question:
        "A balanced diet provides the body with the essential ________ it needs to function properly.",
      options: ["nutrients", "symptoms", "treatments", "conditions"],
      correct: "nutrients",
    },
    {
      question:
        "She has started practicing meditation to improve her emotional ________.",
      options: ["well-being", "withdrawal", "condition", "treatment"],
      correct: "well-being",
    },
  ],

  section2: {
    questions: [
      {
        word: "chronic",
        correct:
          "continuing for a long time, especially when referring to a disease or health problem",
      },
      {
        word: "symptom",
        correct:
          "a physical or mental sign that indicates the presence of a health problem",
      },
      {
        word: "diagnosis",
        correct:
          "the identification of an illness or medical condition",
      },
      {
        word: "treatment",
        correct:
          "medical care given to a person for an illness or injury",
      },
      {
        word: "prevention",
        correct:
          "action taken to stop something harmful from happening",
      },
      {
        word: "immune system",
        correct:
          "the body's system that protects it from infections and diseases",
      },
      {
        word: "sedentary",
        correct:
          "involving a lot of sitting and very little physical activity",
      },
      {
        word: "well-being",
        correct:
          "the state of being comfortable, healthy, and satisfied physically and mentally",
      },
    ],

    definitions: [
      "continuing for a long time, especially when referring to a disease or health problem",
      "a physical or mental sign that indicates the presence of a health problem",
      "the identification of an illness or medical condition",
      "medical care given to a person for an illness or injury",
      "action taken to stop something harmful from happening",
      "the body's system that protects it from infections and diseases",
      "involving a lot of sitting and very little physical activity",
      "the state of being comfortable, healthy, and satisfied physically and mentally",
    ],
  },

  section3: [
    {
      question:
        "The doctor advised him to ________ regular physical activity into his daily routine.",
      correct: "incorporate",
    },
    {
      question:
        "She is trying to ________ her stress levels by getting more sleep.",
      correct: "reduce",
    },
    {
      question:
        "Patients should always ________ the instructions provided with their medication.",
      correct: "follow",
    },
    {
      question:
        "The specialist recommended that he ________ an appointment with a nutritionist.",
      correct: "make",
    },
    {
      question:
        "A healthy lifestyle can help people ________ many common illnesses.",
      correct: "prevent",
    },
    {
      question:
        "She has managed to ________ her weight at a healthy level through diet and exercise.",
      correct: "maintain",
    },
    {
      question:
        "The patient was asked to ________ his symptoms in a diary.",
      correct: "record",
    },
    {
      question:
        "Regular medical check-ups can help ________ health problems at an early stage.",
      correct: "detect",
    },
  ],

  section4: [
    {
      question:
        "The patient suffers from a ________ condition that requires ongoing medical care.",
      options: ["chronic", "temporary", "casual", "minor"],
      correct: "chronic",
    },
    {
      question:
        "A persistent cough can be a ________ of several different respiratory conditions.",
      options: ["symptom", "treatment", "diagnosis", "prevention"],
      correct: "symptom",
    },
    {
      question:
        "The doctor confirmed the ________ after reviewing the patient's test results.",
      options: ["diagnosis", "exercise", "symptom", "prevention"],
      correct: "diagnosis",
    },
    {
      question:
        "The new ________ helped the patient recover much faster than expected.",
      options: ["treatment", "symptom", "condition", "prevention"],
      correct: "treatment",
    },
    {
      question:
        "Vaccination is one of the most effective forms of disease ________.",
      options: ["prevention", "diagnosis", "treatment", "recovery"],
      correct: "prevention",
    },
    {
      question:
        "A healthy ________ is essential for protecting the body against infections.",
      options: [
        "immune system",
        "side effect",
        "medical record",
        "treatment",
      ],
      correct: "immune system",
    },
  ],

  section5: [
    {
      question:
        "People who spend most of their working day sitting at a desk often have a ________ lifestyle.",
      options: [
        "sedentary",
        "intensive",
        "preventive",
        "active",
      ],
      correct: "sedentary",
    },
    {
      question:
        "The clinic offers programs designed to improve patients' physical and emotional ________.",
      options: [
        "well-being",
        "diagnosis",
        "symptom",
        "treatment",
      ],
      correct: "well-being",
    },
    {
      question:
        "The doctor advised her to monitor her blood pressure regularly because high blood pressure can remain ________ for years without obvious symptoms.",
      options: [
        "asymptomatic",
        "temporary",
        "preventive",
        "active",
      ],
      correct: "asymptomatic",
    },
    {
      question:
        "Getting enough sleep is essential for maintaining both physical health and mental ________.",
      options: [
        "well-being",
        "diagnosis",
        "condition",
        "treatment",
      ],
      correct: "well-being",
    },
    {
      question:
        "The doctor explained that the medication should be taken regularly to ensure its maximum ________.",
      options: [
        "effectiveness",
        "symptom",
        "prevention",
        "diagnosis",
      ],
      correct: "effectiveness",
    },
    {
      question:
        "After several months of rehabilitation, the athlete gradually regained his physical ________.",
      options: [
        "strength",
        "diagnosis",
        "symptom",
        "condition",
      ],
      correct: "strength",
    },
    {
      question:
        "The hospital introduced a new program aimed at raising public ________ of the importance of early screening.",
      options: [
        "awareness",
        "treatment",
        "withdrawal",
        "condition",
      ],
      correct: "awareness",
    },
    {
      question:
        "Although the condition cannot be completely cured, it can usually be effectively ________ with medication.",
      options: [
        "managed",
        "withdrawn",
        "interrupted",
        "concealed",
      ],
      correct: "managed",
    },
  ],

  pdfFileName: "b2-health-medicine-well-being-worksheet.pdf",

  pdfTemplate: "/exercises/vocabulary/family-friends/template.png",
};

export default function HealthMedicineWellBeingPage() {
  return (
    <ExerciseTemplate
      data={data}
      previousHref="/exercises/vocabulary/b2/lifestyle-personal-development"
      previousTitle="Personal Development & Success"
      nextHref="/exercises/vocabulary/b2/food-nutrition-lifestyle"
      nextTitle="Food, Nutrition & Lifestyle"
    />
  );
}