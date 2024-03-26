import { Avatar, Button, Flex, Tag, TagProps, Tooltip, Typography } from "antd";
import type { ColumnGroupType, ColumnType } from "antd/es/table";
import dayjs from "dayjs";

import useModalConfirm from "@/hooks/useModalConfirm";
import { TItem } from "@/types/item-types";

type TuseItemColumnsProps = {};

type TRes = Record<string, ColumnGroupType<TItem> | ColumnType<TItem>>;

export const useItemColumns = (): TRes => {
  const { handleConfirm: handleConfirmDelete } = useModalConfirm({
    onOk: (id) => {
      console.log(id);
    },
  });
  //
  return {
    picture: {
      title: "",
      key: "picture",
      render: (_, item) => (
        <Avatar size={56} shape="square" style={{ flexShrink: 0 }} src={item.picture.thumbnail}>
          {item.name.first?.[0]}
        </Avatar>
      ),
    },
    //
    nameCombined1: {
      title: "Họ & tên",
      key: "name",
      render: (_, item) => (
        <Flex vertical justify="center" gap={4}>
          <Typography.Title
            level={5}
            ellipsis
            style={{ maxWidth: "100%", lineHeight: 1.1, margin: 0 }}
          >
            {item.name.first} {item.name.last}
          </Typography.Title>
          <Typography.Text type="secondary" ellipsis style={{ lineHeight: 1.1 }}>
            {item.email}
          </Typography.Text>
        </Flex>
      ),
    },
    //
    nationality: {
      title: "Quốc gia",
      key: "nat",
      render: (_, item) => (
        <Typography.Text type="secondary" strong style={{ lineHeight: 1.1 }}>
          {item.location.country}
        </Typography.Text>
      ),
    },
    //
    gender: {
      title: "",
      key: "gender",
      render: (_, item) => {
        const configTag: Record<string, TagProps> = {
          female: { color: "magenta", children: "Nữ" },
          male: { color: "blue", children: "Nam" },
        };
        return <Tag bordered {...(configTag?.[item.gender] || { children: "---" })} />;
      },
    },
    //
    dob: {
      title: "Sinh nhật",
      key: "dob",
      render: (_, item) => (
        <Tooltip
          title={
            <Flex align="center" gap={4} wrap="nowrap">
              <b>{item.dob.age}</b>
              <span>tuổi</span>
            </Flex>
          }
        >
          <Typography.Text type="secondary" style={{ whiteSpace: "nowrap", lineHeight: 1.1 }}>
            {dayjs(item.dob.date).format("DD/MM/YYYY")}
          </Typography.Text>
        </Tooltip>
      ),
    },
    //
    location: {
      title: "Địa chỉ",
      key: "location",
      render: (_, item) => {
        const itemLocation = item.location;
        return (
          <Flex vertical align="flex-start">
            <Typography.Text ellipsis style={{ lineHeight: 1.1 }}>
              {itemLocation.street.number} {itemLocation.street.name}, {itemLocation.state},{" "}
              {itemLocation.city}
            </Typography.Text>
            <Flex align="center" gap={2}>
              <Typography.Link
                ellipsis
                target="_blank"
                rel="noopener noreferrer"
                href={`https://www.google.com/maps/search/?api=1&query=${
                  itemLocation.coordinates.latitude + "," + itemLocation.coordinates.longitude ||
                  "21.010157968391244,105.78869991247372"
                }`}
              >
                Xem trên GoogleMaps
              </Typography.Link>
            </Flex>
          </Flex>
        );
      },
    },
    //
    actions: {
      title: "Hành động",
      key: "actions",
      render: (_, item, index) => {
        return (
          <Flex vertical align="flex-start">
            <Button
              danger
              block
              onClick={() => handleConfirmDelete(index, item.name.first, "hủy giao xe")}
            >
              Xóa
            </Button>
          </Flex>
        );
      },
    },
    //
  };
  //
};
