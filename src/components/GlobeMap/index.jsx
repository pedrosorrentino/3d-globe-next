import { useEffect } from 'react'
import GlobeTmpl from 'react-globe.gl'
import dataAirports from '../../db/airports.json'

const GlobeMap = ({ forwardRef, ...otherProps }) => {
  // const filteredAirports = dataAirports.filter((d) => d.nameCountry === 'Spain')
  // console.log('AIRPORTS', filteredAirports)
  const gDataArcs = dataAirports.map((item) => ({
    startLat: -17.05,
    startLng: -145.41667,
    endLat: item.latitudeAirport,
    endLng: item.longitudeAirport,
    color: [
      ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)],
      ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)],
    ],
  }))

  useEffect(() => {
    forwardRef.current.controls().autoRotate = true
    forwardRef.current.controls().autoRotateSpeed = 0.3
    forwardRef.current.pointOfView({ altitude: 2 }, 5000)
  }, [])

  return (
    <GlobeTmpl
      ref={forwardRef}
      {...otherProps}
      arcsData={gDataArcs}
      arcColor={'color'}
      arcDashLength={0.3}
      arcDashAnimateTime={() => Math.random() * 14000 + 800}
    />
  )
}

export default GlobeMap
