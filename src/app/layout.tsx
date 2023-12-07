import NavBar from "../components/NavBar";

export const metadata = {
  title: 'West Migration Agency',
  description: 'West Migration Agency LLC (“WMA”)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  )
}
