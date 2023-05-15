interface Props {
	title: string
	imageUrl: string
}

export const VideoTile = ({ title, imageUrl }: Props) => {
	return (
		<div className='w-[289px] rounded-[0.925vh] transition-all duration-200 ease-in-out transform hover:scale-105 m-2 group'>
			<img className="object-cover w-[289px] h-[162px]" src={imageUrl} alt={title} />
			<h3 className='text-white p-2 group-hover:bg-white group-hover:text-black'>{title}</h3>
		</div>
	)
}
