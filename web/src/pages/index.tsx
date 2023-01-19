import { Header } from '@/components/Header';
import { SummaryTable } from '@/components/SummaryTable';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Habits</title>
      </Head>

      <div className="w-screen h-screen flex items-center justify-center">
        <div className="w-full max-w-5xl px-6 flex flex-col gap-16">
          <Header />

          <main>
            <SummaryTable />
          </main>
        </div>
      </div>
    </>
  );
}
