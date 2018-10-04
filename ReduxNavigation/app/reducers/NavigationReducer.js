import { createNavigationReducer } from "react-navigation-redux-helpers";
import { RootNavigator } from "../Navigator";
import { StackActions, NavigationActions } from "react-navigation";

// export const navigationReducer = createNavigationReducer(RootNavigator) ;


const initialState = RootNavigator.router.getStateForAction(StackActions.reset({
	index: 0,
	actions: [
		NavigationActions.navigate({
			routeName: 'Main',
		}),
	],
}))
export default function navigation(state = initialState, action) {
	let nextState;
	switch (action.type) {
		case 'Login':
		console.log('##############################################',action.type, state)
			nextState = RootNavigator.router.getStateForAction(
				NavigationActions.back(),
				state
			);
			break;
			case 'Logout':
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
        state
      );
      break;
		default:
			console.log('*******************************************',action.type, state)
			nextState = RootNavigator.router.getStateForAction(action, state);
	}

	return nextState || state;
};