
export enum warningType { 'ADVICE','INFO' ,'WARNING' };

export default class Warning
{
    protected prio: number = 0;
    protected type: warningType = warningType.WARNING
    protected message: string = '';

    public setPrio(prio: number): void
    {
        this.prio = prio;
    }

    public getPrio(): number
    {
        return this.prio;
    }

    public setType(type: warningType): void
    {
        this.type = type;
    }

    public getType(): warningType
    {
        return this.type;
    }

    public setMessage(message:string): void
    {
        this.message = message;
    }

    public getMessage(): string
    {
        return this.message;
    }
}