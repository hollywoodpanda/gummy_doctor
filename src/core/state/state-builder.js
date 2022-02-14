'use strict'

import { AttendingState } from './attending-state.js'
import { CancelledState } from './cancelled-state.js'
import { ChangeAttendantState } from './change-attendant-state.js'
import { CreatedState } from './created-state.js'
import { DispatchedState } from './dispatched-state.js'
import { DisplacingState } from './displacing-state.js'
import { FinalizedState } from './finalized-state.js'
import stateUtil from '../util/state-util.js'

/**
 * The current mapping for states with 
 * a string representation as key
 */
const states = (() => {

    const result = {}

    // Adding the CreatedState to the states mapping
    result[stateUtil.created] = CreatedState
    // Adding the DispatchedState to the states mapping
    result[stateUtil.dispatched] = DispatchedState
    // Adding the DisplacingState to the states mapping
    result[stateUtil.displacing] = DisplacingState
    // Adding the AttendingState to the states mapping
    result[stateUtil.attending] = AttendingState
    // Adding the ChangeAttendantState to the states mapping
    result[stateUtil.changeAttendant] = ChangeAttendantState
    // Adding the CancelledState to the states mapping
    result[stateUtil.cancelled] = CancelledState
    // Adding the FinalizedState to the states mapping
    result[stateUtil.finalized] = FinalizedState

    return result

})()

/**
 * A helper for building states.
 * It builds a state object from the
 * state's name in the visit
 */
export class StateBuilder {

    /**
     * Changes the visit state, which must be a string, 
     * to the state object represented by that string
     * 
     * @param {*} visit The visit with a string version of the state
     */
    static build (visit) {

        console.log('Building state for visit %j', visit)

        // It creates a new state with the given visit
        const state = new states[visit.state](visit)

        console.log('State found! %j', state.name)

        // Updating the visit state to the created state object
        visit.state = state

    }

}