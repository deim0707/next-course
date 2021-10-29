import Link from "next/link";
import {useRouter} from "next/router";

const Index = () => {
    const router = useRouter();
    const onNavigationToAboutPage = () => {
        router.push('/about')
    }
    return (
        <div>
            <h2>Start page - Index</h2>
            <h2>Start page - Index</h2>

            <Link href='about'><a>About</a></Link> {/*так делаем ссылки. он добавляет на онКлик корректный переход*/}
            <Link href='post/1234'><a>Post1234</a></Link>

            <button onClick={onNavigationToAboutPage}>Go to about page</button>
        </div>
    )
}

export default Index;