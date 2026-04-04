import Link from "next/link";
import Image from "next/image";

export type BadgeTone = "red" | "green" | "orange";

export interface CardProps {
    title: string;
    subtitle?: string;
    description?: string;
    imageSrc?: string;
    imageAlt?: string;
    price?: number | string;
    href?: string;
    badge?: string;
    badgeTone?: BadgeTone;
    className?: string;
    meta?: string;
}

const toneToBg: Record<BadgeTone, string> = {
    red: "text-[--color-red]",
    green: "text-[--color-green]",
    orange: "text-[--color-orange]",
};

export default function Card({
    title,
    subtitle,
    description,
    imageSrc,
    imageAlt,
    price,
    href,
    badge,
    badgeTone = "green",
    className = "",
    meta,
}: CardProps) {
    
    const displayPrice = price !== undefined 
        ? typeof price === "number" 
            ? `R$ ${price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}` 
            : price 
        : null;

    const content = (
        <article className={`group rounded-xl bg-light-100 ring-1 ring-light-300 transition-colors hover:ring-dark-500 ${className}`}>
            <div className="relative aspect-square overflow-hidden rounded-t-xl bg-light-200">
                {imageSrc ? (
                    <Image 
                        src={imageSrc} 
                        alt={imageAlt || title} 
                        fill
                        sizes="(min-width: 1280px) 360px, (min-width: 1024) 300px, (min-width: 640px) 45vw, 90vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                ) : (
                    <div className="flex h-full items-center justify-center text-gray-400">Sem imagem</div>
                )}
            </div>
            <div className="p-4">
                <div className="mb-1 flex items-baseline justify-between gap-3">
                    <h3 className="text-heading-3 text-dark-900">{title}</h3>
                    {displayPrice && <span className="text-body-medium text-dark-900">{displayPrice}</span>}
                </div>
                
                
                {description && <p className="text-body text-dark-700">{description}</p>}
                {subtitle && <p className="text-body text-dark-700">{subtitle}</p>}
                {meta && (
                    <p className="mt-1 text-caption text-dark-700">
                        {Array.isArray(meta) ? meta.join(" • ") : meta}
                    </p>
                )}
            </div>
        </article>
    );

    return href ? (
        <Link 
            href={href} 
            aria-label={href}
            className="block rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-visible:ring[--color-dark-900]"
        >
            {content}
        </Link> 
        ) : (
            content
        );
}