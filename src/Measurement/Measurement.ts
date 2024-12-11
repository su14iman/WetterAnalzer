import Location from '../Location/Location';

export default class Measurement
{

    private location: Location | null = null;

    private timestamp: string = '';
    private temperature: number = 0;
    private windSpeed: number = 0.0;
    private condition: string = '';

    public setLocation(location: Location): void
    {
        this.location = location;
    }

    public getLocation(): Location | null
    {
        return this.location;
    }

    public setTimestamp(timestamp: string): void
    {
        this.timestamp = timestamp;
    }

    public getTimestamp(): string
    {
        return this.timestamp;
    }

    public setTemperature(temperature: number): void
    {
        this.temperature = temperature;
    }

    public getTemperature(): number
    {
        return this.temperature;
    }

    public setWindSpeed(windSpeed: number): void
    {
        this.windSpeed = windSpeed;
    }

    public getWindSpeed(): number
    {
        return this.windSpeed;
    }

    public setCondition(condition: string): void
    {
        this.condition = condition;
    }

    public getCondition(): string
    {
        return this.condition;
    }

}