import type { Product } from 'apps/commerce/types.ts'
import HorizontalProductCard from 'deco-sites/deco-camp-fe/components/HorizontalProductCard/HorizontalProductCard.tsx'

export interface Props {
  /**
   * @title Produtos
   */
  products: Product[] | null
  animateImage: boolean
}

export default function HorizontalProduct({ products, animateImage }: Props) {
  if (!products?.length) return null

  return (
    <div class="w-full max-w-5xl px-4 mx-auto py-8 lg:py-10 flex flex-col gap-8 lg:gap-10">
      {products.map((product) => (
        <HorizontalProductCard key={`horizontal-product-card-${product.productID}`} product={product} animateImage={animateImage} />
      ))}
    </div>
  )
}
