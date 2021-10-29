import Head from "next/head"; // позволяет редактировать метатеги <head/>
import Link from "next/link";
import {useRouter} from "next/router";
import {Main} from "../components-layouts/MainLayout";

const Index = () => {
    const router = useRouter();
    const onNavigationToAboutPage = () => {
        router.push('/about')
    }
    return (
        <Main title='Заголовок1'>
            {/*тут Хед задаётся только для одной страницы. можно использовать всё, что можно использовать в <head></head>*/}
            <Head>
                <meta name='keywords' content='здесь задаю ключевые слова для SEO'/>
            </Head>
            <div>
                <h2>Start page - Index</h2>
                <h2>Start page - Index</h2>

                <Link href='/about'><a>About</a></Link> {/*так делаем ссылки. он добавляет на онКлик корректный переход*/}
                <Link href='/post/1234'><a>Post1234</a></Link>

                <button onClick={onNavigationToAboutPage}>Go to about page</button>
            </div>
        </Main>
    )
}

// для всех страниц в pages обязателен дефолтный экспорт
export default Index;