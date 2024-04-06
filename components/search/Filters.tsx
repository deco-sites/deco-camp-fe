import Avatar from '../../components/ui/Avatar.tsx'
import { formatPrice } from '../../sdk/format.ts'
import type { Filter, FilterToggle, FilterToggleValue, ProductListingPage } from 'apps/commerce/types.ts'
import { parseRange } from 'apps/commerce/utils/filters.ts'

interface Props {
  filters: ProductListingPage['filters']
}

const isToggle = (filter: Filter): filter is FilterToggle => filter['@type'] === 'FilterToggle'

function ValueItem({ url, selected, label, quantity }: FilterToggleValue) {
  return (
    <li>
      <a href={url} rel="nofollow" class="flex items-center gap-2">
        <div role="checkbox" aria-checked={selected} class="checkbox" aria-label={`Seletor do filtro ${label}`} />
        <span class="text-sm">{label}</span>
        {quantity > 0 && <span class="text-xs">({quantity})</span>}
      </a>
    </li>
  )
}

function FilterValues({ key, values }: FilterToggle) {
  const flexDirection = key === 'tamanho' || key === 'cor' ? 'flex-row' : 'flex-col'
  console.log({ values, key })

  return (
    <ul class={`flex flex-wrap gap-2 ${flexDirection}`}>
      {values.map((item) => {
        const { url, selected, value, quantity } = item

        if (key === 'cor' || key === 'tamanho') {
          return (
            <li class="flex">
              <a class="flex" href={url} rel="nofollow" aria-label={`Filtro para ${value}`}>
                <Avatar content={value} variant={selected ? 'active' : 'default'} />
              </a>
            </li>
          )
        }

        if (key === 'price') {
          const range = parseRange(item.value)

          return range && <ValueItem {...item} label={`${formatPrice(range.from)} - ${formatPrice(range.to)}`} />
        }

        return <ValueItem {...item} />
      })}
    </ul>
  )
}

function Filters({ filters }: Props) {
  return (
    <ul class="flex flex-col gap-6">
      {filters.filter(isToggle).map((filter) => (
        <li class="flex flex-col gap-4">
          <span>{filter.label}</span>
          <FilterValues {...filter} />
        </li>
      ))}
    </ul>
  )
}

export default Filters
