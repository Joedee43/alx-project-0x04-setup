import React from 'react';
import Layout from '@/components/layout/Layout';
// 1. Import the useCount hook (no need for CountContext.Consumer)
import { useCount } from '@/context/CountContext';
import Header from '@/components/layout/Header';

export default function CounterPage() {
  // 2. Call the hook to get the state and functions
  const { count, increment, decrement } = useCount();

  return (
    <Layout>
      {/* The Header is inside Layout and will also get the count */}
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

// In your main App file (_app.tsx), you wrap everything in the provider
// This is a simplified example of how your _app.tsx should look
/*
import { CountProvider } from '@/context/CountContext';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CountProvider>
      <Component {...pageProps} />
    </CountProvider>
  );
}

export default MyApp;
*/