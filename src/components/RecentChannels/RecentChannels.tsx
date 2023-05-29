import { FocusNode } from '@please/lrud'
import { ChannelTile } from './ChannelTile'

const TV_CHANNELS = [{
	id: 1,
	name: 'Star Dance',
	logo: '/images/channels/rtl.webp'
}, {
	id: 2,
	name: 'Televizní noviny',
	logo: '/images/channels/mtv.webp'
}, {
	id: 3,
	name: 'Sicario',
	logo: '/images/channels/nbc.jpg'
}, {
	id: 4,
	name: 'Simpsonovi XVII',
	logo: '/images/channels/star.webp'
}, {
	id: 5,
	name: 'Počasí',
	logo: '/images/channels/svt.webp'
}, {
	id: 6,
	name: 'Matrix',
	logo: '/images/channels/fox.webp'
}, {
	id: 7,
	name: 'UPN News',
	logo: '/images/channels/upn.webp'
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
								<FocusNode key={index} focusedClass='channel-focused' className='text-white'>
									<ChannelTile title={channel.name} imageUrl={channel.logo} />
								</FocusNode>
							)
						})
					}
				</div>
			</div>
		</div>
	)
}