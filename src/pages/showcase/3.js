import React from "react";
import Layout from "../../components/Layout";
import ProjectShowcase from "../../components/projectShowcase";
import bariappHeader from "../../images/bariapp-header.png";

function Index() {
  return (
    <Layout>
      <ProjectShowcase
        title="Bariapp"
        img={{ src: bariappHeader, alt: "Bariapp homepage screenshot" }}
        collaborators={["Pablo Marcano"]}
        duration="4 months"
        description={[
          "Bariapp was an incredible learning opportunity, as I was tasked with developing a full mobile app from scratch by myself, intended to be used by patients of all ages, including offline support, and a back end interface for doctors to manage and collect information.",
          "The process was extremely rewarding, with tons of back and forth with the client, alongside with product discovery and design sessions.",
          "I used React Native, Tailwind and Expo to build the Mobile app, and Payload CMS to build the back end interface.",
        ]}
        shortDesc="Weight control app for Bariatric surgery candidates"
        techStack={["React Native", "Payload CMS", "React Hook Form", "Tailwind", "Expo"]}
      />
    </Layout>
  );
}

export default Index;
