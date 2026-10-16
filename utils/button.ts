// Take a number as input and return +1
export const increase = (previous: number): number => previous + 1
// Take a number as input and return -1
export const decrease = (previous) => previous - 1
// Always return 0
export const reset = () => 0

// Nouvelle méthode : elle permet de sortir un nombre random à chaque clic
export const random = () => {
  return Math.random() * 1000
}