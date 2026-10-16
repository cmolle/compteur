
'use client'
import { useState } from 'react'
import styles from './home.module.css'
import classNames from 'classnames'
import { Button } from '@mui/material'
import { increase, decrease, reset, random } from '../utils/button'


export default function Home({ }) {
  const [value, setValue] = useState<number>(0)

  const onClickPlus = () => setValue((prevValue) => increase(prevValue))
  const onClickMinus = () => setValue((prevValue) => decrease(prevValue))
  const onClickReset = () => setValue(() => reset())
  const randomClick = () => setValue(random)
  const onClickReset5 = () => setValue((prevValue) => -4)

  return <div>
    <h1>Mon Compteur de Clics</h1>
    <div className={styles.compteur}>
      <span id="count">{value}</span>
    </div>
    <Button className={classNames(styles.compteur, styles.btnPlus)} id="btn-random" onClick={randomClick}>
      ??
    </Button>
    <Button className={classNames(styles.compteur, styles.btnPlus)} id="btn-plus" onClick={onClickPlus}>+1</Button>
    <Button className={classNames(styles.compteur, styles.btnMois)} id="btn-moins" onClick={onClickMinus}>-1</Button>
    <Button className={classNames(styles.compteur, styles.btnReset)} id="btn-reset" onClick={onClickReset}>Reset</Button>
    <Button className={classNames(styles.compteur, styles.btnReset)} id="btn-reset" onClick={onClickReset5}>Reset to -5</Button>

    <footer className={styles.footer}>
      <p>Fait avec ❤️</p>
    </footer>

    <br />
  </div>
}
