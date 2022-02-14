'use strict'

import { DispatchedState } from '../state/dispatched-state.js'
import HistoryUtil  from '../util/history-util.js'
import stateUtil from '../util/state-util.js'
import { Command } from './command.js'

/**
 * The 'dispatching' executor, centralizing all the necessary 
 * operations for a visit to be in the 'dispatched' state
 */
export class DispatchCommand extends Command {

    /**
     * The attendant which the visit was dispatched to
     */
    #attendant

    constructor (attendant) {
        super()
        this.#attendant = attendant
    }

    /**
     * It performs the 'dispatching' changes on the given visit
     * @param {*} visit The visit being changed to the 'dispatched' state
     */
    execute (visit) {
        
        console.log(`Dispatching ${
            visit?.state?.name
        } visit ${
            visit.id
        } to an attendant`, this.#attendant)

        HistoryUtil.addHistory(visit, visit.attendant, stateUtil.dispatched)
        
        visit.attendant = this.#attendant
        visit.state = new DispatchedState(visit)

    }

}