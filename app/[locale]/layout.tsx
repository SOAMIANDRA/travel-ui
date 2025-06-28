import { ReactElement } from 'react'
import { I18nProviderClient } from '../../locales/client'
import ResponsiveAppBar from '@/components/ResponsiveAppBar'
 
export default function SubLayout({ params: { locale }, children }: { params: { locale: string }, children: ReactElement }) {
  return (
    <I18nProviderClient locale={locale}>
      <ResponsiveAppBar/>
      {children}
    </I18nProviderClient>
  )
}