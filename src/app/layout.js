import './ui/normalize.css'
import './ui/globals.css'

export const metadata = {
  title: 'Daily Pokemon',
  description: 'Juego diario de pokemon para conseguir y completar la pokedex',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
