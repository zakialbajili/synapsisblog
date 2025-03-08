import LayoutPage from "@/components/layout/layoutPage";
import React, { useEffect, useState } from "react";
import api from "../../utils/axios";
import slugify from "slugify";
import { useQuery } from "@tanstack/react-query";
import Loading from "@/components/spin";
import Link from "next/link";
import { Pagination, Card } from "antd";
import FormCreateArticle from "@/components/organism/FormCreateArticle";
import type { PaginationProps } from "antd";
const fetchAPI = async ({ queryKey }: { queryKey: any }) => {
  const [, currentPage, currentLimit] = queryKey;
  const response = await api.get(
    `/posts?page=${currentPage}&per_page=${currentLimit}`
  );
  console.log(response);
  const result = {
    data: response.data,
    totalData: parseInt(response.headers["x-pagination-total"], 10),
    totalPages: parseInt(response.headers["x-pagination-pages"], 10),
    currentPages: parseInt(response.headers["x-pagination-page"], 10),
  };
  console.log(result);
  return result;
};
const showTotal: PaginationProps["showTotal"] = (total, range) =>
  `${range[0]}-${range[1]} of ${total} items`;
const Admin = () => {
  const [dataAPI, setDataAPI] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentLimit, setCurrentLimit] = useState<number>(10);
  const onChange: PaginationProps["onChange"] = (page, pageSize) => {
    console.log(page, pageSize);
    setCurrentPage(page);
    setCurrentLimit(pageSize);
  };
  const {
    data: posts,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["posts", currentPage, currentLimit],
    queryFn: fetchAPI,
  });
  if (isLoading) return <Loading />;
  if (isError) return <p>Terjadi kesalahan saat mengambil data</p>;
  return (
    <LayoutPage>
      <div className="w-full flex lg:flex-row">
        <div className="w-full lg:w-[70%] flex flex-col border-r-[1px] border-border/50 text-white">
          <FormCreateArticle />
          {posts?.data?.map((post: any) => (
            <Link
              href={`/blog/${slugify(post.title, {
                lower: true,
              })}?page=${currentPage}`}
              key={post.id}
              className=" border-b border-border/50"
            >
              <Card
                style={{ padding: "12px", border: "0px", color: "white" }}
                className="font-poppins rounded-none bg-transparent text-white hover:bg-gray-900/30"
              >
                <h3 className="font-semibold text-base lg:text-lg mb-1 text-subtleGray">
                  {post.title}
                </h3>
                <div className=" text-xs lg:text-sm line-clamp-3 text-subtleGray/70">{`${post.body} more`}</div>
                {/* <div className="flex justify-evenly mt-3">
                  <p>Like</p>
                  <p>Like</p>
                  <p>Like</p>
                </div> */}
              </Card>
            </Link>
          ))}
        </div>
        <div className=" hidden lg:block w-[30%] lg:m-3 rounded-2xl border-[1px] border-border/50 shadow-lg h-fit">
          <h2 className="font-semibold text-2xl text-center p-3 rounded-t-lg text-white">
            Recent Article
          </h2>
          <div className="bg-transparent p-3 flex flex-col gap-3">
            {posts?.data?.map((post: any, index: number) => {
              <Link
                href={`/blog/${slugify(post.title, {
                  lower: true,
                })}`}
                className="p-3 bg-gray-200 rounded-2xl text-primerText hover:text-white hover:shadow-md hover:bg-softBlue"
                key={index}
              >
                <h3 className="font-semibold text-xll text-soft">{post.title}</h3>
              </Link>;
            })}
          </div>
        </div>
      </div>
      <Pagination
        align="center"
        className="m-5"
        size="small"
        defaultCurrent={1}
        total={posts?.totalData}
        showTotal={showTotal}
        current={currentPage}
        onChange={(page, pageSize) => {
          onChange(page, pageSize);
        }}
        style={{color:"#F8F9FC"}}
      />
    </LayoutPage>
  );
};
export default Admin;
