import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import type { Metadata } from 'next';

import { AppSnackbar } from '@/components/AppSnackbar';
import { CONFIG } from '@/config';
import '@/styles/style.css';
import '@assets/fonts/noir-pro/styles.css';
import {
  JumboConfigProvider,
  JumboDialog,
  JumboDialogProvider,
  JumboTheme,
} from '@jumbo/components';
import { CssBaseline } from '@mui/material';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'ROI Calculator',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en-US'>
      <body>
        <div id='root'>
          <AppRouterCacheProvider>
            <JumboConfigProvider LinkComponent={Link}>
              <JumboTheme init={CONFIG.THEME}>
                <CssBaseline />
                <JumboDialogProvider>
                  <JumboDialog />
                  <AppSnackbar>{children}</AppSnackbar>
                </JumboDialogProvider>
              </JumboTheme>
            </JumboConfigProvider>
          </AppRouterCacheProvider>
        </div>
      </body>
    </html>
  );
}
