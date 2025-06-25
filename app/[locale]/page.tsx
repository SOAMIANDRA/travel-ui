'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { useChangeLocale, useCurrentLocale, useI18n } from "@/locales/client";

export default function Home() {
  const t = useI18n()
  const changeLocale = useChangeLocale()
  const locale = useCurrentLocale()
  return (
    <>
      <h1>{t('hello')}</h1>
      <p>{t('welcome')}</p>
      <div>
        <button onClick={() => changeLocale('en')}>English</button>
        <button onClick={() => changeLocale('fr')}>French</button>
        <button onClick={() => changeLocale('de')}>Deutch</button>
      </div>
    </>
  );
}
