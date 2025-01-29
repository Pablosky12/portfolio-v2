import React, { useState } from "react";
import { Timeline, Tween } from "react-gsap";
import styled from "styled-components";
import { Header } from "../components/Header";
import Layout from "../components/Layout";
import photo from "../images/me-bw.jpg";
import photoSad from "../images/me-sad.jpg";

function Resume() {
  const [isSad, setIsSad] = useState(true);
  return (
    <Layout>
      <main>
        <HeadSection>
          <Timeline>
            <div className="content">
              <Header>
                <p>Hi!</p>
                <p>
                  I'm <em>Pablo Marcano</em>
                </p>
                <p>Nice to meet you</p>
              </Header>

              <SubHeader>
                I am a software developer with 6+ years of experience bringing to
                reality beautiful and usable interfaces, getting products to the next level, and leading groups of developers to efficiency and quality
                for companies in marketing, healthcare, education, and customs.
              </SubHeader>
            </div>
            <Tween
              from={{
                opacity: "0",
                visibility: "visible",
              }}
              to={{ opacity: 1 }}
              duration={0.7}
            >
              <div
                className="photo"
                onMouseEnter={() => setIsSad(false)}
                onMouseLeave={() => setIsSad(true)}
              >
                {isSad ? (
                  <img src={photoSad} alt="Pablo Marcano Headshot" />
                ) : (
                  <img src={photo} alt="Pablo Marcano Headshot" />
                )}
              </div>
            </Tween>
          </Timeline>
        </HeadSection>
        <ResumeSection className="skills">
          <h2>Skills</h2>
          
          <p>
            I consider myself an all-rounder. What defines me is my passion and drive to learn whatever is needed to get the job done the right way.
            </p>
            <p>
              My most proficient programming languages are JavaScript and C#. I've done my fair share of Frontend work, built mobile apps,
              deployed APIs that get used by teams across the globe, and ran too many `DELETE` statements without a `WHERE` clause.
          </p>
        
          <p>
            Sharing what I know is one of my favorite things, that is why I’m
            usually involved in tasks like mentoring, giving workshops and
            driving interviews. I was part of the organizing team of the .NET meetup in Montevideo, 
            and I'm currently organizing the Montevideo JS meetup, racking up around a dozen events yearly.
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
                    {i.description.map((d, i) => (
                      <p className="description" key={i}>
                        {d}
                      </p>
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
            {auxiliaryWork.map((aw, i) => (
              <li key={i}>
                <ExperienceItem className="auxiliary">
                  <p className="date">
                    {aw.start} <br /> - <br />
                    {aw.end ? aw.end : "Present"}
                  </p>
                  <h3 className="title">{aw.title}</h3>
                  <p className="description">{aw.description}</p>
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
  padding-bottom: 2em;
  color: ${({ theme }) => theme.text};

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

  &.auxiliary {
    padding: 1em 0;
  }

  @media (max-width: 768px) {
    display: inline;
    flex-direction: column;
    .date,
    .title {
      width: 40%;
      display: inline-block;
    }
  }
`;

const ResumeSection = styled.section`
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  padding: 0 20%;
  padding-top: 3em;
  color: ${({ theme }) => theme.text};

  &.experience {
    padding-left: 5%;
    padding-right: 15%;
    h2 {
      padding-left: 20%;
    }

    @media (max-width: 768px) {
      padding: 1em 0;
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
    padding: 1em 0;
    ol li {
      padding: 1em 0;
    }
    &.experience h2 {
      padding-left: 0;
    }
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
    visibility: hidden;
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
    padding: 2em 0;

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
    start: "2024",
    end: "2025",
    title: "Technical Lead",
    company: "Constellation",
    description: [
      `Built a content management system supporting custom data types, enabling exports and imports of data from internal tools within the company`,
      `Led a 5 person team of developers through the transition to a new tech stack, serving as the reference for technical decisions.`,
    ],
  },
  {
    start: "2023",
    end: "2024",
    title: "Sr. Software Developer",
    company: "Constellation",
    description: [
      `Enhanced Facebook data import speed by 60%, signicantly optimizing platform performance and user satisfaction.`,
      `Developed a custom ad distribution compliance tool, eliminating reliance on Excel trackers and streamlining ad
      platform deployments.`,
      `Engineered a comprehensive platform for the efficient distribution and publishing of healthcare brochures, simplifying access for secondary insurance clients`
    ],
  },
  {
    start: "2022",
    end: "2023",
    title: "Sr. Software Developer",
    company: "Virtualmind",
    description: [
      `Optimized and enhanced a React-based social media management platform, signicantly improving user
  engagement and analytical capabilities.`,
  ` Extended platform functionality by integrating advanced graphical analytics, improving client data visualization and
  insights.`,
  ` Boosted platform reach and utility by incorporating comprehensive timezone support, enhancing global user
  accessibility`,
    ],
  },
  {
    start: "2020",
    end: "2022",
    title: "PrincipalSoftware Developer",
    company: "Kaizen Softworks",
    description: [
      `Led a five-person team in the successful migration of legacy applications to React Native, enhancing performance
and user engagement.`,
` Dramatically reduced application loading times and enhanced mobile user satisfaction by transitioning from outdated
frameworks to React Native.`,
`Secured key contracts during the 2020 health crisis by developing a React Native application, ensuring public space
compliance and safety.`,
    
    ],
  },
  {
    start: "2018",
    end: "2020",
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
