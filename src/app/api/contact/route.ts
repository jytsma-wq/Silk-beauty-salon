import { NextResponse } from 'next/server';
import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(5000),
  locale: z.string().default('en'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate input
    const result = contactFormSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid input', details: result.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, phone, message } = result.data;

    // Sanitize input
    const sanitized = {
      name: name.trim(),
      email: email.toLowerCase().trim(),
      phone: phone?.trim() || null,
      message: message.trim(),
    };

    // In a real implementation, you would:
    // 1. Send email to admin
    // 2. Save to database
    // 3. Send confirmation email to user
    // 4. Integrate with CRM
    
    // For now, just log and return success
    console.log('Contact form submission:', {
      ...sanitized,
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: 'Thank you for your message. We will get back to you shortly.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
