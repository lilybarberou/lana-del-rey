import Head from 'next/head';
import Image from 'next/image';
import Songs from '@/components/Songs';
import Quadriptych from '@/components/Quadriptych';
import Quiz from '@/components/Quiz';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Home() {
    return (
        <>
            <Head>
                <title>Lana Del Rey</title>
            </Head>
            <div>
                <div className="mx-auto my-0 p-5 pb-10 max-w-5xl flex flex-col items-center">
                    <Header />
                    <h1 className="mb-3 text-6xl text-primary tracking-[0.5px]">Lana Del Rey</h1>
                    <h2 className="text-2xl tracking-[0.5px]">welcome to a very fan page</h2>
                    <Quiz src="/lana-2.png" reverse={true} />
                    <Quiz src="/lana-1.png" index={1} />
                    <Songs />
                    <Quadriptych />
                    <Footer />
                </div>
                <Image className="w-full h-full fixed -z-[1] inset-0 opacity-10 object-cover" src="/bg.jpg" width={2000} height={3000} alt="Background" />
            </div>
        </>
    );
}
