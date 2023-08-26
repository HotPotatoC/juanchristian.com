import NextLink, { LinkProps as NextLinkProps } from 'next/link'

type LinkProps = {
  children: React.ReactNode
  hideInternalArrow?: boolean
  external?: boolean
} & NextLinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>

const InternalLink = ({
  passHref,
  href,
  children,
  hideInternalArrow,
  ...props
}: LinkProps) => (
  <NextLink
    passHref={passHref}
    href={href}
    data-cursor-hide-arrow={hideInternalArrow ? 'true' : undefined}
    {...props}
  >
    {children}
  </NextLink>
)

const ExternalLink = ({ href, children, ...props }: LinkProps) => (
  <a
    rel="noopener noreferrer"
    target="_blank"
    href={href.toString()}
    data-cursor-hide-arrow="true"
    data-cursor-out-arrow="true"
    {...props}
  >
    {children}
  </a>
)

export default function Link(props: LinkProps) {
  return props.external ? (
    <ExternalLink {...props} />
  ) : (
    <InternalLink {...props} />
  )
}
