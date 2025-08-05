import { Ref, SVGProps, forwardRef } from "react";
const Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 63 63'
    fill='none'
    ref={ref}
    {...props}
  >
    <path
      fill='currentColor'
      d='M14.028 63 0 48.972l31.8-31.85H7.088V0H63v55.911H45.927v-24.71L14.027 63Z'
    />
  </svg>
);
const IconArrowUpRight = forwardRef(Icon);
export default IconArrowUpRight;
