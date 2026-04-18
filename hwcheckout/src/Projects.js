import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ProjectCard from './ProjectCard';

// ✅ Hardcoded project data (no database needed for this task)
const PROJECT_DATA = [
  {
    id: 1,
    name: 'Project Name 1',
    users: 'alice, bob, carol',
    hardwareSets: [
      { name: 'HWSet1', checked: 50, total: 100 },
      { name: 'HWSet2', checked: 0,  total: 100 },
    ],
  },
  {
    id: 2,
    name: 'Project Name 2',
    users: 'dave, eve',
    hardwareSets: [
      { name: 'HWSet1', checked: 50, total: 100 },
      { name: 'HWSet2', checked: 0,  total: 100 },
    ],
  },
  {
    id: 3,
    name: 'Project Name 3',
    users: 'frank, grace, henry',
    hardwareSets: [
      { name: 'HWSet1', checked: 0, total: 100 },
      { name: 'HWSet2', checked: 0, total: 100 },
    ],
  },
];

// ✅ REQUIREMENT: Main Projects component
function Projects() {
  return (
    <Box sx={{ maxWidth: 900, margin: '40px auto', padding: '0 16px' }}>
      <Typography variant="h4" fontWeight={700} mb={3}>
        Projects
      </Typography>

      {/* ✅ REQUIREMENT: ProjectCard reused multiple times with props passed down */}
      {PROJECT_DATA.map((project) => (
        <ProjectCard
          key={project.id}
          id={project.id}   
          name={project.name}
          users={project.users}
          hardwareSets={project.hardwareSets}
        />
      ))}
    </Box>
  );
}

export default Projects;