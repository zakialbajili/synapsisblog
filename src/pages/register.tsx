import Image from "next/image";
import { Button } from "antd";
const Register: React.FC = () => {
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
          <h1 className="text-3xl">Register</h1>
          <input
            name="email"
            type="email"
            placeholder="Masukan Email"
            className=" placeholder:text-lightGray/50 bg-transparent focus:outline-1 text-lightGray/80 rounded-lg focus:px-3 border-[1px] border-border/50 p-2"
          />
          <input
            name="name"
            type="text"
            placeholder="Masukan Nama "
            className=" placeholder:text-lightGray/50 bg-transparent focus:outline-1 text-lightGray/80 rounded-lg focus:px-3 border-[1px] border-border/50 p-2"
          />
          <input
            name="password"
            type="password"
            placeholder="Masukan Password "
            className=" placeholder:text-lightGray/50 bg-transparent focus:outline-1 text-lightGray/80 rounded-lg focus:px-3 border-[1px] border-border/50 p-2"
          />
          <input
            name="password"
            type="password"
            placeholder="Masukan Confirmation Password "
            className=" placeholder:text-lightGray/50 bg-transparent focus:outline-1 text-lightGray/80 rounded-lg focus:px-3 border-[1px] border-border/50 p-2"
          />
          <Button className="p-5 font-poppins bg-lightGray hover:!bg-softBlue hover:!text-white hover:!border-0">
            Register
          </Button>
        </div>
      </div>
    </main>
  );
};
export default Register;
