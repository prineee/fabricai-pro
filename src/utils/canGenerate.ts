import { usageLimits } from "./usageLimit";

export function canGenerate(
  plan: string,
  todayUsage: number
) {
  const limit =
    usageLimits[
      plan as keyof typeof usageLimits
    ];

  return todayUsage < limit;
}