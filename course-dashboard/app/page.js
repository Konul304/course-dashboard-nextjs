import { Inter } from 'next/font/google'
import Layout from './layout2'
import 'bootstrap/dist/css/bootstrap.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Layout/>
    </>
  )
}
