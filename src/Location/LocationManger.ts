import IManger from '../interfaces/IManger';
import Location from './Location';

class LocationManger implements IManger<Location>
{
    private locations: Location[] = [];

    public add(location: Location): void
    {
        this.locations.push(location);
    }

    public remove(location: Location): void
    {
        const index = this.locations.indexOf(location);
        this.locations.splice(index, 1);
    }

    [x: number]: Location[];
    public getLocations(): Location[]
    {
        return this.locations;
    }
}

export default LocationManger;