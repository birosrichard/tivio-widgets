import { FocusNode } from '@please/lrud'
import { Banner } from '../components/Banner/Banner'
import { ExternalTivioWidget } from '../components/ExternalTivioWidget'
import { Movies } from '../components/Movies/Movies'
import { RecentChannels } from '../components/RecentChannels/RecentChannels'
import { RootLayout } from '../components/RootLayout'

const COMPONENTS = [{
  name: 'Banner',
  component: Banner
}, {
  name: 'RecentChannels',
  component: RecentChannels
}, {
  name: 'ExternalTivioWidget',
  component: ExternalTivioWidget
}, {
  name: 'Movies',
  component: Movies
}]

export default function Root() {

  return (
    <RootLayout>
      <FocusNode focusedClass='' orientation='vertical'>
        <FocusNode focusedClass='' wrapping>
          <Banner />
        </FocusNode>
        <FocusNode focusedClass='' wrapping>
          <RecentChannels />
        </FocusNode>
        <FocusNode focusId='widget'>
          <ExternalTivioWidget />
        </FocusNode>
        <FocusNode focusedClass='' wrapping>
          <Movies />
        </FocusNode>
      </FocusNode>
    </RootLayout>
  )
}