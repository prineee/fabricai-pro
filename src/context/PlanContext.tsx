import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { useAuth } from "./AuthContext";

import { getUserProfile } from "../services/userService";

const PlanContext =
  createContext<any>(null);

export function PlanProvider({
  children,
}: any) {
  const { user } = useAuth();

  const [plan, setPlan] =
    useState("FREE");

  useEffect(() => {
    async function loadPlan() {
      if (!user) return;

      const profile =
        await getUserProfile(
          user.uid
        );

      if (profile?.plan) {
        setPlan(profile.plan);
      }
    }

    loadPlan();
  }, [user]);

  return (
    <PlanContext.Provider
      value={{
        plan,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
}

export function usePlan() {
  return useContext(PlanContext);
}