import { FocusNode } from '@please/lrud'
import { VideoTile } from '../VideoTile'
import { motion } from 'framer-motion'

const MOVIES = [{
	title: 'Pirates of the Caribbean',
	imageUrl: '/images/movies/pirates.webp',
}, {
	title: 'The Shawshank Redemption',
	imageUrl: '/images/movies/shawshank.webp',
}, {
	title: 'The Matrix 4',
	imageUrl: '/images/movies/matrix.webp',
}, {
	title: 'Gone Girl',
	imageUrl: '/images/movies/gone-girl.webp',
}, {
	title: 'Star Wars: New Hope',
	imageUrl: '/images/movies/new-hope.webp',
}, {
	title: 'Avatar',
	imageUrl: '/images/movies/avatar.webp',
}, {
	title: 'The Godfather',
	imageUrl: '/images/movies/godfather.jpg',
}, {
	title: 'Pulp Fiction',
	imageUrl: '/images/movies/pulp.webp',
}, {
	title: 'Top Gun',
	imageUrl: '/images/movies/top-gun.webp',
}, {
	title: 'Star Wars: New Hope',
	imageUrl: '/images/movies/new-hope.webp',
}, {
	title: 'Avatar',
	imageUrl: '/images/movies/avatar.webp',
}, {
	title: 'The Godfather',
	imageUrl: '/images/movies/godfather.jpg',
}, {
	title: 'Pulp Fiction',
	imageUrl: '/images/movies/pulp.webp',
}, {
	title: 'Top Gun',
	imageUrl: '/images/movies/top-gun.webp',
}]

const ROW_WIDTH = 289


export const Movies = ({ gridPosition }: any) => {
	console.log('debug:gridPosition', gridPosition)
	console.log('debug:x', -ROW_WIDTH * gridPosition.columnIndex)
	return (
		<div className='w-full pl-32'
		>
			<h2 className='text-4xl text-white mb-5'>Movies</h2>
			<div className='flex items-center w-full overflow-x-auto overflow-y-hidden scrollbar-hide'>
				<motion.div className='flex whitespace-nowrap space-x-[43px]'
					animate={{
						scale: 1,
						opacity: 1,
						x: (-ROW_WIDTH * gridPosition.columnIndex) > -800 ? 0 : (-ROW_WIDTH * gridPosition.columnIndex) + 800,
					}}
					transition={{
						duration: 0.25,
						ease: 'easeOut',
					}}>
					{
						MOVIES.map((movie, index) => {
							return (
								<VideoTile key={index} title={movie.title} imageUrl={movie.imageUrl} />
							)
						})
					}
				</motion.div>
			</div>
		</div>
	)
}