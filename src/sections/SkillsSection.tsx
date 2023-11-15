import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import Section from "../components/Section";
import TechnologyChip from "../components/TechnologyChip";

export default function SkillsSection() {
  return (
    <Section title="Skills" subtitle="Resume of the resume">
      <Table sx={{ width: 'unset' }} aria-label="Skills table">
        <TableBody>
          <SkillRow title="Frontend">
            <TechnologyChip technology="typescript" />
            <TechnologyChip technology="angular" />
            <TechnologyChip technology="react" />
            <TechnologyChip technology="reactNative" />
            <TechnologyChip technology="vue" />
          </SkillRow>
          <SkillRow title="Backend">
            <TechnologyChip technology="node" />
            <TechnologyChip technology="express" />
            <TechnologyChip technology="nestjs" />
            <TechnologyChip technology="spring" />
          </SkillRow>
          <SkillRow title="Databases">
            <TechnologyChip technology="mysql" />
            <TechnologyChip technology="postgresql" />
            <TechnologyChip technology="firebase" />
          </SkillRow>
          <SkillRow title="Tools">
            <TechnologyChip technology="git" />
            <TechnologyChip technology="docker" />
            <TechnologyChip technology="kubernetes" />
            <TechnologyChip technology="nginx" />
          </SkillRow>
        </TableBody>
      </Table>
    </Section>
  );
}

interface SkillRowProps {
  title: string;
  children: React.ReactNode;
}

function SkillRow({ title, children }: SkillRowProps) {
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row" padding="none">
        {title}
      </TableCell>
      <TableCell padding="none">
        <Box sx={{ display: "flex", gap: 1, flexWrap: 'wrap', p: 1 }}>
          {children}
        </Box>
      </TableCell>
    </TableRow>
  );
}
