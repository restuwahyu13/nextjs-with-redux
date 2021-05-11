import { connect } from 'react-redux'
import { incrementCounter, decrementCounter } from '../redux/action/counter/creator'

const Home = (props) => {
	return (
		<>
			<div className='container mt-4'>
				<h2 className='text-center'>Counter App Application With Redux</h2>
				<div className='row justify-content-center'>
					<button className='btn btn-primary col-lg-6 m-2' onClick={() => props.increment(1)}>
						+
					</button>
					{props.data.count > 0 && <h5 className='text-center'>Count: {props.data.count}</h5>}
					<button className='btn btn-primary col-lg-6 m-2' onClick={() => props.decrement(1)}>
						-
					</button>
				</div>
			</div>
		</>
	)
}

const mapStateToProps = (state) => ({
	data: state.counter
})

const mapDispatchToProps = (dispatch) => ({
	increment: (int) => dispatch(incrementCounter('INCREMENT', { count: int })),
	decrement: (int) => dispatch(decrementCounter('DECREMENT', { count: int }))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
