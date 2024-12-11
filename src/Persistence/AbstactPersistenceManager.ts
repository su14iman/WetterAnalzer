import type IAbstactPersistenceManager from '../interfaces/IAbstactPersistenceManager';
import type IManger from '../interfaces/IManger';
import Measurement from '../Measurement/Measurement';

abstract class AbstactPersistenceManager implements IAbstactPersistenceManager
{
    protected measurementManger: IManger<Measurement>;

    constructor(measurementManger: IManger<Measurement>){
        this.measurementManger = measurementManger;
    }
}

export default AbstactPersistenceManager;