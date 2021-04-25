import React from "react";
import Layout from "../../components/Layout";
import ProjectShowcase from "../../components/projectShowcase";
import header from "../../images/header.jpg";

function Index() {
  return (
    <Layout>
      <ProjectShowcase
        title="Pablo Marcano Personal Portfolio"
        img={{ src: header, alt: "test" }}
        collaborators={["Pablo Marcano", "Juan Leal"]}
        duration="1 Month"
        description={[
          "As a frontend developer, I've always looked at art movements as a source of inspiration, a place to research for ways to communicate ideas through fundamental principles. When I first started to look at palletes, colors, and artifacts to base my portfolio on, a conversation sparked with my designer friend (linked above) and we decided that Bauhaus approach to aesthetic and function would fit perfectly with my Work.",
          "The portfolio showcases a mostly black and white color pallete with subtle accents, and strong shapes. It features a landing page, where you can find my latest blog posts and a showcase of my latest work.",
          "The project was completed in just under a month with around 4 hours/week dedicated to it. I decided to go with gatsby for the tech stack since I wanted to tinker with the technology, and have some solid knwoledge of React.",
        ]}
        shortDesc="Bauhaus-inspired portfolio site to showcase the best of my work"
        link="/"
        techStack={["Gatsby", "React"]}
      />
    </Layout>
  );
}

export default Index;
