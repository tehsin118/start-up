import React, { useState } from "react";
import Input from "./shared/input";
import eyeOpen from "../assets/icons/eye-open.svg";
import Button from "./shared/button";
import Textarea from "./shared/textarea";
import Swal from "sweetalert2";
import Checkbox from "./shared/checkbox";
import RadioButton from "./shared/radioButton";
import DataTable from "./shared/table";
import { Switch } from "antd";
import Chips from "./shared/chips";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { ImBin } from "react-icons/im";

const Components = () => {
  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: true,
  });

  const [selectedRadio, setSelectedRadio] = useState("radio1");

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [id]: checked,
    }));
  };

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure you want to delete this bot?",
      text: "You won't be able to revert this!--- set your own colors in alert.scss",
      icon: "warning",
      width: 600,
      showCancelButton: true,
      buttonsStyling: true,
      confirmButtonColor: "#000",
      cancelButtonColor: "#000",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          width: 600,
          title: "Deleted!",
          text: "Your content has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.id);
  };

  // data for table
  const dataSource = [
    {
      key: "1",
      name: "john.doe@example.com",
      email: "Muhammadtehsin118@gmail.com",
      phone: "+92 302 8760618",
      status: "Active",
      registrationDate: "2024-06-20",
    },
    {
      key: "2",
      name: "Sarah",
      email: "sarah.smith@example.com",
      phone: "+1 555 1234567",
      status: "Pending",
      registrationDate: "2024-06-21",
    },
    {
      key: "3",
      name: "John",
      email: "john.doe@example.com",
      phone: "+44 7700 900900",
      status: "Blocked",
      registrationDate: "2024-06-22",
    },
    {
      key: "4",
      name: "Emily",
      email: "emily.jones@example.com",
      phone: "+33 1 23456789",
      status: "Active",
      registrationDate: "2024-06-23",
    },
    {
      key: "5",
      name: "James",
      email: "james.brown@example.com",
      phone: "+61 2 98765432",
      status: "Pending",
      registrationDate: "2024-06-24",
    },
    {
      key: "6",
      name: "Laura",
      email: "laura.wilson@example.com",
      phone: "+49 30 12345678",
      status: "Blocked",
      registrationDate: "2024-06-25",
    },
    {
      key: "7",
      name: "David",
      email: "david.miller@example.com",
      phone: "+81 3 12345678",
      status: "Active",
      registrationDate: "2024-06-26",
    },
    {
      key: "8",
      name: "Linda",
      email: "linda.taylor@example.com",
      phone: "+1 415 5551234",
      status: "Pending",
      registrationDate: "2024-06-27",
    },
    {
      key: "9",
      name: "Kevin",
      email: "kevin.moore@example.com",
      phone: "+1 212 5556789",
      status: "Blocked",
      registrationDate: "2024-06-28",
    },
    {
      key: "10",
      name: "Sophia",
      email: "sophia.anderson@example.com",
      phone: "+44 20 79460000",
      status: "Active",
      registrationDate: "2024-06-29",
    },
    {
      key: "11",
      name: "Daniel",
      email: "daniel.lee@example.com",
      phone: "+49 69 123456",
      status: "Pending",
      registrationDate: "2024-06-30",
    },
    {
      key: "12",
      name: "Jessica",
      email: "jessica.thompson@example.com",
      phone: "+1 718 5551234",
      status: "Blocked",
      registrationDate: "2024-07-01",
    },
    {
      key: "13",
      name: "Andrew",
      email: "andrew.white@example.com",
      phone: "+1 202 5551234",
      status: "Active",
      registrationDate: "2024-07-02",
    },
    {
      key: "14",
      name: "Olivia",
      email: "olivia.harris@example.com",
      phone: "+1 646 5551234",
      status: "Pending",
      registrationDate: "2024-07-03",
    },
    {
      key: "15",
      name: "Matthew",
      email: "matthew.clark@example.com",
      phone: "+1 312 5551234",
      status: "Blocked",
      registrationDate: "2024-07-04",
    },
  ];

  const columns = [
    // name
    {
      title: "Name",
      dataIndex: "name",
      key: "name",

      render: (_, record) => (
        <>
          <div className="flex gap-2 items-center">
            {/* <img src={userProfile} alt="" className="w-11 h-11 rounded-full" /> */}
            <a>{record.name}</a>
          </div>
        </>
      ),
    },

    // email
    {
      title: "Email",
      dataIndex: "email",
      key: "email ",
      render: (_, record) => (
        <>
          <a href="mailto:muhammadtehsin118@gmail.com">
            {record?.email.toLowerCase()}
          </a>
        </>
      ),
    },

    // phone
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone ",
    },

    // status
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      filters: [
        {
          text: "Active",
          value: "Active",
        },
        {
          text: "Pending",
          value: "Pending",
        },
        {
          text: "Blocked",
          value: "Blocked",
        },
      ],
      filterMode: "menu",
      filterSearch: true,
      onFilter: (value, record) => record.status.startsWith(value),
      render: (_, record) => (
        <>
          <Chips status={record?.status} />
        </>
      ),
    },

    // reg date
    {
      title: "Registration Date",
      dataIndex: "registrationDate",
      key: "registrationDate",
    },

    // handle block
    {
      title: "Block",
      dataIndex: "block",
      key: "block",
      render: (_, record) => (
        <>
          <Switch className="tameel-switch" />
        </>
      ),
    },

    // action
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <>
          <div className="flex items-center gap-3">
            {/* <img
              src={viewIcon}
              alt=""
              className="cursor-pointer"
              onClick={() =>
                navigate(
                  record?.status === "Pending"
                    ? "/pending-user"
                    : "/user/profile",
                  { state: { status: record?.status } }
                )
              }
            /> */}
            <MdOutlineRemoveRedEye
              size={22}
              color="green"
              title="view"
              className="cursor-pointer"
            />
            <ImBin
              size={18}
              color="red"
              title="view"
              className="cursor-pointer"
            />
          </div>
        </>
      ),
    },
  ];
  return (
    <div className="bg-slate-100">
      <h1>Components</h1>
      <p>Set colors scheme or design according your requirements,</p>
      <div className="container ">
        <div className="max-w-[800px] m-auto flex flex-col gap-4 ">
          <>
            <Input type="text" label="Input" placeholder="text type" />
            <Input
              type="password"
              icon={true}
              label="Input"
              placeholder="passowrd type"
            />
            <Input
              type="text"
              label="Input"
              placeholder="disabled"
              disabled={true}
            />
          </>

          <>
            <Textarea
              label="Textarea"
              rows={6}
              placeholder="Enter your textarea content"
              disabled
            />
          </>
          <hr />

          <h4 className="font-semibold text-center">Buttons</h4>
          <div className="flex gap-2 ">
            <Button
              text="Click Me Delete Alert"
              className="w-full btn-secondary"
              onClick={handleDelete}
            />
            <Button
              text="Secondary Loading "
              className="w-full btn-secondary"
              loading
            />

            <Button
              text="Primary Button"
              className="w-full btn-primary flex items-center justify-center gap-2"
              imgClass="w-4"
            />
            <Button
              text="Primary loading"
              className="w-full btn-primary"
              loading
            />
          </div>

          <hr />

          <h4 className="font-semibold text-center">Checkbox</h4>
          <>
            <Checkbox
              id="checkbox1"
              label="unchecked disabled"
              disabled
              checked={checkboxes.checkbox1}
              onChange={handleCheckboxChange}
            />
            <Checkbox
              id="checkbox2"
              label="Unchecked"
              checked={checkboxes.checkbox2}
              onChange={handleCheckboxChange}
            />
            <Checkbox
              id="checkbox3"
              label="checked"
              checked={checkboxes.checkbox3}
              onChange={handleCheckboxChange}
            />{" "}
          </>

          <hr />

          <h4 className="font-semibold text-center">Radio Button</h4>
          <>
            <RadioButton
              id="radio1"
              name="radio-group"
              label="Option 1"
              checked={selectedRadio === "radio1"}
              onChange={handleRadioChange}
            />
            <RadioButton
              id="radio2"
              name="radio-group"
              label="Option 2"
              checked={selectedRadio === "radio2"}
              onChange={handleRadioChange}
            />
          </>

          <hr />
          <h4 className="font-semibold text-center">Table</h4>
        </div>
      </div>
      <div className="px-40">
        <DataTable
          columns={columns}
          dataSource={dataSource}
          heading="Users Information"
          subHeading="Manage your Users"
          pageSize={5}
        />
      </div>
    </div>
  );
};

export default Components;
