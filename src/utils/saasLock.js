export const hasAccess = (
  userPlan,
  feature
) => {

  // STARTER PLAN

  const starterFeatures = [
    "blog",
    "email",
  ];

  // PRO PLAN

  const proFeatures = [
    "blog",
    "email",
    "ads",
    "scripts",
    "landing",
    "product",
  ];

  // AGENCY PLAN

  const agencyFeatures = [
    "blog",
    "email",
    "ads",
    "scripts",
    "landing",
    "product",
    "commercial",
    "team",
    "unlimited",
  ];

  // CHECK ACCESS

  if (userPlan === "starter") {
    return starterFeatures.includes(feature);
  }

  if (userPlan === "pro") {
    return proFeatures.includes(feature);
  }

  if (userPlan === "agency") {
    return agencyFeatures.includes(feature);
  }

  return false;
};