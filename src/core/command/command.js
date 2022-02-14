'use strict'

/**
 * The contract a command must adopt to perform
 * operations in visits
 */
export class Command {

    /**
     * It executes operations and/or manipulations in the given visit
     * @param {*} visit The visit being manipulated in this execution
     */
    execute (visit) {
        console.log('Command execute called %j', visit)
    }

    /**
     * It undoes any operations applied by this command execution on the given visit
     * @param {*} visit The manipulated visit, with manipulations that must be undone
     */
    undo (visit) {
        console.log('Command undo called %j', visit)
    }

}