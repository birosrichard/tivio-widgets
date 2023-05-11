// Banner.js
import React from 'react';
import PlayButton from './PlayButton';
import { MdPlaylistAdd, MdInfoOutline } from 'react-icons/md';
import {MyListButton} from './MyListButton';
import {InfoButton} from './InfoButton';

export const Banner = () => {

    console.log('debug:Banner')

    const movieTitle = 'Dune';
    const movieDescription =
        "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.";

    const handlePlayButtonClick = () => {
        console.log('Play button clicked');
        // Add your play button click logic here
    };

    const handleMyListButtonClick = () => {
        console.log('My List button clicked');
        // Add your My List button click logic here
    };

    const handleInfoButtonClick = () => {
        console.log('Info button clicked');
        // Add your Info button click logic here
    };

    return (
        <div className="relative h-[35rem] md:h-[50rem] xl:h-[75vh] w-full overflow-hidden">
            <img
                className="object-cover object-center w-full h-full"
                src="https://images7.alphacoders.com/118/1183638.jpeg"
                alt="movie-banner"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
            <div className="absolute bottom-0 left-0 mx-8 md:mx-16 xl:mx-32 mb-8 md:mb-16 xl:mb-24 text-left flex flex-col items-start justify-end">
                <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-bold mb-4">{movieTitle}</h1>
                <p className="text-white text-lg md:text-xl xl:text-2xl mb-4 max-w-xl">{movieDescription}</p>
                <div className="w-full md:w-auto flex space-x-4">
                    <PlayButton onClick={handlePlayButtonClick} />
                    <MyListButton handleMyListButtonClick={handleMyListButtonClick} />
                    <InfoButton handleInfoButtonClick={handleInfoButtonClick} />
                </div>
            </div>
        </div>
    );
};
