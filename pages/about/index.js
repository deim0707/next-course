// мы перенесли файл внутрь папки about и назвали его index js. теперь он доступен по пути /aboud
import {Main} from "../../components-layouts/MainLayout";

const About = () => {
    return (
        <Main>
            <div>About!!!</div>
        </Main>
    )
}

export default About;