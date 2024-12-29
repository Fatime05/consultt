import React from 'react'
import Layout from '../../components/common/layout/Layout'
import HeroSection from './components/hero/HeroSection'
import Logo from './components/logo/Logo'
import Member from './components/member/Member'
import ProductSection from './components/products/ProductSection'
import Service from './components/service/Service'

const Home = () => {
  return (
    <Layout>
        <HeroSection/>
        <ProductSection/>
        <Service/>
        <Member/>
        <Logo/>
    </Layout>
  )
}

export default Home