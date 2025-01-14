import React from 'react'
import Contact from './Contact'
import ProfileCard from './ProfileCard'
import ContactForm from './ContactForm'

export default function Profiles() {
    return (
        <section className="py-10">
            <Contact >
                <ContactForm />
            </Contact>
            <div className="grid md:grid-cols-2 gap-5">
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
