import type { ReactNode } from 'react'

type ContentWrapperProps = {
  children: ReactNode
  extraClass?: string
}

const ContentWrapper = (props: ContentWrapperProps) => (
  <div className={`container mx-auto ${props.extraClass}`}>
    {props.children}
  </div>
)

export default ContentWrapper
