import React, { ReactNode } from 'react';
import Link from 'next/link';
import { UploadOutlined, UserOutlined, SearchOutlined, HomeOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/router';
interface LayoutProps{
    children: ReactNode
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
        key:"/",
        icon: <HomeOutlined style={{ color: "white" }}/>,
        label:(
            <Link href={"/"}  className="text-base" style={{ color: "white",  }}>Home</Link>
        )
    },
    {
        key:"/explore",
        icon: <SearchOutlined style={{ color: "white" }}/>,
        label:(
            <Link href={"/explore"} className="text-base" style={{ color: "white",  }}>Jelajahi</Link>
        )
    }
]

const LayoutPage: React.FC<LayoutProps> = ({children}) => {
//   const {
//     token: { colorBgContainer, borderRadiusLG },
//   } = theme.useToken();
  const router = useRouter(); // Ambil router
  const currentPath = router.pathname; // Ambil path aktif
  return (
    <Layout>
      <Sider
        style={{ display:"fixed", backgroundColor:"black" ,borderRight: "1px solid gray" }}
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
        <div className='flex gap-3 justify-center items-center py-2 lg:py-5'>
            <Image
                src="/assets/images/logo_synapsis.png"
                alt="Logo Synapsis"
                width={45}
                height={45}
                fetchPriority={"high"}
                className='w-[30px] h-[30px] lg:w-[45px] lg:h-[45px]'
            />
            <p className='font-poppins hidden lg:block text-white text-center text-lg '>SynapsisBlog</p>
        </div>
        <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[currentPath]}
            style={{ backgroundColor:"black" }}
            className='custom-menu'
            items={items}
        />
      </Sider>
      <Layout style={{minHeight:"100vh", backgroundColor:"black"}}>
        {/* <Header style={{ padding: 0, backgroundColor:"black", borderBottom:"1px solid gray"
            // background: colorBgContainer 
            }} /> */}
        <Content style={{ backgroundColor:"black" }}>
          {/* <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
          </div> */}
            {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutPage;