import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
    usd?: number
    error?: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {

    const sym = req.query?.sym ?? ""

    if (sym === 'btc') {
        return res.status(200).json({ usd: 50000 })
    }

    if (sym === 'eth') {
        return res.status(200).json({ usd: 2000 })
    }

    if (sym === 'doge') {
        return res.status(200).json({ usd: 1 })
    }
    return res.status(404).json({ error: 'support only btc,eth,doge' })
}