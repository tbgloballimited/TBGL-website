import React from 'react'
import fs from 'fs'
import path, { parse } from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Image from 'next/image'

const projects = ({contents, data}) => {
  return (
    <>
        <div>the title of this page is : {data.title}</div>
        <div><Image src={data.images} height='300' width='270' alt="project image" /></div>
        <div>the content for this page is: 
            <div dangerouslySetInnerHTML={{ __html:contents }} />
        </div>
    </>
  )
}

export const getStaticPaths = async () => {

    const files = fs.readdirSync('content/services')
    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }))
    // console.log('paths: ', paths)
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({params: {slug}}) => {
    
    const markdownWithMetaData = fs.readFileSync(path.join('content/services', slug + '.md')).toString()

    const parsedMarkedown = matter(markdownWithMetaData)
    
    const htmlString = marked.parse(parsedMarkedown.content)

    return{
        props:{
            contents: htmlString,
            data: parsedMarkedown.data
        }
    }
}

export default projects