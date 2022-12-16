import '../styles/bootstrap.min.css'
import '../styles/font-awesome.min.css'
import '../styles/themify-icons.css'
import '../styles/elegant-icons.css'
import '../styles/globals.css'
import '../styles/header.css'
import '../styles/footer.css'
import Layout from '../components/Layout'


function MyApp({ Component, pageProps }) {
  return <Layout> <Component {...pageProps} /></Layout>
}

export default MyApp
