import React from "react";
import Link from "next/link";
import Card from "../components/Card";

export default async function Home({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const { page } = await searchParams;
  const currentPage = Number(page) || 1;
  const limit = 6;
  const startIndex = (currentPage - 1) * limit;

  const res = await fetch('https://fakestoreapi.com/products');
  const allProducts = await res.json();

  const totalItems = allProducts.length;
  const totalPages = Math.ceil(totalItems / limit);
  const products = allProducts.slice(startIndex, startIndex + limit);

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <section aria-labelledby="latest" className="pb-12 pt-8">
        <h2 id="latest" className="mb-6 text-heading-3 text-[--color-dark-900]">
          Latest Products
        </h2>

        {products.length === 0 ? (
          <p className="text-body text-dark-700">Nenhum produto encontrado.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product: any) => (
              <Card
                key={product.id}
                title={product.title}
                subtitle={product.category}
                meta={`${product.rating.rate} (${product.rating.count} avaliações)`}
                imageSrc={product.image}
                price={product.price}
                badge={"Novo"}
              />
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-4">
            {currentPage > 1 ? (
              <Link
                href={`/?page=${currentPage - 1}`}
                className="px-4 py-2 rounded-md bg-light-100 text-dark-900 shadow-sm ring-1 ring-light-300 hover:bg-light-300 transition-colors"
              >
                Anterior
              </Link>
            ) : (
              <span className="px-4 py-2 rounded-md bg-light-200 text-dark-500 cursor-not-allowed">
                Anterior
              </span>
            )}

            <span className="text-body-medium text-dark-900">
              Página {currentPage} de {totalPages}
            </span>

            {currentPage < totalPages ? (
              <Link
                href={`/?page=${currentPage + 1}`}
                className="px-4 py-2 rounded-md bg-light-100 text-dark-900 shadow-sm ring-1 ring-light-300 hover:bg-light-300 transition-colors"
              >
                Próxima
              </Link>
            ) : (
              <span className="px-4 py-2 rounded-md bg-light-200 text-dark-500 cursor-not-allowed">
                Próxima
              </span>
            )}
          </div>
        )}
      </section>
    </main>
  );
}
