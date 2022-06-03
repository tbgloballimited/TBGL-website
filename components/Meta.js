import Head from 'next/head'

const Meta = ({title, keywords, description}) => {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width,
        initial-scale=1' />
        <meta name='viewport' content={keywords} />
        <meta name='description' content={description} />
        <meta charSet='utf-8' />
        <link rel='icon' href='/favicon.ico' />
        <title>{title}</title>
      </Head>
    </>
  )
}

Meta.defaultProps = {
  title: 'Tunde Ben Global Limited',
  keywords: 'TBGL',
  description: 'Let your power problem be our problem',
}

export default Meta