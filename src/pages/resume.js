import React from "react";
import styled from "styled-components";
import { Header } from "../components/Header";
import Layout from "../components/Layout";
import photo from "../images/me-bw.jpg";

function Resume() {
  return (
    <Layout>
      <main>
        <HeadSection>
          <div className="content">
            <Header>
              <p>Hi!</p>
              <p>
                I'm <em>Pablo Marcano</em>
              </p>
              <p>Nice to meet you</p>
            </Header>
            <SubHeader>
              I am a web developer with 3+ years of experience bringing to
              reality beautiful and usable interfaces while maintaining and
              building scalable and robust APIs with teams across the globe for
              companies in areas such as imports and customs, healthcare and
              education.
            </SubHeader>
          </div>
          <div className="photo">
            <img src={photo} alt="Pablo Marcano Headshot" />
          </div>
        </HeadSection>
        <ResumeSection className="skills">
          <h2>Skills</h2>
          <p>
            I have worked with JavaScript during most of my career, making it my
            go-to language for most tasks with a solid foundation on React and
            Angular.
          </p>
          <p>
            I also feel comfortable using the .NET stack for any backend work,
            with Entity Framework for managing relational databases.
          </p>
          <p>
            For personal projects I tend to use non-relational databases, mainly
            MongoDB, and I’m willing to take that experience into a production
            environment.
          </p>
          <p>
            I consider my knowledge of REST principles for API building to be
            solid, and I have also tinkered with GraphQL APIs on personal
            projects.
          </p>
          <p>
            UI/UX and Information Architecture have always caught my mind so
            whenever I’m not writing or reading code, this is what I’m looking
            at.
          </p>
          <p>
            Sharing what I know is one of my favorite things, that is why I’m
            usually involved in tasks like mentoring, giving workshops and
            driving interviews
          </p>
        </ResumeSection>
        <ResumeSection className="experience">
          <h2>experience</h2>
          <ol>
            {experienceItems.map((i) => (
              <li>
                <ExperienceItem>
                  <p className="date">
                    {i.start} <br /> - <br />
                    {i.end ? i.end : "Present"}
                  </p>
                  <div className="title">
                    <h3>{i.title}</h3>
                    <p>{i.company}</p>
                  </div>
                  <div>
                    {i.description.map((d) => (
                      <p className="description">{d}</p>
                    ))}
                  </div>
                </ExperienceItem>
              </li>
            ))}
          </ol>
        </ResumeSection>
        <ResumeSection className="experience">
          <h2>Auxiliary Work</h2>
          <ol>
            {auxiliaryWork.map((i) => (
              <li>
                <ExperienceItem className="auxiliary">
                  <p className="date">
                    {i.start} <br /> - <br />
                    {i.end ? i.end : "Present"}
                  </p>
                  <h3 className="title">{i.title}</h3>
                  <p className="description">{i.description}</p>
                </ExperienceItem>
              </li>
            ))}
          </ol>
        </ResumeSection>
      </main>
    </Layout>
  );
}

const ExperienceItem = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 3em 0;
  p,
  h3 {
    padding-right: 1em;
  }
  h3 {
    color: ${({ theme }) => theme.text};
  }
  .date {
    color: ${({ theme }) => theme.textSecondary};
    text-align: end;
    min-width: 100px;
  }

  .title {
    min-width: 180px;
    width: 180px;
    max-width: 180px;
    p {
      color: ${({ theme }) => theme.textSecondary};
    }
  }

  .description {
    color: ${({ theme }) => theme.textSecondary};
  }

  &.auxiliary {
    padding: 1em 0;
  }

  @media (max-width: 768px) {
    display: inline;
    flex-direction: column;
    .date, .title {
      width: 40%;
      display: inline-block;
    }
  }
`;

const ResumeSection = styled.section`

  padding-bottom: 2em;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  padding: 0 20%;
  color: ${({ theme }) => theme.textSecondary};


  &.experience {
    padding-top: 3em;
    padding-left: 5%;
    padding-right: 15%;
    h2 {
      padding-left: 20%;
    }

    @media (max-width: 768px) {
      padding:0;
      padding-top: 3em;
    }
  }
  

  h2 {
    color: ${({ theme }) => theme.textSecondary};
    text-transform: uppercase;
  }
  ol {
    list-style: none;
    margin: 0;
  }

  @media (max-width: 768px) {
    padding: 0;
  }
`;
const HeadSection = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 1em;
  .content {
    width: 70%;
    h2 {
      padding: 0;
    }
  }
  .photo {
    width: 30%;
    max-width: 300px;

    justify-content: center;
    align-items: center;
    display: flex;
    @media (min-width: 768px) {
      margin-left: 2em;
    }
  }
  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
    padding: 0;

    .content {
      width: 100%;
    }
    .photo {
      display: none;
    }
  }
`;

const SubHeader = styled.p`
  max-width: 70;
`;

const experienceItems = [
  {
    start: "2018",
    end: null,
    title: "Software Developer",
    company: "Kaizen Softworks",
    description: [
      `Served as Scrum Master and developer on a Cross
    functional team, responsible for the timely deliveries and support of 3
    mobile apps supporting IOT application using react native, expo
     and .NET.
    `,
      `
    Built code generation tools to improve team workflow and
     development productivity, reducing time to build new
    features significantly.
    `,
      `Rebuilt the styling workflow using SASS stylesheets while
    mentoring through talk and workshops increasing team
   confidence and skills on the tool.
   `,
      `Planned and Developed a customer support tool using
   React to allow CS teams to replicate behavior and validate
   incidents in a controlled production environment,
   reducing resolution time for support tickets`,
      `
   Built performant and scalable APIs to integrate with SPAs
   and mobile applications.
   `,
      `Ensured the quality of every project with unit and
   integration testing suites integrated on CI/CD pipelines.
   `,
      `Lead the onboarding of a new customer through a visit to
   their offices in the US, resulting in the long time hire of
   several team members.
   `,
      `
   Helped on the technical screening process of full stack
   developers and trainees, ensuring hire quality during a
   company expansion of over 30%.
   `,
      `Modernized an Angular application through the
   implementation of the Material design system, improving
   usability and user experience.`,
    ],
  },
  {
    start: "2017",
    end: "2018",
    title: "Software Developer",
    company: "TCS Uruguay (TATA Consultancy Services)",
    description: [
      `Developed an appointment scheduling app for a US based
      Healthcare company using jQuery, ASP.NET, and .NET framework`,
      `Built an internal tool for asset management within the company using ASP.NET, jQuery and Bootstrap`,
    ],
  },
];

const auxiliaryWork = [
  {
    start: "2018",
    end: "2020",
    title: "Nahual UY Collaborator",
    description: `Provide Mentoring and learning resources to people
    eager to join the IT scene in Uruguay via talks and
    workshops`,
  },
  {
    start: "2018",
    end: "2019",
    title: "vOpen.tech UY Organizer",
    description: `Helped organize 2 editions of one of the biggest tech
    events in Montevideo, Uruguay reuniting speakers from
    over 15 countries`,
  },
  {
    start: "2021",
    end: null,
    title: "Montevideo JS Meetup organizer",
    description: `Organize and Coordinate speakers and virtual Meetup events
    to spread knowledge about the JS languange and it's ecosystem to the
     community in Montevideo`,
  },
];
export default Resume;
