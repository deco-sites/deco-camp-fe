export interface CouponProps {
  /**
   * @title Cupom
   */
  coupon: string

  /**
   * @title Benefícios
   */
  benefits: string[]
}

export default function Coupon({ coupon, benefits }: CouponProps) {
  return (
    <div class="w-full container px-4 py-8 flex flex-col gap-6 lg:py-10 lg:px-0 items-center">
      <h2 class="leading-6 lg:leading-8 text-base-content lg:text-3xl text-center">
        Entre para esse time, e use nosso cupom em sua primeira compra em nosso site!
      </h2>

      <span class="relative font-medium lg:text-[20px] px-4 py-2">{coupon}</span>

      <div class="flex flex-col items-center">
        <span class="text-base lg:text-lg text-center">{`Confira ${
          benefits.length === 1 ? 'o benefício' : 'os benefícios'
        } em usar nosso cupom:`}</span>

        <ul class="flex flex-col items-center">
          {benefits.map((benefit, index) => {
            return (
              <li key={`coupon-benefit-${index}`} class="text-base lg:text-lg text-center">
                {benefit}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
