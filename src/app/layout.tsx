import type { Metadata } from "next";

import "./base.scss";

export const metadata: Metadata = {
  title: "Recipes",
  description: "A page with recipes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
