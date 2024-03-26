import styled from "@emotion/styled";
import { Table } from "antd";

export const StyledTable = styled(Table<any>)`
  .ant-table-thead > tr > th,
  .ant-table-thead > tr > td {
    border-radius: 0 !important;
  }
  .ant-table-tbody .ant-table-row-selected > .ant-table-cell {
    background: rgba(0, 0, 0, 0.05) !important;
    backdrop-filter: blur(10px);
  }
  .ant-table-tbody .ant-table-row-selected:hover > .ant-table-cell {
    background: rgba(0, 0, 0, 0.05) !important;
    backdrop-filter: blur(10px);
  }

  &.sticky-pagination .ant-table-pagination {
    position: sticky;
    bottom: 0;
    background: #fff;
    padding: 12px;
    border-radius: 0 0 6px 6px;
    display: flex;
    margin: 0 !important;
    z-index: 10;
    .selected-wrapper {
      font-size: 14px;
      & > span {
        font-size: 16px;
        font-weight: 500;
      }
    }
    .ant-pagination-prev {
      margin-left: auto;
    }
  }
`;
