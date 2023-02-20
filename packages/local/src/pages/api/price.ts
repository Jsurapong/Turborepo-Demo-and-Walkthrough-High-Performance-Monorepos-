import type { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'cors'

type ResponseData = {
    usd?: number
    error?: string
}


// Initializing the cors middleware
// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
const cors = Cors({
    methods: ['POST', 'GET', 'HEAD'],
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(
    req: NextApiRequest,
    res: NextApiResponse,
    fn: Function
) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result: any) => {
            if (result instanceof Error) {
                return reject(result)
            }

            return resolve(result)
        })
    })
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    // Run the middleware
    await runMiddleware(req, res, cors)

    const sym = req.query?.sym ?? ""

    if (sym === 'BTC') {
        return res.status(200).json({ usd: 50000 })
    }

    if (sym === 'ETH') {
        return res.status(200).json({ usd: 2000 })
    }

    if (sym === 'DOGE') {
        return res.status(200).json({ usd: 1 })
    }
    return res.status(404).json({ error: 'support only btc,eth,doge' })


}