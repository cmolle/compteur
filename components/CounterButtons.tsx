import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import classNames from 'classnames'
import styles from '../app/home.module.css'

type CounterButtonsProps = {
  onClickPlus: () => void
  onClickMinus: () => void
  onClickReset: () => void
  onClickPlusByTen: () => void
  onClickMinusByTen: () => void
}

export default function CounterButtons({
  onClickPlus,
  onClickMinus,
  onClickReset,
  onClickPlusByTen,
  onClickMinusByTen,
}: CounterButtonsProps) {
  return (
    <Stack spacing={2} direction="row" sx={{ justifyContent: 'center' }}>
      <Button
        variant="contained"
        className={classNames(styles.compteur, styles.btnPlus)}
        id="btn-plus-by-ten"
        onClick={onClickPlusByTen}
      >
        +10
      </Button>
      <Button
        variant="contained"
        className={classNames(styles.compteur, styles.btnPlus)}
        id="btn-plus"
        onClick={onClickPlus}
      >
        +1
      </Button>
      <Button
        variant="contained"
        className={classNames(styles.compteur, styles.btnReset)}
        id="btn-reset"
        onClick={onClickReset}
      >
        Reset
      </Button>
      <Button
        variant="contained"
        className={classNames(styles.compteur, styles.btnMoins)}
        id="btn-moins"
        onClick={onClickMinus}
      >
        -1
      </Button>
      <Button
        variant="contained"
        className={classNames(styles.compteur, styles.btnMoins)}
        id="btn-minus-by-ten"
        onClick={onClickMinusByTen}
      >
        -10
      </Button>

    </Stack>
  )
}