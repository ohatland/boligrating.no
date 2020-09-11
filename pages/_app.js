import '../styles/talwind.css'
import '../styles/global.css'
import '../styles/footer.css'
import '../styles/id.css'
import Header from '../components/header'
import Footer from '../components/footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp