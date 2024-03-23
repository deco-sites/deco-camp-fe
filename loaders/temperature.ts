import weather, { Props as TemperatureProps } from 'apps/weather/loaders/temperature.ts'

export interface Props {
  /**
   * @title Localização
   */
  temperature: TemperatureProps
}

export interface temperatureLoaderProps {
  celsius: number | undefined
}

export default async function temperatureLoader(props: Props, req: Request): Promise<temperatureLoaderProps> {
  const lat = props.temperature.lat
  const long = props.temperature.long
  const temperature = await weather({ lat, long }, req)
  return { celsius: temperature?.celsius }
}
