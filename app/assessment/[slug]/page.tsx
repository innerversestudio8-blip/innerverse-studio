import AssessmentEngine from "@/assessments/engine/AssessmentEngine";
import { decisionInflection } from "@/assessments/configs/decisionInflection";
import { innerArchitecture } from "@/assessments/configs/innerArchitecture"; // ✅ NEW

const registry: any = {
  "decision-inflection": decisionInflection,
  "inner-architecture": innerArchitecture, // ✅ NEW
};

export default async function Page({ params }: any) {
  const resolvedParams = await params;

  const config = registry[resolvedParams.slug];

  if (!config) {
    return (
      <div style={{ padding: "40px" }}>
        ❌ Assessment not found: {resolvedParams.slug}
      </div>
    );
  }

  return <AssessmentEngine config={config} />;
}