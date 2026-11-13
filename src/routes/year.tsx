import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/year")({
  component: YearLayout,
});

function YearLayout() {
  return <Outlet />;
}
