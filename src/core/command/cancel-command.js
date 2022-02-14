'use strict'

import { CancelledState } from '../state/cancelled-state.js'
import HistoryUtil from '../util/history-util.js'
import stateUtil from '../util/state-util.js'
import { Command } from './command.js'

/**
 * The 'cancellation' executor, centralizing all the necessary 
 * operations for a visit to be in the 'cancelled' state
 */
export class CancelCommand extends Command {

    /**
     * It performs the 'cancellation' changes on the given visit
     * @param {*} visit The visit being changed to the 'cancelled' state
     */
    execute (visit) {
        
        console.log(`Cancelling ${
            visit.state.name
        } ${
            visit.id
        } with attendant`, visit.attendant)

        HistoryUtil.addHistory(visit, null, stateUtil.cancelled)
        
        visit.state = new CancelledState(visit)

    }

}