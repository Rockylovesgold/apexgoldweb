import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signals | Apex Gold Trading",
};

export default function SignalsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
