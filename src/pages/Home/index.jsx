import React from "react";
import "./style.css";

import InitialButton from "../../components/Form/InitialButton";
import TextArea from "../../components/Form/TextArea";

export default function Header() {
  console.log("helo");

  return (
    <div className="text">
      <h1>Qual o seu estilo?</h1>
      <p>
        Você tem ideia de qual é seu estilo feito por afroempreendedores?
        Identificamos dentre os fornecedores do Clube da Preta alguns diversos
        estilos de moda. E conseguimos identificar 5 que são os mais comuns
        entre eles: Basico, Clássico, Casual, Esporte e Fashion. Que tal
        participar do nosso quiz para saber qual mais combina com você? Vem,
        vamos descobrir juntos!
      </p>
      <TextArea />
      <InitialButton />
    </div>
  );
}
