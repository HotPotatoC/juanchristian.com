import { FrameOverlayProvider } from "@/providers/frame-overlay-provider";
import MenuProvider from "@/providers/menu-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MenuProvider>
      <FrameOverlayProvider>{children}</FrameOverlayProvider>
    </MenuProvider>
  );
}
