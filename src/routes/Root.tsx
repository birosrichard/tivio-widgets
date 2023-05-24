import { useState } from 'react'
import { FocusNode, useSetFocus } from '@please/lrud'
import { Banner } from '../components/Banner/Banner'
import { ExternalTivioWidget } from '../components/ExternalTivioWidget'
import { Movies } from '../components/Movies/Movies'
import { RecentChannels } from '../components/RecentChannels/RecentChannels'
import { RootLayout } from '../components/RootLayout'
import { motion } from 'framer-motion'

const COMPONENTS = [
  { name: 'Banner', component: Banner },
  { name: 'RecentChannels', component: RecentChannels },
  { name: 'ExternalTivioWidget', component: ExternalTivioWidget },
  { name: 'Movies', component: Movies },
]

export default function Root() {
  const [gridPosition, setGridPosition] = useState({
    rowIndex: 0,
    columnIndex: 0,
  })
  const setFocus = useSetFocus()
  const ROW_HEIGHT = 280

  return (
    <RootLayout>
      <FocusNode
        focusedClass=''
        orientation='vertical'
        className="home page"
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
          return (
            <FocusNode
              key={rowIndex}
              focusedClass=''>
              <Component
                key={rowIndex}
                // rowIndex={rowIndex}
                // gridPosition={gridPosition}
                />
            </FocusNode>
          )
        })}
      </FocusNode>
    </RootLayout>
  )
}
