import React, { createContext, useState } from "react";
import textsApp from "../texts/texts.json";
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
    //cantas questoes sao. FizTodas elas?
    const answerd = sessionStorage.getItem("answerds");
    if (answerd !== null) {
      return JSON.parse(answerd);
    }
    return [];
  }

  function isAnswerdAllQuestion() {
    const finish = sessionStorage.getItem("finish");
    console.log(finish);
    return finish;
  }

  function getResult() {
    const score = getScore();
    const separete = [];
    score.forEach((s) => {
      separete.push(s.score);
    });

    const win = score.filter(
      (sc) => sc.score == Math.max.apply(Math, separete)
    );
    console.log(win);
    return win[0].id;
  }

  function getNowQuestion() {
    const nowQ = sessionStorage.getItem("nowQuestion");
    if (nowQ !== null) {
      return nowQ;
    }

    return null;
  }

  function cleanAllSession() {
    sessionStorage.clear();
  }

  function addScoreBoard(aswerd) {
    let basico =
      sessionStorage.getItem(textsApp.basico.id) !== null
        ? parseInt(sessionStorage.getItem(textsApp.basico.id))
        : 0;
    let classico =
      sessionStorage.getItem(textsApp.classico.id) !== null
        ? parseInt(sessionStorage.getItem(textsApp.classico.id))
        : 0;
    let casual =
      sessionStorage.getItem(textsApp.casual.id) !== null
        ? parseInt(sessionStorage.getItem(textsApp.casual.id))
        : 0;
    let esporte =
      sessionStorage.getItem(textsApp.esporte.id) !== null
        ? parseInt(sessionStorage.getItem(textsApp.esporte.id))
        : 0;
    let fashion =
      sessionStorage.getItem(textsApp.fashion.id) !== null
        ? parseInt(sessionStorage.getItem(textsApp.fashion.id))
        : 0;

    switch (aswerd.answerd) {
      case textsApp.casual.id:
        sessionStorage.setItem(textsApp.casual.id, casual + 1);
        break;
      case textsApp.classico.id:
        sessionStorage.setItem(textsApp.classico.id, classico + 1);
        break;

      case textsApp.esporte.id:
        sessionStorage.setItem(textsApp.esporte.id, esporte + 1);
        break;

      case textsApp.fashion.id:
        sessionStorage.setItem(textsApp.fashion.id, fashion + 1);
        break;

      default:
        sessionStorage.setItem(textsApp.basico.id, basico + 1);
        break;
    }
  }

  function getScore() {
    let basico =
      sessionStorage.getItem(textsApp.basico.id) !== null
        ? parseInt(sessionStorage.getItem(textsApp.basico.id))
        : 0;
    let classico =
      sessionStorage.getItem(textsApp.classico.id) !== null
        ? parseInt(sessionStorage.getItem(textsApp.classico.id))
        : 0;
    let casual =
      sessionStorage.getItem(textsApp.casual.id) !== null
        ? parseInt(sessionStorage.getItem(textsApp.casual.id))
        : 0;
    let esporte =
      sessionStorage.getItem(textsApp.esporte.id) !== null
        ? parseInt(sessionStorage.getItem(textsApp.esporte.id))
        : 0;
    let fashion =
      sessionStorage.getItem(textsApp.fashion.id) !== null
        ? parseInt(sessionStorage.getItem(textsApp.fashion.id))
        : 0;

    return [
      {
        id: textsApp.basico.id,
        score: basico,
      },
      { id: textsApp.classico.id, score: classico },
      { id: textsApp.casual.id, score: casual },
      { id: textsApp.esporte.id, score: esporte },
      { id: textsApp.fashion.id, score: fashion },
    ];
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
        isAnswerdAllQuestion,
        getNowQuestion,
        addScoreBoard,
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
}

export { QuestionsProvider, QuestionsContext };
