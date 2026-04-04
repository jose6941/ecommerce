<<<<<<< HEAD
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div></div>
=======
import React from "react";
import Card from "./components/Card";

const products = [ 
    {
        id: 1,
        title: "Tênis Esportivo",
        subtitle: "Desempenho e conforto",
        meta: "4 cores",
        price: 199.99,
        imageSrc: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
        badge: { label: "Novo", tone: "green" as const }
    },
    {
        id: 2,  
        title: "Camiseta Casual",
        subtitle: "Conforto e estilo",
        meta: "5 cores",
        price: 49.99,
        imageSrc: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
        badge: { label: "Novo", tone: "green" as const }
    },
    {
        id: 3,  
        title: "Relógio de Pulso",
        subtitle: "Elegância e precisão",
        meta: "3 cores",
        price: 299.99,
        imageSrc: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=800&auto=format&fit=crop",
        badge: { label: "Novo", tone: "green" as const }
    },
];


export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <section aria-labelledby="latest" className="pb-12">
        <h2 id="latest" className="mb-6 text-heading-3 text-[--color-dark-900]">
          Latest Products
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card 
              key={product.id}
              title={product.title}
              subtitle={product.subtitle}
              meta={product.meta}
              imageSrc={product.imageSrc}
              price={product.price}
              badge={product.badge?.label}
            />
          ))}
        </div>
      </section>
    </main>
>>>>>>> Criar_Design
  );
}
