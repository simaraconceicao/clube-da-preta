import React, { createContext, useState } from "react";

const QuestionsContext = createContext();

function QuestionsProvider({ children }) {
  const [email, setEmail] = useState("");
  const [answerdOne, setAnswerdOne] = useState("");

  function addEmail(email) {
    setEmail(email);
    sessionStorage.setItem("email", JSON.stringify(email));
  }

  function addAnswerdOne(answeradOne) {
    sessionStorage.setItem("answerdOne", JSON.stringify(answeradOne));
    addAnswerdOne(answeradOne);
  }

  function isEmail() {
    const email = sessionStorage.getItem("email");
    if (email !== null) {
      return email !== undefined && email !== "";
    }
    return false;
  }

  function isAnswerdOne() {
    const answerdOne = sessionStorage.getItem("answerdOne");
    if (answerdOne !== null) {
      const one = JSON.parse(answerdOne);
      return one !== undefined && one !== "";
    }
    return false;
  }

  return (
    <QuestionsContext.Provider
      value={{
        addEmail,
        addAnswerdOne,
        isEmail,
        isAnswerdOne,
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
}

export { QuestionsProvider, QuestionsContext };
