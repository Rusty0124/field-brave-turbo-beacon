import { createFileRoute } from "@tanstack/react-router";
import { Onboarding } from "@/components/onboarding";
import { TodayView } from "@/components/today-view";
import { useNoether } from "@/lib/store";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const started = useNoether((s) => s.ledger.startedAt);
  if (!started) return <Onboarding />;
  return <TodayView />;
}
