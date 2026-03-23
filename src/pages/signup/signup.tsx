import { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface InputFieldProps {
	label: string;
	type?: string;
	placeholder?: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	showToggle?: boolean;
	showLock?: boolean;
}

function InputField({
	label,
	type = "text",
	placeholder,
	value,
	onChange,
	showToggle,
	showLock,
}: InputFieldProps) {
	const [visible, setVisible] = useState(false);
	const inputType = showToggle ? (visible ? "text" : "password") : type;

	return (
		<div className="w-full mb-4">
			<label className="block text-sm font-medium text-[#616161] mb-1">
				{label}
			</label>
			<div className="relative flex items-center">
				{showLock && (
					<Lock
						size={15}
						className="absolute left-3 text-gray-400 pointer-events-none"
					/>
				)}
				<input
					type={inputType}
					placeholder={placeholder}
					value={value}
					onChange={onChange}
					className={`w-full h-12 rounded-xl border border-gray-200 bg-white text-sm text-gray-900 outline-none focus:border-gray-400 transition-colors ${
						showLock ? "pl-9" : "pl-4"
					} ${showToggle ? "pr-10" : "pr-4"}`}
				/>
				{showToggle && (
					<button
						type="button"
						onClick={() => setVisible((v) => !v)}
						className="absolute right-3 text-gray-400 cursor-pointer"
					>
						{visible ? <EyeOff size={18} /> : <Eye size={18} />}
					</button>
				)}
			</div>
		</div>
	);
}

export default function SignUp() {
	const navigate = useNavigate();
	const [form, setForm] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirm: "",
	});

	const set =
		(key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
			setForm((f) => ({ ...f, [key]: e.target.value }));

	return (
		<div className="flex flex-col items-center min-h-screen bg-[#f4f4f8] px-6 pt-10 pb-8">
			<h1 className="text-2xl font-bold text-gray-900 mb-6">Sign Up</h1>

			<InputField
				label="First Name"
				placeholder="Enter First Name"
				value={form.firstName}
				onChange={set("firstName")}
			/>
			<InputField
				label="Last Name"
				placeholder="Enter Last Name"
				value={form.lastName}
				onChange={set("lastName")}
			/>
			<InputField
				label="Email"
				type="email"
				placeholder="Enter Email"
				value={form.email}
				onChange={set("email")}
			/>
			<InputField
				label="Password"
				placeholder="••••••••"
				value={form.password}
				onChange={set("password")}
				showToggle
				showLock
			/>
			<InputField
				label="Confirm Password"
				placeholder="••••••••"
				value={form.confirm}
				onChange={set("confirm")}
				showToggle
				showLock
			/>

			<button
				className="w-full bg-[#1F2A44] text-white font-semibold text-base rounded-xl py-3.5 mt-2 hover:bg-[#162038] transition-colors cursor-pointer"
				onClick={() => navigate("/otp")}
			>
				Next
			</button>

			<p className="text-sm text-[#616161] mt-5">
				Already have an account?{" "}
				<button
					className="text-[#551C07] font-semibold underline cursor-pointer"
					onClick={() => navigate("/login")}
				>
					Login
				</button>
			</p>
		</div>
	);
}
