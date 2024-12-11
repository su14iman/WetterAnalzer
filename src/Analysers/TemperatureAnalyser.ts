import AbstractAnalyser from './AbstractAnalyser';
import Measurement from '../Measurement/Measurement';

import Warning, { warningType } from '../Warning/Warning';
import type IManger from '../interfaces/IManger';


export default class TemperatureAnalyser extends AbstractAnalyser<Measurement, Warning>
{
    public analyse(data: Measurement, warningManager: IManger<Warning>): void {
        if(data.getTemperature() <= 0 )
        {
            let warning = this.createWarning()
            warning.setPrio(1);
            warning.setType(warningType.WARNING)
            warning.setMessage(`${data.getTimestamp()} It's very cold, in ${data.getLocation()?.getName()}`);
            warningManager.add(warning);
        }

        if(data.getTemperature() >= 30)
        {
            let warning = this.createWarning();
            warning.setPrio(1);
            warning.setType(warningType.WARNING)
            warning.setMessage(`${data.getTimestamp()} It's very hot, in ${data.getLocation()?.getName()}`);
            warningManager.add(warning);
        }

        if(data.getTemperature() > 0 && data.getTemperature() < 30)
        {
            let warning = this.createWarning();
            warning.setPrio(2);
            warning.setType(warningType.INFO)
            warning.setMessage(`${data.getTimestamp()} It's a nice temperature, in ${data.getLocation()?.getName()}`);
            warningManager.add(warning);
        }
    }
}