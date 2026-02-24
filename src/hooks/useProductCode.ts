import { useState, useEffect } from 'react'

const SESSION_KEY = 'product_code'

function generateCode(): string {
  // 14 dígitos, igual ao original "35074487720789"
  const min = 10000000000000
  const max = 99999999999999
  return String(Math.floor(Math.random() * (max - min + 1)) + min)
}

export function useProductCode(): string {
  const [code, setCode] = useState('')

  useEffect(() => {
    const existing = sessionStorage.getItem(SESSION_KEY)
    if (existing) {
      setCode(existing)
    } else {
      const newCode = generateCode()
      sessionStorage.setItem(SESSION_KEY, newCode)
      setCode(newCode)
    }
  }, [])

  return code
}
