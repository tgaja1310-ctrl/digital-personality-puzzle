import React, { useState } from "react";

const questions = [
  {
    text: "You are running late for an important commitment and notice someone in need of assistance. How do you respond?",
    options: [
      { text: "Offer assistance despite the delay", type: "empathy" },
      { text: "Proceed with your commitment as planned", type: "logic" },
    ],
  },
  {
    text: "You receive instructions that are incomplete or unclear. What is your immediate approach?",
    options: [
      { text: "Seek clarification before proceeding", type: "logic" },
      { text: "Interpret the information and proceed independently", type: "independent" },
    ],
  },
  {
    text: "A rule appears inefficient in a particular situation. How do you usually respond?",
    options: [
      { text: "Adhere to the rule regardless", type: "discipline" },
      { text: "Adapt the rule to suit the situation", type: "creative" },
    ],
  },
  {
    text: "You experience a significant professional setback. What is your first response?",
    options: [
      { text: "Evaluate the causes and identify improvements", type: "logic" },
      { text: "Accept the outcome and refocus on future goals", type: "resilient" },
    ],
  },
  {
    text: "In collaborative work environments, you most often take on which role?",
    options: [
      { text: "Strategic planner", type: "logic" },
      { text: "Team motivator", type: "empathy" },
    ],
  },
  {
    text: "You are required to make a decision under severe time constraints. What is your strategy?",
    options: [
      { text: "Make a rapid decision and adjust if necessary", type: "decisive" },
      { text: "Pause briefly to minimize potential errors", type: "logic" },
    ],
  },
  {
    text: "Someone misinterprets your intentions or words. How do you respond?",
    options: [
      { text: "Clarify the misunderstanding calmly", type: "empathy" },
      { text: "Allow the situation to resolve on its own", type: "independent" },
    ],
  },
  {
    text: "You receive constructive criticism that challenges your perspective. What do you do?",
    options: [
      { text: "Reflect internally before responding", type: "introspective" },
      { text: "Defend your reasoning confidently", type: "assertive" },
    ],
  },
  {
    text: "You prefer tasks that are primarily…",
    options: [
      { text: "Well-structured and clearly defined", type: "logic" },
      { text: "Flexible and open-ended", type: "creative" },
    ],
  },
  {
    text: "When acquiring a new skill, you usually prefer to…",
    options: [
      { text: "Understand the theory thoroughly first", type: "logic" },
      { text: "Learn through direct experimentation", type: "creative" },
    ],
  },
  {
    text: "A decision you must make will significantly affect others. What guides you most?",
    options: [
      { text: "Ensuring fairness and emotional impact", type: "empathy" },
      { text: "Achieving the most effective outcome", type: "decisive" },
    ],
  },
  {
    text: "You perform best in environments where work is…",
    options: [
      { text: "Carefully planned and organized", type: "discipline" },
      { text: "Adaptable and evolving", type: "creative" },
    ],
  },
  {
    text: "Your core beliefs are challenged during a discussion. How do you react?",
    options: [
      { text: "Listen attentively and reassess your views", type: "introspective" },
      { text: "Maintain your position with confidence", type: "assertive" },
    ],
  },
  {
    text: "You identify a minor issue that others have overlooked. What do you do?",
    options: [
      { text: "Address it openly", type: "logic" },
      { text: "Resolve it discreetly", type: "independent" },
    ],
  },
  {
    text: "Which quality best represents your strongest capability?",
    options: [
      { text: "Analytical reasoning", type: "logic" },
      { text: "Understanding human behavior", type: "empathy" },
    ],
  },
];

function App() {
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState({});

  const handleAnswer = (type) => {
    setScores({
      ...scores,
      [type]: (scores[type] || 0) + 1,
    });
    setCurrent(current + 1);
  };

  const getResult = () => {
    const highest = Object.keys(scores).reduce((a, b) =>
      scores[a] > scores[b] ? a : b
    );

    switch (highest) {
      case "logic":
        return "🧠 Analytical Thinker — You demonstrate clarity, structure, and reasoned decision-making.";
      case "empathy":
        return "💙 Emotionally Intelligent — You exhibit strong awareness of people, emotions, and social dynamics.";
      case "creative":
        return "🎨 Creative Strategist — You thrive in adaptive environments and value innovative thinking.";
      case "independent":
        return "🧭 Independent Mind — You trust personal judgment and operate confidently without reliance.";
      case "decisive":
        return "⚡ Decisive Leader — You act promptly and take responsibility for outcomes.";
      default:
        return "⚖ Balanced Personality — You adapt your approach thoughtfully based on circumstances.";
    }
  };

  return (
    <div className="container">
      <h1>Digital Personality Puzzle</h1>

      {current < questions.length ? (
        <div className="card">
          <h3>
            Question {current + 1} of {questions.length}
          </h3>
          <p>{questions[current].text}</p>

          {questions[current].options.map((opt, index) => (
            <button key={index} onClick={() => handleAnswer(opt.type)}>
              {opt.text}
            </button>
          ))}
        </div>
      ) : (
        <div className="card result">
          <h2>🧾 Personality Summary</h2>
          <p>{getResult()}</p>
          <button onClick={() => window.location.reload()}>
            🔄 Restart Assessment
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
