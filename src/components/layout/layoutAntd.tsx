import React, { ReactNode } from "react"
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
const { Header, Content, Footer } = Layout;
interface LayoutProps{
    children: ReactNode
}
// const items = Array.from({ length: 15 }).map((_, index) => ({
//   key: index + 1,
//   label: `nav ${index + 1}`,
// }));
const items = [
    {
        key:"Home",
        label:(
            <Link href={"/blog"} className="text-base">Home</Link>
        )
    },
    {
        key:"Blog",
        label:(
            <Link href={"/blog"} className="text-base">Blog</Link>
        )
    }
]
const capitalizeChar = (str:string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

const LayoutAntd: React.FC<LayoutProps> = ({children}) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const location = usePathname() || "";
  const pathSnippets = location.split("/").filter((i) => i);
  const breadcrumbItems = pathSnippets.map((snippet, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    const title = snippet.replace(/-/g, " ");
    return (
      <Breadcrumb.Item key={url}>
        <Link
          href={url}
        >
          {capitalizeChar(title)}
        </Link>
      </Breadcrumb.Item>
    );
  });

  return (
    <Layout style={{minHeight:"100vh"}}>
      <Header style={{ display: "flex", justifyContent:"space-between" ,alignItems: "center", backgroundColor:"white"}}>
        <Link href="/" className="flex gap-3 items-center">
          <Image
            src="/assets/images/logo_synapsis.png"
            alt="Logo Synapsis"
            width={45}
            height={45}
            fetchPriority={"high"}
          />
          {/* <img src="/assets/images/logo_synapsis.png" alt="tes" /> */}
          <p className="font-semibold text-lg lg:text-2xl text-black">SynapsisBlog</p>
        </Link>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          style={{ display:"flex", justifyContent:"end", minWidth: "40%" }}
        />
      </Header>
      <Content style={{ padding: "0 5%" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item> */}
          {breadcrumbItems}
        </Breadcrumb>
        <div
          style={{
            // background: colorBgContainer,
            // borderRadius: borderRadiusLG,
            // minHeight: 280,
            // padding: 24,
          }}
        >
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Synapsis Blog ©2025 Created by zakialbajili
      </Footer>
    </Layout>
  );
};

export default LayoutAntd;
