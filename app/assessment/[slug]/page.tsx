import AssessmentEngine from "@/assessments/engine/AssessmentEngine";
import { decisionInflection } from "@/assessments/configs/decisionInflection";

const registry: any = {
  "decision-inflection": decisionInflection,
};

export default function Page({ params }: any) {
  const config = registry[params.slug];

  if (!config) {
    return (
      <div style={{ padding: "40px" }}>
        Assessment not found: {params.slug}
      </div>
    );
  }

  return <AssessmentEngine config={config} />;
}