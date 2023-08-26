import cn from '@/lib/cn'

import type { ComponentPropsWithRef, ReactNode } from 'react'
import { forwardRef } from 'react'

type ContainerProps = {
  children: ReactNode
} & ComponentPropsWithRef<'div'>

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, ...props }, ref) => (
    <div ref={ref} className={cn([className, 'container mx-auto'])} {...props}>
      {children}
    </div>
  )
)

Container.displayName = 'Container'

export default Container
