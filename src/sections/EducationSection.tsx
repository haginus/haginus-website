import { Box, Typography } from "@mui/material";
import Section from "../components/Section";
import { Faculty } from "../lib/types";
import { formatDate } from "../lib/utils";
import Link from "@/components/Link";

const faculties = {
  fmi: {
    name: "Faculty of Mathematics and Informatics",
    university: "University of Bucharest",
    website: "https://fmi.unibuc.ro",
  },
} satisfies Record<string, Faculty>;

export default function EducationSection() {
  return (
    <Section title="Education" subtitle="Where I studied">
      <EducationItem
        faculty={faculties.fmi}
        startDate="2021-10-01"
        endDate="2023-07-01"
        field="Software Engineering"
        degree="Master"
        grades={{
          generalAverage: 9.5,
          paperGrade: 10,
        }}
      />
      <EducationItem
        faculty={faculties.fmi}
        startDate="2018-10-01"
        endDate="2021-07-01"
        field="Computer Science"
        degree="Bachelor"
        grades={{
          generalAverage: 9.3,
          paperGrade: 10,
        }}
      />
    </Section>
  );
}

interface EducationItemProps {
  faculty: Faculty;
  startDate: string;
  endDate: string;
  field: string;
  degree: string;
  grades: {
    generalAverage: number;
    paperGrade: number;
  };
}

function EducationItem({ faculty, startDate, endDate, field, degree, grades }: EducationItemProps) {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h6" component="div">
        {degree} in {field}
      </Typography>
      <Typography variant="h6" component="div">
        <Link href={faculty.website}>{faculty.name}</Link>
        <span className="muted"> | {faculty.university}</span>
      </Typography>
      <Typography variant="caption" component="div" sx={{ color: 'text.secondary' }}>
        {formatDate(startDate)} - {formatDate(endDate)}
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 1 }}>
        General average: <strong>{grades.generalAverage}</strong> <br />
        Paper grade: <strong>{grades.paperGrade}</strong>
      </Typography>
    </Box>
  );
}