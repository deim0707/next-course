// задавая имя файла с помощью квадратных скобок. когда файл в папке, мы можем делать динамический рендеринг
// например /post/[id].js
import {useState, useEffect} from "react";
import {useRouter} from "next/router";
import Links from "next/link";
import {Main} from "../../components-layouts/MainLayout";
import {NextPageContext} from "next";
import {IPost} from "../../interfaces/IPost";

interface Props {
    post: IPost
}

// сомнительно два раза делать одно и тоже. ради чего создали эту функцию
const getData = async (id: string): Promise<IPost> => {
    const response = await fetch(`http://localhost:4200/posts/${id}`);
    // return await response.json();
    const post: IPost = await response.json();
    return post;
}

// очень сомнительное решение, добавлять столько логики для лоадинга на загрузку. поискать решения лучше
export default function Post({post: postFromBack}: Props) {
    const router = useRouter();
    const {id} = router.query; // достали переданный параметр из адресной строки

    const [post, setPost] = useState<IPost | null>(postFromBack);
    useEffect(() => {
        if (!postFromBack) {
            //@ts-ignore
            setPost(getData(id))
        }
    }, [])

    if (!post) return <Main><p>Загрузка...</p></Main>

    const {title, body} = post;
    return (
        <div>
            <h2>{title}</h2>
            <p>id: {id}</p>
            <hr/>
            <p>{body}</p>
            <hr/>
            <Links href="/posts"><a>Перейти на все посты</a></Links>
        </div>
    )
}

// Post.getInitialProps = async (context) => {
//     const {query, req} = context;
//     if (!req) return {post: null};
//     // контекст - https://nextjs.org/docs/api-reference/data-fetching/getInitialProps#context-object
//     const {id} = query;
//     const post = await getData(id);
//     return {post}
// }
interface PostNextPageContext extends NextPageContext {
    query: {id: string}
}
// современный способ запрашивать данные. функция никогда не вызовется на клиентской части, только на сервере
export async function getServerSideProps(context: PostNextPageContext) {
    const {query, req} = context;
    if (!req) return {props: {post: null}};
    // контекст - https://nextjs.org/docs/api-reference/data-fetching/getInitialProps#context-object
    const {id} = query;
    const post: IPost = await getData(id as string);
    return {props: {post}}
}