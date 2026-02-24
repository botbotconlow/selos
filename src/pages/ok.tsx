import Head from 'next/head'
import { Header } from '@/components/header'
import Footer from '@/components/footer'
import Image from 'next/image'
import Ok1 from '../../public/ok.png'
import Ok2 from '../../public/ok2.jpg'
import { useProductCode } from '@/hooks/useProductCode'
import { useState } from 'react'

export default function Home() {
  const productCode = useProductCode()
  const [isAnimating, setIsAnimating] = useState(false)

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
        className={`w-full min-h-screen flex flex-col justify-between items-center`}
      >
        <Header />

        <div className="w-full flex-1 flex flex-col items-start px-4 py-5">
          {/* Título */}
          <h1 className="text-[40px] pb-5 font-light leading-10 text-[#333]">
            Resultados da
            <br />
            validação
          </h1>

          <div className="flex items-start gap-[15px] mb-1 shrink-0">
            <Image
              alt="ok"
              src={Ok1}
              quality={100}
              className="object-contain"
            />

            <div
              onClick={() => setIsAnimating(!isAnimating)}
              className="w-[110px] text-center"
            >
              <div className="relative w-[110px] h-[110px] cursor-pointer">
                <Image
                  src={isAnimating ? '/aut1.gif' : '/selo1.png'}
                  alt="Selo de segurança"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>

              <span className="text-[#333] leading-tight mt-1">
                {isAnimating
                  ? 'Toque para parar a animação'
                  : 'Toque para ver a animação'}
              </span>
            </div>
          </div>

          {/* Produto genuíno */}
          <h2 className="text-[30px] font-light text-[#333] leading-tight mt-4 mb-5">
            O produto {productCode} é genuíno
          </h2>

          {/* Link compromisso ambiente */}
          <a href="#" className="text-[#007dba] mb-5 ">
            A HP tem um compromisso com o ambiente
          </a>

          {/* Seção reciclagem */}
          <div className="flex gap-3 mb-5">
            <div className="relative w-[90px] h-[70px] shrink-0">
              <Image
                src={Ok2}
                alt="recycle"
                fill
                className="object-contain"
                quality={100}
              />
            </div>

            <p className="text-[13px] text-[#333] leading-[18px]">
              É possível reduzir o impacto ambiental sem comprometer a
              qualidade. Graças ao Programa Planet Partners, é fácil e gratuito
              reciclar cartuchos de tinta.
            </p>
          </div>

          {/* Link anticontrafacção */}
          <a
            target="_blank"
            href="http://www.hp.com/go/anticounterfeit"
            className="text-[#007dba] hover:underline"
          >
            Programa Anticontrafacção
          </a>
        </div>

        <Footer />
      </main>
    </>
  )
}
