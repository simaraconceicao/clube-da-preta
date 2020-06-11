import React, { createContext, useState } from "react";

const QuestionsContext = createContext();

function QuestionsProvider({ children }) {
  const [email, setEmail] = useState("");
  const [answerd, setAnswerd] = useState([]);
  const arraySession = [];

  function addEmail(email) {
    setEmail(email);
    sessionStorage.setItem("email", JSON.stringify(email));
  }

  function addAnswerd(params) {
    arraySession.push(params);
    console.log(arraySession);
    setAnswerd((answerd) => [...answerd, arraySession]);
    sessionStorage.setItem("answerds", JSON.stringify(answerd));
  }

  function isEmail() {
    const email = sessionStorage.getItem("email");
    if (email !== null) {
      return email !== undefined && email !== "";
    }
    return false;
  }

  function getAnswerd() {
    const answerd = sessionStorage.getItem("answerds");
    if (answerd !== "undefined") {
      return JSON.parse(answerd);
    }

    return [];
  }

  function getResult() {
    /*pegar todas a respostas e fazer a lógica pra mostra tela de resultado*/
    return 1;
  }

  function cleanAllSession() {
    sessionStorage.clear();
  }

  return (
    <QuestionsContext.Provider
      value={{
        addEmail,
        addAnswerd,
        isEmail,
        getResult,
        cleanAllSession,
        getAnswerd,
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
}

export { QuestionsProvider, QuestionsContext };
