import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import { createWrapper } from 'next-redux-wrapper'
import store from '../redux/store'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</>
	)
}

// initialize store and wrapper store
const makeStore = () => store
const wrapper = createWrapper(makeStore)
export default wrapper.withRedux(MyApp)
