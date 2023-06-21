import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import top from '../public/top.json';

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
        <S.Top>
            <span>top 5</span>
            <div ref={songs}>
                {top.map((song: Song, i) => (
                    <S.Song key={i}>
                        <span onMouseMove={(e) => moveImg(e, i)} onMouseEnter={() => toggleCover(i)} onMouseLeave={() => toggleCover(i)}>
                            {song.title}
                        </span>
                        <Image src={song.cover} width={150} height={150} alt={song.title} />
                    </S.Song>
                ))}
            </div>
            <Link href="https://open.spotify.com/playlist/3sl30zwXXWQl7dH8l5jQfL?si=5aa0551ae5134a7e">get my playlist</Link>
        </S.Top>
    );
}

const S: any = {};
S.Top = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 150px;
    gap: 40px;

    > span,
    a {
        color: #e8d276;
    }

    > span {
        font-size: 32px;
    }

    a::after {
        background: #e8d276;
    }

    > div {
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
    }
`;

S.Song = styled.div`
    position: relative;

    span {
        cursor: default;
    }

    img {
        position: absolute;
        z-index: 1;
        pointer-events: none;
        top: 50%;
        left: 100%;
        opacity: 0;
        transition: opacity 0.2s ease-in-out;
    }
    img.active {
        opacity: 1;
    }
`;
