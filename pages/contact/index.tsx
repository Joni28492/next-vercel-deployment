import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { Navbar } from '../../components/Navbar'
import { MainLayout } from '../../components/layouts/MainLayout'


export default function ContactPage() {
  return (
    <MainLayout>
      <h1>Contact Page</h1>
        <h1 className={"title"}>
          {/* Ir a <a href="/">Home</a> */}
          Ir a <Link href="/">Home Page</Link>
        </h1>

        <p className={"description"}>
          Get started by editing{' '}
          <code className={"code"}>pages/contact.jsx</code>
        </p>
    </MainLayout>
  )
}
