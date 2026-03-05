import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dentist Myrtle Beach | Fairway Dental | Family & Cosmetic Dentistry",
  description: "Redesigned by AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}