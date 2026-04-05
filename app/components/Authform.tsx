'use client';

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {
    mode: "sign In" | "sign Up";
};

export default function AuthForm({ mode }: Props) {
    const [show, setShow] = useState(false);
    const router = useRouter();

    return (
        <div className="space-y-6">
            <p className="text-caption text-dark-700">
                {mode === "sign In" ? "Sign in to your account " : "Create a new account "}
                <Link href={mode === "sign In" ? "/sign-up" : "/sign-in"} className="underline">
                    {mode === "sign In" ? "Sign Up" : "Sign In"}
                </Link>
            </p>
            <h1 className="mt-3 text-heading-3 text-dark-900">
                {mode === "sign In" ? "Welcome back! " : "Create your account "}
            </h1>
            <p className="mt-1 text-body text-dark-700">
                {mode === "sign In" 
                ? "Don't have an account? " 
                : "Already have an account? "}
            </p>

            <div className="flex items-center gap-4">
                <hr className="h-px w-full border-0 bg-light-300" />
                <span className="shrink-0 text-caption text-dark-700">
                    Or {mode === "sign In" ? "sign in with" : "sign up with"} with
                </span>
                <hr className="h-px w-full border-0 bg-light-300" />
            </div>

            <form className="space-y-4" onSubmit={(e) => {
                e.preventDefault();
            }}>
                {mode === "sign Up" && (
                    <div className="space-y-1">
                        <label htmlFor="name" className="text-caption text-dark-900">
                            Nome
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Digite seu nome"
                            className="w-full rounded-md border border-light-300 bg-light-100 px-4 py-3 text-body placeholder:text-dark-700 focus:border-dark-900 focus:ring-dark-900/10"
                            autoComplete="name"
                        />
                    </div>
                    )}

                <div className="space-y-1">
                    <label htmlFor="email" className="text-caption text-dark-900">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Digite seu email"
                        required
                        className="w-full rounded-md border border-light-300 bg-light-100 px-4 py-3 text-body placeholder:text-dark-700 focus:border-dark-900 focus:ring-dark-900/10"
                    />
                </div>
                <div className="space-y-1">
                    <label htmlFor="password" className="text-caption text-dark-900">
                        Password
                    </label>
                    <input
                        type={show ? "text" : "password"}
                        id="password"
                        name="password"
                        placeholder="Minimo 8 caracteres"
                        autoComplete={mode === "sign In" ? "current-password" : "new-password"}
                        minLength={8}
                        required
                        className="w-full rounded-md border border-light-300 bg-light-100 px-4 py-3 text-body placeholder:text-dark-700 focus:border-dark-900 focus:ring-dark-900/10" 
                    />
                </div>
                <div className="relative">
                    <p className="text-footnote text-dark-700">
                        <a href="/" className="underline">
                            Voltar para a home
                        </a>{" "}
                    </p>
                </div>

                <button
                    type="submit"
                    className="mt-2 w-full bg-dark-900 px-6 py-3 text-body-medium text-light-100 hover:bg-dark-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dark-900"
                >
                    {mode === "sign In" ? "Sign In" : "Sign Up"}
                </button>

                {mode === "sign In" && (
                    <p className="text-center text-footnote text-dark-700">
                        By signing in, you agree to our{" "}
                        <a href="#" className="underline">
                            Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="#" className="underline">
                            Privacy Policy
                        </a>
                    </p>
                )}
            </form>
        </div>
    );
}