import './globals.css'
import "@radix-ui/themes/styles.css";
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
            {children}
          <Footer />
      </Theme>
      </body>
    </html>
  );
}
