import Image from "next/image";
import React, { useState } from "react";
import { Button, Input, message } from "antd";
import { useRouter } from "next/router";
const Login:React.FC = () => {
  const [formData, setFormData] = useState(
    {
      email:"",
      password:""
    }
  )
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const router = useRouter()
  const handleSubmit = () => {
    const rawData = localStorage.getItem('dataPersonal')
    if(rawData){
      const collectData = JSON.parse(rawData)
      if(collectData.email !== formData.email && collectData.password !== formData.password){
        message.error("Data pengguna tidak ditemukan");
      }
      else if(collectData.email !== formData.email){
        message.error("Email tidak terdaftar");
      }
      else if(collectData.password !== formData.password){
        message.error("Password tidak sesuai");
      }else{
        const addLoginInfo = {...collectData,"isLogin":true}
        localStorage.setItem('dataPersonal', JSON.stringify(addLoginInfo))
        message.success("Selamat anda berhasil login");
        router.push('/home')
      }
    }else{
      message.error("Email tidak terdaftar");
      return;
    }
  }
  return (
    <main className="w-full min-h-screen bg-black flex items-center justify-center text-white">
      <div className="w-[80%] border-[1px] border-border/50 rounded-2xl p-5 flex flex-wrap gap-10 justify-between">
        <div className="flex-grow flex flex-col items-center md:items-start justify-center gap-5">
          <Image
            src="/assets/images/logo_synapsis.png"
            alt="Logo Synapsis"
            width={45}
            height={45}
            fetchPriority={"high"}
            className=" w-[100px] h-[100px] lg:w-[200px] lg:h-[200px]"
          />
          <h1 className="text-2xl lg:text-6xl text-center md:text-start text-wrap font-semibold">
            Welcome to <br /> Synapsis Blog
          </h1>
        </div>
        <div className="flex-grow lg:w-[50%] flex flex-col gap-5 justify-center">
          <h1 className="text-3xl">Login</h1>
          <Input
            name="email"
            type="email"
            placeholder="Masukan Email"
            className=" placeholder:!text-lightGray/50 !bg-transparent focus:outline-1 !text-lightGray/80 rounded-lg focus:px-3 border-[1px] border-border/50 !p-2 focus:bg-transparent"
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            name="password"
            type="password"
            placeholder="Masukan Password "
            className=" placeholder:!text-lightGray/50 !bg-transparent focus:outline-1 !text-lightGray/80 rounded-lg focus:px-3 border-[1px] border-border/50 !p-2 focus:bg-transparent"
            value={formData.password}
            onChange={handleChange}
          />
          <Button onClick={handleSubmit} className="!p-5 !font-poppins bg-lightGray hover:!bg-softBlue hover:!text-white hover:!border-0 hover:!p-5">
            Login
          </Button>
        </div>
      </div>
    </main>
  );
};
export default Login;
