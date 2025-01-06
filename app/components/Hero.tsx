import React from 'react'
import Container from './Container'

export default function Hero() {
  return (
    <section className="py-32 z-10 relative">
        <Container>
          <span className="inline-block py-1.5 px-4 rounded-2xl bg-black/10 border border-gray-700 text-white text-sm font-medium">
            ✨ Gestion
          </span>
          <h1 className="font-medium text-7xl uppercase mt-4"> <span className="bg-clip-text bg-gradient-to-br from-white  to-[#afafaf] text-transparent">Title</span> <span className="bg-gradient-to-r from-primary to-[#EC5964] text-transparent bg-clip-text">2025</span></h1>
          <p className="text-gray-400 mt-1 text-lg">Claimeo is a platform that allows you to create and manage your own NFT collections.</p>
        </Container>

      </section>
  )
}
