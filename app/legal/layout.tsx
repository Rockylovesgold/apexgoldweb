import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal & Risk | Apex Gold Trading",
  description:
    "Legal and risk disclosure. No financial advice. High risk warning for trading.",
};

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
