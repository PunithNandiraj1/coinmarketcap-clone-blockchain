import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import CMCtable from '../components/cmc-table/cmcTableTitle.js'
import Header from '../components/header'
import Trending from '../components/trending'
// import SwapCryptoModal from '../components/swapCryptoModal'

const Home: NextPage = () => {
  return (
    <div className='min-h-screen'>
      <Header />
      {/* <SwapCryptoModal />
      <div className='mt-10' /> */}
      <Trending />
      <div className='mt-20' />
      <CMCtable /> 
    </div>
  )
}

export default Home
