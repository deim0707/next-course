// задавая имя файла с помощью квадратных скобок. когда файл в папке, мы можем делать динамический рендеринг
// например /post/[id].js

import {useRouter} from "next/router";

export default function Post() {
    const router = useRouter();
    const {id} = router.query; // достали переданный параметр
    return (
        <div>
            <div>post id = {id}</div>
        </div>
    )
}