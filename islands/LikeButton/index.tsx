import Icon from 'deco-sites/deco-camp-fe/components/ui/Icon.tsx'
import { useSignal } from '@preact/signals'
import { useTotalLikes } from 'deco-sites/deco-camp-fe/sdk/useTotalLikes.ts'

function Island() {
  const selected = useSignal(false)
  const quantity = useSignal(0)
  const { total } = useTotalLikes()

  const handleToggleLike = (e: MouseEvent) => {
    e.preventDefault()
    selected.value = !selected.value

    if (selected.value) {
      quantity.value++
      total.value++
    }

    if (!selected.value) {
      quantity.value--
      total.value--
    }
  }

  return (
    <button
      class="absolute left-4 sm:left-auto sm:right-4 top-4 flex items-center justify-center gap-1 p-1 sm:p-2 rounded bg-neutral sm:bg-white min-w-14"
      onClick={(e) => handleToggleLike(e)}
    >
      {!selected.value ? <Icon id="MoodSmile" width={24} height={24} /> : <Icon id="MoodCheck" width={24} height={24} />}
      <span class={`min-w-4 text-center text-xs font-thin ${!selected.value ? 'text-gray-500' : 'text-secondary'}`}>{quantity.value}</span>
    </button>
  )
}

export default Island
