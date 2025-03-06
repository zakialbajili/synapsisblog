import { useRouter } from "next/router"
import React from "react"
const DetailBlog:React.FC = () => {
    const router = useRouter()
    return(
        <main>
            <p>Hasil Slug: {router.query.id}</p>
        </main>
    )
}
export default DetailBlog