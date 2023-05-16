import { ChannelTile } from './ChannelTile'

const TV_CHANNELS = [{
	id: 1,
	name: 'Star Dance',
	logo: '/images/channels/rtl.png'
}, {
	id: 2,
	name: 'Televizní noviny',
	logo: '/images/channels/mtv.png'
}, {
	id: 3,
	name: 'Sicario',
	logo: '/images/channels/nbc.png'
}, {
	id: 4,
	name: 'Simpsonovi XVII',
	logo: '/images/channels/star.png'
}, {
	id: 5,
	name: 'Počasí',
	logo: '/images/channels/svt.png'
}, {
	id: 6,
	name: 'Matrix',
	logo: '/images/channels/fox.png'
}, {
	id: 7,
	name: 'UPN News',
	logo: '/images/channels/upn.png'
}, {
	id: 8,
	name: 'Den kdy se zastavila Země',
	logo: '/images/channels/mtv.png'
}]

export const RecentChannels = () => {
	return (
		<div className='w-full pl-32 -mt-64'>
			<h2 className='text-4xl text-white mb-5 z-50 relative'>Recent Channels</h2>
			<div className='flex items-center w-full overflow-x-auto overflow-y-hidden scrollbar-hide'>
				<div className='flex whitespace-nowrap space-x-8'>
					{
						TV_CHANNELS.map((channel, index) => {
							return (
								<ChannelTile key={index} title={channel.name} imageUrl={channel.logo} />
							)
						})
					}
				</div>
			</div>
		</div>
	)
}