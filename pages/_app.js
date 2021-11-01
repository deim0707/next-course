//https://nextjs.org/docs/advanced-features/custom-app
//в _app можем подключать глобальные стили
import '../styles/main.css';

function MyApp({Component, pageProps}) {
    return (
        <>
            <Component {...pageProps} />
            {/*можно даже так извращённо задать глобальные стили:*/}
            {/*<style jsx global>{`*/}
            {/*  body {*/}
            {/*    font-family: 'Roboto', sans-serif;*/}
            {/*  }*/}
            {/*`}</style>*/}
        </>
    )
}

export default MyApp