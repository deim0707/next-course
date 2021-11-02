import {Main} from "../../components-layouts/MainLayout";
import Link from "next/link";
import {IPost} from "../../interfaces/IPost";

interface Props {
    posts: IPost[]
}

export default function Index({posts}: Props) {
    return (
        <Main>
            <h5>posts</h5>
            <ul>
                {posts.map(post => {
                    const {id, title, body} = post;
                    return (
                        <li key={id}>
                            {/*КОГДА ЛИНК ВЕДЁТ НА ДИНАМИЧЕСКУЮ СТРАНИЦУ, используем синтаксис Линк ниже*/}
                            <Link href='/post/[id]' as={`/post/${id}`}>
                                <a>{title}</a>
                            </Link>:
                            {body}
                        </li>
                    )
                })}
            </ul>
        </Main>
    )
}

// устаревший способ1 запросить данные. чтобы роботы видели хтмл уже с подставленными даными
// https://nextjs.org/docs/api-reference/data-fetching/getInitialProps
Index.getInitialProps = async () => {
    const response = await fetch('http://localhost:4200/posts');
    const posts: IPost[] = await response.json();
    return {posts}
}