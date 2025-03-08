import { Avatar, Button } from "antd"
import { UserOutlined } from "@ant-design/icons";
const FormCreateArticle = () => {
    return(
        <div className="min-h-[150px] border-b border-border/50 flex flex-col items-between p-5 gap-5">
            {/* <label htmlFor="description"></label> */}
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="rounded-full h-fit w-fit bg-lightGray/50">
                <Avatar size="large" icon={<UserOutlined />} />
              </div>
              <div className="flex flex-col gap-2 w-full border-[1px] border-border/50 p-3 rounded-lg">
                <input
                  name="title"
                  placeholder="Topik obrolan yang sedang hangat dibicarakan!"
                  className="flex-grow placeholder:text-lightGray/50 bg-transparent focus:outline-1 text-lightGray/80 rounded-lg focus:px-3 border-[1px] border-border/50 px-2 py-1"
                />
                <textarea
                  minLength={10}
                  name="description"
                  placeholder="Ceritakan obrolan yang sedang hangat dibicarakan!"
                  className="flex-grow h-fit placeholder:text-lightGray/50 bg-transparent focus:outline-1 text-lightGray/80 rounded-lg focus:px-3 border-[1px] border-border/50 px-2 py-1"
                >
                </textarea>
                <Button className="bg-primerText border-0 hover:bg-lightGray rounded-lg hover:!text-primerText font-semibold text-lightGray self-end">
                  Posting
                </Button>
              </div>
            </div>
          </div>
    )
}
export default FormCreateArticle