import React, { createContext, useState } from "react";

const QuestionsContext = createContext();

function QuestionsProvider({ children }) {
  const [email, setEmail] = useState("");
  const [answerdOne, setAnswerdOne] = useState("");

  function addEmail(email) {
    setEmail(email);
  }
  function addAnswerdOne(answeradOne) {
    addAnswerdOne(answeradOne);
  }

  return (
    <QuestionsContext.Provider
      value={{
        addEmail,
        addAnswerdOne,
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
}

export { QuestionsProvider, QuestionsContext };
