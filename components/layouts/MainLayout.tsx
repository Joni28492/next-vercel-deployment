import Head from 'next/head';
import React, { FC } from 'react';
import { Navbar } from '../Navbar';
import styles from './MainLayout.module.css';

export const MainLayout: FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Joni</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </div>
  )
}
