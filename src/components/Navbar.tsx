import Image from "next/image"
import Link from "next/link"
import { Button } from "antd"
const Navbar = () => {
    return(
        <header className="w-full p-3 fixed top-0 left-0 right-0 z-30 bg-white shadow-lg">
            <nav className=" w-full flex justify-around items-center">
                <Link href="/" className="flex gap-3 items-center">
                    <Image src="/assets/images/logo_synapsis.png" alt="Logo Synapsis" width={45} height={45} fetchPriority={"high"}/>
                    {/* <img src="/assets/images/logo_synapsis.png" alt="tes" /> */}
                    <p className="font-semibold text-2xl font-poppins">SynapsisBlog</p>
                </Link>
                <div className="flex gap-3 lg:gap-5 font-poppins text-xl">
                    <Link href={"/"} className="hover:text-softBlue font-semibold">Home</Link>
                    <Link href={"/"} className="hover:text-softBlue font-semibold">Menu</Link>
                </div>
                <Button type="primary">
                    Contact Me
                </Button>
            </nav>
        </header>
    )
}
export default Navbar