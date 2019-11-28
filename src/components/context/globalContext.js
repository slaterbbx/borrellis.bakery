import React from 'react'

// const GlobalStateContext = React.createContext()
// const GlobalDispatchContext = React.createContext()

const initialState = {
	menuButton: true,
	infoButton: true,
}

const reducer = (state, action) => {
	switch (action.type) {
		case "MENU_BUTTON": 
			return {
				...state,
				menuButton: !state.menuButton
			}
		case "INFO_BUTTON":
			return {
				...state,
				infoButton: !state.infoButton
			}
		default:
			console.log('Bad Action Type')
	}
}

const GlobalContext = ({children}) => {
	// eslint-disable-next-line
	const [state, dispatch] = React.useReducer(reducer, initialState)
	return <div>{children}</div>
}

export default GlobalContext