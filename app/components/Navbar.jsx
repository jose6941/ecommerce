'use client';

import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
    { label: "Homem", href: "/homem" },
    { label: "Mulher", href: "/mulher" },
    { label: "Crianças", href: "/criancas" },
    { label: "Coleções", href: "/colecoes" },
    { label: "Contato", href: "/contato" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-[--color-light-100] shadow-md transition-shadow duration-300">
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" aria-label="Loja" className="flex items-center text-lg font-bold text-[--color-dark-100]">
                        Minha Loja
                    </Link>

                    <ul className="hidden items-center gap-8 md:flex">
                        {NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <Link 
                                    href={link.href} 
                                    className="text-sm text-[--color-dark-900] transition-colors duration-200 hover:text-[--color-primary-500]"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="hidden items-center gap-6 md:flex">
                        <button className="text-sm font-bold text-[--color-dark-900] transition-colors duration-200 hover:text-[--color-primary-500]">
                            <Link href="/sign-in">Entrar</Link>
                        </button>
                        <button className="text-sm font-bold text-[--color-dark-900] transition-colors duration-200 hover:text-[--color-primary-500]">
                            <Link href="/sign-up">Cadastro</Link>
                        </button>
                    </div>

                    <button
                        type="button"
                        className="inline-flex flex-col items-center justify-center gap-1.5 rounded-md p-2 md:hidden"
                        aria-controls="mobile-menu"
                        aria-expanded={open}
                        onClick={() => setOpen(!open)}
                    >
                        <span className="sr-only">Abrir menu</span>
                        <span className={`h-0.5 w-6 bg-[--color-dark-900] transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`h-0.5 w-6 bg-[--color-dark-900] transition-opacity ${open ? 'opacity-0' : ''}`}></span>
                        <span className={`h-0.5 w-6 bg-[--color-dark-900] transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                </div>

                <div 
                    id="mobile-menu" 
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}
                >
                    <ul className="space-y-2 border-t border-[--color-light-300] pt-4">
                        {NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <Link 
                                    href={link.href} 
                                    className="block px-3 py-2 text-base font-medium text-[--color-dark-900] hover:bg-[--color-light-300] rounded-md"
                                    onClick={() => setOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                        <hr className="my-2 border-[--color-light-300]" />
                        <li className="px-3 py-2 space-y-2">
                            <button className="w-full text-left text-base font-medium text-[--color-dark-900]">Entrar</button>
                            <button className="w-full text-left text-base font-medium text-[--color-primary-500]">Criar conta</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}