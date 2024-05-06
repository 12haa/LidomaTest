import Navbar from "@/app/(root)/_compoentns/Navbar";
import ResidenceTab from "@/app/(root)/_compoentns/ResidenceTab";

export default function HomeLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="relative size-full ">
            <div className="flex items-center justify-center p-4 border-b-2">
            <Navbar/>
                <span className="w-1 h-1 bg"></span>
            </div>
            <div className="relative flex mx-auto">
                <ResidenceTab/>
            </div>
            {children}
        </main>
    );
}
