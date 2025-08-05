import { Ref, SVGProps, forwardRef } from "react";
const Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={32}
    height={32}
    fill='none'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fill='currentColor'
        d='M17.067 4.267V0h-2.134v4.267h2.134ZM6.842 5.329 3.2 1.69 1.692 3.2l3.641 3.64 1.509-1.51Zm19.825 1.51L30.308 3.2 28.8 1.69l-3.642 3.64 1.509 1.51ZM16 8.527a7.465 7.465 0 1 0 0 14.925 7.465 7.465 0 1 0 0-14.925ZM4.267 14.923H0v2.133h4.267v-2.133Zm27.733 0h-4.267v2.133H32v-2.133ZM3.2 30.29l3.642-3.641-1.509-1.509-3.641 3.64L3.2 30.29Zm27.108-1.51-3.641-3.64-1.509 1.509 3.642 3.643 1.508-1.512Zm-13.241 3.198v-4.263h-2.134v4.265l2.134-.002Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const IconSun = forwardRef(Icon);
export default IconSun;
