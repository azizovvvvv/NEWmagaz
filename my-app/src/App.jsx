import './App.css'
import Birzha from './assets/birzha.svg'
import Ded from './assets/Ded.svg'
import ImgStartup from './assets/Frame 1.svg'
import Compa from './assets/Frame 14.svg'
import Naushnik from './assets/Frame 17.svg'
import Granmam from './assets/Grandmam.svg'
import Man from './assets/man-2 1 1.svg'
import Meta from './assets/Meta.svg'
import Startut from './assets/Startut.svg'
import Surati2 from './assets/surati 2.svg'
import Surati3 from './assets/surati 3.svg'
import Surati4 from './assets/surati 4.svg'
import Surati5 from './assets/surati 5.svg'
import Surati6 from './assets/surati 6.svg'
import Card from './components/card'
import Text from './components/text'
export default function Home() {
	return (
		<>
			<div className='all'>
				<div className='header'>
					<div className='imgStartup'>
						<img src={ImgStartup} alt='' />
					</div>

					<div className='header_text'>
						<h2>Demos</h2>
						<h2>About</h2>
						<h2>Pages</h2>
						<h2>Contact</h2>
					</div>

					<button className='concat'>Contact us</button>
				</div>
				<div className='selection1'>
					<div className='img_selection1'>
						<img className='man' src={Man} alt='' />
					</div>
					<div className='text_selection1'>
						<h1>
							Build. <br />
							Release. <br />
							Grow.
						</h1>
						<p>
							We plan and help you run your dream business <br /> wisely. We are
							currently the most popular startup <br />
							agency.
						</p>
						<br />
						<button className='concat'>Explore our works</button>
					</div>
				</div>{' '}
			</div>
			<br />
			<div className='selection2'>
				<div className='text_selection2'>
					<h1>
						Create your project <br /> with professionals
					</h1>
					<p>
						We plan and help you run your dream business <br /> wisely. We are
						currently the most popular startup <br /> agency.
					</p>
					<div className='customer'>
						<p className='navad'>99%</p>
						<p>
							Customer <br /> support
						</p>
						<p className='xazor'>1947</p>
						<p>
							Customer <br /> support
						</p>
					</div>
				</div>
				<div className='img_selection2'>
					<img src={Compa} alt='' />
				</div>
			</div>
			<br />
			<br />
			<br />
			<br />
			<br />

			<div className='selection3'>
				<div className='text_selection3'>
					<h1>
						Key features to add <br />
						value to your business
					</h1>

					<p>
						We plan and help you run your dream business <br />
						wisely. We are currently the most popular startup{' '}
					</p>
				</div>
				<br />
				<br />
				<br />
				<br />
				<br />
				<div className='text'>
					<Text
						img={Naushnik}
						name={'Customer support'}
						forem={
							'We plan and help you run your dream business wisely     . We are currently the most popular startup '
						}
					/>
					<Text
						img={Surati2}
						name={'Increase sales'}
						forem={
							'We plan and help you run your dream business wisely     . We are currently the most popular startup '
						}
					/>
					<Text
						img={Surati3}
						name={'Onboarding'}
						forem={
							'We plan and help you run your dream business wisely     . We are currently the most popular startup '
						}
					/>
				</div>
				<br /> <br />
				<br />
				<div className='text'>
					<Text
						img={Surati4}
						name={'Product development'}
						forem={
							'We plan and help you run your dream business wisely     . We are currently the most popular startup '
						}
					/>
					<Text
						img={Surati5}
						name={'Automated reports'}
						forem={
							'We plan and help you run your dream business wisely     . We are currently the most popular startup '
						}
					/>
					<Text
						img={Surati6}
						name={'Result analysis'}
						forem={
							'We plan and help you run your dream business wisely     . We are currently the most popular startup '
						}
					/>
				</div>
			</div>

			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<div className='selection4'>
				<div className='text_selection4'>
					<h1>
						Understand sales <br />
						performance better
					</h1>
					<p>
						We plan and help you run your dream business <br /> wisely. We are
						currently the most popular startup <br />
						agency.
					</p>

					<h3>✅ Use the right sales stucture</h3>

					<h3>✅ Make decisions with date</h3>

					<h3>✅ Invest in sales enablemt</h3>
				</div>
				<div className='img_selection4'>
					<img src={Birzha} alt='' />
				</div>
			</div>
			<br />
			<br />

			<div className='selection5'>
				<div className='text_selection5'>
					<h1>See what our customers are saying</h1>
					<p>2,157 people have said how good we are</p>
				</div>

				<div className='img_selection5'>
					<img src={Ded} alt='' />
					<img src={Granmam} alt='' />
				</div>
			</div>
			<br />
			<br />
			<br />
			<div className='selection6'>
				<div className='text_selection6'>
					<h1>
						Make the wise decision <br />
						for your business
					</h1>
					<p>Choose from our affordable 3 packages</p>
				</div>
				<br />
				<br />
				<div className='card'>
					<Card
						name={'Starter plan'}
						many={'$20'}
						people={'This package is suitable forteam 1-50 people.'}
						name2={'What”s included:'}
						gig={'10 GB dedicated hosting free'}
						gig1={'Best for developers,freelancers'}
						gig2={'5 year supports'}
						btn={'Get started'}
					/>
					<Card
						name={'Basic plan'}
						many={'$20'}
						people={'This package is suitable forteam 1-50 people.'}
						name2={'What”s included:'}
						gig={'10 GB dedicated hosting free'}
						gig1={'Best for developers,freelancers'}
						gig2={'5 year supports'}
						btn={'Get started'}
					/>
					<Card
						name={'Premium plan'}
						many={'$390'}
						people={'This package is suitable forteam 1-100 people'}
						name2={'What”s included:'}
						gig={'10 GB dedicated hosting free'}
						gig1={'Best for developers,freelancers'}
						gig2={'5 year supports'}
						btn={'Get started'}
					/>
				</div>
			</div>

			<div className='selection7'>
				<div className='text_selection7'>
					<h1>best sulotion for your startup business</h1>
				</div>
				<br />

				<div className='header'>
					<div className='imgStartup'>
						<img src={Startut} alt='' />
					</div>

					<div className='header_text'>
						<h2>Demos</h2>
						<h2>About</h2>
						<h2>Pages</h2>
						<h2>Contact</h2>
					</div>

					<img src={Meta} alt='' />
				</div>
			</div>
		</>
	)
}
