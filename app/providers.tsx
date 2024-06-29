"use client";

import { ThemeProvider } from "next-themes";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    person_profiles: "identified_only",
    opt_in_site_apps: true,
  });
}

export function Providers({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <PostHogProvider client={posthog}>
      <ThemeProvider attribute="class" enableSystem>
        {children}
      </ThemeProvider>
    </PostHogProvider>
  );
}
