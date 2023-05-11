import {MdPlaylistAdd} from 'react-icons/md';
import React from 'react';

interface Props {
    handleMyListButtonClick: () => void;
}
export const MyListButton = ({handleMyListButtonClick}: Props) => {
    return (
        <button
            onClick={handleMyListButtonClick}
            className="bg-gray-700 text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50 inline-flex items-center"
        >
            <MdPlaylistAdd size="1.5rem" className="mr-2" />
            <span className="font-semibold text-lg">My List</span>
        </button>
    )
}
