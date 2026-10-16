
'use client'

import { useState } from 'react'
import styles from './home.module.css'
import { Button } from '@mui/material'
import { increase, decrease, reset } from '../utils/button'
import confetti from 'canvas-confetti'

export default function Home() {
  const [value, setValue] = useState<number>(0)

  const onClickPlus = () => setValue((prevValue) => increase(prevValue))
  const onClickMinus = () => setValue((prevValue) => decrease(prevValue))
  const onClickReset = () => setValue(() => reset())
  const onClickConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.6 },
    })
}

  return (
    <div>
      <h1>Mon Compteur de Clics</h1>

      <div className={styles.compteur}>
        <span id="count">{value}</span>
      </div>

      <Button
        id="btn-plus"
        onClick={onClickPlus}
        sx={{
          fontSize: '12px',
          padding: '10px 30px',
          margin: '5px',
          border: '3px solid #e84393',
          borderRadius: '15px',
          backgroundColor: '#ffb6d9',
          color: '#8e245b',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          '&:hover': {
            backgroundColor: '#ffb6d9',
            transform: 'scale(1.1)',
            boxShadow: '0 4px 12px rgba(232, 67, 147, 0.35)',
          },
        }}
      >
        +1
      </Button>

      <Button
        id="btn-moins"
        onClick={onClickMinus}
        sx={{
          fontSize: '12px',
          padding: '10px 30px',
          margin: '5px',
          border: '3px solid #e84393',
          borderRadius: '15px',
          backgroundColor: '#f8a5c2',
          color: '#8e245b',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          '&:hover': {
            backgroundColor: '#f8a5c2',
            transform: 'scale(1.1)',
            boxShadow: '0 4px 12px rgba(232, 67, 147, 0.35)',
          },
        }}
      >
        -1
      </Button>

      <Button
        id="btn-reset"
        onClick={onClickReset}
        sx={{
          fontSize: '12px',
          padding: '10px 30px',
          margin: '5px',
          borderRadius: '5px',
          backgroundColor: '#6c757d',
          color: 'white',
          '&:hover': {
            backgroundColor: '#5a6268',
          },
        }}
      >
        Reset
      </Button>

      <footer className={styles.footer}>
        <Button
          id="btn-footer"
          onClick={onClickConfetti}
          sx={{
            fontSize: '12px',
            padding: '10px 30px',
            margin: '5px',
            borderRadius: '5px',
            backgroundColor: '#6c757d',
            color: 'white',
            '&:hover': {
              backgroundColor: '#5a6268',
            },
          }}
        >Fait avec ❤️</Button>
      </footer>
    </div>
  )
}
