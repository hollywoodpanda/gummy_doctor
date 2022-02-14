'use strict'

import { State } from './state.js'
import stateUtil from '../util/state-util.js'

/**
 * The attendant finalized the visit and no 
 * more operations (state changes) are allowed
 */
export class FinalizedState extends State {
    constructor (visit) {
        super(stateUtil.finalized, visit)
    }
}