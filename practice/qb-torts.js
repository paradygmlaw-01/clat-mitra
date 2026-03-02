// qb-torts.js
// CLAT Mitra — Torts
// 2 questions + 7 glossary terms

window.qbTorts = {

  glossary: [
    {
      term: "Tort",
      subject: "Torts",
      definition: "A civil wrong (not a crime) that causes harm to a person, for which the law provides a remedy, usually compensation (damages) or an injunction."
    },
    {
      term: "Negligence",
      subject: "Torts",
      definition: "Failure to take reasonable care, resulting in foreseeable harm to another. Four elements: duty of care, breach, causation, actual damage."
    },
    {
      term: "Vicarious Liability",
      subject: "Torts",
      definition: "Liability imposed on A for a wrong committed by B, due to a special relationship (most commonly employer-employee). The act must occur in the course of employment."
    },
    {
      term: "Strict Liability",
      subject: "Torts",
      definition: "Liability imposed without proof of negligence or intent. Applies typically when a person keeps a dangerous thing that escapes and causes harm."
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
  ],

  questions: [
    {
      id: "TORT-01",
      subject: "Torts",
      topic: "Negligence - Duty of Care and Causation",
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
      explanation: "All four negligence elements are satisfied: (1) duty of care to customers, (2) breach by failing to place a warning sign, (3) causation - the wet floor caused the slip, (4) actual damage - broken ankle. Options A, B, and D shift blame or add conditions not in the Principle."
    },
    {
      id: "TORT-02",
      subject: "Torts",
      topic: "Strict Liability - Dangerous Thing and Escape",
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
      explanation: "The Principle imposes strict liability: if a dangerous thing escapes and causes harm, liability follows regardless of negligence. All conditions are met - dangerous thing (toxic acid), escape (leak), harm (residents injured). Options A, C, and D all require proof of negligence, which the Principle explicitly removes."
    }
  ]

};
