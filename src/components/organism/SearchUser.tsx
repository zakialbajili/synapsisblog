import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
const SearchUser = () => {
  return (
    <div className="w-full min-h-[55px] px-3 py-2">
      <div className="w-full px-2 py-1 rounded-full border-[1px] border-border/50 flex gap-3">
        <Button className="ml-2 bg-transparent text-border/50 border-0 px-0 hover:!bg-transparent hover:!text-border/50">
          <SearchOutlined />
        </Button>
        <input
          name="iduser"
          placeholder="Cari teman berdasarkan ID"
          className="w-full flex-grow placeholder:text-lightGray/50 bg-transparent focus:outline-none text-lightGray/80 focus:px-3 px-2 py-1"
        />
      </div>
    </div>
  );
};
export default SearchUser;
