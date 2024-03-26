import { ModalFuncProps, Typography } from "antd";

import { ID } from "@/types/global-types";

import useApp from "./useApp";
import useTranslation from "./useTranslation";

type TProps = ModalFuncProps;

export default function useModalConfirm({ onOk, ...props }: TProps) {
  const { modal: Modal } = useApp();
  const { t } = useTranslation();
  const handleConfirm = (id?: ID, title?: string, actionString = "xóa") => {
    let secondsToGo = 5;
    const modal = Modal.confirm({
      title: (
        <Typography.Paragraph ellipsis={{ rows: 2 }} style={{ maxWidth: 416, margin: 0 }}>
          {t("Bạn chắc chắn muốn")} {actionString}{" "}
          <Typography.Text type="secondary" underline>
            {!!title ? title : id}
          </Typography.Text>{" "}
          ?
        </Typography.Paragraph>
      ),
      icon: null,
      content: "____",
      okText: t("Xác nhận"),
      cancelText: t("Hủy"),
      cancelButtonProps: { size: "middle" },
      okButtonProps: { size: "middle", danger: true },
      bodyStyle: { position: "relative" },
      onOk: () => onOk?.(id),
      ...props,
    });
    const timer = setInterval(() => {
      secondsToGo -= 1;
      modal.update({
        content: `${t("Tự động đóng trong")} ${secondsToGo}s`,
      });
    }, 1000);
    setTimeout(
      () => {
        clearInterval(timer);
        modal.destroy();
      },
      secondsToGo * 1000 - 1,
    );
  };
  return { handleConfirm };
}
