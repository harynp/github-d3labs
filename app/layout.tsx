import { metadata } from "@/app/config/metadata";
import { geistSans, geistMono } from "@/app/lib/fonts";
import { GitHubProvider } from "@/app/providers/github-provider";
import "./globals.css";

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <GitHubProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          {children}
        </body>
      </html>
    </GitHubProvider>
  );
}
