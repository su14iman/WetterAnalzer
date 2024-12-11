import type IManger from "../interfaces/IManger";
import type IAnalyzer from "../interfaces/IAnalyser";
import Measurement from './Measurement';

import WarningManager from "../Warning/WarningManger";

export default class MeasurementManger<Measurement> implements IManger<Measurement>
{
    private measurements: Measurement[];
    private analysers: IAnalyzer<Measurement>[];
    private warningManager: WarningManager;

    constructor(warningManager: WarningManager){
        this.measurements = [];
        this.analysers = [];
        this.warningManager = warningManager;
    }

    public addAnalyser(analyser: IAnalyzer<Measurement>): void
    {
        this.analysers.push(analyser)
    }

    public add(item: Measurement): void {
        this.measurements.push(item);
        this.analysers.forEach((analyser) => {
            analyser.analyse(item, this.warningManager);
        });
    }

    public remove(item: Measurement): void {
        const index = this.measurements.indexOf(item);
        this.measurements.splice(index, 1);
    }

    public get(): Measurement[]
    {
        return this.measurements;
    }

}