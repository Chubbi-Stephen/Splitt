import React, { useState } from "react";
import { ONBOARDING_DATA } from "../components/data/onboardingData";

const Onboarding: React.FC = () => {
	const [currentStep, setCurrentStep] = useState(0);
	const totalSteps = ONBOARDING_DATA.length;
	const step = ONBOARDING_DATA[currentStep];

	const handleNext = () => {
		if (currentStep < totalSteps - 1) setCurrentStep((prev) => prev + 1);
	};

	const handleBack = () => {
		if (currentStep > 0) setCurrentStep((prev) => prev - 1);
	};

	return (
		<div className="flex flex-col min-h-screen bg-white text-gray-900 max-w-md mx-auto relative overflow-hidden">
			{/* Header Section */}
			<header className="p-6 flex justify-between items-center gap-4">
				{/* Progress Bar Indicators */}
				<div className="w-[70%] flex gap-2">
					{ONBOARDING_DATA.map((_, index) => (
						<div
							key={index}
							className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
								index <= currentStep ? "bg-gray-800" : "bg-gray-200"
							}`}
						/>
					))}
				</div>

				<div className="w-[23.05px] flex justify-between items-center text-xs font-semibold text-gray-400">
					{/* <span className="invisible">9:41</span> Space for status bar */}
					<button className="hover:text-gray-600 transition-colors">
						Skip
					</button>
				</div>
			</header>

			{/* Content Section (Illustration) */}
			<main className="flex-1 flex flex-col items-center justify-center px-8">
				<div className="w-full aspect-square flex items-center justify-center mb-12">
					<img
						src={step.imageSrc}
						alt={step.title}
						className="max-h-full object-contain"
					/>
				</div>
			</main>

			{/* Text Card (The Rounded White Area) */}
			<section className="bg-white rounded-t-[100px] px-8 pt-12 pb-24 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">
				<h1 className="text-2xl font-bold text-center mb-4">{step.title}</h1>
				<p className="text-gray-500 text-center leading-relaxed">
					{step.description}
				</p>
			</section>

			{/* Navigation Footer */}
			<footer className="absolute bottom-10 left-0 right-0 px-8 flex justify-between items-center font-medium">
				{currentStep > 0 ? (
					<button
						onClick={handleBack}
						className="text-gray-400 flex items-center gap-1 hover:text-gray-600"
					>
						&lt; Back
					</button>
				) : (
					<div />
				)}

				<button
					onClick={handleNext}
					className="text-gray-800 flex items-center gap-1 hover:opacity-70 transition-opacity"
				>
					{currentStep === totalSteps - 1 ? "Get Started" : "Next"} &gt;
				</button>
			</footer>
		</div>
	);
};

export default Onboarding;
