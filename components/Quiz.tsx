import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import questions from '../public/questions.json';

type Question = {
    question: string;
    answer: string;
    options: string[];
};

export default function Quiz(props: { src: string; reverse?: boolean; index?: number }) {
    const { index = 0 } = props;
    const ended = useRef(false);
    const [currentQst, setCurrentQst] = useState<{ qst: Question; option: string; index: number }>();
    const [result, setResult] = useState({ success: 0, error: 0 });

    // QUESTION MANAGEMENT
    useEffect(() => {
        const question = questions[index][Math.floor(Math.random() * questions[index].length)];
        const option = question.options[Math.floor(Math.random() * question.options.length)];
        const randomIndex = Math.floor(Math.random() * 2);

        setCurrentQst({ qst: question, option, index: randomIndex });
    }, [index]);

    // si randomIndex = 0 -> bonne réponse = 1
    const checkAnswer = (e: React.MouseEvent<HTMLSpanElement>, index: number) => {
        if (!ended.current) {
            ended.current = true;

            const isRight = (currentQst?.index === 0 && index === 1) || (currentQst?.index === 1 && index === 2);
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
            <S.Icon>
                <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
                    <path d="M5 13l4 4L19 7" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </S.Icon>
        );
    };

    const Error = () => {
        return (
            <S.Icon $error={true}>
                <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
                    <path
                        d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
                        stroke="#000000"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></path>
                </svg>
            </S.Icon>
        );
    };

    return (
        <S.Container $reverse={props.reverse}>
            <Image src={props.src} width={300} height={300} alt="lana del rey"></Image>
            <S.Question>
                <p>{currentQst?.qst.question}</p>
                <div>
                    <span onClick={(e) => checkAnswer(e, 1)}>{currentQst?.index === 0 ? currentQst?.qst.answer : currentQst?.option}</span>
                    {result.success === 1 && <Success />}
                    {result.error === 1 && <Error />}
                </div>
                <div>
                    <span onClick={(e) => checkAnswer(e, 2)}>{currentQst?.index === 0 ? currentQst?.option : currentQst?.qst.answer}</span>
                    {result.success === 2 && <Success />}
                    {result.error === 2 && <Error />}
                </div>
            </S.Question>
        </S.Container>
    );
}

const S: any = {};
S.Container = styled.div<{ $reverse: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${(props) => (props.$reverse ? 'flex-direction: row-reverse;' : 'flex-direction: row')};
    margin-top: 100px;
    width: 100%;

    img {
        height: fit-content;
        filter: grayscale(100%);
    }
`;

S.Icon = styled.div<{ $error: boolean }>`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${(props) => (props.$error ? '#E96446' : '#e8d276')};
    display: flex;
    align-items: center;
    justify-content: center;
`;

S.Question = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 350px;

    p {
        font-size: 30px;
        margin-bottom: 20px;
    }

    span {
        text-align: center;
        border: 1px solid #e8d276;
        min-width: 150px;
        width: fit-content;
        padding: 12px;
        border-radius: 5px;
        cursor: pointer;
        transition: 0.2s ease-in-out;
        font-size: 18px;

        &:hover {
            background-color: #e8d276;
            color: #000;
        }
        &.valid {
            background-color: #e8d276;
            color: #000;
        }
        &.invalid {
            background-color: #e96446;
            border-color: #e96446;
            color: #000;
        }
    }

    div {
        display: flex;
        align-items: center;
        gap: 15px;
    }
`;
