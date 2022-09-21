import styled from "styled-components";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { BorderCircleImage, HeadingLg, ColorInherit } from "../styles/utils";

const Container = styled.div`
    max-width: 36rem;
    padding: 0 1rem;
    margin: 3rem auto 6rem;
`;

const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const BackToHome = styled.div`
    margin: 3rem 0 0;
`;

const name = "Jayce Kang";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
    return (
        <Container>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Learn how to build a personal website using Next.js" />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <Header>
                {home ? (
                    <>
                        <BorderCircleImage>
                            <Image className="profileImg" priority src="/images/profile.png" layout="fill" objectFit="cover" alt={name} />
                        </BorderCircleImage>
                        <h1>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <BorderCircleImage>
                                <a>
                                    <Image className="profileImg" priority src="/images/profile.jpg" height={108} width={108} alt={name} />
                                </a>
                            </BorderCircleImage>
                        </Link>
                        <HeadingLg>
                            <Link href="/">
                                <ColorInherit>{name}</ColorInherit>
                            </Link>
                        </HeadingLg>
                    </>
                )}
            </Header>
            <main>{children}</main>
            {!home && (
                <BackToHome>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </BackToHome>
            )}
        </Container>
    );
}
