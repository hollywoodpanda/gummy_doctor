'use strict'

import { FinalizedState } from '../state/finalized-state.js'
import HistoryUtil from '../util/history-util.js'
import stateUtil from '../util/state-util.js'
import { Command } from './command.js'

/**
 * The 'finalizing' executor, centralizing all the necessary 
 * operations for a visit to be in the 'finalized' state
 */
export class FinalizeCommand extends Command {

    /**
     * It performs the 'finalizing' changes on the given visit
     * @param {*} visit The visit being changed to the 'finalized' state
     */
    execute (visit) {

        console.log(`Finalizing ${visit.state.name} visit ${visit.id}`)

        HistoryUtil.addHistory(visit, null, stateUtil.finalized)

        visit.state = new FinalizedState(visit)

    }

}