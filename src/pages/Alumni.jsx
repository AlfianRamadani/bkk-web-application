import React from 'react';
import { Seo } from '../components/Seo.jsx';
import Layout from '../components/Layout.jsx';
import BasicTable from '../components/table/BasicTable.jsx';
import BreadCrumb from '../components/BreadCrumb.jsx';

export default function Alumni() {
  return (
    <>
      <Seo title="Alumni" description="This is the alumni page" />
      <Layout>
        <BreadCrumb pageNow="Alumni" title="Data Alumni" />
        <div className='max-w-7xl mx-auto py-8'>
          <BasicTable />
        </div>
      </Layout>
    </>
  );
}
