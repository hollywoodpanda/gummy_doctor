'use strict'

import { AttendCommand } from '../command/attend-command.js'
import { CancelCommand } from '../command/cancel-command.js'
import { ChangeAttendantCommand } from '../command/change-attendant-command.js'
import { FinalizeCommand } from '../command/finalize-command.js'
import { State } from './state.js'
import stateUtil from '../util/state-util.js'

/**
 * The attendant is moving to the patient's location
 */
export class DisplacingState extends State {

    constructor (visit) {
        super(stateUtil.displacing, visit)
    }

    /** The attendant is performing the service or treatment */
    attend () {
        new AttendCommand().execute(this.visit)
    }

    /** The visit attendant changed to the informed one */
    changeAttendant (attendant) {
        new ChangeAttendantCommand(attendant).execute(this.visit)
    }

    /** The patient or the attendant cancelled the visit */
    cancel () {
        new CancelCommand().execute(this.visit)
    }

    /** The attendant performed all services and treatments, the visit ended */
    finalize () {
        new FinalizeCommand().execute(this.visit)
    }

}