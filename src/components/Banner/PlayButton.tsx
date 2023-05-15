import React from 'react'
import { MdPlayArrow } from 'react-icons/md'

type Props = {
    onClick: () => void
}
const PlayButton = ({ onClick }: Props) => {
    return (
        <button
            onClick={onClick}
            className="button-base-styles bg-white text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 inline-flex items-center"
        >
            <MdPlayArrow size="1.5rem" className="mr-2" />
            <span className="font-semibold text-lg uppercase">Přehrát</span>
        </button>
    )
}

export default PlayButton
