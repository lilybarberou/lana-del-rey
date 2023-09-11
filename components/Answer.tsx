import { useState } from 'react';
import clsx from 'clsx';

type Props = {
    num: number;
    ended: boolean;
    setEnded: React.Dispatch<React.SetStateAction<boolean>>;
    question: { index: number; answer: string; option: string };
};

export default function Answer(props: Props) {
    const { num, question, ended, setEnded } = props;
    const [result, setResult] = useState({ success: 0, error: 0 });

    // si randomIndex = 0 -> bonne réponse = 1
    const checkAnswer = (e: React.MouseEvent<HTMLSpanElement>, index: number) => {
        if (!ended) {
            setEnded(true);

            const isRight = (question.index === 0 && index === 1) || (question.index === 1 && index === 2);
            if (isRight) {
                e.currentTarget.classList.add('valid');
                setResult({ ...result, success: index });
            } else {
                e.currentTarget.classList.add('invalid');
                setResult({ ...result, error: index });
            }
        }
    };

    const Success = () => {
        return (
            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-primary">
                <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
                    <path d="M5 13l4 4L19 7" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
            </div>
        );
    };

    const Error = () => {
        return (
            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#E96446]">
                <svg strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
                    <path
                        d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
                        stroke="#000000"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                </svg>
            </div>
        );
    };

    return (
        <div className="flex items-center gap-4">
            <span
                className={clsx(
                    'min-w-[150px] w-fit p-3 border-solid border border-primary rounded-md text-center cursor-pointer transition-all duration-200 ease-in-out text-lg',
                    'hover:bg-primary hover:text-black',
                    '[&.valid]:bg-primary [&.valid]:text-black',
                    '[&.invalid]:bg-[#e96446] [&.invalid]:border-[#e96446] [&.invalid]:text-black'
                )}
                onClick={(e) => checkAnswer(e, num)}
            >
                {question.index === num - 1 ? question.answer : question.option}
            </span>
            {result.success === num && <Success />}
            {result.error === num && <Error />}
        </div>
    );
}
