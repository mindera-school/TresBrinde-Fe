import { Table, Input, Button, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useRef, useState } from "react";

const CategoryTableWFilter = (props: any) => {
  let columns: any[] = [];
  const searchInput = useRef<Input>(null);

  const [searchedColumn, setSearchedColumn] = useState("");
  const [select, setSelect] = useState({ selectedRowKeys: props.selected });

  const { selectedRowKeys } = select;

  for (const column of props.columns) {
    columns.push({
      key: column,
      title: column,
      dataIndex: column.toLowerCase(),
      ...getColumnSearchProps(column),
    });
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedRowKeys: any) => {

      setSelect({ ...select, selectedRowKeys: selectedRowKeys });

      props.setSubCategories(select.selectedRowKeys);
    },
  };

  const data = props.data;

  function getColumnSearchProps(dataIndex: string) {
    return {
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }: any) => (
        <div style={{ padding: 8 }}>
          <Input
            ref={searchInput}
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={(e) =>
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }
            onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
            style={{ width: 188, marginBottom: 8, display: "block" }}
          />
          <Space>
            <Button
              type="primary"
              onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
              icon={<SearchOutlined />}
              size="small"
              style={{ width: 90 }}
            >
              Search
            </Button>
            <Button
              onClick={() => handleReset(clearFilters)}
              size="small"
              style={{ width: 90 }}
            >
              Reset
            </Button>
          </Space>
        </div>
      ),
      filterIcon: (filtered: any) => (
        <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
      ),
      onFilter: (value: any, record: any) =>
        record[dataIndex]
          .toString()
          .toLowerCase()
          .includes(value.toLowerCase()),
      onFilterDropdownVisibleChange: (visible: any) => {
        if (visible) {
          setTimeout(
            () =>
              searchInput && searchInput.current && searchInput.current.select()
          );
        }
      },
      render: (text: any) => (searchedColumn === dataIndex ? text : text),
    };
  }

  //function toogleSelected(dataIndex: any) {}

  function handleSearch(selectedKeys: any, confirm: any, dataIndex: any) {
    confirm();
 //   setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  }

  function handleReset(clearFilters: any) {
    clearFilters();
   // setSearchText("");
  }

  return (
    <Table columns={columns} rowSelection={rowSelection} dataSource={data} />
  );
};

export default CategoryTableWFilter;
