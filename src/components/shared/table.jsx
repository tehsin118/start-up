import React, { useEffect, useRef, useState } from "react";
import notificationIcon from "../../assets/icons/pdf.svg";
import notification from "../../assets/icons/excel.svg";
import searchIcon from "../../assets/icons/search-grey.svg";
import loader from "../../assets/icons/loading2.svg";
import Input from "./input";
import CustomSelect from "./select";
import { Table } from "antd";

const DataTable = ({
  dataSource,
  columns,
  heading,
  subHeading,
  searchBox = true,
  customFilter = true,
  downloadHandle = true,
  pageSize,
}) => {
  let options = [
    {
      value: "1",
      label: "Active",
    },
    {
      value: "2",
      label: "Pending",
    },
    {
      value: "3",
      label: "Blocked",
    },
    {
      value: "4",
      label: "Verified",
    },
    {
      value: "5",
      label: "Un-Verified",
    },
    {
      value: "6",
      label: "Cancelled",
    },
  ];

  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [filteredData, setFilteredData] = useState(dataSource);
  const timeoutRef = useRef(null);

  const handleSearch = (e) => {
    const value = e.target.value;
    setIsLoading(true);
    setSearch(value);

    // Clear the previous timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set a new timeout
    timeoutRef.current = setTimeout(() => {
      const newFilteredData = dataSource.filter((item) => {
        return Object.values(item).some((val) =>
          String(val).toLowerCase().includes(value.toLowerCase())
        );
      });
      setFilteredData(newFilteredData);
      setIsLoading(false);
    }, 1000); // 1 second timeout
  };

  useEffect(() => {
    // Clear timeout on component unmount
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  return (
    <>
      <div className="datatable-wrapper w-full pb-3">
        {/* Header */}
        {heading && (
          <div className="flex justify-between items-end ">
            <div className="headings mt-5">
              <h2 className="font-semibold">{heading}</h2>
              <p className="medium">{subHeading}</p>
            </div>
            {downloadHandle && (
              <div className="donwload-btns flex gap-4">
                <a className="w-10 h-10 cursor-pointer flex justify-center items-center rounded-md outline outline-1 outline-[#30874826] hover:bg-[#bebebe28]">
                  <img src={notificationIcon} alt="" />
                </a>
                <a className="w-10 h-10 cursor-pointer flex justify-center items-center rounded-md  outline outline-1 outline-[#30874826]  hover:bg-[#bebebe28]">
                  <img src={notification} alt="" />
                </a>
              </div>
            )}
          </div>
        )}

        <div className="filter-wrapper   w-full flex justify-between mt-3 items-end">
          {searchBox ? (
            <Input
              label=""
              labelClass="opacity-0"
              placeholder="Search..."
              className="w-full"
              maxWidth={350}
              height={40}
              icon={isLoading ? loader : searchIcon}
              wrapperClass="!h-10"
              onChange={handleSearch}
            />
          ) : (
            <div></div>
          )}

          {customFilter && (
            <div className="catgory-wrapper flex gap-4 mt-5">
              <CustomSelect
                label="Status"
                placeholder="All"
                height={40}
                options={options}
                wrapperClasses="min-w-[130px] w-full"
              />

              <CustomSelect
                label="Verification"
                placeholder="All"
                height={40}
                options={options}
                wrapperClasses="min-w-[130px] w-full"
              />
            </div>
          )}
        </div>

        <div className="mt-5">
          <Table
            columns={columns}
            dataSource={filteredData}
            className="tameel-table"
            pagination={
              dataSource.length > pageSize && {
                pageSize: pageSize,
              }
            }
            // pagination={{
            //   pageSize: pageSize,
            // }}
          />
        </div>
      </div>
    </>
  );
};

export default DataTable;
