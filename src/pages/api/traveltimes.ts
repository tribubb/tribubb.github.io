// Next.js API route: ./src/pages/api/travel-times.ts
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

const LAMBDA_API_URL = process.env.NEXT_PUBLIC_LAMBDA_API_KEY;

type TravelTime = {
    route: number;
    travelTime: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<TravelTime[]> // Add the correct type here for the response
) {
    const { origin } = req.query;
    const { destination } = req.query;
    const { departTime } = req.query;
    const { secondDepartTime } = req.query;
    const { transportUsed } = req.query;

    try {
        // Call the separate Lambda API to fetch travel times
        const response = await axios.get(
            `${LAMBDA_API_URL}`,
            {
                params: {
                    origin,
                    destination,
                    departTime,
                    secondDepartTime,
                    transportUsed
                },
            }
        );

        const travelTimes: TravelTime[] = response.data;
        res.status(200).json(travelTimes);
    } catch (error) {
        console.error('Error fetching travel times:', error);
    }
}