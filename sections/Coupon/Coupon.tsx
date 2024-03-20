export interface Props {
  /**
   * @title Cupom
   */
  coupon: string;

  /**
   * @title Benefícios
   */
  benefits: string[];
}

export default function Coupon({ coupon, benefits }: Props) {
  return (
    <div class="w-full container px-4 py-8 flex flex-col gap-6 lg:py-10 lg:px-0 items-center">
      <h2 class="leading-6 lg:leading-8 text-base-content lg:text-3xl text-center">
        Entre para esse time, e use nosso cupom em sua primeira compra em nosso
        site!
      </h2>

      <button class="relative font-medium lg:text-[20px] px-4 py-2">
        {coupon}
      </button>

      <div class="flex flex-col items-center">
        <span class="text-lg">Confira os benefícios em usar nosso cupom:</span>

        <ul class="flex flex-col items-center">
          {benefits.map((benefit, i) => {
            return (
              <li key={`coupon-benefit-${i}`} class="text-lg text-center">
                {benefit}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
