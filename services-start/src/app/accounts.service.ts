import { EventEmitter, Injectable, Output } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()
export class AccountsService {
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Test Account',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
    ];

    @Output()
    statusUpdated = new EventEmitter<string>()

    constructor(private loggingService: LoggingService) {}

    addAccount(name: string, status: string) {
        this.accounts.push({name, status})
        this.loggingService.logStatusChange(status)
    }

    updateStatus(id: number, status: string) {
        this.accounts[id].status = status
        this.loggingService.logStatusChange(status)
    }
}