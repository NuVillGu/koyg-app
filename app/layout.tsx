import "./global.css";



export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {

  return (
      <html lang="en">
        <body>
          <div className="flex">
              <div>{children}</div>
          </div>
        </body>
      </html>
  );
}
