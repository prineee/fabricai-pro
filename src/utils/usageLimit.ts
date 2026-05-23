export const usageLimits = {
  FREE: 3,
  PRO: 999999,
  AGENCY: 999999,
};

export function canGenerate(
  plan: string,
  usage: number
) {
  const limit =
    usageLimits[
      plan as keyof typeof usageLimits
    ];

  return usage < limit;
}