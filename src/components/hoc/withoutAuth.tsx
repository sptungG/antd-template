import { useRouter } from "next/router";

// import { useAppSelector } from "@/redux/store";
import Navigate from "../next/Navigate";

/**
 * đã đăng nhập thì ko đc vào lại những trang đăng nhập, đăng kí, quên mật khẩu,...
 */
function withoutAuth(WrappedComponent: any) {
  return function ComponentWithoutAuth() {
    const { query } = useRouter();
    // const accessToken = useAppSelector((s) => s.auth.accessToken);
    const accessToken = null;

    if (!!accessToken) {
      const callbackUrl = (query?.callbackUrl as string) || "/";
      return <Navigate to={callbackUrl} />;
    }

    return <WrappedComponent />;
  };
}

export default withoutAuth;
