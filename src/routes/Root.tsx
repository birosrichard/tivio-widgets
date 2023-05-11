'use client'
import { Banner } from '../components/Banner/Banner'
import FeaturedCategories from '../components/Categories/FeaturedCategories'
import { ExternalTivioWidget } from '../components/ExternalTivioWidget'

export default function Root() {
  return (
    <>
      <Banner />
      <ExternalTivioWidget />
      <FeaturedCategories />
    </>
  )
}