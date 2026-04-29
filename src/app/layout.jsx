import Navbar from "./_components/navbar/navbar";
import "./globals.css";

export const metadata = {
  title: "Unrealr Studios",
  description: "Unrealr Studios | Media Production",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}