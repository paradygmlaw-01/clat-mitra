// questionBank.js — MASTER LOADER
// CLAT Mitra | practice/
//
// This file ONLY combines all subject question bank files.
// Do NOT add questions here — add them to the relevant subject file.
//
// Load order in quiz.html:
//   1. qb-legal-reasoning.js
//   2. qb-contract.js
//   3. qb-constitution.js
//   4. qb-torts.js
//   5. qb-logical-reasoning.js  (add when ready)
//   6. qb-gk.js                 (add when ready)
//   7. qb-english.js            (add when ready)
//   8. qb-quantitative.js       (add when ready)
//   9. questionBank.js          ← this file (always last)

window.questionBank = {

  glossary: [
    ...(window.qbLegalReasoning  ? window.qbLegalReasoning.glossary  : []),
    ...(window.qbContract        ? window.qbContract.glossary        : []),
    ...(window.qbConstitution    ? window.qbConstitution.glossary    : []),
    ...(window.qbTorts           ? window.qbTorts.glossary           : []),
    ...(window.qbLogicalReasoning? window.qbLogicalReasoning.glossary: []),
    ...(window.qbGK              ? window.qbGK.glossary              : []),
    ...(window.qbEnglish         ? window.qbEnglish.glossary         : []),
    ...(window.qbQuantitative    ? window.qbQuantitative.glossary    : [])
  ],

  questions: [
    ...(window.qbLegalReasoning  ? window.qbLegalReasoning.questions  : []),
    ...(window.qbContract        ? window.qbContract.questions        : []),
    ...(window.qbConstitution    ? window.qbConstitution.questions    : []),
    ...(window.qbTorts           ? window.qbTorts.questions           : []),
    ...(window.qbLogicalReasoning? window.qbLogicalReasoning.questions: []),
    ...(window.qbGK              ? window.qbGK.questions              : []),
    ...(window.qbEnglish         ? window.qbEnglish.questions         : []),
    ...(window.qbQuantitative    ? window.qbQuantitative.questions    : [])
  ]

};
