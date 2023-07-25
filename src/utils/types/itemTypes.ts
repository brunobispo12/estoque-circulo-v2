export type Item = {
    _id: any,
    brand: String,
    condition: String,
    name?: String;
    type: String,
    available: Boolean,
    item_id: Number,
    desc?: String,
    location?: {
        sector?: String;
        borrower?: String;
        borrowDate?: String;
    }
}