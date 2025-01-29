import React from "react";
import Layout from "../../components/Layout";
import ProjectShowcase from "../../components/projectShowcase";
import automation from "../../images/automation.png";

function Index() {
  return (
    <Layout>
      <ProjectShowcase
        title="Amazon Sales API Automation"
        img={{ src: automation, alt: "Amazon Sales API Automation screenshot" }}
        collaborators={["Pablo Marcano"]}
        duration="1 month"
        description={[
          "I was tasked with simplifying a costly existing process of generating reports for Amazon sales for a manufacturing company.",
          "The end user needed to be able to see what was happening behind the scenes, and re-run and tweak the process accordingly in the future if needed, so n8n was a perfect fit for the use case.",
          "The reports are saved to Airtable databases, and sumamries are generated from MongoDb collections periodically, keeping the tables up to date with inventory, fees, and valuation data.",
        ]}
        shortDesc="Sales reports automation for Amazon"
        techStack={["n8n", "Airtable", "MongoDb"]}
      />
    </Layout>
  );
}

export default Index;
