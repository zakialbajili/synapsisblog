import React, { useEffect, useState } from "react";
import api from "../../utils/axios";
import { Button } from "antd";
import { useQuery } from "@tanstack/react-query";
import { Card } from "antd";
import Loading from "@/components/spin";
import Navbar from "@/components/Navbar";
import Link from "next/link";
const fetchAPI = async () => {
  const { data } = await api.get("/posts");
  console.log(data);
  return data;
};
const Blog: React.FC = () => {
  const [dataAPI, setDataAPI] = useState<any>(null);
  const {
    data: posts,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchAPI,
  });

  if (isLoading) return <Loading />;
  if (isError) return <p>Terjadi kesalahan saat mengambil data</p>;

  return (
    <main>
      <Navbar />
      <div className="w-[80%] mx-auto p-5 rounded-2xl font-poppins text-gray-900">
        <div className="grid grid-cols-3 gap-5">
          {posts.map((post: any) => (
            // <li key={post.id}>
            //     <a href={`/detail/${post.id}`}>{post.title}</a>
            // </li>
            <Link href={`/detail/${post.id}`} key={post.id}>
              <Card hoverable title={post.title} className="font-poppins">
                <div className="line-clamp-3">{`${post.body} more`}</div>
              </Card>
            </Link>
          ))}
        </div>
        <Button type="primary" className="bg-blue-500">
          Button
        </Button>
      </div>
    </main>
  );
};
export default Blog;
