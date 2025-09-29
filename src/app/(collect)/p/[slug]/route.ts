import { NextResponse } from 'next/server';
import { notFound } from '@/lib/response';
import { findPixel } from '@/queries/prisma';
import { POST } from '@/app/api/send/route';

const image = Buffer.from('R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw', 'base64');

export async function GET(request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const pixel = await findPixel({
    where: {
      slug,
    },
  });

  if (!pixel) {
    return notFound();
  }

  const payload = {
    type: 'event',
    payload: {
      pixel: pixel.id,
      url: request.url,
      referrer: request.referrer,
    },
  };

  const req = new Request(request.url, {
    method: 'POST',
    headers: request.headers,
    body: JSON.stringify(payload),
  });

  const res = await POST(req);

  return new NextResponse(image, {
    headers: {
      'Content-Type': 'image/gif',
      'Content-Length': image.length.toString(),
      'x-umami-collect': JSON.stringify(res),
    },
  });
}
