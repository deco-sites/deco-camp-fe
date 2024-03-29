import { MatchContext } from 'deco/blocks/matcher.ts'

export interface utmMatcherProps {
  utm: string
}

export default function utmMatcher(props: utmMatcherProps, ctx: MatchContext) {
  const url = ctx.request.url
  const newUrl = new URL(url)
  const param = newUrl.searchParams.get('utmcampaign')

  return param?.includes(props.utm) ?? false
}
