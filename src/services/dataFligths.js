import axios from 'axios';
import { endpoints } from './endpoint';

export const getDataFlights = async () => {
    try {

        const { data } = await axios.get(endpoints.flights);
        return data;

    } catch (error) {

        console.log(error);
        return error;

    }
}