import Image from "next/image"
import Link from "next/link"
import { Button } from "antd"
const Navbar = () => {
    return(
        <header className="w-full py-5">
            <nav className=" w-full flex justify-around">
                <div className="flex gap-3">
                    <Image src="/assets/images/logo_synapsis.png" alt="Logo Synapsis" width={45} height={45}/>
                    <p className="font-semibold text-3xl font-playfair">SynapsisBlog</p>
                </div>
                <div className="flex gap-5 font-playfair">
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