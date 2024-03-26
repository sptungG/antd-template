import { useRouter } from "next/router";

// import { useAppSelector } from "@/redux/store";
import Navigate from "../next/Navigate";

/**
 * Phân quyền cho trang
 */
function withAuth(WrappedComponent: any) {
  return function ComponentWithoutAuth() {
    const { pathname } = useRouter();
    // const accessToken = useAppSelector((s) => s.auth.accessToken);
    const accessToken = null;

    if (!accessToken) return <Navigate to={`/login?callbackUrl=${pathname}`} />;

    return <WrappedComponent />;
  };
}

export default withAuth;
