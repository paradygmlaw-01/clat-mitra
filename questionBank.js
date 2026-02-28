// questionBank.js
// CLAT Legal Reasoning — Question Bank
// Subjects: Legal Reasoning Basics | Contract | Constitution | Torts
// Structure: GLOSSARY + 8 MCQs (2 per subject)

// ─────────────────────────────────────────────
// GLOSSARY
// ─────────────────────────────────────────────
const glossary = [
  // ── Legal Reasoning Basics ──
  {
    term: "Principle",
    subject: "Legal Reasoning Basics",
    definition: "The rule or norm given in a CLAT question that acts as the mini-law for that question. You must apply only this rule to the facts—no outside law or personal opinion."
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
    term: "IF–THEN Structure",
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
  },

  // ── Contract ──
  {
    term: "Contract",
    subject: "Contract",
    definition: "An agreement enforceable by law. Formula: Contract = Agreement + Legal Enforceability."
  },
  {
    term: "Offer",
    subject: "Contract",
    definition: "A clear, communicated proposal by one party with the intention that acceptance will create a binding agreement."
  },
  {
    term: "Acceptance",
    subject: "Contract",
    definition: "Unconditional and communicated agreement to all terms of the offer. A reply that changes any term is a Counter-Offer, not acceptance."
  },
  {
    term: "Consideration",
    subject: "Contract",
    definition: "Something of value exchanged between parties (money, service, promise, or abstaining from an act). No consideration → generally no contract."
  },
  {
    term: "Free Consent",
    subject: "Contract",
    definition: "Consent given voluntarily, free from coercion, fraud, misrepresentation, or undue influence. Absence of free consent usually makes a contract voidable."
  },
  {
    term: "Void Agreement",
    subject: "Contract",
    definition: "An agreement with no legal effect from the start (e.g., illegal object, lack of capacity). Neither party can enforce it."
  },
  {
    term: "Voidable Contract",
    subject: "Contract",
    definition: "A valid contract that the aggrieved party may choose to cancel (e.g., contract obtained by fraud or coercion). It remains valid until cancelled."
  },
  {
    term: "Breach of Contract",
    subject: "Contract",
    definition: "Failure by a party to perform their contractual obligation. Remedies include damages, specific performance, rescission, or injunction (as given in the passage)."
  },
  {
    term: "Counter-Offer",
    subject: "Contract",
    definition: "A reply to an offer that changes any of its terms. It rejects the original offer and creates a new one."
  },

  // ── Constitution ──
  {
    term: "Constitution",
    subject: "Constitution",
    definition: "The supreme legal document that structures government, divides power among institutions, and protects citizens' rights. All laws must conform to it."
  },
  {
    term: "Fundamental Rights",
    subject: "Constitution",
    definition: "Rights guaranteed to individuals against unjust State action (Articles 12–35). They are directly enforceable through courts."
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
    definition: "The principle that no one is above the law—not even the government. All action must be lawful and within constitutional limits."
  },

  // ── Torts ──
  {
    term: "Tort",
    subject: "Torts",
    definition: "A civil wrong (not a crime) that causes harm to a person, for which the law provides a remedy—usually compensation (damages) or an injunction."
  },
  {
    term: "Negligence",
    subject: "Torts",
    definition: "Failure to take reasonable care, resulting in foreseeable harm to another. Four elements: duty of care, breach, causation, actual damage."
  },
  {
    term: "Vicarious Liability",
    subject: "Torts",
    definition: "Liability imposed on A for a wrong committed by B, due to a special relationship (most commonly employer–employee). The act must occur in the course of employment."
  },
  {
    term: "Strict Liability",
    subject: "Torts",
    definition: "Liability imposed without proof of negligence or intent—applies typically when a person keeps a dangerous thing that escapes and causes harm."
  },
  {
    term: "Defamation",
    subject: "Torts",
    definition: "Publication of a false statement about a person that damages their reputation. Requires: false statement + publication to a third party + reputational harm."
  },
  {
    term: "Nuisance",
    subject: "Torts",
    definition: "Unreasonable interference with a person's use and enjoyment of land/property. Can be private (affects one person) or public (affects the community)."
  },
  {
    term: "Duty of Care",
    subject: "Torts",
    definition: "A legal obligation to take reasonable care to avoid causing foreseeable harm to others. First element of the tort of Negligence."
  }
];

