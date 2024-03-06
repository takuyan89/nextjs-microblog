import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Layout from "@/components/Layout";
import utilStyles from "@/styles/utils.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <Layout>
            <section className={utilStyles.headingMd}>
                <p>
                    aaaaaaaaaaaaabbbbbbbbbbbbbccccccccccccccccccccccddddddddddddddddddeeeeeeeeeeeeg
                </p>
            </section>

            <section>
                <h2>📝エンジニアのブログ</h2>
                <div className={styles.grid}>
                    <article>
                        <Link href="/">
                            <img
                                src="/images/thumbnail01.jpg"
                                className={styles.thumbnailImage}
                            />
                        </Link>
                        <Link href="/" className={utilStyles.boldText}>
                            SSGとSSRの使い分けの場面はいつなのか？
                        </Link>
                        <br />
                        <small className={utilStyles.lightText}>
                            February 23, 2020
                        </small>
                    </article>
                    <article>
                        <Link href="/">
                            <img
                                src="/images/thumbnail01.jpg"
                                className={styles.thumbnailImage}
                            />
                        </Link>
                        <Link href="/" className={utilStyles.boldText}>
                            SSGとSSRの使い分けの場面はいつなのか？
                        </Link>
                        <br />
                        <small className={utilStyles.lightText}>
                            February 23, 2020
                        </small>
                    </article>
                    <article>
                        <Link href="/">
                            <img
                                src="/images/thumbnail01.jpg"
                                className={styles.thumbnailImage}
                            />
                        </Link>
                        <Link href="/" className={utilStyles.boldText}>
                            SSGとSSRの使い分けの場面はいつなのか？
                        </Link>
                        <br />
                        <small className={utilStyles.lightText}>
                            February 23, 2020
                        </small>
                    </article>
                    <article>
                        <Link href="/">
                            <img
                                src="/images/thumbnail01.jpg"
                                className={styles.thumbnailImage}
                            />
                        </Link>
                        <Link href="/" className={utilStyles.boldText}>
                            SSGとSSRの使い分けの場面はいつなのか？
                        </Link>
                        <br />
                        <small className={utilStyles.lightText}>
                            February 23, 2020
                        </small>
                    </article>
                </div>
            </section>
        </Layout>
    );
}
