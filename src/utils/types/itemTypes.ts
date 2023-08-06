export type Item = {
    _id: any,
    brand: String,
    condition: String,
    name?: String,
    type: String,
    available: String,
    item_id: String,
    desc?: String,
    location?: {
        sector?: String,
        borrower?: String,
        borrowDate?: String,
    }
}