interface Props {
	title: string
	imageUrl: string
}

export const ChannelTile = ({ title, imageUrl }: Props) => {
	return (
		<div>
			<div className='relative w-48 h-48 transition-all duration-200 ease-in-out transform hover:scale-105 bg-background overflow-hidden'>
				<img src='/images/channels/background.png' alt='background' className='absolute w-full h-full' />
				<div className='absolute inset-0 flex items-center justify-center'>
					<img className="object-contain w-16 h-16" src={imageUrl} alt={title} />
				</div>
			</div>
			<h3 className='title p-4'>{title}</h3>
		</div>
	)
}
