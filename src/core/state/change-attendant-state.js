'use strict'

import { CancelCommand } from '../command/cancel-command.js'
import { ChangeAttendantCommand } from '../command/change-attendant-command.js'
import { DisplaceCommand } from '../command/displace-command.js'
import { FinalizeCommand } from '../command/finalize-command.js'
import { State } from './state.js'
import stateUtil from '../util/state-util.js'

/**
 * The visit attendant have changed to a new one
 */
export class ChangeAttendantState extends State {

    constructor (visit) {
        super(stateUtil.changeAttendant, visit)
    }

    /** The new attendant can move to the patient's location  */
    displace () {
        new DisplaceCommand().execute(this.visit)
    }

    /** Some other attendant change may occur */
    changeAttendant (attendant) {
        new ChangeAttendantCommand(attendant).execute(this.visit)
    }

    /** The patient or the attendant can cancel the visit */
    cancel () {
        new CancelCommand().execute(this.visit)
    }

    /** The attendant can finalize the visit */
    finalize () {
        new FinalizeCommand().execute(this.visit)
    }

}