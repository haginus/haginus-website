"use client";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Table, TableBody, TableCell, TableRow, Tooltip, Typography } from "@mui/material";
import Section from "../components/Section";
import Link from "@/components/Link";
import { technologies } from "@/lib/technologies";
import TechnologyChip from "@/components/TechnologyChip";
import { useSearchParams, useRouter } from "next/navigation";
import { validateSearchParam } from "@/lib/utils";
import React from "react";

interface ProjectItemProps {
  id: string;
  title: string;
  subtitle?: string;
  year?: string;
  logo?: string;
  links?: {
    title: string;
    url: string;
  }[];
  git?: {
    title?: string;
    url: string;
  }[];
  stack: (keyof typeof technologies)[];
  impact?: number;
  status?: string;
  children?: React.ReactNode;
}

const projects: ProjectItemProps[] = [
  {
    id: 'tw-labs',
    title: 'TwLabs',
    subtitle: 'Lab materials app made with Angular',
    logo: '/images/projects/tw-labs.png',
    year: '2022',
    links: [
      { title: 'Live version', url: 'https://tw-labs.haginus.ro' },
    ],
    stack: ['typescript', 'angular', 'node', 'express', 'docker'],
    git: [
      { url: 'https://github.com/haginus/tw-labs' }
    ],
    impact: 4,
    status: 'Deployed',
    children: (
      <>
        An Angular application that I created in order to teach the <i>Web Techniques</i> lab.
        It features theoretical sections that blend in with code samples, which show the output.
        <br/> <br/>
        Along my two years of teaching, it helped <b>100+ students</b> understand the basics of web development.
        It is hosted on GCP Cloud Run.
      </>
    )
  },
  {
    id: 'koga-wash',
    title: 'KogăWash',
    subtitle: 'My master\'s paper',
    logo: '/images/projects/koga-wash.png',
    year: '2023',
    stack: ['typescript', 'angular', 'node', 'nestjs', 'mysql', 'react', 'docker', 'kubernetes'],
    git: [
      { title: 'Frontend', url: 'https://github.com/haginus/koga-wash-frontend' },
      { title: 'Backend', url: 'https://github.com/haginus/koga-wash' },
      { title: 'Gateway (Rasp Pi)', url: "https://github.com/haginus/koga-wash-gateway" }
    ],
    impact: 3,
    status: 'In course of implementation in a student dorm',
    children: (
      <>
        Automated system for laundry reservation and management. Each washing machine and dryer takes
        its power from a smart plug, which allows turning it on and off remotely. The smart plugs are
        controlled by a Raspberry Pi, which is connected to the internet and accessible from the NestJS backend.
        The frontend app is developed with Angular and Angular Material. <br/> <br/>
        The users of the laundy have to make reservations in order to use the washing machines/dryers. 
        When the time of the reservation has come, the user has to check-in, and the system will turn on 
        the plug so they can use the machine. If problems arise (i.e. someone leaves their clothes in the machine), 
        they can raise flags so that an admin can review them. <br/> <br/>
        Admins can manage the users, the washing machines, and the reservations. Using the data collected by
        the system and human-raised flags, they can make decisions that will improve the laundry experience.
      </>
    )
  },
  {
    id: 'bachelor',
    title: 'Final exam platform',
    subtitle: 'My bachelor\'s paper',
    year: '2021',
    stack: ['typescript', 'angular', 'node', 'mysql', 'docker'],
    git: [
      { title: 'Frontend', url: 'https://github.com/haginus/bachelor' },
      { title: 'Backend', url: 'https://github.com/haginus/bachelor-backend' },
    ],
    impact: 5,
    status: 'Deployed',
    links: [
      { title: 'Live version', url: 'https://licenta-disertatie.fmi.unibuc.ro' },
      { title: 'Demo video', url: 'https://drive.google.com/file/d/1cukhy9LoEOJXjPwVYmDrL7SfNdzVfYve/view' }
    ],
    children: (
      <>
        Web platform made for the Factulty of Mathematics and Informatics of UB, 
        in order for the whole process of final exams to be automated: 
        from students finding a teacher based on their interests, generating and uploading the files needed 
        for the exam sign up, to grading the papers by the teacher committees, generating catalogs and reports. 
        <br/> <br/>
        It was deployed on the faculty servers using Docker and since then <b>2000+ students, 130+ teachers </b>
        used it along the 4 exam sessions, as it has become the only way for signing up to the final exam. 
        <br/> <br/>
        The platform was very well received by the community of the faculty, 
        and I mark it as a big success story, as it increased the productivity of the file-checking team, 
        let students only focus on the creative work of writing their final papers, and had teachers have 
        an organized way of managing the coordinated papers.
      </>
    )
  },
  {
    id: 'vote-check',
    title: 'VoteCheck',
    subtitle: 'Angular PWA for Romanian elections',
    logo: '/images/projects/vote-check.png',
    year: '2020',
    stack: ['typescript', 'angular'],
    git: [
      { url: 'https://github.com/haginus/vote-check' },
    ],
    impact: 2,
    links: [
      { title: 'Live version', url: 'https://vote-check.web.app' },
    ],
    status: 'Deployed (Hosted on Firebase)',
    children: (
      <>
        <p>
          PWA app that I developed for myself in my quality of electoral expert in Romania.
          It allows to check the constraints of the reports that every vote precinct has to 
          fill up to record the vote results.
        </p>
        <br />
        <p>
          Some fields can be autocompleted by fetching data from {' '}
          <abbr title="Sistemul informatic de monitorizare a prezenței la vot și de prevenire a votului ilegal">SIMPV</abbr>, 
          the vote turnout platform of the Romanian Government.
          All the data is stored locally using JS storage APIs.
        </p>
      </>
    )
  },
  {
    id: 'learning-platform',
    title: 'Learning platform',
    subtitle: 'Angular & Java Spring app for Erasmus volunteers',
    year: '2022',
    stack: ['typescript', 'angular', 'spring', 'mysql'],
    git: [
      { title: 'Frontend', url: 'https://github.com/creative-plus/learning-platform-frontend' },
      { title: 'Backend', url: 'https://github.com/creative-plus/learning-platform-backend' },
    ],
    impact: 3,
    status: 'Intermitent use',
    children: (
      <>
        <p>
          Web platform made for the <Link href="https://www.creative-plus.ro">Creative+ NGO</Link> for its Erasmus volunteers.
          Each time a new group of volunteers arrives for a long-term project, they have to go through a training period, which is
          made using this platform.
        </p>
        <br />
        <p>
          The platform allows permanent NGO members to create courses, which are made of lessons and quizzes. They can
          make these courses available to the volunteers, and they can track their progress. Also, every volunteer group has a leaderboard
          which shows the progress of each member.
        </p>
      </>
    )
  },
  // TODO: Add https://github.com/haginus/samokov-dreams
  // TODO: Add https://github.com/haginus/localize-rn
  // TODO: Add https://github.com/haginus/safebuy
  // TODO: Add https://github.com/fmilabs/educational-plan
]

