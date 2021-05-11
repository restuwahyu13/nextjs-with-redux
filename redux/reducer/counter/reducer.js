import { initialState } from '../../action/counter/state'
import { actionType } from '../../action/counter/type'

export const counterReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionType.inc:
			return { ...state, count: state.count + action.payload.count }
		case actionType.dec:
			return { ...state, count: state.count - action.payload.count }
		default:
			return state
	}
}
