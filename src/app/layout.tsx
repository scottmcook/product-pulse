// UI Components
import NavBar from "@/components/NavBar/NavBar";
import Toolbar from "@/components/ProductToolbar/ProductToolbar";
import ProductLayout from "@/components/ProductLayout/ProductLayout";
import ProductTable from "@/components/ProductTable/ProductTable";

// Styles
import "./globals.css";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

type Devices = {
  product: {
    name: string;
  };
  id: string;
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className={lato.className}>
        <NavBar />
        <ProductLayout />
      </body>
    </html>
  );
}
