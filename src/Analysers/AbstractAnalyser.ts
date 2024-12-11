import type IAnalyser from "../interfaces/IAnalyser";
import type IManger from "../interfaces/IManger";
import Warning from "../Warning/Warning";

abstract class AbstractAnalyser<T,Y> implements IAnalyser<T>
{
    abstract analyse(data: T, warningManager: IManger<Y>): void;

    protected createWarning(): Warning
    {
        return new Warning();
    }
}

export default AbstractAnalyser;