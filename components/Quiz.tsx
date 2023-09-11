import { useEffect, useState } from 'react';
import Image from 'next/image';
import questions from '../public/questions.json';
import clsx from 'clsx';
import Answer from './Answer';

export default function Quiz(props: { src: string; reverse?: boolean; index?: number }) {
    const { index = 0 } = props;
    const [ended, setEnded] = useState(false);
    const [currentQst, setCurrentQst] = useState<{ question: string; answer: string; option: string; index: number }>();

    // QUESTION MANAGEMENT
    useEffect(() => {
        const question = questions[index][Math.floor(Math.random() * questions[index].length)];
        const option = question.options[Math.floor(Math.random() * question.options.length)];
        const randomIndex = Math.floor(Math.random() * 2);

        setCurrentQst({ ...question, option, index: randomIndex });
    }, [index]);

    if (!currentQst) return null;
    return (
        <div className={clsx('mt-28 w-full flex justify-between items-center', props.reverse ? 'flex-row-reverse' : 'flex-row')}>
            <Image className="h-fit grayscale" src={props.src} width={300} height={300} alt="lana del rey" />
            <div className="max-w-[350px] flex flex-col gap-3">
                <p className="mb-5 text-3xl">{currentQst.question}</p>
                <Answer num={1} question={currentQst} ended={ended} setEnded={setEnded} />
                <Answer num={2} question={currentQst} ended={ended} setEnded={setEnded} />
            </div>
        </div>
    );
}
