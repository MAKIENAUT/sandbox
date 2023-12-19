import NavBar from "../components/NavBar";

export const metadata = {
  title: 'West Migration Agency',
  description: 'West Migration Agency LLC (“WMA”)',
}

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
