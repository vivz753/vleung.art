import type { NextPage } from 'next'
import Rainbow from '../src/components/molecules/Rainbow'

const Home: NextPage = () => {
  return (
		<div className="flex flex-row gap-10 items-center justify-center">
			<div className="flex flex-col gap-5">
			<Rainbow />
			<div className="w-72 h-72 rounded-xl bg-center bg-cover" style={{ backgroundImage: `url('/images/icecream.JPG')` }} />
			</div>
			<div className="flex flex-col gap-5">
				<span className="">vivian leung</span>
				<span className="">26</span>
				<span className="">she/they</span>
			</div>
		</div>
  )
}

export default Home
