import Link from "next/link";
import Head from "next/head";

export function Main({children, title = 'Заголовочек'}) {
    return (
        <>
            {/*указанные в лэйауте Хед НЕ будет перебивать тот, что указан конкретно в компоненте*/}
            <Head>
                <title>{title}</title>
                <meta name='description' content='чот ещё для SEO'/>
            </Head>
            <nav>
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="/posts"><a>Posts</a></Link>
            </nav>
            <main>
                {children}
            </main>

            {/*есть возможность задавать так стили. сразу добавит автопрефиксы*/}
            {/*можно добавить рядом с jsx - "global", стили станут локальными*/}
            <style jsx>{`
              nav {
                display: flex;
                width: 200px;
                justify-content: space-around;
              }
            `}</style>
        </>
    )
}