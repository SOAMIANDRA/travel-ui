import { ReactElement } from 'react';
import { I18nProviderClient } from '../../locales/client';
import ResponsiveAppBar from '@/components/ResponsiveAppBar';

export default async function SubLayout({
  params,
  children,
}: {
  params: { locale: string };
  children: ReactElement;
}) {
  const { locale } = await params;

  return (
    <I18nProviderClient locale={locale}>
      <ResponsiveAppBar/>
      {children}
    </I18nProviderClient>
  );
}
