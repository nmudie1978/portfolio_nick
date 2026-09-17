import { achievements } from "@/content/achievements";
import { experience, journey } from "@/content/experience";
import type { Achievement, ExperienceEntry, JourneyStage } from "@/content/types";

export interface StageEvidence {
  stage: JourneyStage;
  index: number;
  organisations: ExperienceEntry[];
  achievements: Achievement[];
}

/**
 * The six-stage progression with the organisations and achievements that
 * evidence each stage. Organisations can appear under several stages; this
 * is a map of responsibility, not a chronology, and no dates are implied.
 */
export function journeyWithEvidence(): StageEvidence[] {
  return journey.map((stage, index) => ({
    stage,
    index,
    organisations: experience.filter((e) => e.stages.includes(stage.label)),
    achievements: achievements.filter((a) => a.stage === stage.label),
  }));
}