export default function ProjectsSection() {
  const router = useRouter();
  const search = useSearchParams();
  const sortBy = validateSearchParam(search.get('projectSortBy'), 'impact', ['impact', 'year']);
  const sortedProjects = React.useMemo(() => {
    if (sortBy === 'impact') {
      return projects.sort((a, b) => (b.impact ?? 0) - (a.impact ?? 0));
    } else {
      return projects.sort((a, b) => Number(b.year ?? 0) - Number(a.year ?? 0));
    }
  }, [sortBy, projects]);

  React.useEffect(() => {
    if(location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if(element) {
        element.scrollIntoView();
      }
    }
  }, []);

  return (
    <Section title="Projects" subtitle="Things I worked on">
      <Box sx={{ display: "flex", gap: 1, justifyContent: 'start' }}>
        <FormControl>
          <InputLabel id="project-sort-by-label">Sort by</InputLabel>
          <Select
            labelId="project-sort-by-label"
            value={sortBy}
            label="Sort by"
            onChange={(e) => router.replace(`?projectSortBy=${e.target.value}`, { scroll: false })}
          >
            <MenuItem value="impact">Impact</MenuItem>
            <MenuItem value="year">Year</MenuItem>
          </Select>
        </FormControl>
      </Box>
      {sortedProjects.map((project, index) => (
        <ProjectItem {...project} key={index} />
      ))}
    </Section>
  );
}

function ProjectItem({ id, title, subtitle, year, logo, links, git, stack, status, impact, children }: ProjectItemProps) {
  return (
    <Box sx={{ py: 1.5 }} component="div" id={id}>
      {logo && (
        <Box className="nsl" sx={{ mb: 1 }}>
          <img src={logo} height={80} style={{ maxWidth: '100%', objectFit: 'contain' }} />
        </Box>
      )}
      <Typography variant="h5" component="div">
        {title}
        {year && (
          <Typography component="span" sx={{ color: 'text.secondary', ml: 1 }}>
            ({year})
          </Typography>
        )}
      </Typography>
      {subtitle && (
        <Typography variant="h6" component="div" className="muted">
          {subtitle}
        </Typography>
      )}
      <Box sx={{ my: 1 }}>{children}</Box>
      {links && (
        <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {links.map(({ title, url }) => (
            <Button color="primary" variant="contained" href={url} target="_blank" key={title}>
              <Typography sx={{ textTransform: 'none' }}>{title}</Typography>
            </Button>
          ))}
        </Box>
      )}
      <Table sx={{ width: 'unset', mt: 1 }} aria-label="Meta table">
        <TableBody>
          {status && (
            <ProjectTableRow title="Status">
              {status}
            </ProjectTableRow>
          )}
          {git && (
            <ProjectTableRow title="Source code">
              <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                {git.map(({ title, url }, index) => (
                  <Link href={url} target="_blank" key={index}>
                    {title || url}
                  </Link>
                ))}
              </Box>
            </ProjectTableRow>
          )}
          <ProjectTableRow title="Stack">
            <Box sx={{ display: "flex", gap: 1, flexWrap: 'wrap' }}>
              {stack.map(technology => (
                <TechnologyChip technology={technology} key={technology} />
              ))}
            </Box>
          </ProjectTableRow>
          {impact !== undefined && (
            <ProjectTableRow title="Impact">
              <ImpactBar impact={impact} />
            </ProjectTableRow>
          )}
        </TableBody>
      </Table>
    </Box>
  );
}

function ProjectTableRow({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row" padding="none" sx={{ whiteSpace: 'nowrap' }}>
        {title}
      </TableCell>
      <TableCell padding="none">
        <Box sx={{ p: 1 }}>
          {children}
        </Box>
      </TableCell>
    </TableRow>
  );
}

function ImpactBar({ impact }: { impact: number }) {
  return (
    <Tooltip title={`${impact} / 5`}>
      <Box sx={{ height: 8, borderRadius: 4, overflow: 'hidden', position: 'relative', display: 'inline-flex', gap: '1px' }}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Box key={index} sx={{ width: 30, height: '100%', backgroundColor: 'primary.main', opacity: impact > index ? 1 : 0.4 }} />
        ))}
      </Box>
    </Tooltip>
  );
}