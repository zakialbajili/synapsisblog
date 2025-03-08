import LayoutPage from "@/components/layout/layoutPage";
import React, { useEffect, useState } from "react";
import api from "../../utils/axios";
import slugify from "slugify";
import { useQuery } from "@tanstack/react-query";
import Loading from "@/components/spin";
import Link from "next/link";
import { Card, Avatar } from "antd";
import SearchUser from "@/components/organism/SearchUser";
import { UserOutlined } from "@ant-design/icons";
const fetchAPI = async () => {
  const response = await api.get(`/users`);
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

const ExploreUser = () => {
  const {
    data: users,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchAPI,
  });
  if (isLoading) return <Loading />;
  if (isError) return <p>Terjadi kesalahan saat mengambil data</p>;
  return (
    <LayoutPage>
      <div className="w-full h-full flex lg:flex-row">
        <div className="w-full lg:w-[70%] flex flex-col border-r-[1px] border-border/50 text-white">
          <SearchUser />
          <p className="pl-3 text-border/50">Refrensi untuk anda</p>
          {users?.data?.map((user: any) => (
            <Link
              href={`/users/${slugify(String(user.id), {
                lower: true,
              })}`}
              key={user.id}
              className=""
            >
              <Card
                style={{ padding: "12px", border: "0px", color: "white" }}
                className=" font-poppins rounded-none bg-transparent text-lightGray/50 hover:bg-gray-900/50"
              >
                <div className="flex flex-row gap-3">
                  <div className="rounded-full h-fit w-fit bg-lightGray/50">
                    <Avatar size="large" icon={<UserOutlined />} />
                  </div>
                  <div className="text-sm">
                    <p className="hover:font-semibold  mb-1">{user.name}</p>
                    <p className="text-border/50  mb-1">{user.id}</p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
        {/* <div className=" hidden lg:block w-[30%] lg:m-3 rounded-2xl border-[1px] border-border/50 shadow-lg h-fit">
          <h2 className="font-semibold text-2xl text-center p-3 rounded-t-lg text-white">
            Recent Article
          </h2>
          <div className="bg-transparent p-3 flex flex-col gap-3">
            {users?.data?.map((user: any, index: number) => {
              <Link
                href={`/blog/${slugify(user.name, {
                  lower: true,
                })}`}
                className="p-3 bg-gray-200 rounded-2xl text-primerText hover:text-white hover:shadow-md hover:bg-softBlue"
                key={index}
              >
                <h3 className="font-semibold text-xll">{user.name}</h3>
              </Link>;
            })}
          </div>
        </div> */}
      </div>
    </LayoutPage>
  );
};
export default ExploreUser;
