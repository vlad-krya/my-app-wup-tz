import { useContext, useRef } from "react";
import List from "./components/List";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Context } from "./index";

function App() {
  const { firestore } = useContext(Context);
  const [massagesList] = useCollectionData(
    firestore.collection("massages").orderBy("id")
  );
  const textRef = useRef(null);

  /**
   * Возвращает время в виде строки.
   * @returns {string} "Часы : Минуты : Секунды"
   */
  const getTimeString = () => {
    const date = new Date();

    const hours =
      date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    const minutes =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    const seconds =
      date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

    return `${hours} : ${minutes} : ${seconds}`;
  };

  /**
   * Слушает нажатие кнопки, создает новое сообщение и отправляет на базу.
   */
  const clickHandler = async () => {
    if (!textRef.current.value) return;

    const newMassage = {
      id: Date.now(),
      value: textRef.current.value,
      time: getTimeString(),
    };

    textRef.current.value = "";
    return await firestore.collection("massages").add(newMassage);
  };

  return (
    <div className="app">
      <List massagesList={massagesList} />

      <div className="form">
        <textarea
          ref={textRef}
          className="form__input"
          placeholder="Input massage here"
        ></textarea>
        <button
          className="form__btn"
          type="button"
          onClick={() => clickHandler()}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default App;
