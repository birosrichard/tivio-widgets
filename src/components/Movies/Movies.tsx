import { VideoTile } from '../VideoTile'

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


export const Movies = () => {
	return (
		<div className='w-full pl-32 '>
			<h2 className='text-4xl text-white mb-5'>Movies</h2>
			<div className='flex items-center w-full overflow-x-auto overflow-y-hidden scrollbar-hide'>
				<div className='flex whitespace-nowrap space-x-[43px]'>
					{
						MOVIES.map((movie, index) => {
							return (
								<VideoTile key={index} title={movie.title} imageUrl={movie.imageUrl} />
							)
						})
					}
				</div>
			</div>
		</div>
	)
}