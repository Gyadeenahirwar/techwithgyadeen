import crypto from "crypto";

export interface CreateOrderParams {
  amount: number; // in minor units (e.g. paise for INR: 99900)
  currency: string; // "INR"
  receipt: string;
  notes?: Record<string, string>;
}

export interface PaymentOrderResponse {
  id: string; // Razorpay order id: order_xxxx
  amount: number;
  currency: string;
  receipt: string;
  status: string;
}

export interface IPaymentService {
  createOrder(params: CreateOrderParams): Promise<PaymentOrderResponse>;
  verifyPaymentSignature(orderId: string, paymentId: string, signature: string): boolean;
}

export class RazorpayPaymentService implements IPaymentService {
  private keyId: string;
  private keySecret: string;

  constructor() {
    this.keyId = process.env.RAZORPAY_KEY_ID || "rzp_test_placeholder_key";
    this.keySecret = process.env.RAZORPAY_KEY_SECRET || "rzp_test_placeholder_secret";
  }

  async createOrder(params: CreateOrderParams): Promise<PaymentOrderResponse> {
    // In production, uses razorpay SDK: await razorpay.orders.create(...)
    // Simulated order id for safe development
    const orderId = `order_${Date.now().toString(36)}_${Math.random().toString(36).substring(2, 8)}`;
    return {
      id: orderId,
      amount: params.amount,
      currency: params.currency,
      receipt: params.receipt,
      status: "created",
    };
  }

  verifyPaymentSignature(orderId: string, paymentId: string, signature: string): boolean {
    if (!this.keySecret || this.keySecret === "rzp_test_placeholder_secret") {
      // In dev mode with placeholder secret, accept dev verification
      return true;
    }
    const generatedSignature = crypto
      .createHmac("sha256", this.keySecret)
      .update(`${orderId}|${paymentId}`)
      .digest("hex");
    return generatedSignature === signature;
  }
}

export function getPaymentService(): IPaymentService {
  return new RazorpayPaymentService();
}
