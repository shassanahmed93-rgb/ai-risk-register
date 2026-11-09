export function analyze(input) {
  const risks = input.risks.map(risk => {
    for (const rating of [risk.likelihood,risk.impact]) {
      if (!Number.isInteger(rating) || rating < 1 || rating > 5) throw new Error("Ratings must be integers from 1 to 5.");
    }
    const score = risk.likelihood * risk.impact;
    return {...risk, score, tier:score >= 15 ? "high" : score >= 8 ? "medium" : "low", followUp:!risk.owner || !risk.treatment ? "Assign owner and treatment" : "Review with risk owner"};
  }).sort((a,b) => b.score-a.score);
  return {high:risks.filter(risk => risk.tier === "high").length, risks};
}
