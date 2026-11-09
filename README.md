# AI Risk Register

Prioritize risks by likelihood and impact and expose ownership and treatment.

[Run the portfolio demo](https://shassanahmed.space/cyber-labs/ai-risk-register/)

## Reproduce the result

Open `index.html` in a modern browser or run `node test.mjs` with Node.js 20+. The demo accepts editable JSON and exports evidence. The sample input is in `fixture.json`.

## Sample evidence

```json
{
  "high": 1,
  "risks": [
    {
      "id": "R-01",
      "scenario": "Overprivileged production account",
      "likelihood": 4,
      "impact": 5,
      "owner": "Platform",
      "treatment": "Reduce permissions",
      "score": 20,
      "tier": "high",
      "followUp": "Review with risk owner"
    },
    {
      "id": "R-02",
      "scenario": "Delayed test restore",
      "likelihood": 2,
      "impact": 3,
      "owner": "Operations",
      "treatment": "Schedule restore drill",
      "score": 6,
      "tier": "low",
      "followUp": "Review with risk owner"
    }
  ]
}
```

## Scope

Synthetic lab inputs and deterministic rules. Review results before applying them to a real incident. The workflow currently uses rules or templates and has no model integration.

## What this demonstrates

**Connect risk ratings to ownership and treatment.** The register prioritizes scenarios by likelihood and impact. Compare a high-priority cloud access scenario with a low-priority operational scenario. The thresholds are lab assumptions and require calibration against organizational risk appetite.

[Reference guidance](https://csrc.nist.gov/pubs/ir/8286/a/r1/final)
