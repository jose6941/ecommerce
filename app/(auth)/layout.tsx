import Image from "next/image";
import AuthForm from "../components/Authform";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
            <section className="justify-center hidden lg:flex flex-col justify-between bg-dark-900 text-light-100 p-10">
                <div className="space-y-4">
                    <h2 className="text-heading-2">Just do it</h2>
                    <p className="max-w-md text-lead text-light-300">
                        Join millions of athletes and fitness enthusiasts who trust Nike to help them reach their goals. Whether you're a runner, a basketball player, or just looking for comfortable and stylish activewear, Nike has you covered.
                    </p>
                    <div className="flex gap-2" aria-hidden="true">
                        <span className="h-2 w-2 rounded-full bg-light-100/90"/>
                        <span className="h-2 w-2 rounded-full bg-light-100/50"/>
                        <span className="h-2 w-2 rounded-full bg-light-100/50"/>
                    </div>
                </div>
            </section>
            <section className="flex items-center justify-center p-6 sm:p-12 bg-[--color-light-100]">
                <div className="w-full max-w-md">
                    {children}
                </div>
            </section>
        </main>
    );
}
