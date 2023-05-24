import { useState } from 'react'
import { FocusNode, useFocusNodeById, useSetFocus } from '@please/lrud'
import { Banner } from '../components/Banner/Banner'
import { ExternalTivioWidget } from '../components/ExternalTivioWidget'
import { Movies } from '../components/Movies/Movies'
import { RecentChannels } from '../components/RecentChannels/RecentChannels'
import { RootLayout } from '../components/RootLayout'
import { motion } from 'framer-motion'

const COMPONENTS: { name: string, component: React.ComponentType<any>, focusId: string }[] = [
  { name: 'Banner', component: Banner, focusId: 'banner' },
  { name: 'RecentChannels', component: RecentChannels, focusId: 'recent-channels' },
  { name: 'ExternalTivioWidget', component: ExternalTivioWidget, focusId: 'widget' },
  { name: 'Movies', component: Movies, focusId: 'movies' },
]

export default function Root() {
  const [gridPosition, setGridPosition] = useState({
    rowIndex: 0,
    columnIndex: 0,
  })
  const setFocus = useSetFocus()
  const ROW_HEIGHT = 280

  const navFocusNode = useFocusNodeById('widget')
  console.log('debug:isWidgetFocused:', navFocusNode?.isFocused)

  return (
    <RootLayout>
      <FocusNode
        focusedClass=''
        isGrid
        focusId="home"
        defaultFocusColumn={gridPosition.columnIndex}
        defaultFocusRow={gridPosition.rowIndex}
        onLeft={(e) => {
          if (gridPosition.columnIndex === 0) {
            e.preventDefault()
            setFocus('nav')
          }
        }}
        onGridMove={(e) => {
          console.log('debug:e', e)
          setGridPosition({
            rowIndex: e.nextRowIndex,
            columnIndex: e.nextColumnIndex,
          })
        }}
        elementType={motion.div}
        // @ts-ignore
        initial={{
          scale: 0.8,
          opacity: 0,
          y: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
          y: -ROW_HEIGHT * gridPosition.rowIndex,
        }}
        exit={{
          scale: 1.15,
          opacity: 0,
        }}
        transition={{
          duration: 0.25,
          ease: 'easeOut',
        }}>
        {COMPONENTS.map((componentObj, rowIndex) => {
          const Component = componentObj.component
          switch (componentObj.name) {
            case 'Banner':
              return (
                <FocusNode
                  key={rowIndex}
                  focusId={componentObj.focusId}
                  focusedClass=''
                >
                  <Component key={rowIndex} />
                </FocusNode>
              )
            case 'RecentChannels':
              return (
                <FocusNode
                  key={rowIndex}
                  focusId={componentObj.focusId}
                  focusedClass=''
                >
                  <Component key={rowIndex} />
                </FocusNode>
              )
            case 'ExternalTivioWidget':
              return (
                <FocusNode
                  key={rowIndex}
                  focusId={componentObj.focusId}
                  focusedClass=''
                >
                  <Component key={rowIndex} />
                </FocusNode>
              )
            case 'Movies':
              return (
                <FocusNode
                  key={rowIndex}
                  focusId={componentObj.focusId}
                  focusedClass=''
                >
                  <Component key={rowIndex} gridPosition={gridPosition} />
                </FocusNode>
              )
            default:
              return null
          }
        })}
      </FocusNode>
    </RootLayout>
  )
}
