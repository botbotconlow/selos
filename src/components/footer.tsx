'use client'
import { useState } from 'react'
import Image from 'next/image'
import { CaretDown } from '@phosphor-icons/react'
import Brazil from '../../public/brazil.webp'

const sections = [
  {
    title: 'Sobre nós',
    items: [
      {
        label: 'Sobre nós',
        href: 'https://www.hp.com/br-pt/hp-information.html',
      },
      {
        label: 'Fale com a HP',
        href: 'https://www.hp.com/br-pt/contact-hp/contact.html',
      },
      { label: 'Carreiras', href: 'https://jobs.hp.com/' },
      {
        label: 'Relações com investidores',
        href: 'https://investor.hp.com/home/default.aspx',
      },
      {
        label: 'Impacto sustentável ',
        href: 'https://www.hp.com/br-pt/hp-information/sustainable-impact.html',
      },
      {
        label: 'Newsroom',
        href: 'https://www.hp.com/us-en/newsroom.html',
      },
      {
        label: 'Tech Takes',
        href: 'https://www.hp.com/br-pt/shop/tech-takes',
      },
      {
        label: 'HP Printables Boletim ',
        href: 'https://printables.hp.com/br/pt/newsletter',
      },
    ],
  },
  {
    title: 'Como comprar',
    items: [
      { label: 'Loja online HP', href: 'https://www.hp.com/br-pt/shop/' },
      {
        label: 'Ligue para um revendedor HP ',
        href: 'https://www.hp.com/br-pt/contact-hp/shopping.html',
      },
      {
        label: 'Encontre um revendedor ',
        href: 'https://locator.hp.com/br/pt/?ml___lang=pt-BR%20(1)&ml___region=BR&ml___cont=LAR',
      },
    ],
  },
  {
    title: 'Suporte',
    items: [
      {
        label: 'Suporte',
        href: 'https://support.hp.com/br-pt/',
      },
      {
        label: 'Download de drivers ',
        href: 'https://support.hp.com/br-pt/drivers',
      },
      {
        label: 'Suporte e solução de problemas ',
        href: 'https://support.hp.com/br-pt/',
      },
      {
        label: 'Comunidade ',
        href: 'https://h30487.www3.hp.com/',
      },
      {
        label: 'Verificar o status do reparo ',
        href: 'https://h20212.www2.hp.com/Cso_Status/CsoStatus.aspx?lc=pt&cc=br',
      },
    ],
  },
  {
    title: 'Parceiros da HP',
    items: [
      {
        label: 'Programa HP Amplify Partner',
        href: 'https://partner.hp.com/hp-partner-application-support-documents',
      },
      { label: 'Portal dos parceiros', href: 'https://partner.hp.com/login' },
      { label: 'Desenvolvedores', href: 'https://developers.hp.com/' },
    ],
  },
  {
    title: 'Permaneça conectado',
    items: [
      { label: 'Facebook', href: 'http://www.facebook.com/HPBrasil' },
      { label: 'Instagram', href: 'https://www.instagram.com/hp/' },
      { label: 'X', href: 'https://twitter.com/hpbrasil' },
      { label: 'YouTube', href: 'http://www.youtube.com/hp' },
    ],
  },
]

const Footer = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <footer className="bg-black text-white text-sm w-full">
      {/* País / Região */}
      <div className="px-6 py-4 border-b border-white flex items-center gap-2">
        <span>País/Região:</span>
        <Image alt="brazil" src={Brazil} quality={100} />
        <span>Brasil</span>
      </div>

      {/* Seções expansíveis */}
      <div className="divide-y divide-white">
        {sections.map((section, index) => (
          <div key={index}>
            <button
              onClick={() => toggleSection(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
            >
              <span className="font-medium">{section.title}</span>
              <CaretDown
                className={`w-5 h-5 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ${
                openIndex === index
                  ? 'max-h-80 opacity-100'
                  : 'max-h-0 opacity-0'
              }`}
            >
              <ul className="bg-white text-black">
                {section.items.map((item, i) => (
                  <li key={i} className="px-6 py-3 text-left  hover:underline">
                    <a href={item.href} rel="noopener noreferrer">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Links inferiores */}
      <div className="border-t border-white px-6 py-6 text-left space-y-3 text-sm">
        <div className="flex flex-wrap justify-start gap-3">
          <a
            className="pb-5"
            href="https://www.hp.com/br-pt/hp-information/recalls.html"
            rel="noopener noreferrer"
          >
            Recalls
          </a>
          |
          <a
            className="pb-5"
            href="https://www.hp.com/br-pt/hp-information/sustainable-impact/planet-product-recycling.html"
            rel="noopener noreferrer"
          >
            Reciclagem de produtos
          </a>
          |
          <a
            className="pb-5"
            href="https://www.hp.com/us-en/hp-information/accessibility-aging.html"
            rel="noopener noreferrer"
          >
            Acessibilidade
          </a>
          <a
            className="pb-5"
            href="http://www.hp.com/br-pt/privacy/privacy-central.html"
            rel="noopener noreferrer"
          >
            Privacidade
          </a>
          |
          <a
            className="pb-5"
            href="https://h20195.www2.hp.com/v2/GetDocument.aspx?docname=c08968209"
            rel="noopener noreferrer"
          >
            Brasil Relatório de Transparência Salarial
          </a>
          <a
            className="pb-5"
            href="https://www.hp.com/br-pt/terms-of-use.html"
            rel="noopener noreferrer"
          >
            Termos de uso
          </a>
          |
          <a className="pb-5" href="sasa" rel="noopener noreferrer">
            Preferências de cookies
          </a>
        </div>

        <p className="pt-4">
          ©2026 HP Development Company, L.P. As informações contidas neste
          documento estão sujeitas a alterações sem aviso prévio.
        </p>
      </div>
    </footer>
  )
}

export default Footer
