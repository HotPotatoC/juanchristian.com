import MenuProvider from "@/providers/menu-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <MenuProvider>{children}</MenuProvider>;
}
