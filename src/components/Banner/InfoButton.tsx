import {MdInfoOutline, MdPlaylistAdd} from 'react-icons/md';
import React from 'react';

interface Props {
    handleInfoButtonClick: () => void;
}
export const InfoButton = ({handleInfoButtonClick}: Props) => {
    return (
        <button
            onClick={handleInfoButtonClick}
            className="bg-gray-700 text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50 inline-flex items-center"
        >
            <MdInfoOutline size="1.5rem" className="mr-2" />
            <span className="font-semibold text-lg">Info</span>
        </button>
    )
}
