import type { Metadata } from "next";
import { AuthProvider } from "@/contexts/AuthProvider";
import Header from "@/components/Layout/Header";
import Container from "@/components/Layout/Container";
import Footer from "@/components/Layout/Footer";
import "./globals.css";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "판다마켓",
  description: "판다마켓입니다",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const accessToken = cookies().get("access-token")?.value;
  const refreshToken = cookies().get("refresh-token")?.value;

  return (
    <html lang="ko">
      <body>
        <AuthProvider initial={{ accessToken, refreshToken }}>
          <Header />
          <Container>{children}</Container>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
