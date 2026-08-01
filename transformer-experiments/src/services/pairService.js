import axios from 'axios';
import { API_BASE } from '../config';

const PAIRS_API_URL = `${API_BASE}/api/pairs/`;

export const runPairBacktest = async ({ symbolA, symbolB, startDate, endDate, entryZ, exitZ, rollingWindow }) => {
    const payload = {
        symbolA,
        symbolB,
        startDate,
        endDate,
        entryZ,
        exitZ,
        rollingWindow,
    };

    const response = await axios.post(PAIRS_API_URL, payload);
    return response.data;
};
