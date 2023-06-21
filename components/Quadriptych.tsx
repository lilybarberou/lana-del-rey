import Image from 'next/image';
import styled from 'styled-components';

export default function Quadriptych() {
    return (
        <S.Container>
            <Image src="/1.png" width={100} height={300} alt="lana del rey"></Image>
            <Image src="/2.png" width={100} height={300} alt="lana del rey"></Image>
            <Image src="/3.png" width={100} height={300} alt="lana del rey"></Image>
            <Image src="/4.png" width={100} height={300} alt="lana del rey"></Image>
        </S.Container>
    );
}

const S: any = {};
S.Container = styled.div`
    margin-top: 160px;
    margin-bottom: 160px;
    display: flex;
    gap: 7px;
    transform: scale(1.1);

    img {
        filter: grayscale(100%);
        width: auto;
        height: auto;
        transition: filter 0.2s ease-in-out;

        &:hover {
            filter: grayscale(0%);
        }
    }
`;
