export const initial = {
  "required-password": "Hãy nhập mật khẩu của bạn",
  "Đăng nhập thành công": "",
  "Đã có lỗi xảy ra khi đăng nhập": "",
  "Đăng nhập": "",
  "Đăng ký ngay": "",
  "required-field": "Trường này là bắt buộc",
  "invalid-email": "Email chưa đúng định dạng",
  "Bạn chắc chắn muốn": "",
  "Xác nhận": "",
  Hủy: "",
  "Tự động đóng trong": "",
};

export type TObj = typeof initial;

const mappedObj = Object.entries(initial).reduce(
  (prev, [key, value]) => ({ ...prev, [key]: value || key }),
  {} as TObj,
);

export const vi = mappedObj;
