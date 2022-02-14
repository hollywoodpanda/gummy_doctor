'use strict'

import { CancelCommand } from '../command/cancel-command.js'
import { FinalizeCommand } from '../command/finalize-command.js'
import { State } from './state.js'
import stateUtil from '../util/state-util.js'

/**
 * The attendant is performing the service or 
 * treatment at the patient's location
 */
export class AttendingState extends State {

    constructor (visit) {
        super(stateUtil.attending, visit)
    }

    /**
     * The patient or the attendant have cancelled the visit
     */
    cancel () {
        new CancelCommand().execute(this.visit)
    }

    /**
     * The attendant have finalized the visit
     */
    finalize () {
        new FinalizeCommand().execute(this.visit)
    }

}