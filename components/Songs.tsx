import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import top from '../public/top.json';
import clsx from 'clsx';

type Song = {
    title: string;
    cover: string;
};

export default function Songs() {
    const songs = useRef<HTMLDivElement>(null);

    const toggleCover = (i: number) => {
        songs.current!.children[i].children[1].classList.toggle('active');
    };

    const moveImg = (event: any, i: number) => {
        const img = songs.current!.children[i].children[1] as HTMLImageElement;
        const x = event.clientX;
        const y = event.clientY;
        const w = window.innerWidth;
        const h = window.innerHeight;
        const xP = x / w;
        const yP = y / h;
        const xR = xP * 80;
        const yR = yP * 100 - 30;
        img.style.transform = `translate(${xR}px, calc(-50% + ${yR}px))`;
    };

    return (
        <div className="mt-[150px] flex flex-col items-center gap-10">
            <span className="text-primary text-3xl">top 5</span>
            <div ref={songs} className="flex flex-col items-center gap-5">
                {top.map((song: Song, i) => (
                    <div className="relative" key={i}>
                        <span
                            className="cursor-default"
                            onMouseMove={(e) => moveImg(e, i)}
                            onMouseEnter={() => toggleCover(i)}
                            onMouseLeave={() => toggleCover(i)}
                        >
                            {song.title}
                        </span>
                        <Image
                            className={clsx(
                                'w-40 h-40 max-w-none absolute z-[1] top-1/2 left-full opacity-0 pointer-events-none transition-opacity duration-200 ease-in-out',
                                '[&.active]:opacity-100'
                            )}
                            src={song.cover}
                            width={160}
                            height={160}
                            alt={song.title}
                        />
                    </div>
                ))}
            </div>
            <Link className="text-primary after:bg-primary" href="https://open.spotify.com/playlist/3sl30zwXXWQl7dH8l5jQfL?si=5aa0551ae5134a7e">
                get my playlist
            </Link>
        </div>
    );
}
