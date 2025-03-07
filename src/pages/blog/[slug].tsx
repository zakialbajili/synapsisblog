import React, { useEffect, useState } from "react";
import LayoutAntd from "@/components/layout/layoutAntd";
import { useRouter } from "next/router";
import api from "../../../utils/axios";
import Loading from "@/components/spin";
import { useQuery } from "@tanstack/react-query";
import slugify from "slugify";
import Link from "next/link";
const fetchAPI = async ({queryKey}:{queryKey:any}) => {
    const [, page] = queryKey
    const { data } = await api.get(`/posts?page=${page}`);
    return data;
};
const Detail:React.FC = () => {
    const router = useRouter()
    const [detailBlog, setDetailBlog] = useState<any>(null)
    const page = router.query.page;
    // const perPages = router.query.per_page;
    const {data:posts, isError, isLoading} = useQuery({
        queryKey:['posts', page],
        queryFn:fetchAPI
    })
    const lastArticle = posts?.slice(0,4) || [];
    let slug = router.query.slug
    if(typeof slug === "string"){
        slug = slug.split("-").join(" ")
    }
    useEffect(()=>{
            console.log(slug)
            if (posts) {
                const getBlog = posts.filter((article: any) =>
                    article.title.toLowerCase() === slug
                );
                setDetailBlog(getBlog[0]);
            }
    },[posts, slug])
    if (isLoading) return <Loading />;
  if (isError) return <p>Terjadi kesalahan saat mengambil data</p>;
    return(
        <LayoutAntd>
            <div className="flex flex-col lg:flex-row gap-5">
                <div className="w-full lg:w-[70%] h-fit bg-white shadow-md rounded-2xl p-5">
                    {detailBlog&&
                        <div className="flex flex-col gap-5 text-primerText">
                            <h1 className="font-semibold text-3xl">{detailBlog.title}</h1>
                            <p>{detailBlog.body}</p>
                        </div>
                    }
                </div>
                <div className="w-full lg:w-[30%] rounded-2xl border-2 border-softBlue shadow-lg">
                    <h2 className="font-semibold text-2xl text-center p-3 bg-softBlue rounded-t-lg text-white">Recent Article</h2>
                    <div className="bg-transparent p-3 flex flex-col gap-3">
                        {lastArticle.map((post:any, index:number)=>{
                            if(post.title.toLowerCase() !== slug){
                                return(
                                <Link href={`/blog/${slugify(post.title,{lower:true})}?page=${page}`} className="p-3 bg-gray-200 rounded-2xl text-primerText hover:text-white hover:shadow-md hover:bg-softBlue" key={index}>
                                    <h3 className="font-semibold text-xll">{post.title}</h3>
                                </Link>
                                )
                            }
                        }
                        )}
                    </div>
                </div>
            </div>
        </LayoutAntd>
    )
}
export default Detail