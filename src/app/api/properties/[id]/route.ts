import { NextRequest, NextResponse } from 'next/server';
import { properties } from '@/data/properties';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const property = properties.find((p) => p.id === id);

  if (!property) {
    return NextResponse.json({ error: 'Propiedad no encontrada' }, { status: 404 });
  }

  return NextResponse.json(property);
}
