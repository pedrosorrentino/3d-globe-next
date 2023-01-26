import { createRef, forwardRef } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
const GlobeMap = dynamic(() => import('../components/GlobeMap'), {
  ssr: false,
})

export default function Home() {
  const ref = createRef()

  const Globe = forwardRef((props, ref) => (
    <GlobeMap {...props} forwardRef={ref} />
  ))
  return (
    <>
      <Head>
        <title>3D Globe with Next</title>
        <meta name='description' content='3D Globe with Next' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Globe
          ref={ref}
          globeImageUrl={'//unpkg.com/three-globe/example/img/earth-day.jpg'}
          backgroundImageUrl={
            '//unpkg.com/three-globe/example/img/night-sky.png'
          }
        />
      </main>
    </>
  )
}
