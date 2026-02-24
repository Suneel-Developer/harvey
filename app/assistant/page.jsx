import React from 'react'
import Hero from '../components/Assistant/Hero'
import Footer from '../components/Footer/footer'
import ProvenResultsWithAssistant from '../components/Assistant/ProvenResultsWithAssistant'
import HowTeamsUseAssistant from '../components/Assistant/HowTeamsUseAssistant'
import ValueProposition from '../components/Assistant/ValueProposition'

const page = () => {
    return (
        <div>
            <Hero />
            <ValueProposition/>
            <ProvenResultsWithAssistant/>
            <HowTeamsUseAssistant/>
            <Footer/>
        </div>
    )
}

export default page
