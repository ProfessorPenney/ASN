import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
   return (
      <Head>
         <meta name='viewport' content='width=device-width, initial-scale=1' />
         <meta name='keywords' content={keywords} />
         <meta name='ASN' content='Asenal Sports Nutrition Store' />
         <meta name='description' content={description} />
         <link rel='icon' href='/favicon.ico' />
         <title>{title}</title>
      </Head>
   )
}

Meta.defaultProps = {
   title: 'Arsenal Sports Nutrition',
   keywords: 'arsenal, sports nutrition, supplements',
   description: 'Build Your Arsenal of Sports Nutrition Products'
}

export default Meta
