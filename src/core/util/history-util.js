'use strict'

import { History } from '../../data/history.js'

/**
 * Utility to add, search and manipulate log records for a visit
 */
export default class HistoryUtil {

    /**
     * Adds a new log record in the visit history
     * @param {*} visit The visit receiving a new log record
     * @param {*} dataBefore Some arbitrary data we want to register in the log record
     * @param {*} newStateName The name of the new state for the visit
     */
    static addHistory (visit, dataBefore, newStateName) {
        
        visit.history.push(new History(newStateName, null, dataBefore))

    }

    /**
     * Gives the previous log record of the last log record with the given state name
     * @param {*} visit The visit containing the log record with the given state name
     * @param {*} stateName The name of the log record state before the one we want
     * @returns The previous log record of the log record with the given state name
     */
    static findOneBeforeState (visit, stateName) {

        const lastStateIndex = HistoryUtil
            .#descendingSort(visit)
            .findIndex(hist => hist.state === stateName)

        if (lastStateIndex >= visit.history.length) {
            return null // Não há histórico "depois" desse (depois pq tá invertido)
        }

        return visit.history[lastStateIndex + 1] // +1 pq tá invertido

    } 

    /**
     * Gives the last log record of the visit history with the given state name
     * @param {*} visit The visit with the last log record we want, having the given state name
     * @param {*} stateName The state name of the last log record in visit we want
     * @returns The more recent log record with the given state name
     */
    static findLastStateInHistory (visit, stateName) {

        return HistoryUtil.#descendingSort(visit).find(hist => hist?.state === stateName)

    }

    /**
     * It sorts descendaly the visit history
     * @param {*} visit The visit which the history will be sorted descending
     * @returns The descending sorted visit history
     */
    static #descendingSort (visit) {
        return visit?.history.sort((histA, histB) => {

            const dtA = Date.parse(histA.date)
            const dtB = Date.parse(histB.date)

            if (dtA < dtB) {
                return 1 // Invertido!
            } else if(dtA > dtB) {
                return -1 // Invertido!
            }

            return 0

        })
    }

}