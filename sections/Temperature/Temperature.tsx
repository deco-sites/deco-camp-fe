import { temperatureLoaderProps } from "deco-sites/deco-camp-fe/loaders/temperature.ts";

export interface Props {
  /**
   * @title Título
   */
  title?: string;
  /**
   * @title Texto
   */
  text?: string;
  /**
   * @title Loader de Temperatura
   */
  temperature: temperatureLoaderProps;
}

export default function Temperature({ title, text, temperature }: Props) {
  if (!temperature?.celsius || (!text && !title)) return null;

  return (
    <div class="container w-full h-[156px] lg:h-[132px] px-4 md:px-0 mx-auto py-8 lg:py-10 flex flex-col lg:flex-row items-center justify-center lg:justify-end text-left gap-3 lg:gap-5">
      <div class="flex flex-col justify-center items-center">
        <strong class="text-lg text-center">{title}</strong>
        <span class="text-base text-center">{text}</span>
      </div>

      <strong class="text-lg">{temperature.celsius}°C</strong>
    </div>
  );
}
