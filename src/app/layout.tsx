import "./globals.css";
import Nav from "@/components/Nav";
import { DataProvider } from "@/components/DataContext";

export const metadata = {
  title: "Data Lens",
  description: "AI-powered economic research copilot"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <DataProvider>
          <Nav />
          {children}
        </DataProvider>
      </body>
    </html>
  );
}
