import React, { useEffect, useState } from "react";
import api from "../../../utils/axios";
import slugify from "slugify";
// import Navbar from "@/components/Navbar";
// import { Button } from "antd";
import { useQuery } from "@tanstack/react-query";
import { Card } from "antd";
import Loading from "@/components/spin";
import Link from "next/link";
import LayoutAntd from "@/components/layout/layoutAntd";
import {Pagination} from "antd";
import type { PaginationProps } from "antd";
const fetchAPI = async ({queryKey}:{queryKey:any}) => {
  const[,currentPage, currentLimit] = queryKey
  const response = await api.get(`/posts?page=${currentPage}&per_page=${currentLimit}`);
  console.log(response)
  const result = {
    data:response.data,
    totalData:parseInt(response.headers["x-pagination-total"], 10),
    totalPages:parseInt(response.headers["x-pagination-pages"], 10),
    currentPages:parseInt(response.headers["x-pagination-page"], 10)
  }
  console.log(result)
  return result
};
const showTotal: PaginationProps['showTotal'] = (total, range) => `${range[0]}-${range[1]} of ${total} items`;
const Blog: React.FC = () => {
  const [dataAPI, setDataAPI] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentLimit, setCurrentLimit] = useState<number>(10);
  const onChange: PaginationProps['onChange'] = (page, pageSize) => {
    console.log(page, pageSize);
    setCurrentPage(page);
    setCurrentLimit(pageSize);
  };
  const {
    data: posts,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["posts", currentPage,currentLimit],
    queryFn: fetchAPI,
  });
  if (isLoading) return <Loading />;
  if (isError) return <p>Terjadi kesalahan saat mengambil data</p>;

  return (
    <LayoutAntd>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
        {posts?.data?.map((post: any) => (
          <Link href={`/blog/${slugify(post.title,{lower:true})}?page=${currentPage}`} key={post.id}>
            <Card hoverable title={post.title} className="font-poppins">
              <div className="line-clamp-3">{`${post.body} more`}</div>
            </Card>
          </Link>
        ))}
      </div>
      <Pagination align="center" className="m-5" defaultCurrent={1} total={posts?.totalData} showTotal={showTotal} current={currentPage} onChange={(page, pageSize)=>{onChange(page, pageSize)}} />
    </LayoutAntd>
  );
};
export default Blog;
