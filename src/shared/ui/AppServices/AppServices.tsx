"use client";

import { shallow } from "zustand/shallow";
import { useEffect } from "react";

import { removeAuthTokens, useSessionStore } from "@/entities/session/model";
import { resetUserProfile, setUserProfile } from "@/entities/user/model";

export const AppServices: React.FC = () => {
  const { accessToken, expiry } = useSessionStore(
    ({ accessToken, expiry }) => ({
      accessToken,
      expiry,
    }),
    shallow
  );

  useEffect(() => {
    if (accessToken) {
      setUserProfile();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!accessToken) resetUserProfile();
  }, [accessToken]);

  const now = new Date().getTime();
  if (expiry && now > expiry) removeAuthTokens();
  return null;
};
