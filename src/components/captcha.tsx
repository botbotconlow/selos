import { useState } from 'react'
import { Check } from '@phosphor-icons/react'
import { ClipLoader } from 'react-spinners'
import Captcha1 from '../../public/captcha.png'
import Image from 'next/image'

interface CaptchaProps {
  onVerify?: (verified: boolean) => void
}

export const Captcha = ({ onVerify }: CaptchaProps) => {
  const [isChecked, setIsChecked] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = () => {
    if (isChecked || isLoading) return

    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      setIsChecked(true)
      onVerify?.(true)
    }, 1000)
  }

  return (
    <div className="w-[300px] flex items-center justify-between py-2 px-2 bg-[#f9f9f9] border border-[#d3d3d3] rounded-[3px] shadow-[0_0_4px_rgba(0,0,0,0.08)]">
      <div>
        <div className="flex items-center gap-3">
          <div
            onClick={handleClick}
            className="w-[28px] h-[28px] rounded-[2px] border-2 border-[#444746] bg-white flex items-center justify-center cursor-pointer shrink-0 transition-colors hover:border-[#a0a0a0]"
            style={{ boxShadow: 'inset 0 1px 1px rgba(0,0,0,0.1)' }}
          >
            {isLoading ? (
              <ClipLoader size={14} color="#4285f4" speedMultiplier={0.8} />
            ) : isChecked ? (
              <Check size={18} weight="bold" color="#4285f4" />
            ) : null}
          </div>

          <span className="text-[14px] font-medium text-black">
            Não sou um robô
          </span>
        </div>

        <div className="w-[190px] text-[#555] font-medium text-[9px]">
          <p>
            Os Termos de Serviço do reCAPTCHA estão mudando.{' '}
            <a
              href="https://google.com/recaptcha/admin/migrate"
              target="_blank"
            >
              <u>Acesse.</u>
            </a>
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center text-[#555] text-[10px] font-medium">
        <Image
          alt="captcha"
          src={Captcha1}
          quality={100}
          width={32}
          height={32}
        />
        <p className="mt-[5px]">reCAPTCHA</p>
        <div className="text-[8px]">
          <a
            href="https://www.google.com/intl/pt-BR/policies/privacy/"
            target="_blank"
          >
            Privacidade
          </a>
          <span aria-hidden="true" role="presentation">
            {' '}
            -{' '}
          </span>
          <a
            href="https://www.google.com/intl/pt-BR/policies/terms/"
            target="_blank"
          >
            Termos
          </a>
        </div>
      </div>
    </div>
  )
}
