import type { ReactNode } from 'react'
import { forwardRef } from 'react'

type ContentWrapperProps = {
  children: ReactNode
  extraClass?: string
}

const ContentWrapper = forwardRef<HTMLDivElement, ContentWrapperProps>(
  (props, ref) => (
    <div ref={ref} className={`container mx-auto ${props.extraClass}`}>
      {props.children}
    </div>
  )
)

ContentWrapper.displayName = 'ContentWrapper'

export default ContentWrapper
