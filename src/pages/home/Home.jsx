import React from 'react'
import Section from '../../components/UI/section/Section'
import Hero from '../../components/Hero/hero'
import Services from '../../components/Services/Services'
import WorkFlow from '../../components/WorkFlow/WorkFlow'
import TechologyList from '../../components/technologies/TechologyList'
import ProjectList from '../../components/projects/projectList/ProjectList'
import FAQAccordian from '../../components/FAQs/FAQAccordion/FAQAccordion'

const Home = () => {
  return (
    <div>
      <Hero/>
        <Section header='Services'>
          <Services/>
        </Section>
        <Section header='WorkFlow'>
          <WorkFlow/>
        </Section>
        <Section header='Technologies' container>
          <TechologyList/>
        </Section>
        <Section header='Projects'>
          <ProjectList/>
        </Section>
        <Section header="FAQS" container>
          <FAQAccordian />
        </Section>
    </div>
  )
}

export default Home