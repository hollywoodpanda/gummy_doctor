'use strict'

/**
 * A log record in the visit history
 */
export class History {

    /** The new state being logged */
    #state

    /** The date/time of the operation being logged */
    #date

    /** Some arbitrary data before the change (may be undefined or null) */
    #dataBefore

    constructor (state, date, dataBefore) {
        this.#state = state
        this.#date = date || new Date().toString()
        this.#dataBefore = dataBefore
    }

    get state () { return this.#state }

    get date () { return this.#date }

    get dataBefore () { return this.#dataBefore }

    toJSON () {
        return {
            state: this.#state,
            date: this.#date,
            dataBefore: this.#dataBefore
        }
    }

}