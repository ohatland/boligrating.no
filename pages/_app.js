import '../styles/talwind.css'
import '../styles/global.css'
import '../styles/footer.css'
import Header from '../components/header'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp