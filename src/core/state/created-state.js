'use strict'

import { CancelCommand } from '../command/cancel-command.js'
import { DispatchCommand } from '../command/dispatch-command.js'
import { FinalizeCommand } from '../command/finalize-command.js'
import { State } from './state.js'
import stateUtil from '../util/state-util.js'

/**
 * The visit has been created, no attendant yet
 */
export class CreatedState extends State {

    constructor (visit) {
        super(stateUtil.created, visit)
    }

    /** The system dispatched the visit to the given attendant */
    dispatch (attendant) {
        new DispatchCommand(attendant).execute(this.visit)
    }

    /** The patient or the attendant have cancelled the visit */
    cancel () {
        new CancelCommand().execute(this.visit)
    }

    /** The attendant have finalized the visit */
    finalize () {
        new FinalizeCommand().execute(this.visit)
    }

}