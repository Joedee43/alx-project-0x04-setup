import React from 'react';
import Layout from '@/components/layouts/Layout';
import { useCount } from '@/context/CountContext';
import Header from '@/components/layouts/Header';

export default function CounterPage() {
  const { count, increment, decrement } = useCount();

  return (
    <Layout>
      <Header/>
      <br />
      <br />
      <div className="container mx-auto mt-40 p-4 text-center">
       <h1 className="text-4xl font-bold mb-6">Counter App</h1>
        <div className="flex items-center justify-center space-x-6">
          <button
            onClick={decrement}
            className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition-colors"
          >
            Decrement
          </button>
          <span className="text-5xl font-bold w-24">{count}</span>
          <button
            onClick={increment}
            className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-colors"
          >
            Increment
          </button>
        </div>
      </div>
    </Layout>
  );
}

