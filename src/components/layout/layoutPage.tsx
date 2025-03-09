import React, { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import {
  UploadOutlined,
  UserOutlined,
  SearchOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import { parse } from "path";
interface LayoutProps {
  children: ReactNode;
}

const { Header, Content, Footer, Sider } = Layout;

// const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
//   (icon, index) => ({
//     key: String(index + 1),
//     icon: React.createElement(icon),
//     label: `nav ${index + 1}`,
//   }),
// );
const items = [
  {
    key: "/home",
    icon: <HomeOutlined style={{ color: "white" }} />,
    label: (
      <Link href={"/home"} className="text-base" style={{ color: "white" }}>
        Home
      </Link>
    ),
  },
  {
    key: "/explore",
    icon: <SearchOutlined style={{ color: "white" }} />,
    label: (
      <Link href={"/explore"} className="text-base" style={{ color: "white" }}>
        Jelajahi
      </Link>
    ),
  },
];

const LayoutPage: React.FC<LayoutProps> = ({ children }) => {
  const [id, setid] = useState<string>("")
  const router = useRouter(); // Ambil router
  const currentPath = router.pathname; // Ambil path aktif
  useEffect(()=> {
    const rawData = localStorage.getItem('dataPersonal')
    if(rawData){
      const parseData = JSON.parse(rawData)
      setid(parseData.id)
    }
  }, [])
  return (
    <Layout>
      <Sider
        style={{
          backgroundColor: "black",
          borderRight: "1px solid gray",
        }}
        breakpoint="lg"
        collapsedWidth="50px"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        {/* <div className="demo-logo-vertical" /> */}
        <div className="h-screen flex flex-col justify-between">
          <div>
            <div className="flex gap-3 justify-center items-center py-2 lg:py-5">
              <Image
                src="/assets/images/logo_synapsis.png"
                alt="Logo Synapsis"
                width={45}
                height={45}
                fetchPriority={"high"}
                className="w-[30px] h-[30px] lg:w-[45px] lg:h-[45px]"
              />
              <p className="font-poppins hidden lg:block text-white text-center text-lg ">
                SynapsisBlog
              </p>
            </div>
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={[currentPath]}
              style={{ backgroundColor: "black" }}
              className="custom-menu"
              items={items}
            />
          </div>
          <Link href={`/profile/${id}`} className="p-3 mx-1 lg:mx-3 rounded-full bg-white text-black flex gap-5 justify-center hover:!text-primerText">
            <UserOutlined />
            <p className="hidden lg:block">Profile</p>
          </Link>
        </div>
      </Sider>
      <Layout style={{ minHeight: "100vh", backgroundColor: "black" }}>
        <Content style={{ backgroundColor: "black" }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutPage;
