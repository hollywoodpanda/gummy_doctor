'use strict'

import { StateBuilder } from './src/core/state/state-builder.js'
import { Visit } from './src/data/visit.js'

// Creating a visit for patient Maria
let visit = new Visit({
    id: 123456,
    patient: {name: 'Maria'},
    date: new Date().toString()
})

// Dispatching the visit to the Attendant José
visit.state.dispatch({name: 'José', type: 'nurse'})

// Dispatching it again, to other attendant (the attendant 
// isn't supposed to change since a dispatched visit can't be
// dispatched again)
visit.state.dispatch({name: 'Lívia', type: 'doctor'})

// Changing the attendant to dr. Carlos
visit.state.changeAttendant({name: 'Carlos', type: 'hospital clown'})

// Changing the attendant again, to nurse Abílio
visit.state.changeAttendant({name: 'Abílio', type: 'nurse'})

// The attendant starts moving to the patient location
visit.state.displace()

// The attendant or the patient cancels the visit (nothing
// after it can change the visit, since the visit is cancelled)
// visit.state.cancel()

// Pretending we need to convert the visit database representation
// to a working visit (with a state object)
let databaseVisit = new Visit(visit.toJSON())

// Building the state object over the state name
StateBuilder.build(databaseVisit)

// Changing the attendant once more, to rescuer Carlota
databaseVisit.state.changeAttendant({name: 'Carlota', type: 'rescuer'})

// Trying to attend a visit in which the attendant is not
// moving to the patient location - nothing should happen
databaseVisit.state.attend()

// The current attendant is moving to the patient location
databaseVisit.state.displace()

// The attendant is performing the service or 
// applying the treatment to the patient
databaseVisit.state.attend()

// The visit ended
databaseVisit.state.finalize()

// Changing the attendant of a finalized visit: nothing should happen
databaseVisit.state.changeAttendant({name: 'Haroldo', type: 'hospital clown'})

// Printing the whole visit
console.log('Visit: %j', databaseVisit)

// Printing the visit final state
console.log(`Visit state: ${databaseVisit.state.name}`)

