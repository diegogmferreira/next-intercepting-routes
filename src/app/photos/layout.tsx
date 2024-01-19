export default function PhotosLayout({
  children,
  modals
}: {
  children: React.ReactNode
  modals: React.ReactNode
}) {
  return (
    <>
      {children}
      {modals}
    </>
  )
}