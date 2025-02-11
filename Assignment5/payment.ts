abstract class Payment {
    constructor(public amount: number, public date: string) { }

    abstract processPayment(): void;
}

class CreditCardPayment extends Payment {
    private ccNumber: string;
    constructor(amt: number, date: string, ccNumber: string) {
        super(amt, date);
        this.ccNumber = ccNumber;
    }
    processPayment(): void {
        console.log(`Processing credit card payment of $${this.amount} on ${this.date}`);
    }
}
class PayPalPayment extends Payment {
    constructor(amount: number, date: string, private email: string) {
        super(amount, date);
    }
    processPayment(): void {
        console.log(`Processing PayPal payment of $${this.amount} from ${this.email} on ${this.date}`);
    }
}

class CryptoPayment extends Payment {
    constructor(amount: number, date: string, private walletAddress: string) {
        super(amount, date);
    }
    processPayment(): void {
        console.log(`Processing crypto payment of $${this.amount} from wallet ${this.walletAddress} on ${this.date}`);
    }
}

const payment = new CreditCardPayment(500, "2025-02-11", "1234-5678-9876-5432");
payment.processPayment();

const payment2 = new PayPalPayment(500, "2025-02-11", "abc@gmail.com");
payment.processPayment();

const payment3 = new CryptoPayment(500, "2025-02-11", "er354536");
payment.processPayment();