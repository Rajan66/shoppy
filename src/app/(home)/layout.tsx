import Footer from "@/components/footer/Footer";
import Navbar from "@/components/header/Navbar";

export default function HomeLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <main>
            <Navbar />
            {children}
            <Footer />
        </main>
    );
}
