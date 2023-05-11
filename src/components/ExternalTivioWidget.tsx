import { TivioWidget } from '@tivio/sdk-react'
import { useRef } from 'react'
import { useNavigate } from "react-router-dom";

export const ExternalTivioWidget = () => {
  const widgetRef = useRef(null)
  const navigate = useNavigate()

  return (
    <main
      className='w-full bg-[#434343]'
    >
      <div className='p-8 md:p-16 xl:p-32'>
        <div>
          <TivioWidget id='um7C2FdGfNonhHC7pHSz' ref={widgetRef} navigateFunction={navigate} />
        </div>
      </div>
    </main>
  )
}
