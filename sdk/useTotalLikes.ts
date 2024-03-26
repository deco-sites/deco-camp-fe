import { signal } from '@preact/signals'

const total = signal(0)

export const useTotalLikes = () => {
  return { total }
}
