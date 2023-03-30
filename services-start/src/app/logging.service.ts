export class LoggingService {
    logStatusChange(status: string) {
        console.log(`Server status changed. New status: ${status}`)
    }
} 