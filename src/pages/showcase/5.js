import React from "react";
import Layout from "../../components/Layout";
import ProjectShowcase from "../../components/projectShowcase";
import mrgensc from "../../images/mrgen-sc.png";

function Index() {
  return (
    <Layout>
      <ProjectShowcase
        title="Mr.Gen"
        img={{ src: mrgensc, alt: "Mr.Gen screenshot" }}
        collaborators={["Pablo Marcano"]}
        duration="4 months"
        description={[
          "The team at Mr.Gen had a previous negative experience with a developer team, and my team had the opportunity to take an existing, overly complex, and poorly documented codebase, and make it a market-ready product.",
          "I gained a lot of insights on refactoring good practices, and valuing done over perfect depending on the context.",
          "The code consisted on a react frontend, and a C# .NET core backend, with a SQL Server database. The UI was built using a custom component and forms library.",
        ]}
        shortDesc="Genetic analysis platform"
        link="https://mistergen.com/"
        techStack={["React", "C#", "SQL Server"]}
      />
    </Layout>
  );
}

export default Index;
