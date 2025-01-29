import React from "react";
import Layout from "../../components/Layout";
import ProjectShowcase from "../../components/projectShowcase";
import fretmemo from "../../images/fretmemo.png";

function Index() {
  return (
    <Layout>
      <ProjectShowcase
        title="Fretmemo"
        img={{ src: fretmemo, alt: "Fretmemo homepage screenshot" }}
        collaborators={["Pablo Marcano"]}
        duration="1 week"
        description={[
          "As I started taking guitar lessons, I realized that my idle time waiting for my turn at the grocery shop could be better spent.",
          "This project comes as an easy solution to a personal problem, and it definitely helped me get more fluent about note positions on the fretboard.",
          "It was done In close to two days in my spare time, and it for sure was a fun experience!",
        ]}
        shortDesc="Utility for learning fretboard notes"
        link="https://www.fretmemo.com/"
        techStack={["Javascript", "HTML", "CSS"]}
      />
    </Layout>
  );
}

export default Index;
