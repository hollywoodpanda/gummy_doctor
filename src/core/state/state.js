'use strict'

/**
 * The declaration of what actions the api can perform 
 * and what attributes a state holds. It must be implemented 
 * by concrete states that actually perform the actions (or not) 
 * declared here
 */
export class State {

    /** The state's name */
    #name

    /** The visit being operated by this state */
    #visit

    /**
     * Creates a State with the given name and visit.
     * 
     * @param {string} name The state's name
     * @param {*} visit The state's visit information
     */
    constructor (name, visit) {
        console.log(`Changing to state ${name}`)
        this.#name = name
        this.#visit = visit
    }

    /** Name getter */
    get name () { return this.#name }

    /** Visit getter (kind of useless - could publicizy this.#visit) */
    get visit () { return this.#visit }

    /** Visit setter (kind of useless - could publicizy this.#visit) */
    set visit (visit) { this.#visit = visit }

    /**
     * Initiates the creation of this state's visit
     */
    create () {
        console.log('create not implemented!')
    }

    /**
     * Initiates the dispatch of this state's visit 
     * to the given attendant
     * 
     * @param {*} attendant The new attendant for this state's visit
     */
    dispatch (attendant) {
        console.log('dispatch to %j not implemented!', attendant)
    }

    /**
     * Changes this state's visit attendant to the given attendant
     * 
     * @param {*} attendant The new attendant for this state's visit
     */
    changeAttendant (attendant) {
        console.log('change attendant to %j not implemented!', attendant)
    }

    /**
     * Initiates the attendant's displacement to the patient's home
     */
    displace () {
        console.log('displace not implemented!')
    }

    /**
     * Indicates the attendant is at the patient's location 
     * performing the service or treatment
     */
    attend () {
        console.log('attend not implemented!')
    }

    /**
     * The attendant performed some additional service 
     * or treatment to the patient
     */
    execute () {
        console.log('execute not implemented!')
    }

    /**
     * The visit ended and all the services and
     * treatments have been performed
     */
    finalize () {
        console.log('finalize not implemented!')
    }

    /**
     * The visit has been cancelled by 
     * the patient or the attendant
     */
    cancel () {
        console.log('cancel not implemented!')
    }

}