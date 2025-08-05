import { Ref, SVGProps, forwardRef } from "react";
const Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    fill='none'
    ref={ref}
    {...props}
  >
    <path
      fill='currentColor'
      d='M16 24h-2.667V0H16v24Zm-6.667 0H6.667V0h2.666v24Zm-6.666 0H0V0h2.667v24Z'
    />
  </svg>
);
const IconMenu = forwardRef(Icon);
export default IconMenu;
