import Head from 'next/head'
import { Header } from '@/components/header'
import Footer from '@/components/footer'
import { Captcha } from '@/components/captcha'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Gif from '../../public/loader.gif'

export default function VerifyUser() {
  const router = useRouter()
  const [step, setStep] = useState(1)

  // Etapa 1: loader inicial por 1.5s
  useEffect(() => {
    if (step === 1) {
      const timer = setTimeout(() => {
        setStep(2)
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [step])

  // Etapa 4: loader final por 2s, depois redireciona
  useEffect(() => {
    if (step === 4) {
      const timer = setTimeout(() => {
        router.push('/ok')
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [step, router])

  // Quando o captcha é verificado, vai pro loader final
  const handleCaptchaVerify = () => {
    setStep(4)
  }

  return (
    <>
      <Head>
        <title>Autenticação de consumíveis – Validar selo de segurança</title>
        <meta
          name="description"
          content="Validar selo de segurança - Autenticação de consumíveis"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <main
        className={`w-full min-h-screen flex flex-col justify-between items-center`}
      >
        <Header />

        <div className="w-full flex-1 flex items-center justify-center px-4 py-10">
          {/* Etapa 1 e 4: Loader */}
          {(step === 1 || step === 4) && (
            <Image alt="loader" src={Gif} quality={100} />
          )}

          {/* Etapa 2: Captcha visível (e etapa 3 é controlada internamente) */}
          {step === 2 && <Captcha onVerify={handleCaptchaVerify} />}
        </div>

        <Footer />
      </main>
    </>
  )
}
