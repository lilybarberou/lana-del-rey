import Image from 'next/image';
import styled from 'styled-components';
import Songs from '@/components/Songs';
import Quadriptych from '@/components/Quadriptych';
import Quiz from '@/components/Quiz';

export default function Home() {
    return (
        <S.Container>
            <S.Content>
                <S.Navigation>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCqk3CdGN_j8IR9z4uBbVPSg">
                        youtube
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://uk.shoplanadelrey.com/">
                        merch
                    </a>
                </S.Navigation>
                <h1>Lana Del Rey</h1>
                <h2>welcome to a very fan page</h2>
                <Quiz src="/lana-2.png" reverse={true} />
                <Quiz src="/lana-1.png" index={1} />
                <Songs />
                <Quadriptych />
                <S.Navigation $noMargin={true}>
                    <a target="_blank" rel="noopener noreferrer" href="https://lilybarberou.fr/">
                        about me, the fan
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://youtu.be/rLCPmF-uxb4">
                        a very good concert
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://lanadelrey.com/">
                        official website
                    </a>
                </S.Navigation>
            </S.Content>
            <S.Background src="/bg.jpg" width={2000} height={3000}></S.Background>
        </S.Container>
    );
}

const S: any = {};
S.Container = styled.div``;

S.Content = styled.div`
    margin: 0 auto;
    padding: 20px;
    padding-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1000px;

    h1 {
        font-size: 60px;
        color: #e8d276;
        letter-spacing: 2px;
        margin-bottom: 10px;
    }

    h2 {
        font-size: 24px;
        letter-spacing: 2px;
    }
`;

S.Navigation = styled.div<{ $noMargin?: boolean }>`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: ${(props) => (props.$noMargin ? '0' : '80px')};
`;

S.Background = styled(Image)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: fixed;
    z-index: -1;
    opacity: 0.1;
    inset: 0;
`;
