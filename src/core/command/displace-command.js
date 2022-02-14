'use strict'

import { DisplacingState } from '../state/displacing-state.js'
import HistoryUtil from '../util/history-util.js'
import stateUtil from '../util/state-util.js'
import { Command } from './command.js'

/**
 * The 'displacing' executor, centralizing all the necessary 
 * operations for a visit to be in the 'displaced' state
 */
export class DisplaceCommand extends Command {

    /**
     * It performs the 'displacing' changes on the given visit
     * @param {*} visit The visit being changed to the 'displaced' state
     */
    execute (visit) {
        
        console.log(`Displacing ${
            visit.state.name
        } to patient %j for attendant %j changed visit ${
            visit.id
        }`, visit.patient, visit.attendant)

        HistoryUtil.addHistory(visit, null, stateUtil.displacing)
        
        visit.state = new DisplacingState(visit)

    }

}