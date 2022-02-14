'use strict'

import { State } from './state.js'
import stateUtil from '../util/state-util.js'

/**
 * The attendant or the patient have cancelled the visit 
 * and no more operations (state changes) are allowed
 */
export class CancelledState extends State {

    constructor (visit) {
        super(stateUtil.cancelled, visit)
    }

}