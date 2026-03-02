// qb-legal-reasoning.js
// CLAT Mitra — Legal Reasoning Basics
// 2 questions + 6 glossary terms

window.qbLegalReasoning = {

  glossary: [
    {
      term: "Principle",
      subject: "Legal Reasoning Basics",
      definition: "The rule or norm given in a CLAT question that acts as the mini-law for that question. You must apply only this rule to the facts — no outside law or personal opinion."
    },
    {
      term: "Facts",
      subject: "Legal Reasoning Basics",
      definition: "The situation or event described in the question. Facts are the input you apply the Principle to in order to reach a Conclusion."
    },
    {
      term: "Conclusion",
      subject: "Legal Reasoning Basics",
      definition: "The result obtained by applying the Principle to the Facts. Common forms: 'A is liable', 'A is not liable', 'B can claim against A'."
    },
    {
      term: "IF-THEN Structure",
      subject: "Legal Reasoning Basics",
      definition: "A method to decode any Principle: IF [condition] THEN [result] UNLESS [exception]. Spotting the UNLESS (exception) is critical to avoid losing marks."
    },
    {
      term: "Exception / UNLESS",
      subject: "Legal Reasoning Basics",
      definition: "A condition that blocks the normal result of a Principle. Signal words: unless, except, provided that, only if, however."
    },
    {
      term: "Trap Option",
      subject: "Legal Reasoning Basics",
      definition: "A wrong answer choice that looks correct. Common types: moral opinion, outside-the-principle rule, extreme words (always/never), exception ignored, facts distorted, wrong person made liable."
    }
  ],

  questions: [
    {
      id: "LR-01",
      subject: "Legal Reasoning Basics",
      topic: "IF-THEN Structure & Exceptions",
      principle: "A person is liable for damage caused to another if they acted intentionally or recklessly. However, a person is NOT liable if they acted in genuine self-defence.",
      facts: "Ravi pushed Meena during a heated argument because he was angry at her comments. Meena fell and fractured her wrist. Ravi was not under any physical threat from Meena at the time.",
      question: "Based on the Principle and Facts, which conclusion is most appropriate?",
      options: [
        "A) Ravi is not liable because the argument was provoked by Meena.",
        "B) Ravi is liable because he acted intentionally and self-defence does not apply.",
        "C) Ravi is not liable because he did not intend to fracture her wrist.",
        "D) Ravi is not liable because it was a spontaneous act in the heat of the moment."
      ],
      correctAnswer: "B",
      explanation: "The Principle requires intentional or reckless action for liability. Ravi acted intentionally out of anger. The self-defence exception requires a genuine physical threat, which is absent here. Options A, C, and D introduce reasoning not supported by the given Principle."
    },
    {
      id: "LR-02",
      subject: "Legal Reasoning Basics",
      topic: "Trap Options - Moral Opinion vs Principle",
      principle: "A person who makes a false statement knowing it to be false, and thereby causes financial loss to another, shall be liable to compensate that loss.",
      facts: "Asha told Birju that a plot of land was free of any legal disputes, knowing this to be false. Birju purchased the land relying on Asha's statement and later suffered financial loss when a court dispute froze his use of the land.",
      question: "Which of the following is the correct conclusion?",
      options: [
        "A) Asha is liable because what she did was morally wrong and she should be punished.",
        "B) Asha is not liable because Birju should have done his own due diligence before buying.",
        "C) Asha is liable because she made a false statement knowingly and Birju suffered financial loss as a result.",
        "D) Asha is not liable because the loss was caused by the court dispute, not by her statement."
      ],
      correctAnswer: "C",
      explanation: "The Principle requires: (1) false statement, (2) knowledge of falsity, (3) financial loss. All three are satisfied. Option A uses moral reasoning (trap). Option B adds a due diligence condition not in the Principle (trap). Option D distorts causation."
    }
  ]

};
