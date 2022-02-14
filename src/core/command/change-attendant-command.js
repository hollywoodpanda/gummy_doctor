'use strict'

import { ChangeAttendantState } from '../state/change-attendant-state.js'
import HistoryUtil from '../util/history-util.js'
import stateUtil from '../util/state-util.js'
import { Command } from './command.js'

/**
 * The 'change attendant' executor, centralizing all the necessary 
 * operations for a visit to be in the 'changed attendant' state
 */
export class ChangeAttendantCommand extends Command {

    /**
     * The new attendant for the visit
     */
    #attendant

    constructor (attendant) {
        super()
        this.#attendant = attendant
    }

    /**
     * It performs the 'change attendant' changes on the given visit
     * @param {*} visit The visit being changed to the 'change attendant' state
     */
    execute (visit) {

        console.log(`Changing ${
            visit.state.name
        } attendant from %j to %j in attendant changed visit ${
            visit.id
        }`, visit.attendant, this.#attendant)

        HistoryUtil.addHistory(visit, visit.attendant, stateUtil.changeAttendant)
        
        visit.attendant = this.#attendant
        
        visit.state = new ChangeAttendantState(visit)

    }

}