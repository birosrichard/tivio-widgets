import React from 'react';
import { MdPlayArrow } from 'react-icons/md';

type Props = {
    onClick: () => void;
}
const PlayButton = ({ onClick }: Props) => {
    return (
        <button
            onClick={onClick}
            className="bg-red-600 text-white p-2 pl-4 pr-6 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 inline-flex items-center"
        >
            <MdPlayArrow size="1.5rem" className="mr-2" />
            <span className="font-semibold text-lg">Play</span>
        </button>
    );
};

export default PlayButton;
