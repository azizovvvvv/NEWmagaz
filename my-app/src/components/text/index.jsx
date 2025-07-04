import './index.css'
export default function Text(props) {
	return (
		<>
			<div className='all_text'>
				<img src={props.img} alt='error' />

				<h1>{props.name}</h1>
				<p>{props.forem}</p>
			</div>
		</>
	)
}
