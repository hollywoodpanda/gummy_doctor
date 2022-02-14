'use strict'

import { CancelCommand } from '../command/cancel-command.js'
import { ChangeAttendantCommand } from '../command/change-attendant-command.js'
import { DisplaceCommand } from '../command/displace-command.js'
import { FinalizeCommand } from '../command/finalize-command.js'
import { State } from './state.js'
import stateUtil from '../util/state-util.js'

/**
 * The visit has been dispatched to a attendant
 */
export class DispatchedState extends State {
    
    constructor (visit) {
        super(stateUtil.dispatched, visit)
    }

    /**
     * The attendant began moving to the patient's location
     */
    displace () {
        new DisplaceCommand().execute(this.visit)
    }

    /**
     * The attendant of this visit changed to the informed one
     * 
     * @param {*} attendant The new attendant for this visit
     */
    changeAttendant (attendant) {
        new ChangeAttendantCommand(attendant).execute(this.visit)
    }

    /** The patient or the attendant cancelled the visit */
    cancel () {
        new CancelCommand().execute(this.visit)
    }

    /** The attendant finalized the visit */
    finalize () {
        new FinalizeCommand().execute(this.visit)
    }

}