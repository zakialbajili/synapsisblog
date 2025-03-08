import { Spin } from "antd";
const Loading = () => {
    return(
        <div className="fixed inset-0 h-screen w-full flex items-center justify-center bg-black">
            <Spin size="large"/>
        </div>
    )
}
export default Loading