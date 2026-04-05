import { useState } from 'react';
import './App.scss';

export const App = () => {
  // Добавляем функцию обновления setCount
  const [count, setCount] = useState(0);

  const addOne = () => {
    // Используем callback (prevCount), чтобы всегда иметь актуальное значение
    setCount(prevCount => prevCount + 1);
  };

  const add100 = () => {
    setCount(prevCount => prevCount + 100);
  };

  // Этот код менять нельзя по условию, и он будет работать корректно
  // благодаря функциональным обновлениям выше.
  const increase = () => {
    if (count % 5 === 0) {
      add100();
    }

    addOne();
  };

  return (
    <div className="App">
      <h1 className="App__title">{`Count: ${count}`}</h1>

      <button type="button" className="App__add-one" onClick={addOne}>
        Add 1
      </button>

      <button type="button" className="App__add-100" onClick={add100}>
        Add 100
      </button>

      <button type="button" className="App__increase" onClick={increase}>
        Increase
      </button>
    </div>
  );
};
