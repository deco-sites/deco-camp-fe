import { temperatureLoaderProps } from "deco-sites/deco-camp-fe/loaders/temperature.ts";

export interface Props {
  /**
   * @title Loader de Temperatura
   */
  temperature: temperatureLoaderProps;
}

export default function TemperatureFloating({ temperature }: Props) {
  if (!temperature?.celsius) return null;

  return (
    <div class="flex justify-center items-center fixed bottom-4 right-4 rounded-full bg-primary px-3 py-2 z-10">
      <span class="text-sm text-neutral">{temperature.celsius}°C</span>
    </div>
  );
}
