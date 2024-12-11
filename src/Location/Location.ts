class Location
{
    private name: string = "";
    private lat: number = 0;
    private lon: number = 0;
    private date: string = "";

    public setName(name: string): void
    {
        this.name = name;
    }

    public getName(): string
    {
        return this.name;
    }

    public setLat(lat: number): void
    {
        this.lat = lat;
    }

    public getLat(): number
    {
        return this.lat;
    }

    public setLon(lon: number): void
    {
        this.lon = lon;
    }

    public getLon(): number
    {
        return this.lon;
    }

    public setDate(date: string): void
    {
        this.date = date;
    }

    public getDate(): string
    {
        return this.date;
    }
}

export default Location;