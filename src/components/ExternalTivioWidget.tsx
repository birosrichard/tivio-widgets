import { TivioWidget } from '@tivio/sdk-react'
import { useRef } from 'react'
import { useNavigate } from "react-router-dom"

export const ExternalTivioWidget = () => {
  const widgetRef = useRef(null)
  const navigate = useNavigate()

  return (
    <main
      className='w-full bg-background'
    >
      <div className='pl-32 mt-24'>
        <div>
          <TivioWidget id='lJyCuFwzxci0n3ggKBXV' ref={widgetRef} navigateFunction={navigate} />
        </div>
      </div>
    </main>
  )
}
