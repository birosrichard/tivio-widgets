import { useState, useEffect } from 'react'
import { HiFilm, HiHome, HiTv, HiMagnifyingGlass, HiUserCircle, HiCog } from 'react-icons/hi2'

const Sidebar = () => {
	const [currentTime, setCurrentTime] = useState(new Date())

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentTime(new Date())
		}, 10000)
		return () => {
			clearInterval(timer)
		}
	}, [])

	return (
		<div className='p-5 flex flex-col items-center justify-between h-screen bg-[#00040a] text-white w-fit z-50 fixed'>
			<div>
				<div className='flex flex-col items-center justify-center'>
					<h1 className='text-[57px] mb-2 font-bold'>Q</h1>
					<p>{currentTime.getHours().toString().padStart(2, '0')}:{currentTime.getMinutes().toString().padStart(2, '0')}</p>
				</div>
			</div>
			<div className='space-y-8'>
				<div className='flex flex-col items-center border-r-2 border-white -mr-5 pr-[18px]'>
					<HiHome size={32} />
					<p>Home</p>
				</div>
				<div className='flex flex-col items-center'>
					<HiFilm size={32} />
				</div>
				<div className='flex flex-col items-center'>
					<HiTv size={32} />
				</div>
				<div className='flex flex-col items-center'>
					<HiMagnifyingGlass size={32} />
				</div>
			</div>
			<div className='space-y-4'>
				<HiUserCircle size={32} />
				<HiCog size={32} />
			</div>
		</div>
	)
}

export default Sidebar