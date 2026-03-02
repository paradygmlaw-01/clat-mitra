// qb-constitution.js
// CLAT Mitra — Constitutional Law
// 2 questions + 9 glossary terms

window.qbConstitution = {

  glossary: [
    {
      term: "Constitution",
      subject: "Constitution",
      definition: "The supreme legal document that structures government, divides power among institutions, and protects citizens rights. All laws must conform to it."
    },
    {
      term: "Fundamental Rights",
      subject: "Constitution",
      definition: "Rights guaranteed to individuals against unjust State action (Articles 12-35). They are directly enforceable through courts."
    },
    {
      term: "Article 14",
      subject: "Constitution",
      definition: "Guarantees equality before law and equal protection of laws. The State cannot act arbitrarily; similarly placed persons must be treated equally."
    },
    {
      term: "Article 19",
      subject: "Constitution",
      definition: "Guarantees six freedoms including speech, assembly, movement, and profession. Reasonable restrictions are permitted on grounds stated in the Constitution."
    },
    {
      term: "Article 21",
      subject: "Constitution",
      definition: "No person shall be deprived of life or personal liberty except according to procedure established by law. Broadly interpreted to include dignity and privacy."
    },
    {
      term: "Habeas Corpus",
      subject: "Constitution",
      definition: "A writ directing the State to produce a person held in detention before the court to examine the legality of that detention."
    },
    {
      term: "Mandamus",
      subject: "Constitution",
      definition: "A writ commanding a public authority to perform a public duty it has failed or refused to perform."
    },
    {
      term: "DPSP",
      subject: "Constitution",
      definition: "Directive Principles of State Policy (Part IV): welfare goals for the State that are not directly enforceable in court, unlike Fundamental Rights."
    },
    {
      term: "Rule of Law",
      subject: "Constitution",
      definition: "The principle that no one is above the law, not even the government. All action must be lawful and within constitutional limits."
    }
  ],

  questions: [
    {
      id: "CON-ST-01",
      subject: "Constitution",
      topic: "Article 14 - Equality and Arbitrary State Action",
      principle: "The State shall not deny any person equality before the law. Any State action that discriminates between similarly situated persons without a reasonable and intelligible basis is arbitrary and unlawful.",
      facts: "A State government issued an order granting a tax exemption to all textile factories in District A but refused the same exemption to textile factories in District B, without providing any reason or distinguishing basis between the two districts.",
      question: "Based on the Principle and Facts, which conclusion is correct?",
      options: [
        "A) The State's action is valid because the government has complete discretion in tax policy.",
        "B) The State's action is valid because exemptions are a privilege, not a right.",
        "C) The State's action is arbitrary and unlawful because similarly situated factories in District B are treated differently without any reasonable basis.",
        "D) The State's action is lawful as long as it benefits some citizens."
      ],
      correctAnswer: "C",
      explanation: "The Principle forbids the State from treating similarly situated persons differently without a reasonable basis. Textile factories in both districts are similarly situated, and no reason was given for the differential treatment. Options A, B, and D introduce conditions not found in the Principle."
    },
    {
      id: "CON-ST-02",
      subject: "Constitution",
      topic: "Writs - Habeas Corpus",
      principle: "Every person has a right to personal liberty. No person may be detained by the State without following a procedure established by law. A person detained unlawfully is entitled to seek release by approaching a court.",
      facts: "Dilnawaz was detained by police for 20 days without any formal arrest, charge, or production before a magistrate. His family approached a High Court seeking his release.",
      question: "Based on the Principle and Facts, which conclusion is correct?",
      options: [
        "A) The detention is valid because police have authority to detain suspects.",
        "B) The detention is unlawful; Dilnawaz is entitled to be released as no procedure established by law was followed.",
        "C) The detention is valid for up to 30 days without charge under standard police powers.",
        "D) Dilnawaz's family cannot approach the court; only Dilnawaz himself can seek release."
      ],
      correctAnswer: "B",
      explanation: "The Principle requires that detention follow a procedure established by law. No formal arrest, charge, or magistrate production occurred. Dilnawaz is entitled to release. Options A and C add conditions not in the Principle. Option D restricts who can approach the court, which is not stated in the Principle."
    }
  ]

};
