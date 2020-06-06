import React, { createContext, useState } from "react";

const QuestionsContext = createContext();

function QuestionsProvider({ children }) {
  const [email, setEmail] = useState([]);

  function addEmail(email) {
    setEmail(email);
  }

  return (
    <QuestionsContext.Provider
      value={{
        addEmail,
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
}

export { QuestionsProvider, QuestionsContext };
