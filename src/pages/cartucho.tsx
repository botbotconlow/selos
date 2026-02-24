import Head from 'next/head'
import { Header } from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { useProductCode } from '@/hooks/useProductCode'

export default function Home() {
  const productCode = useProductCode()

  return (
    <>
      <Head>
        <title>
          Autenticação de consumíveis HP – Validar selo de segurança
        </title>
        <meta
          name="description"
          content="Apoie as famílias afetadas pela recente operação no Rio de Janeiro."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <main
        className={`w-full min-h-screen flex flex-col justify-between items-center text-center`}
      >
        <Header />

        <div className="w-full flex flex-col items-center px-4">
          <h1 className="text-[40px] text-left font-medium leading-10 py-5">
            Validar selo de segurança
          </h1>

          <div
            style={{
              backgroundImage: "url('/selo1.png')",
            }}
          >
            <div className="w-[110px] h-[110px]" />
          </div>

          <div className="mt-5 mb-10">
            <p className="w-[184px] h-[28px] flex items-center justify-center mb-[10px] font-medium border-2 border-[#CCCCCC]">
              {productCode}
            </p>

            <Link href="/verify">
              <button className="h-[36px] px-[25px] bg-[#d7410b] text-white font-medium rounded-tr-[4px] rounded-bl-[4px] hover:bg-[#bd3909]">
                Verificar
              </button>
            </Link>
          </div>
        </div>

        <Footer />
      </main>
    </>
  )
}
