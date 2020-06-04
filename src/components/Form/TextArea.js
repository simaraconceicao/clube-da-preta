import React from 'react'

function TextArea (props) {
  function valida (e) {
    const nome = e.target.name
    const valor = e.target.value

    if (props.required && valor.trim() === '') {
      props.onChange(nome, valor, 'Campo obrigatório')
      return
    }

    if (props.minLength && valor.length < props.minLength) {
      props.onChange(
        nome,
        valor,
        `Digite pelo menos ${props.minLength} caracteres`
      )
      return
    }

    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (props.type === 'email' && !regex.test(valor)) {
      props.onChange(nome, valor, 'Digite um email válido')
      return
    }

    props.onChange(nome, valor)
  }

  return (
    <input
      id={props.id}
      className='campo'
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      onChange={valida}
    />
  )
}

export default TextArea