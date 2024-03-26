import styled from "@emotion/styled";
import { Flex } from "antd";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import useSWR from "swr";

import SEO from "@/components/next/SEO";
import { StyledTable } from "@/components/table/StyledTable";
import { useItemColumns } from "@/components/table/useItemColumns";

type TReq = {
  results?: number;
  page?: number;
};

const MAX_RESULTS = 50;
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Page() {
  const isBelow500 = useMediaQuery({ query: "(max-width: 500px)" });

  const [filterReq, setFilterReq] = useState<TReq>({
    results: MAX_RESULTS,
    page: 1,
  });
  const { data: randomuserRes, isLoading } = useSWR(
    "https://randomuser.me/api/?inc=name,gender,email,phone,nat,picture,dob,location&" +
      new URLSearchParams(filterReq as any).toString(),
    fetcher,
  );
  const listUser = randomuserRes?.results || [];
  const listInfo = randomuserRes?.info;

  const [selectedItems, setSelectedItems] = useState<any[]>([]);

  const { picture, nameCombined1, nationality, gender, dob, location, actions } = useItemColumns();

  return (
    <StyledWrapper vertical>
      <SEO />
      <StyledTable
        loading={isLoading}
        showSorterTooltip={false}
        size="large"
        dataSource={listUser}
        columns={[
          { ...picture, width: 88, fixed: true },
          { ...nameCombined1, width: 300 },
          { ...gender, width: 80 },
          { ...dob, width: 110 },
          { ...nationality, width: 130 },
          { ...location, ellipsis: true, width: 400, hidden: isBelow500 },
          { ...actions, width: 130, fixed: "right" },
        ]}
        rowSelection={{
          fixed: true,
          columnWidth: 32,
          selectedRowKeys: selectedItems,
          onChange: (selectedRowKeys, selectedRows) => {
            setSelectedItems(selectedRowKeys as any[]);
          },
          // getCheckboxProps: (item: any) => {},
        }}
        rowKey={(item: any) => item.email}
        //
        scroll={{ x: "100%" }}
        sticky={{ offsetHeader: 0 }}
        pagination={
          listInfo
            ? {
                total: listInfo.results,
                defaultPageSize: 10,
                showSizeChanger: false,
                showTotal: (total, range) => (
                  <div className="selected-wrapper">
                    Đã chọn <span>{selectedItems.length}</span> / {MAX_RESULTS}
                  </div>
                ),
              }
            : false
        }
      />
    </StyledWrapper>
  );
}

const StyledWrapper = styled(Flex)`
  width: 100%;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  //
  min-height: 100dvh;
  background: #71717a;
  padding: 12px;
`;
