// qb-contract.js
// CLAT Mitra — Contract Law
// 2 questions + 9 glossary terms

window.qbContract = {

  glossary: [
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
      definition: "Something of value exchanged between parties (money, service, promise, or abstaining from an act). No consideration means generally no contract."
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
      definition: "Failure by a party to perform their contractual obligation. Remedies include damages, specific performance, rescission, or injunction."
    },
    {
      term: "Counter-Offer",
      subject: "Contract",
      definition: "A reply to an offer that changes any of its terms. It rejects the original offer and creates a new one."
    }
  ],

  questions: [
    {
      id: "CON-01",
      subject: "Contract",
      topic: "Offer & Counter-Offer",
      principle: "A contract is formed when an offer is accepted unconditionally. If the reply to an offer changes any term, it is a counter-offer and not an acceptance, and the original offer stands rejected.",
      facts: "Priya offered to sell her laptop to Sonu for Rs.30,000 to be paid within 3 days. Sonu replied: I accept, but I will pay Rs.28,000. Priya did not respond. Sonu later insisted a contract existed.",
      question: "Based on the Principle and Facts, which conclusion is correct?",
      options: [
        "A) A valid contract exists because Sonu communicated his acceptance.",
        "B) A valid contract exists because Priya's silence means she agreed to Rs.28,000.",
        "C) No valid contract exists because Sonu's reply was a counter-offer, not an unconditional acceptance.",
        "D) No valid contract exists because Priya did not confirm in writing."
      ],
      correctAnswer: "C",
      explanation: "Sonu changed the price from Rs.30,000 to Rs.28,000, making his reply a counter-offer per the Principle. The original offer stands rejected. Option A ignores the conditional acceptance. Option B incorrectly treats silence as acceptance. Option D introduces a writing requirement not in the Principle."
    },
    {
      id: "CON-02",
      subject: "Contract",
      topic: "Void Agreement - Illegal Object",
      principle: "An agreement whose object or purpose is forbidden by law is void. A void agreement has no legal effect, and neither party can enforce it or claim any benefit under it.",
      facts: "Karan and Anuj entered into an agreement where Karan would pay Anuj Rs.50,000 to help him destroy a competitor's business records. Anuj completed the task but Karan refused to pay. Anuj sought to recover the money.",
      question: "Based on the Principle and Facts, which is the most appropriate conclusion?",
      options: [
        "A) Anuj can recover Rs.50,000 because he completed his part of the agreement.",
        "B) The agreement is void; Anuj cannot recover any money.",
        "C) Karan must pay because refusing to pay after receiving a service is dishonest.",
        "D) The agreement is voidable at Anuj's option because he was misled about the nature of the task."
      ],
      correctAnswer: "B",
      explanation: "The object of the agreement (destroying records) is illegal. The Principle states a void agreement has no legal effect and neither party can enforce it. Option A ignores the void nature. Option C is a moral opinion (trap). Option D misapplies voidable."
    }
  ]

};
