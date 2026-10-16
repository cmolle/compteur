
'use client'
import { useState } from 'react'
import styles from './home.module.css'
import { increase, decrease, reset, increaseByTen, decreaseByTen } from '../utils/button'
import CounterButtons from '../components/CounterButtons'

export default function Home() {
  const [value, setValue] = useState<number>(0)

  const onClickPlus = () => setValue((prevValue) => increase(prevValue))
  const onClickMinus = () => setValue((prevValue) => decrease(prevValue))
  const onClickReset = () => setValue(() => reset())
  const onClickPlusByTen = () => setValue((prevValue) => increaseByTen(prevValue))
  const onClickMinusByTen = () => setValue((prevValue) => decreaseByTen(prevValue))
  return (
    <div className={styles.container}>
      <h1>JoCo's Clicker</h1>
      <div className={styles.compteur}>
        <span id="count">{value}</span>
      </div>
      <CounterButtons
        onClickPlus={onClickPlus}
        onClickMinus={onClickMinus}
        onClickReset={onClickReset}
        onClickPlusByTen={onClickPlusByTen}
        onClickMinusByTen={onClickMinusByTen}
      />
      {value >= 10 && value !== 69 && (
        <img
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDVwbHF5eXp5ajdzY3R6YXI1ajR3dTJ5cWU0Y2FkeDkwOHl6NzkycyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/kkcVs13JYfgInRMVdO/giphy.gif"
          alt="Célébration"
          className={styles.img}
        />
      )}
      {value === 69 && (
        <img
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDVwbHF5eXp5ajdzY3R6YXI1ajR3dTJ5cWU0Y2FkeDkwOHl6NzkycyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/HXMCTsypX0SpCQsKDl/giphy.gif"
          alt="Humour"
          className={styles.img}
        />
      )}
      {value <= -10 && (
        <img
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDVwbHF5eXp5ajdzY3R6YXI1ajR3dTJ5cWU0Y2FkeDkwOHl6NzkycyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Sy2lziCOPymAbNA1NW/giphy.gif"
          alt="Nul"
          className={styles.img}
        />
      )}
      <footer className={styles.footer}>
        <p>Fait avec ❤️</p>
      </footer>

      <br />
    </div>
  );
}