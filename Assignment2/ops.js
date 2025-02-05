class Payment {
    constructor(amount, date) {
        this.amount = amount;
        this.date = date;
    }

    processPayment() {
        return `Date - ${this.date} Amount - ${this.amount} `;
    }
}

class CreditCardPayment extends Payment {
    #cardNumber;

    constructor(amount, date, cardNumner) {
        super(amount, date);
        this.#cardNumber = cardNumner;
    }

    processPayment() {
        return `Date - ${this.date} Amount - ${this.amount} `;
    }

    getMaskedCardNumber() {
        return `****-****-${this.#cardNumber.slice(-4)}`;
    }
}

class PayPalPayment extends Payment {
    #email;
    constructor(amount, date, email) {
        super(amount, date);
        this.#email = email;
    }

    processPayment() {
        return `Date - ${this.date} Amount - ${this.amount} Email-${this.#email}`;
    }
}

class CryptoPayment extends Payment {
    #walletAmt;
    constructor(amount, date, walletAmt) {
        super(amount, date);
        this.#walletAmt = walletAmt;
    }
    processPayment() {
        return `Date - ${this.date} Amount - ${this.amount}`;
    }

    getWalletAddress() {
        return this.#walletAmt;
    }
}

const creditCardPayment = new CreditCardPayment(100, "2025-02-04", "1234-5678-9012-3456");
console.log(creditCardPayment.processPayment(), creditCardPayment.getMaskedCardNumber());


const payPalPayment = new PayPalPayment(150, "2025-02-05", "user@example.com");
console.log(payPalPayment.processPayment());


const cryptoPayment = new CryptoPayment(200, "2025-02-06", "0xABC123DEF456");
console.log(cryptoPayment.processPayment(), cryptoPayment.getWalletAddress());
