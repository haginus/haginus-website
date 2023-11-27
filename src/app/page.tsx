import Header from '@/components/Header'
import SkillsSection from '@/sections/SkillsSection'
import WorkExperienceSection from '@/sections/WorkExperienceSection'
import EducationSection from '@/sections/EducationSection'
import Footer from '@/components/Footer'
import ProjectsSection from '@/sections/ProjectsSection'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <SkillsSection />
        <WorkExperienceSection />
        <ProjectsSection />
        <EducationSection />
      </main>
      <Footer />
    </>
  )
}
