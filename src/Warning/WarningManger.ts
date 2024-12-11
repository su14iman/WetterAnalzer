import Warning from './Warning';
import type IManger from '../interfaces/IManger';

export default class WarningManager implements IManger<Warning>
{
    private warnings: Warning[] = [];

    public add(item: Warning): void
    {
        this.warnings.push(item);
    }

    public get(): Warning[]
    {
        return this.warnings;
    }

    public remove(item: Warning): void
    {
        const index = this.warnings.indexOf(item);
        this.warnings.splice(index, 1);
    }
}