import React from 'react'
import Contact from './Contact'
import ProfileCard from './ProfileCard'

export default function Profiles() {
    return (
        <section className="py-10">
            <Contact />
            <div className="grid grid-cols-2 gap-5">
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
            </div>

        </section>
    )
}
