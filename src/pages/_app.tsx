import '@/styles/globals.css'
import { ConfigProvider } from 'antd';
import type { AppProps } from 'next/app';

import theme from './theme/themeConfig';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()
  return (
    <ConfigProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
    </ConfigProvider>
  );
}