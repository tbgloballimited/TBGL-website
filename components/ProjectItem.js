import styles from '../styles/Project.module.css'
import Link from 'next/link'
import Image from 'next/image'
import matter from 'gray-matter'
import { marked } from 'marked'
import path, { parse } from 'path'

const ProjectItem = ({projects, data, content}) => {
  return (   
<></>
  )
}

// export const getStaticProps = async() => {
//   const res = await fetch(`${server}/api/projects`)
//   const projects= await res.json()
//   const ids = projects.map((project) => project.id)
//   const paths = ids.map((id) => ({param: {id: id.toString()}}))

//   return {
//     paths,
//     fallbalck:false,
//   }
// }



export default ProjectItem