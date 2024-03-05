import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata = {
  title: "Atelier Stella M",
}

export default function RootLayout({ children }) {
  return (
    <html className="h-screen scroll-smooth" lang="es">
      <body className="italic">
				<main>
					<NavBar/>
					{children}
					<Footer/>
				</main>
			</body>
    </html>
  );
}