import Header from './Header'
import Head from 'next/head'

export default function Layout(props) {
    return (
      <div>
        <Head>
            <title>ClonAirbnb: Alquileres vacacionales</title>
        </Head>
        <Header /> {/* Menú navegación con logo */}
        <main>{props.content}</main>

        <style jsx>{`
          main {
            position: relative;
            max-width: 56em;
            background-color: white;
            padding: 2em;
            margin: 0 auto;
            box-sizing: border-box;
          }
        `}</style>
      </div>
    )
}