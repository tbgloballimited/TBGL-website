import Head from 'next/head'
import Script from 'next/script'

const Meta = ({title, keywords, description}) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
        <meta charSet='utf-8' />
        <link rel='icon' href='/favicon.ico' />
        <title>{title}</title>
        <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
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