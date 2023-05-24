import PlayButton from './PlayButton'
import { InfoButton } from './InfoButton'

export const Banner= () => {

    const movieDescription =
        "Na stříbrné plátno přichází jeden z nejpodmanivějších a nerozporuplnějších hrdinů filmového světa značky Marvel"

    const handlePlayButtonClick = () => {
        console.log('Play button clicked')
        // Add your play button click logic here
    }

    const handleInfoButtonClick = () => {
        console.log('Info button clicked')
        // Add your Info button click logic here
    }

    return (
        <div className="relative h-[35rem] md:h-[50rem] xl:h-[80vh] w-full overflow-hidden">
            <img
                className="absolute top-0 left-0 object-cover object-right-top w-full h-full"
                src="/images/morbius_banner.jpeg"
                alt="movie-banner"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black to-transparent opacity-100" />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-100" />
            <div className="absolute top-0 left-0 mx-8 md:mx-32 mb-8 md:mb-24 text-left flex flex-col items-start justify-end mt-64">
                <img
                    className=""
                    src="/images/morbius_logo.png"
                    alt="Morbius logo"
                />
                <p className="text-white text-lg md:text-xl xl:text-2xl mb-4 max-w-2xl pt-5">{movieDescription}</p>
                <div className="w-full md:w-auto flex space-x-4">
                    <PlayButton onClick={handlePlayButtonClick} />
                    <InfoButton handleInfoButtonClick={handleInfoButtonClick} />
                </div>
            </div>
        </div>
    )
}
