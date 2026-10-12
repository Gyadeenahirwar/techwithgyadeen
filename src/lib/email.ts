export interface EmailPayload {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

export interface IEmailService {
  sendEmail(payload: EmailPayload): Promise<{ success: boolean; messageId?: string }>;
}

export class ConsoleEmailService implements IEmailService {
  async sendEmail(payload: EmailPayload): Promise<{ success: boolean; messageId?: string }> {
    console.log(`[EmailService:Console] Sending to ${payload.to} | Subject: "${payload.subject}"`);
    return {
      success: true,
      messageId: `msg_${Date.now()}`,
    };
  }
}

export function getEmailService(): IEmailService {
  return new ConsoleEmailService();
}
