import React from 'react'

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

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

	const [state, dispatch] = React.useReducer(reducer, initialState)

		return (
			<GlobalStateContext.Provider value={state}>
				<GlobalDispatchContext.Provider value={dispatch}>
					{children}
				</GlobalDispatchContext.Provider>
			</GlobalStateContext.Provider>
		)
}

export default GlobalContext