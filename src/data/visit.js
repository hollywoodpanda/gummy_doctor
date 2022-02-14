'use strict'

import { CreatedState } from '../core/state/created-state.js'
import HistoryUtil from '../core/util/history-util.js'
import stateUtil from '../core/util/state-util.js'

/**
 * The visit model
 */
export class Visit {

    /** Visit identification, exclusive value representing this visit */
    #id

    /** The visit attendant. Undefined until some attendant is associated */
    #attendant

    /** The visit patient, defined since the visit creation */
    #patient

    /** 
     * The date/time of the visit (the expected date/time 
     * to start performing services or treatments) 
     */
    #date

    /**
     * The current state of the visit.
     * It can be a string (unmapped visit from the database)
     * or it can be a state object (mapped visit from the database)
     */
    #state

    constructor (data) {
        this.#id = data?.id
        this.#attendant = data?.attendant
        this.#patient = data?.patient
        this.#date = data?.date
        this.#state = data?.state || new CreatedState(this)
        this.#createHistory(data?.history)
    }

    /**
     * Fills this visit with the given history if a history is given, or add a 
     * creation log record on a new empty history in this visit
     * @param {*} history The history to be populated in the visit, if given
     */
    #createHistory (history) {

        if (!this.history) {
            this.history = []
        }

        if (!history) {
            HistoryUtil.addHistory(this, null, stateUtil.created)
        } else {
            this.history = history
        }

    }

    get id () { return this.#id }

    get attendant () { return this.#attendant }

    set attendant (attendant) { this.#attendant = attendant }

    get patient () { return this.#patient }

    get date () { return this.#date }

    get state () { return this.#state }

    set state (state) { this.#state = state }

    toJSON () {

        return {
            id: this.#id,
            attendant: this.#attendant,
            patient: this.#patient,
            date: this.#date,
            state: this.#state?.name,
            history: this.history
        }

    }

}