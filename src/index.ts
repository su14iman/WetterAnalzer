
import PersistenceManager from "./Persistence/PersistenceManager";
import Location from "./Location/Location";

import Measurement from "./Measurement/Measurement";
import MeasurementManager from "./Measurement/MeasurementManger";
import WarningManager from './Warning/WarningManger';
import TemperatureAnalyser from './Analysers/TemperatureAnalyser'

let main = async () => {

    let location = new Location();
    location.setName("Bonn");
    location.setLat(50.7313055);
    location.setLon(7.0920269);
    location.setDate(new Date().toISOString().slice(0, 10)); // today

    let warningManager = new WarningManager();
    let measurementManager = new MeasurementManager<Measurement>(warningManager);

    let temperatureAnalyser = new TemperatureAnalyser();
    measurementManager.addAnalyser(temperatureAnalyser);

    let persistenceManager = new PersistenceManager(measurementManager);
    await persistenceManager.readApi<Measurement>(location);

    
};

main().then();