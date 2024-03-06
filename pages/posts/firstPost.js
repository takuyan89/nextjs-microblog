import Head from "next/head";
import Link from "next/link";

export default function FirstPost() {
    return (
        <div>
            <Head>
                <title>The first post</title>
            </Head>
            <h1>first post</h1>
            <Link href="/">back to the Home</Link>
        </div>
    );
}
