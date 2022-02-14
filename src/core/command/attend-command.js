'use strict'

import { AttendingState } from '../state/attending-state.js'
import HistoryUtil from '../util/history-util.js'
import stateUtil from '../util/state-util.js'
import { Command } from './command.js'

/**
 * The 'attending' executor, centralizing all the necessary 
 * operations for a visit to be in the 'attending' state
 */
export class AttendCommand extends Command {

    /**
     * It performs the 'attending' changes on the given visit
     * @param {*} visit The visit being changed to the 'attending' state
     */
    execute (visit) {

        console.log(`Attending ${visit.state.name} visit ${visit.id}`)

        HistoryUtil.addHistory(visit, null, stateUtil.attending)

        visit.state = new AttendingState(visit)

    }

}