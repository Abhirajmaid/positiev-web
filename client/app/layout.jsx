import "./globals.css";
import "./colors.css";
import { Poppins, Playfair_Display } from "next/font/google";

// Body text: Poppins. Headings: Playfair Display.
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata = {
  title: {
    default: "Positiev",
    template: "%s | Positiev",
  },
  description: "Welcome to Positiev",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${playfair.variable}`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
