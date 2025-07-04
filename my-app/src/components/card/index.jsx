import './index.css'

export default function Card(props) {
	return (
		<>
			<div className='all_Card'>
				<h3>{props.name}</h3>
				<h2>{props.many}</h2>
				<p>{props.people}</p>
				<h3>{props.name2}</h3>
				<p>{props.gig}</p>
				<p>{props.gig2}</p>
				<p>{props.gig3}</p>
				<br />
				<br />
				<br />
				<br />

				<button className='get'>{props.btn}</button>
			</div>
		</>
	)
}
