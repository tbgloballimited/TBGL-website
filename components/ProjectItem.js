import styles from '../styles/Project.module.css'
import Link from 'next/link'
import Image from 'next/image'

const ProjectItem = ({projects}) => {
  return (   
      <li style={{
          backgroundImage: `url(${projects.image})`
        }}>
        <div className='overlay'> 
            <h4>{projects.title}</h4>
            
            <Link href={`/projects/${projects.id}`}><h4> View More &#12297; </h4></Link>
        </div>
      </li>

  )
}

export const getStaticPaths = async() => {
  const res = await fetch(`${server}/api/projects`)
  const projects= await res.json()
  const ids = projects.map((project) => project.id)
  const paths = ids.map((id) => ({param: {id: id.toString()}}))

  return {
    paths,
    fallbalck:false,
  }
}

export default ProjectItem