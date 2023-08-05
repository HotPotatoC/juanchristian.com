const expoEaseInOut = [0.19, 1.0, 0.22, 1.0]

export const createSlideUpTransition = (delay = 0.1) => ({
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -50,
  },
  transition: {
    duration: 2,
    ease: expoEaseInOut,
    delay,
  },
})

export const createFadeInTransition = (delay = 0.1) => ({
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
  transition: {
    duration: 2,
    ease: expoEaseInOut,
    delay,
  },
})