// ─────────────────────────────────────────────
// MCQ QUESTION BANK  (8 questions, 2 per subject)
// Each question: CLAT-style Principle → Facts → 4 options
// ─────────────────────────────────────────────
const questions = [

  // ══════════════════════════════
  // SUBJECT 1 — LEGAL REASONING BASICS
  // ══════════════════════════════
  {
    id: "LR-01",
    subject: "Legal Reasoning Basics",
    topic: "IF–THEN Structure & Exceptions",
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
    explanation: "The Principle requires intentional or reckless action → liability. Ravi acted intentionally (out of anger). The self-defence exception requires a genuine physical threat, which is absent here. Options A, C, and D introduce reasoning not supported by the given Principle."
  },

  {
    id: "LR-02",
    subject: "Legal Reasoning Basics",
    topic: "Trap Options — Moral Opinion vs. Principle",
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
    explanation: "The Principle requires: (1) false statement, (2) knowledge of falsity, (3) financial loss to the other party. All three are satisfied. Option A uses moral reasoning (trap). Option B adds a due diligence condition not in the Principle (trap). Option D distorts causation—the court dispute was the direct result of the false statement."
  },

  // ══════════════════════════════
  // SUBJECT 2 — CONTRACT
  // ══════════════════════════════
  {
    id: "CON-01",
    subject: "Contract",
    topic: "Offer & Counter-Offer",
    principle: "A contract is formed when an offer is accepted unconditionally. If the reply to an offer changes any term, it is a counter-offer and not an acceptance, and the original offer stands rejected.",
    facts: "Priya offered to sell her laptop to Sonu for ₹30,000 to be paid within 3 days. Sonu replied: 'I accept, but I will pay ₹28,000.' Priya did not respond. Sonu later insisted a contract existed.",
    question: "Based on the Principle and Facts, which conclusion is correct?",
    options: [
      "A) A valid contract exists because Sonu communicated his acceptance.",
      "B) A valid contract exists because Priya's silence means she agreed to ₹28,000.",
      "C) No valid contract exists because Sonu's reply was a counter-offer, not an unconditional acceptance.",
      "D) No valid contract exists because Priya did not confirm in writing."
    ],
    correctAnswer: "C",
    explanation: "Sonu changed the price from ₹30,000 to ₹28,000, making his reply a counter-offer per the Principle. The original offer stands rejected. Option A ignores that the 'acceptance' was conditional. Option B incorrectly treats silence as acceptance (not supported by the Principle). Option D introduces a writing requirement not in the Principle (trap)."
  },

  {
    id: "CON-02",
    subject: "Contract",
    topic: "Void Agreement — Illegal Object",
    principle: "An agreement whose object or purpose is forbidden by law is void. A void agreement has no legal effect, and neither party can enforce it or claim any benefit under it.",
    facts: "Karan and Anuj entered into an agreement where Karan would pay Anuj ₹50,000 to help him destroy a competitor's business records. Anuj completed the task but Karan refused to pay. Anuj sought to recover the money.",
    question: "Based on the Principle and Facts, which is the most appropriate conclusion?",
    options: [
      "A) Anuj can recover ₹50,000 because he completed his part of the agreement.",
      "B) The agreement is void; Anuj cannot recover any money.",
      "C) Karan must pay because refusing to pay after receiving a service is dishonest.",
      "D) The agreement is voidable at Anuj's option because he was misled about the nature of the task."
    ],
    correctAnswer: "B",
    explanation: "The object of the agreement (destroying records) is illegal. The Principle states a void agreement has no legal effect and neither party can enforce it. Anuj cannot recover money even though he performed his part. Option A ignores the void nature. Option C is a moral opinion (trap). Option D misapplies voidable—voidability is not triggered here."
  },

  // ══════════════════════════════
  // SUBJECT 3 — CONSTITUTION
  // ══════════════════════════════
  {
    id: "CON-ST-01",
    subject: "Constitution",
    topic: "Article 14 — Equality & Arbitrary State Action",
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
    explanation: "The Principle forbids the State from treating similarly situated persons differently without a reasonable basis. Textile factories in both districts are similarly situated, and no reason was given for the differential treatment. Options A, B, and D introduce conditions (discretion, privilege, partial benefit) not found in the Principle."
  },

  {
    id: "CON-ST-02",
    subject: "Constitution",
    topic: "Writs — Habeas Corpus",
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
    explanation: "The Principle requires that detention follow a procedure established by law. No formal arrest, charge, or magistrate production occurred—none of the lawful steps were followed. Dilnawaz is entitled to release. Options A and C add conditions not in the Principle. Option D restricts who can approach the court, which is not stated in the Principle."
  },

  // ══════════════════════════════
  // SUBJECT 4 — TORTS
  // ══════════════════════════════
  {
    id: "TORT-01",
    subject: "Torts",
    topic: "Negligence — Duty of Care & Causation",
    principle: "A person is liable in negligence if they owed a duty of care to the claimant, breached that duty by failing to act as a reasonable person would, and that breach directly caused actual damage to the claimant.",
    facts: "A supermarket employee mopped the floor and left without placing any warning sign. A customer slipped on the wet floor and broke her ankle. The employee knew customers regularly walked through that area.",
    question: "Based on the Principle and Facts, which conclusion is most appropriate?",
    options: [
      "A) The supermarket is not liable because mopping floors is a routine and necessary task.",
      "B) The customer is responsible for not being careful while walking.",
      "C) The supermarket is liable because the employee breached the duty of care by failing to warn customers, and that breach caused the customer's injury.",
      "D) The supermarket is not liable because the customer should have noticed the wet floor."
    ],
    correctAnswer: "C",
    explanation: "All four negligence elements are satisfied: (1) duty of care to customers using the area, (2) breach by failing to place a warning sign, (3) causation—the wet floor caused the slip, (4) actual damage—broken ankle. Options A, B, and D shift blame or add conditions not in the Principle."
  },

  {
    id: "TORT-02",
    subject: "Torts",
    topic: "Strict Liability — Dangerous Thing & Escape",
    principle: "A person who keeps a dangerous thing on their land is strictly liable for all damage caused if that thing escapes and harms another person, regardless of whether the person was negligent.",
    facts: "A chemical factory stored large quantities of toxic acid on its premises. Due to a structural failure unrelated to any negligence by the factory, the acid leaked into a neighbouring residential area, causing severe harm to residents.",
    question: "Based on the Principle and Facts, which conclusion is correct?",
    options: [
      "A) The factory is not liable because the structural failure was not due to negligence.",
      "B) The factory is liable because a dangerous substance escaped from its land and caused harm, regardless of negligence.",
      "C) The factory is not liable because it could not have foreseen the structural failure.",
      "D) The residents must prove the factory was negligent before they can claim compensation."
    ],
    correctAnswer: "B",
    explanation: "The Principle imposes strict liability: if a dangerous thing escapes and causes harm, liability follows regardless of negligence. All conditions are met—dangerous thing (toxic acid), escape (leak), harm (residents injured). Options A, C, and D all require proof of negligence, which the Principle explicitly removes."
  }

];

// ─────────────────────────────────────────────
// EXPORT
// ─────────────────────────────────────────────
// Compatible with both ES Modules and CommonJS environments.
if (typeof module !== "undefined" && module.exports) {
  module.exports = { glossary, questions };
} else {
  window.questionBank = { glossary, questions };
}
