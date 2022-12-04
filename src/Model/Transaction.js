class Transaction {
    constructor(name, description, amount, category, essential, date) {
        this.name = name;
        this.description = description;
        this.amount = amount;
        this.category = category;
        this.essential = essential;
        this.date = date;
    }
}

export default Transaction;