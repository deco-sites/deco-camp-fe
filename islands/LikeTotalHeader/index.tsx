import Icon from 'deco-sites/deco-camp-fe/components/ui/Icon.tsx'
import { useTotalLikes } from 'deco-sites/deco-camp-fe/sdk/useTotalLikes.ts'

function Island() {
  const { total } = useTotalLikes()

  return (
    <div class="flex items-center justify-center gap-1 sm:gap-2 min-w-12 sm:min-w-14">
      <Icon id="Friends" width={24} height={24} />
      <span class="min-w-4 text-center text-xs font-thin">{total.value}</span>
    </div>
  )
}

export default Island
