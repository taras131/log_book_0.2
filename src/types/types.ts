export type CarType = {
        userId: string,
        id: string,
        brand: string,
        model: string,
        yearManufacture: string,
        num: string,
        vin: string
}
export type MaintenanceRecordType = {
        carId: string,
        datecommission: string,
        id: string,
        odometer: string,
        text: string,
        userId: string,

}
export type NoticeRecordType = {
        carId: string,
        date: string,
        id: string,
        odometer: string,
        text: string,
        userId: string
}
export type RepairRecordType = {
        accomplishedWork: string,
        carId: string,
        date: string,
        id: string,
        odometer: string,
        reasonsRepair: string,
        result: string,
        usedParts: string,
        userId: string
}