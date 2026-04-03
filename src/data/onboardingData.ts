export interface OnboardingStep {
	id: number;
	title: string;
	description: string;
	imageSrc: string;
}

export const ONBOARDING_DATA: OnboardingStep[] = [
	{
		id: 1,
		title: "Welcome to Splitt",
		description:
			"Easily track and split shared expenses with friends, roommates, or teammates.",
		imageSrc: "/images/onboarding-1.png",
	},
	{
		id: 2,
		title: "Set Up Groups Instantly",
		description:
			"Create or join expense groups for trips, projects, or shared bills in seconds.",
		imageSrc: "/images/onboarding-2.png",
	},
	{
		id: 3,
		title: "Split Cost With Transparency",
		description:
			"Add expenses, attach receipts, assign shares, and track who paid what.",
		imageSrc: "/images/onboarding-3.png",
	},
	{
		id: 4,
		title: "Visualize Debts & Settle up",
		description:
			"See who owes who at a glance. Settle easily and stay organized.",
		imageSrc: "/images/onboarding-4.png",
	},
];
