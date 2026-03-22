export class DAREScheduleKeyRotationSettingsAPI {
    constructor() {  }
    disableSchedulingForKeyRotation(activeKeySysId: string): string {
        return "";
    }
    enableSchedulingForKeyRotation(activeKeySysId: string): string {
        return "";
    }
    getNextKeyRotationDateFromTableOnLoad(): string {
        return "";
    }
    getNextKeyRotationDisplayDateTime(rotationIntervalInMonths: number, intendedDayOfWeek: number, timeInHours: number): string {
        return "";
    }
    getNextKeyRotationReminderDateFromTableOnLoad(): string {
        return "";
    }
    getNextKeyRotationReminderDisplayDateTime(rotationIntervalInMonths: number, intendedDayOfWeek: number): string {
        return "";
    }
    setNextKeyRotationDisplayValue(rotationDateAsString: string, activeKeySysId: string): string {
        return "";
    }
    setNextKeyRotationReminderDisplayValue(rotationReminderDateAsString: string, activeKeySysId: string): string {
        return "";
    }
    updateSchedulingForKeyRotation(activeKeySysId: string): string {
        return "";
    }
    validateReminderDateDisplayValue(rotationDateStr: string, reminderDaysStr: string): boolean {
        return false;
    }
}
