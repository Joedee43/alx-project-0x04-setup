import React from 'react';
import Layout from '@/components/layouts/Layout';
import Header from '@/components/layouts/Header';
import CounterApp from './counter-app';

export default function CounterPage() {
  
  return (
    <Layout>
      <Header/>
      <CounterApp />
    </Layout>
  );
}

