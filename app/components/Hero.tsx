import React from 'react'
import Container from './Container'

export default function Hero() {
  return (
    <section className="py-32 z-10 relative">
        <Container>
          <span className="inline-block relative overflow-hidden  rounded-2xl p-[.75px]   text-white text-sm font-medium ">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a9a9a9_0%,#0c0c0c_50%,#a9a9a9_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#171717_0%,#737373_50%,#171717_100%)]"></span>
            <span className='isolate z-10 bg-[#000000] py-1.5 px-4 inline-block rounded-3xl'>✨ Gestion</span>
          </span>
          <h1 className="font-medium text-7xl uppercase mt-4"> <span className="bg-clip-text bg-gradient-to-br from-white  to-[#afafaf] text-transparent">Claimeos</span> <span className="bg-gradient-to-r from-primary to-[#EC5964] text-transparent bg-clip-text">2025</span></h1>
          <p className="text-white/50 mt-3 text-lg max-w-2xl">Consulta todos los "claimeos" que han sido reclamados por diversos streamer durante este año.</p>
        </Container>

      </section>
  )
}
