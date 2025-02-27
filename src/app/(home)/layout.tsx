import Footer from "@/components/common/footer/Footer";
import Navbar from "@/components/common/header/Navbar";

export default function HomeLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className="h-full w-full overflow-hidden">
            <Navbar />
            {children}
            <Footer />
        </main>
    );
}
