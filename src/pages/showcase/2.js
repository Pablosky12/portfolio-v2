import React from "react";
import Layout from "../../components/Layout";
import ProjectShowcase from "../../components/projectShowcase";
import taco from "../../images/taco.png";

function Index() {
  return (
    <Layout>
      <ProjectShowcase
        title="Taco Maker"
        img={{ src: taco, alt: "Taco generator homepage screenshot" }}
        collaborators={["Pablo Marcano"]}
        duration="1 week"
        description={[
          "This is a small project I've built to try on the Svelte Framework after watchin Rich Harris course on FrontendMasters.",
          "The project pulls data from the taco-randomizer API and displays it in a nice and friendly UI whit each page being a part of the taco.",
          "It was done In close to two days in my spare time, and it for sure was a fun and engaging experience! I really liked the powerful animation capabilities of Svelte, making the transitions between mounting and unmounting components very easy. I also liked the reactive-first approach the framework takes, and the idea of compiling 'sveltescript' into a minimal bundle is really interesting",
        ]}
        shortDesc="Taco Generator App built for learning svelte"
        link="https://taco-maker.vercel.app/"
        techStack={["Svelte"]}
      />
    </Layout>
  );
}

export default Index;
