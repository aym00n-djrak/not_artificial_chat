import './globals.css'
import "@radix-ui/themes/styles.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Theme } from "@radix-ui/themes";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Theme>
          <Navbar />
            {children}
          <Footer />
      </Theme>
      </body>
    </html>
  );
}
