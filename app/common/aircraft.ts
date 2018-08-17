export interface MaintenanceItem {
    maintenance: string;
    dueDateTuple: number[];
    dueHrs: number;
    type: string;
    cleared: boolean;
}

export interface Aircraft {
    _id: string;
    _mcType: string;
    rego: string;
    ttis: number;
    type: string;
    clockTime: number;
    clockOffset: number;
    hrsAtMaint: number;
    annualDateTuple: number[];
    engineHrsAtMaint: number[];
    propHrsAtMaint: number[];
    maintenance: MaintenanceItem[];
}
