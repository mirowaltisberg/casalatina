import { NextRequest, NextResponse } from 'next/server';
import type { ContactFormData } from '@/lib/types';

export async function POST(request: NextRequest) {
  const body: ContactFormData = await request.json();

  if (!body.name || !body.email || !body.phone || !body.message || !body.propertyId) {
    return NextResponse.json(
      { error: 'Todos los campos son requeridos' },
      { status: 400 }
    );
  }

  // In production, this would save to a database and notify the seller
  console.log('[CasaLatina] Nueva consulta de contacto:', {
    propertyId: body.propertyId,
    name: body.name,
    email: body.email,
    phone: body.phone,
    message: body.message,
    timestamp: new Date().toISOString(),
  });

  return NextResponse.json({
    success: true,
    message: 'Su consulta ha sido enviada. El vendedor se pondrá en contacto pronto.',
  });
}
