'use client'
import { Banner } from '../components/Banner/Banner'
import FeaturedCategories from '../components/Categories/FeaturedCategories'
import { ExternalTivioWidget } from '../components/ExternalTivioWidget'
import { Movies } from '../components/Movies/Movies'
import { RecentChannels } from '../components/RecentChannels/RecentChannels'
import { RootLayout } from '../components/RootLayout'

export default function Root() {

  return (
    <RootLayout>
      <Banner />
      <RecentChannels />
      <ExternalTivioWidget />
      {/* <FeaturedCategories /> */}
      <Movies />
    </RootLayout>
  )
}