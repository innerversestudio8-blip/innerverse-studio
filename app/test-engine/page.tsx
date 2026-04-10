import AssessmentEngine from "@/assessments/engine/AssessmentEngine";
import { decisionInflection } from "@/assessments/configs/decisionInflection";

export default function Page() {
  return <AssessmentEngine config={decisionInflection} />;
}