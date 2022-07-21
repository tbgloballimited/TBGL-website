import styles from '../styles/Project.module.css'
import ProjectItem from './ProjectItem'

const ProjectList = ({projects}) => {
  return (
    <>      
    <div className={styles.containerProject}>
  
      <ul>
        {projects.map((project) => (
          <ProjectItem key={project.id} projects={project} />
        ))}
      </ul>
    </div>
    </>
    
  )
}

export default ProjectList