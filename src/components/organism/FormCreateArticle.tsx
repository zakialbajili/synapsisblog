import { Avatar, Button, message } from "antd";
import { useMutation } from "@tanstack/react-query";
import { UserOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { Input } from "antd";
import api from "../../../utils/axios";
type data = {
  email: string;
  id: number;
};
type formData = {
  title: string;
  body: string;
};
const FormCreateArticle: React.FC = () => {
  const [dataPersonal, setDataPersonal] = useState<data>({ email: "", id: 0 });
  const [formData, setFormData] = useState<formData>({
    title: "",
    body: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const mutation = useMutation({
    mutationFn: async (data: formData) => {
      const response = await api.post(`/users/${dataPersonal.id}/posts`, data);
      setFormData({title:"", body:""})
      return response.data;
    },
    onSuccess: () => {
      message.success("Berhasil menambahkan artikel");
    },
    onError: () => {
      message.error("Terjadi kesalahan saat menambahkan artikel.");
    },
  });
  const handleSubmit = () => {
    mutation.mutate(formData)
  }
  useEffect(() => {
    const rawData = localStorage.getItem("dataPersonal");
    if (rawData) {
      const parseData = JSON.parse(rawData);
      setDataPersonal({ email: parseData.email, id: parseData.id });
    }
  }, []);
  const { TextArea } = Input;
  return (
    <div className="min-h-[150px] border-b border-border/50 flex flex-col items-between p-5 gap-5">
      {/* <label htmlFor="description"></label> */}
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="flex gap-3">
          <div className="rounded-full h-fit w-fit bg-lightGray/50">
            <Avatar size="large" icon={<UserOutlined />} />
          </div>
          <div className="block: lg:hidden">
            <p className="text-lightGray">{dataPersonal.email}</p>
            <p className="text-sm text-lightGray/50">{dataPersonal.id}</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full border-[1px] border-border/50 p-3 rounded-lg">
          <Input
            name="title"
            placeholder="Topik obrolan yang sedang hangat dibicarakan!"
            className=" placeholder:!text-lightGray/50 !bg-transparent focus:outline-1 !text-lightGray/80 rounded-lg focus:px-3 border-[1px] border-border/50 !p-2 focus:bg-transparent"
            value={formData.title}
            onChange={handleChange}
          />
          <TextArea
            rows={4}
            name="body"
            value={formData.body}
            placeholder="Ceritakan obrolan yang sedang hangat dibicarakan!"
            className=" placeholder:!text-lightGray/50 !bg-transparent focus:outline-1 !text-lightGray/80 rounded-lg focus:px-3 border-[1px] border-border/50 !p-2 focus:bg-transparent"
            onChange={handleChange}
          ></TextArea>
          <Button
            onClick={handleSubmit}
            className="bg-primerText border-0 hover:bg-lightGray rounded-lg hover:!text-primerText font-semibold text-lightGray self-end"
          >
            Posting
          </Button>
        </div>
      </div>
    </div>
  );
};
export default FormCreateArticle;
