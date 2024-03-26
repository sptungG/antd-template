import { generate } from "@ant-design/colors";
import { ThemeProvider } from "@emotion/react";
import { ConfigProvider as AntdConfigProvider, App, theme } from "antd";
import en_US from "antd/locale/en_US";
import ko_KR from "antd/locale/ko_KR";
import vi_VN from "antd/locale/vi_VN";
import { PagesProgressBar } from "next-nprogress-bar";
import { useMemo } from "react";

import useTranslation from "@/hooks/useTranslation";
import { COLOR_PRIMARY } from "@/utils/constant";

type TConfigProviderProps = {
  children: React.ReactNode;
};

// const { darkAlgorithm, defaultAlgorithm } = theme;
const colorPrimary = COLOR_PRIMARY;
const generatedColors = generate(COLOR_PRIMARY);

function ConfigProvider({ children }: TConfigProviderProps) {
  const { locale } = useTranslation();
  const antdLocale = useMemo(() => {
    if (locale === "en") return en_US;
    if (locale === "ko") return ko_KR;
    return vi_VN;
  }, [locale]);
  // const { mode, colorPrimary, generatedColors } = useAppSelector((s) => s.theme);
  // const accessToken = useAppSelector((s) => s.auth.accessToken);
  // const res = useGetCurrentUserQuery(
  //   { at: !!accessToken },
  //   {
  //     skip: !accessToken,
  //     refetchOnFocus: true,
  //     refetchOnReconnect: true,
  //     refetchOnMountOrArgChange: true,
  //   },
  // );

  return (
    <>
      <PagesProgressBar
        height="4px"
        color="#10b981"
        options={{ showSpinner: false }}
        shallowRouting
      />
      <AntdConfigProvider
        locale={antdLocale}
        theme={{
          token: { colorPrimary, colorLink: colorPrimary },
        }}
        button={{ style: { boxShadow: "none" } }}
      >
        <ThemeProvider theme={{ mode: "light", colorPrimary, generatedColors }}>
          <App component={false}>{children}</App>
        </ThemeProvider>
      </AntdConfigProvider>
    </>
  );
}

export default ConfigProvider;
