export const canGenerate = (
  plan,
  usageCount
) => {

  if (plan === "starter" && usageCount >= 10) {
    return false;
  }

  if (plan === "pro" && usageCount >= 500) {
    return false;
  }

  return true;
};