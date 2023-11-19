import { Box, Button, Typography } from "@mui/material";
import Section from "../components/Section";
import { Company, WorkExperienceItem as IWorkExperienceItem } from "../lib/types";
import { formatDate } from "../lib/utils";
import Link from "../components/Link";

const WE_BAR_WIDTH = 4;

export default function WorkExperienceSection() {
  return (
    <Section title="Work Experience" subtitle="Places I worked">
      <Box 
        sx={{ 
          '&:before': { 
            content: '""',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            width: WE_BAR_WIDTH,
            backgroundColor: '#9FA8DA',
            borderRadius: 2,
          },
          position: 'relative',
        }}
      >
        <WorkExperienceItem
          company={companies.ogor}
          jobTitle="Frontend Developer"
          startDate="2021-06-01"
          endDate="2023-10-01"
          links={[
            { title: 'OGOR demo', url: 'https://ogor.ro/demo-farm' },
            { title: 'OGOR on the App Store', url: 'https://apps.apple.com/us/app/ogor/id6450506529' },
          ]}
        >
          <ul className="list">
            <li>
              Leveraged the Google Maps API to integrate NDVI/NDWI map overlays derived from processed 
              satellite imagery of agricultural fields within a Vue.js application, developed using TypeScript.
            </li>
            <li>
              Constructed interactive SVG graphs presenting processed data,
              enhancing user navigation and data visualization.
            </li>
            <li>
              Collaborated closely with backend developers working with the Python/Django stack 
              and the UI/UX designer utilizing Figma for design and user experience integration.
            </li>
            <li>
              Spearheaded the development of a React Native application from scratch, expanding the frontend app's reach 
              to iOS and Android platforms. Employed technologies such as Redux, React Native Maps, Reanimated, 
              and more for a seamless mobile experience.
            </li>
            <li>
              Led the development of a React Native design component library, streamlining the sharing of these elements 
              across applications to foster uniformity and improve the development process's efficiency.
            </li>
          </ul>
        </WorkExperienceItem>
        <WorkExperienceItem
          company={companies.fmi}
          jobTitle="Teaching Assistant"
          startDate="2022-01-01"
          endDate={null}
          links={[
            { title: 'My lab materials (made with Angular)', url: 'https://tw-labs.haginus.ro' }
          ]}
        >
          <ul className="list">
            <li>Conducting two lab sessions per week to instruct students in the fundamentals of Web Techniques, an introductory course on essential web development technologies, including HTML, CSS, and JavaScript, enabling students to establish a strong foundation.</li>
            <li>Experimenting with diverse teaching methods to effectively convey information, ensuring students grasp complex technical concepts.</li>
            <li>Refining teaching skills by adapting to the evolving needs of the students, while also remaining in sync with younger generations.</li>
          </ul>
        </WorkExperienceItem>
        <WorkExperienceItem
          company={companies.fmi}
          jobTitle="Analyst Programmer"
          startDate="2022-10-01"
          endDate={null}
        >
          <ul className="list">
            <li>Successfully managed and maintained the faculty website, ensuring functionality, user-friendliness, and optimal performance.</li>
            <li>Designed, developed, and maintained applications aimed at enhancing the overall faculty experience for students, teachers, and administrative staff.</li>
            <li>Generated SSL certificates for associated domains utilizing tools like Let's Encrypt, configuring NGINX servers running in Docker containers, and implementing tools like Certbot for automated certificate renewal.</li>
            <li>Effectively managed DNS records for the faculty domain to route traffic to the server hosting the applications.</li>
            <li>Provided prompt and comprehensive support to users encountering application-related difficulties, resolving issues efficiently.</li>
            <li>Responsively addressed user feedback and actively tackled reported application bugs, thereby elevating user satisfaction and improving application quality.</li>
          </ul>
        </WorkExperienceItem>
      </Box>
    </Section>
  );
}

export interface WorkExperienceItemProps extends IWorkExperienceItem {
  children?: React.ReactNode;
}

function WorkExperienceItem({ company, jobTitle, startDate, endDate, links, children }: WorkExperienceItemProps) {
  return (
    <Box
      sx={{ 
        '&:before': { 
          content: '""',
          position: 'absolute',
          top: 10,
          transform: 'translateY(-50%)',
          left: -WE_BAR_WIDTH / 2,
          width: 8,
          height: 8,
          backgroundColor: '#E91E63',
          borderRadius: '50%',
        },
        position: 'relative',
        pl: 2,
        mb: 4,
      }}>
      <Typography 
        variant="caption" 
        component="div" 
        sx={{ height: 20, lineHeight: '20px', color: '#E91E63', textTransform: 'uppercase' }}
      >
        {formatDate(startDate)} - {endDate ? formatDate(endDate) : 'Present'}
      </Typography>
      <Box className="nsl" sx={{ my: 2 }}>
        <img src={company.logo} height={80} style={{ maxWidth: '100%', objectFit: 'contain' }} />
      </Box>
      <Typography variant="h5" component="div">
        <Link href={company.website} target="_blank">
          {company.name}
        </Link>
      </Typography>
      <Typography variant="h6" component="div" sx={{ fontWeight: '500', mb: 1 }}>
        {jobTitle}
      </Typography>
      {children}
      {links && (
        <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {links.map(({ title, url }) => (
            <Button color="primary" variant="contained" href={url} target="_blank" key={title}>
              <Typography sx={{ textTransform: 'none' }}>{title}</Typography>
            </Button>
          ))}
        </Box>
      )}
    </Box>
  );
}

const companies: Record<'fmi' | 'ogor', Company> = {
  fmi: {
    name: 'Faculty of Mathematics and Informatics',
    logo: '/images/logos/fmi.png',
    website: 'https://fmi.unibuc.ro',
  },
  ogor: {
    name: 'OGOR',
    logo: '/images/logos/ogor.png',
    website: 'https://ogor.ro',
  },
}

