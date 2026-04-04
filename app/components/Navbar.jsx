import Link from "next/link";

export default function Navbar(){
    return (
        <nav className="bg-gray-900 text-white p-4">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div className="text-xl font-bold">My App</div>
                    <div className="space-x-4">
                        <Link href="/" className="hover:text-gray-300">Home</Link>
                        <Link href="/about" className="hover:text-gray-300">About</Link>
                        <Link href="/contact" className="hover:text-gray-300">Contact</Link >
                    </div>
                </div>
            </div>
        </nav>
    );
}