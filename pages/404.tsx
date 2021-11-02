//страница, которая будет возникать по 404 ошибке
import Link from "next/link";
import styles from '../styles/404page.module.scss'

export default function Custom404() {
    return (
        <div className={styles.custom404_wrapper}>
            <h1 className={styles.error}>404 - Страничка не найдена!</h1>
            <Link href="/"><a>Го на домашнюю</a></Link>
        </div>
    )
}