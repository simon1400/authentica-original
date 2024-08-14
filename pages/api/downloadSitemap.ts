import type { NextApiRequest, NextApiResponse } from 'next'
import { extname } from 'path';
import { writeFileSync } from 'fs';
import fetch from 'node-fetch';

const url = 'https://authentica-strapi.hardart.cz/api/sitemap/index.xml';

 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {

  if (req.method === 'POST') {
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();
    const dataBuffer = Buffer.from(buffer);

    const data = dataBuffer.toString().replace('<?xml-stylesheet type="text/xsl" href="xsl/sitemap.xsl"?>', '')

    const path = `public/sitemap.xml`;

    writeFileSync(path, data);
    res.status(200).json('Downloaded sitemap!')

    // return path;
  }
}