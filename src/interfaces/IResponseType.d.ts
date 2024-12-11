type IResponseType = {
    weather?: {
        timestamp: string;
        temperature: number;
        wind_speed: number;
        condition: string;
    }[];
    error?: string;
}

export default IResponseType;