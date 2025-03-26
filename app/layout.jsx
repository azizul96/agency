import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "./components/Navigation/ResponsiveNav";

const poppins = Poppins({
  weight: [ "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"]
})


export const metadata = {
  title: "Digital Alpha",
  description: "Best Digital Service Agency In Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
      >
        <ResponsiveNav/>
        {children}
      </body>
    </html>
  );
}
