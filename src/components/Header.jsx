import React from "react";
import { Select, Button } from "antd";
import { GlobalOutlined } from "@ant-design/icons";

export default function Header() {
  const { Option } = Select;
  const items = [
    {
      label: 'Bahasa Indonesia',
      value: "ind",
    },
    {
      label: "English",
      value: "en",
    },
  ];
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <header className="p-6">
      <div className="flex justify-end gap-4 ">
        <Select
          style={{ width: 200 }}
          defaultValue="ind"
          onChange={handleChange}
        >
          {items.map((item, index) => {
            return (
              <Option key={index} value={item.value} className="font-work">
                <GlobalOutlined style={{ marginRight: 8 }} />
                {item.label}
              </Option>
            );
          })}
        </Select>
        <Button>Masuk</Button>
        
      </div>
    </header>
  );
}
