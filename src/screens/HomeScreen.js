import React from 'react'
import Categories from '../components/Categories'
import Footer from '../components/footer'
import Header from '../components/Header'
import Navigation from '../components/Navigation'

export default function HomeScreen() {
  return (
    <div>
        <Navigation/>
        <Header/>
        <Categories/>
        <Footer/>
    </div>
  )
}
