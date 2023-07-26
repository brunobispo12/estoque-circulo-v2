import TableList from "./TableList"
import GridList from "./GridList"
import useViewMode from "../../../hooks/useViewMode"

const items = [
    {
        "location": {
            "sector": "200",
            "borrower": "John Doe",
            "borrowDate": "2023-07-20"
        },
        "_id": "64bd818549f2baf138c427d7",
        "brand": "Apple",
        "type": "Laptop",
        "name": "MacBook Air",
        "condition": "Used",
        "item_id": 1001,
        "available": true,
        "lender": "Company XYZ",
        "createdAt": "2023-07-23T19:37:41.258Z",
        "updatedAt": "2023-07-23T19:37:41.258Z",
        "__v": 0
    },
    {
        "location": {
            "sector": "Comercial",
            "borrower": "Jane Smith",
            "borrowDate": "2023-07-15"
        },
        "_id": "64bd819d49f2baf138c427d9",
        "brand": "Samsung",
        "type": "Smartphone",
        "name": "Galaxy S21",
        "condition": "New",
        "item_id": 1002,
        "available": false,
        "lender": "Company ABC",
        "createdAt": "2023-07-23T19:38:05.119Z",
        "updatedAt": "2023-07-23T19:38:05.119Z",
        "__v": 0
    },
    {
        "location": {
            "sector": "Administrativo",
            "borrower": "Bob Johnson",
            "borrowDate": "2023-07-18"
        },
        "_id": "64bd81a349f2baf138c427db",
        "brand": "HP",
        "type": "Printer",
        "condition": "Refurbished",
        "item_id": 1003,
        "available": true,
        "lender": "Company DEF",
        "createdAt": "2023-07-23T19:38:11.928Z",
        "updatedAt": "2023-07-23T19:38:11.928Z",
        "__v": 0
    },
    {
        "location": {
            "sector": "SAME",
            "borrower": "Sarah Williams",
            "borrowDate": "2023-07-12"
        },
        "_id": "64bd81a949f2baf138c427dd",
        "brand": "Sony",
        "type": "TV",
        "name": "Bravia X900H",
        "condition": "New",
        "item_id": 1004,
        "available": false,
        "lender": "Company GHI",
        "createdAt": "2023-07-23T19:38:17.718Z",
        "updatedAt": "2023-07-23T19:38:17.718Z",
        "__v": 0
    },
    {
        "location": {
            "sector": "Manutenção",
            "borrower": "Michael Brown",
            "borrowDate": "2023-07-19"
        },
        "_id": "64bd81ae49f2baf138c427df",
        "brand": "Dell",
        "type": "Desktop",
        "name": "Inspiron 7000",
        "condition": "Used",
        "item_id": 1005,
        "available": true,
        "lender": "Company JKL",
        "createdAt": "2023-07-23T19:38:22.665Z",
        "updatedAt": "2023-07-23T19:38:22.665Z",
        "__v": 0
    }
]

function ItemsViewMode() {

    const { currentViewMode } = useViewMode()

    return (
        <>
            {currentViewMode === 'grid' ? <GridList items={items} /> : <TableList items={items} />}
        </>
    )
}

export default ItemsViewMode