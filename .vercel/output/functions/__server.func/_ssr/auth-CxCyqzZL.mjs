import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-CxCyqzZL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var supabase = createClient("https://aulhjaemgbpjhxkljyrh.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF1bGhqYWVtZ2Jwamh4a2xqeXJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc0NTQyMjAsImV4cCI6MjEwMzAzMDIyMH0.uVrdhn0gGma9tvPcPtQq5YZrt4RNA4pgxO9W2SatAe8");
var AuthContext = (0, import_react.createContext)(null);
function AuthProvider({ children }) {
	const [user, setUser] = (0, import_react.useState)(null);
	const [profile, setProfile] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	async function fetchProfile(userId) {
		const { data } = await supabase.from("profiles").select("*").eq("id", userId).single();
		setProfile(data);
	}
	async function refreshProfile() {
		if (!user) return;
		await fetchProfile(user.id);
	}
	(0, import_react.useEffect)(() => {
		supabase.auth.getSession().then(({ data: { session } }) => {
			setUser(session?.user ?? null);
			if (session?.user) fetchProfile(session.user.id).finally(() => setLoading(false));
			else setLoading(false);
		});
		const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
			setUser(session?.user ?? null);
			if (session?.user) fetchProfile(session.user.id);
			else setProfile(null);
		});
		return () => subscription.unsubscribe();
	}, []);
	async function signIn(email, password) {
		const { error } = await supabase.auth.signInWithPassword({
			email,
			password
		});
		return { error };
	}
	async function signUp(email, password, asAdmin = false) {
		const { data: existingUsers } = await supabase.from("profiles").select("id").limit(1);
		const isFirstUser = !existingUsers || existingUsers.length === 0;
		const { error } = await supabase.auth.signUp({
			email,
			password
		});
		if (error) return { error };
		if (asAdmin || isFirstUser) {
			const { data: { user: newUser } } = await supabase.auth.getUser();
			if (newUser) await supabase.from("profiles").upsert({
				id: newUser.id,
				email: newUser.email,
				role: "admin"
			});
		}
		return { error: null };
	}
	async function signOut() {
		await supabase.auth.signOut();
		setUser(null);
		setProfile(null);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthContext.Provider, {
		value: {
			user,
			profile,
			loading,
			signIn,
			signUp,
			signOut,
			refreshProfile
		},
		children
	});
}
function useAuth() {
	const ctx = (0, import_react.useContext)(AuthContext);
	if (!ctx) throw new Error("useAuth must be used within AuthProvider");
	return ctx;
}
//#endregion
export { supabase as n, useAuth as r, AuthProvider as t };
