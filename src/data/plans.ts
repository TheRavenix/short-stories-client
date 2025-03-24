const PLAN_FEATURE_NAMES = [
  "Access to Stories",
  "Story Previews",
  "Premium Stories",
  "Ad-Free Experience",
  "Offline Reading",
  "Early Access to New Stories",
  "Custom Themes",
  "Pro Visuals",
  "Exclusive Fonts",
] as const;

interface PlanFeature {
  name: (typeof PLAN_FEATURE_NAMES)[number];
  checked: boolean;
  suffix?: string;
}

const freePlanFeatures: PlanFeature[] = [
  {
    name: "Access to Stories",
    checked: true,
    suffix: "Limited",
  },
  {
    name: "Story Previews",
    checked: true,
  },
  {
    name: "Premium Stories",
    checked: false,
  },
  {
    name: "Ad-Free Experience",
    checked: false,
  },
  {
    name: "Offline Reading",
    checked: false,
  },
  {
    name: "Early Access to New Stories",
    checked: false,
  },
  {
    name: "Custom Themes",
    checked: false,
  },
  {
    name: "Pro Visuals",
    checked: false,
  },
  {
    name: "Exclusive Fonts",
    checked: false,
  },
];

const proPlanFeatures: PlanFeature[] = [
  {
    name: "Access to Stories",
    checked: true,
    suffix: "Full Access",
  },
  {
    name: "Story Previews",
    checked: true,
  },
  {
    name: "Premium Stories",
    checked: true,
  },
  {
    name: "Ad-Free Experience",
    checked: true,
  },
  {
    name: "Offline Reading",
    checked: true,
  },
  {
    name: "Early Access to New Stories",
    checked: true,
  },
  {
    name: "Custom Themes",
    checked: true,
  },
  {
    name: "Pro Visuals",
    checked: true,
  },
  {
    name: "Exclusive Fonts",
    checked: true,
  },
];

export { freePlanFeatures, proPlanFeatures, type PlanFeature };
