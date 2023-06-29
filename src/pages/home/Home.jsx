import React from "react";
import Section from "../../components/UI/section/Section";
import Hero from "../../components/Hero/hero";
import Services from "../../components/Services/Services";
import WorkFlow from "../../components/WorkFlow/WorkFlow";
import TechologyList from "../../components/technologies/TechologyList";
import ProjectList from "../../components/projects/projectList/ProjectList";
import FAQAccordian from "../../components/FAQs/FAQAccordion/FAQAccordion";
import { withNamespaces } from 'react-i18next';

const Home = ({t}) => {
  
  return (
    <div>
      <Hero />
      <Section header={t("Services")}>
        <Services />
      </Section>
      <Section header={t("WorkFlow")}>
        <WorkFlow />
      </Section>
      <Section header={t("Technologies")} container>
        <TechologyList />
      </Section>
      <Section header={t("Projects")}>
        <ProjectList />
      </Section>
      <Section header="FAQS" container>
        <FAQAccordian />
      </Section>
    </div>
  );
};

export default withNamespaces()(Home);
