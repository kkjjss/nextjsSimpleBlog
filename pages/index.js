import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { HeadingMd, HeadingLg, List, ListItem } from "../styles/utils";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function Home({ allPostsData }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <HeadingMd>
                <p>Hello, World!</p>
                <p>
                    (This is a sample website - you’ll be building a site like this on <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
                </p>
            </HeadingMd>
            <HeadingMd style="paading-top:1px">
                <HeadingLg>Blog</HeadingLg>
                <List>
                    {allPostsData.map(({ id, date, title }) => (
                        <ListItem key={id}>
                            {title}
                            <br />
                            {id}
                            <br />
                            {date}
                        </ListItem>
                    ))}
                </List>
            </HeadingMd>
        </Layout>
    );
}
