export class CounterService {
    nrOfActiveToInactive: number = 0
    nrOfInactiveToActive: number = 0

    activeToInactive() {
        this.nrOfActiveToInactive++
        this.log()
    }

    inactiveToActive() {
        this.nrOfInactiveToActive++
        this.log()
    }

    log() {
        console.log(`Nr of active to inactive: ${this.nrOfActiveToInactive} and nr of inactive to active: ${this.nrOfInactiveToActive}`)
    }
}