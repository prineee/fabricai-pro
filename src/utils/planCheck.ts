export function canUseFeature(
  plan: string,
  feature: string
) {
  const permissions: any = {
    FREE: ["blog"],

    PRO: [
      "blog",
      "ads",
      "emails",
      "landing",
    ],

    AGENCY: [
      "blog",
      "ads",
      "emails",
      "landing",
      "team",
      "white-label",
    ],
  };

  return permissions[plan]?.includes(
    feature
  );
}