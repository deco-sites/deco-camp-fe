import weather from "apps/weather/loaders/temperature.ts";
import type { SectionProps } from "deco/types.ts";

export interface Props {
  /**
   * @title Título
   */
  title: string;
  /**
   * @title Texto
   */
  text: string;
}

export const loader = async (props: Props, req: Request) => {
  const temperature = await weather({
    lat: 4.404769366867932,
    long: -60.36325488286642,
  }, req);
  return { ...props, temperature };
};

export default function Temperature(
  { text, title, temperature }: SectionProps<typeof loader>,
) {
  return (
    <div class="flex xl:container xl:mx-auto first:pt-0 py-12 lg:py-24 mx-5 md:mx-10 gap-4 md:gap-6 text-left items-center justify-end h-28">
      <div class="flex flex-col justify-center items-center">
        <strong class="text-lg">{title}</strong>
        <span class="text-base">{text}</span>
      </div>

      <strong class="text-lg">{temperature?.celsius}°C</strong>
      <span class="flex justify-center items-center w-16 h-16 text-base fixed bottom-0 right-0 rounded-full bg-primary p-2">
        {temperature?.celsius}°C
      </span>
    </div>
  );
}
