import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { r as useAuth } from "./auth-CxCyqzZL.mjs";
import { a as CardHeader, c as Label, i as CardDescription, n as Card, o as CardTitle, r as CardContent, s as Input, t as Button } from "./card-C1QcGORC.mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as UserPlus } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/signup-CPl6lB_4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SignupPage() {
	const { signUp, user } = useAuth();
	const navigate = useNavigate();
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [confirmPassword, setConfirmPassword] = (0, import_react.useState)("");
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	if (user) {
		navigate({ to: "/" });
		return null;
	}
	async function handleSignup(e) {
		e.preventDefault();
		if (password !== confirmPassword) {
			toast.error("Passwords do not match");
			return;
		}
		if (password.length < 6) {
			toast.error("Password must be at least 6 characters");
			return;
		}
		setSubmitting(true);
		const { error } = await signUp(email, password);
		setSubmitting(false);
		if (error) toast.error(error.message);
		else {
			toast.success("Account created! Check your email for confirmation if enabled.");
			navigate({ to: "/login" });
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "w-full max-w-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
					className: "text-xl",
					children: "BM iPhone Store"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Create a new account" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSignup,
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "email",
						children: "Email"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "email",
						type: "email",
						value: email,
						onChange: (e) => setEmail(e.target.value),
						placeholder: "you@example.com",
						required: true
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "password",
						children: "Password"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "password",
						type: "password",
						value: password,
						onChange: (e) => setPassword(e.target.value),
						placeholder: "At least 6 characters",
						required: true
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "confirm",
						children: "Confirm password"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "confirm",
						type: "password",
						value: confirmPassword,
						onChange: (e) => setConfirmPassword(e.target.value),
						placeholder: "Confirm password",
						required: true
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "submit",
						className: "w-full",
						disabled: submitting,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { className: "mr-1 size-4" }), submitting ? "Creating account..." : "Create account"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-center text-sm text-muted-foreground",
						children: [
							"Already have an account?",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/login",
								className: "text-primary underline underline-offset-4",
								children: "Sign in"
							})
						]
					})
				]
			}) })]
		})
	});
}
//#endregion
export { SignupPage as component };
