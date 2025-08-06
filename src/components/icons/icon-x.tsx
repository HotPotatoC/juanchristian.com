import { Ref, SVGProps, forwardRef } from "react";
const Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={32}
    height={32}
    viewBox='0 0 32 32'
    fill='none'
    ref={ref}
    {...props}
  >
    <path
      fill='currentColor'
      d='m24.41 23.467-.944.944L16 16.945 8.534 24.41l-.944-.944 7.466-7.466L7.59 8.534l.944-.944 7.466 7.466 7.467-7.466.944.944L16.944 16l7.466 7.467Z'
    />
  </svg>
);
const IconX = forwardRef(Icon);
export default IconX;
