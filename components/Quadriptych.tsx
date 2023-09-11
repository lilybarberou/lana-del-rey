import Image from 'next/image';

export default function Quadriptych() {
    return (
        <div className="mt-40 mb-40 flex gap-2 scale-110">
            {Array.from({ length: 4 }).map((_, i) => (
                <Image
                    className="w-auto h-auto transition-[filter] duration-200 ease-in-out grayscale hover:grayscale-0"
                    key={i}
                    src={`/${i + 1}.png`}
                    width={100}
                    height={300}
                    alt="Lana Del Rey"
                />
            ))}
        </div>
    );
}
