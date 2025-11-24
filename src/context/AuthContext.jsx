import React, { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import storage from "../utils/storage";

const AuthContext = createContext();

const LOCAL_USERS_KEY = "travel_planner_users"; // array of user objects
const LOCAL_TOKEN_KEY = "travel_planner_token";
const LOCAL_AUTH_USER = "travel_planner_auth_user";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(storage.get(LOCAL_AUTH_USER, null));
  const [token, setToken] = useState(storage.get(LOCAL_TOKEN_KEY, null));
  const [loading, setLoading] = useState(false);
  const [pendingEmail, setPendingEmail] = useState(null); // email we sent OTP to

  // Persist user & token
  useEffect(() => {
    storage.set(LOCAL_AUTH_USER, user);
  }, [user]);

  useEffect(() => {
    storage.set(LOCAL_TOKEN_KEY, token);
  }, [token]);

  // Helpers to access local "DB" of users
  const _readUsers = () => storage.get(LOCAL_USERS_KEY, []);
  const _writeUsers = (arr) => storage.set(LOCAL_USERS_KEY, arr);

  // Simulated API: send OTP
  const loginWithEmail = async (email) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700)); // fake delay

    // remember email while verifying
    setPendingEmail(email);

    // (In real API: trigger sending OTP mail)
    // For dev convenience store OTP in localStorage (NOT secure) -> OTP: "123456"
    storage.set("__mock_otp__" + email, "123456");

    setLoading(false);
    return { success: true };
  };

  // Simulated API: verify OTP
  // returns { success, isNewUser, user }
  const verifyOtp = async (email, otp) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700)); // fake delay

    const expected = storage.get("__mock_otp__" + email, null);
    // In dev accept if otp equals expected OR '000000' shortcut
    const ok = otp === expected || otp === "000000";

    if (!ok) {
      setLoading(false);
      return { success: false, message: "Invalid OTP" };
    }

    // find user in "db"
    const users = _readUsers();
    const found = users.find((u) => u.email === email);

    if (found) {
      // returning user -> create token and set user
      const newToken = "token_" + uuidv4();
      setToken(newToken);
      setUser(found);
      setLoading(false);
      return { success: true, isNewUser: false, user: found };
    } else {
      // new user -> set pendingEmail and instruct frontend to show profile completion
      setPendingEmail(email);
      setLoading(false);
      return { success: true, isNewUser: true, user: null };
    }
  };

  // complete profile for new users
  const completeProfile = async ({ firstName, lastName, phone }) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));

    const email = pendingEmail;
    if (!email) {
      setLoading(false);
      return { success: false, message: "Missing pending email" };
    }

    const users = _readUsers();
    const newUser = {
      id: uuidv4(),
      email,
      firstName,
      lastName,
      phone,
      createdAt: new Date().toISOString(),
    };

    users.push(newUser);
    _writeUsers(users);

    const newToken = "token_" + uuidv4();
    setToken(newToken);
    setUser(newUser);
    setPendingEmail(null);
    setLoading(false);

    return { success: true, user: newUser };
  };

  // Social login placeholders
  // provider: 'google'|'facebook'|'apple'|'linkedin'|'x'
  const loginWithProvider = async (provider) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));

    // In real flow you'd open OAuth popup and get user info from backend.
    // Here we simulate: create or reuse a user with provider email
    const fakeEmail = `${provider}_user@example.com`;
    let users = _readUsers();
    let found = users.find((u) => u.email === fakeEmail);

    if (!found) {
      // create minimal user (force profile completion later)
      found = {
        id: uuidv4(),
        email: fakeEmail,
        firstName: provider[0].toUpperCase() + provider.slice(1),
        lastName: "User",
        phone: "",
        social: provider,
        createdAt: new Date().toISOString(),
      };
      users.push(found);
      _writeUsers(users);
    }

    const newToken = "token_" + uuidv4();
    setToken(newToken);
    setUser(found);
    setLoading(false);

    // If you want social logins to still require complete-profile,
    // detect missing fields and return isNewUser accordingly.
    const needsProfile = !found.firstName || !found.lastName;
    return { success: true, user: found, needsProfile };
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    storage.remove(LOCAL_AUTH_USER);
    storage.remove(LOCAL_TOKEN_KEY);
  };

  const value = {
    user,
    token,
    loading,
    pendingEmail,
    isAuthenticated: Boolean(user && token),
    loginWithEmail,
    verifyOtp,
    completeProfile,
    loginWithProvider,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
