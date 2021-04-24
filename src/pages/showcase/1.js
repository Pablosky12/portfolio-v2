import React from "react";
import Layout from "../../components/Layout";
import ProjectShowcase from "../../components/projectShowcase";

function Index() {
  return (
    <Layout>
      <ProjectShowcase
        title="Pablo Marcano Personal Portfolio"
        img={{ src: "https://source.unsplash.com/random/800", alt: "test" }}
      />
    </Layout>
  );
}

export default Index;
