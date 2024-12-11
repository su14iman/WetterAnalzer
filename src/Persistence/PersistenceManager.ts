import AbstactPersistenceManager from "./AbstactPersistenceManager";

import type IManger from "../interfaces/IManger";
import type IResponseType from '../interfaces/IResponseType';

import Location from "../Location/Location";
import Measurement from "../Measurement/Measurement";


class PersistenceManager extends AbstactPersistenceManager
{
    constructor(measurementManger: IManger<Measurement>){
        super(measurementManger);
    }

    public async readApi<T>( location: Location): Promise<IManger<Measurement>>
    {
        return new Promise<IManger<Measurement>>( async (resolve, reject) => {
            let response = await fetch(`https://api.brightsky.dev/weather?lat=${location.getLat()}&lon=${location.getLon()}&date=${location.getDate()}`);
            let data:IResponseType = await response.json();
            if( response.status == 200 ) {
                data.weather?.forEach((element) => {
                    let measurement = new Measurement();
                    measurement.setTimestamp(element.timestamp);
                    measurement.setTemperature(element.temperature);
                    measurement.setWindSpeed(element.wind_speed);
                    measurement.setCondition(element.condition);
                    measurement.setLocation(location);
                    this.measurementManger?.add(measurement)
                });
                resolve(this.measurementManger);
            }
            reject(data.error || "Unknown error");
        });
    }
}

export default PersistenceManager;