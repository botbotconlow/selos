import Image from 'next/image'
import { useState } from 'react'
import Logo from '../../public/logo.svg'
import {
  CaretRight,
  List,
  MagnifyingGlass,
  ShoppingCartSimple,
  X,
} from '@phosphor-icons/react'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Função para fechar ao clicar fora da aba
  const handleCloseOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (
      event.target instanceof HTMLDivElement &&
      event.target.id === 'overlay'
    ) {
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="w-full flex items-center justify-between bg-white border-b">
      <div className="relative w-full flex justify-between px-5 py-4 z-30 bg-white">
        <a href="https://www.hp.com/br-pt/home.html">
          <Image alt="logo" src={Logo} quality={100} width={48} />
        </a>

        <div className="flex items-center gap-4 text-[#5a5a5a]">
          <MagnifyingGlass size={28} />

          <ShoppingCartSimple size={28} />

          {isMenuOpen ? (
            <X
              size={22}
              color="#ccc"
              weight="bold"
              className="cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            />
          ) : (
            <List
              size={36}
              onClick={() => setIsMenuOpen(true)}
              className="cursor-pointer"
            />
          )}
        </div>

        <div
          className={`absolute top-full right-0 w-[60%] bg-white z-30 shadow-lg transform transition-transform ${
            isMenuOpen ? 'none' : 'hidden'
          }`}
        >
          <div className="w-full flex flex-col text-left text-[#2c3038]">
            <a
              href="https://www.hp.com/br-pt/home.html"
              className="flex items-center justify-between p-4 border-b-2"
            >
              Explorar
              <CaretRight size={18} color="#ccc" weight="bold" />
            </a>

            <a
              href="https://store.hp.com/br-pt/default/"
              className="flex items-center justify-between p-4 border-b-2"
            >
              Comprar
              <CaretRight size={18} color="#ccc" weight="bold" />
            </a>

            <a
              href="https://support.hp.com/br-pt/"
              className="flex items-center justify-between p-4 border-b-2"
            >
              Suporte
              <CaretRight size={18} color="#ccc" weight="bold" />
            </a>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div
          id="overlay"
          className="fixed inset-0 bg-[#00000050] z-20"
          onClick={handleCloseOutsideClick}
        ></div>
      )}
    </header>
  )
}
