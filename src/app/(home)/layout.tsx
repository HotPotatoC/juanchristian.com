export default function BaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className='w-full h-screen px-6 md:px-12 py-8'>{children}</main>;
}
