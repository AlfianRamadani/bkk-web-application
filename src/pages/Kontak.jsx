import React from 'react'
import { Seo } from '../components/Seo.jsx'
import Layout from '../components/Layout.jsx'
import BreadCrumb from '../components/BreadCrumb.jsx'

export default function Kontak() {
  return (
    <>
    
    <Seo title="Kontak" description="This is the lowongan page" />
    <Layout>
      <BreadCrumb pageNow="Kontak" title="Kontak Kami"></BreadCrumb>
            <p>lorem</p>
        </Layout>
    </> 
  )
}
