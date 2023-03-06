import axios from "axios";
import { endpoints } from "./endpoint";

export const getNations = async () => {

    try {

        const { data } = await axios.get(endpoints.nations);
        return data;

    } catch (error) {

        console.log(error);
        return error;

    }
}