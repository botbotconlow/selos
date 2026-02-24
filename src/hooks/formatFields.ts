// Função para formatar número de celular
export const formatCelular = (value: string | undefined) => {
  if (!value) {
    return '' // Retornar uma string vazia se o valor for indefinido ou nulo
  }
  // Aplicar a máscara de telefone
  const inputTelefone = value.replace(/\D/g, '')
  let formattedTelefone = inputTelefone
    .replace(/^(\d{2})(\d)/g, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')

  // Limitando o tamanho do TELEFONE
  if (formattedTelefone.length > 15) {
    formattedTelefone = formattedTelefone.substr(0, 15)
  }

  return formattedTelefone
}

// Função para formatar data de nascimento (DD/MM/AAAA)
export const formatDataNascimento = (value: string | undefined) => {
  if (!value) {
    return '' // Retornar uma string vazia se o valor for indefinido ou nulo
  }
  // Formatando a data de nascimento enquanto o usuário digita
  const inputDataNascimento = value.replace(/\D/g, '')
  let formattedDataNascimento = inputDataNascimento
    .replace(/^(\d{2})(\d)/, '$1/$2')
    .replace(/^(\d{2})\/(\d{2})(\d)/, '$1/$2/$3')

  // Limitando o tamanho da data de nascimento
  if (formattedDataNascimento.length > 10) {
    formattedDataNascimento = formattedDataNascimento.substr(0, 10)
  }

  return formattedDataNascimento
}

// Função para formatar CPF
export const formatCpf = (value: string | undefined) => {
  if (!value) {
    return '' // Retornar uma string vazia se o valor for indefinido ou nulo
  }
  // Limitar o tamanho do CPF
  const inputCpf = value.replace(/\D/g, '').substr(0, 11)

  // Formatar o CPF se o valor não for vazio ou nulo
  if (inputCpf) {
    // Aplicar a máscara de CPF
    const formattedCpf = inputCpf
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2')

    return formattedCpf
  }

  return ''
}
