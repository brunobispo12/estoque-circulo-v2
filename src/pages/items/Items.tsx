import { useQuery } from 'react-query'
import axios from 'axios'

const items = [
  {
    "location": {
      "sector": "IT Department",
      "borrower": "John Doe",
      "borrowDate": "2023-07-20T00:00:00.000Z"
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
      "sector": "Sales Department",
      "borrower": "Jane Smith",
      "borrowDate": "2023-07-15T00:00:00.000Z"
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
      "sector": "Office Area",
      "borrower": "Bob Johnson",
      "borrowDate": "2023-07-18T00:00:00.000Z"
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
      "sector": "Conference Room",
      "borrower": "Sarah Williams",
      "borrowDate": "2023-07-12T00:00:00.000Z"
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
      "sector": "Engineering Department",
      "borrower": "Michael Brown",
      "borrowDate": "2023-07-19T00:00:00.000Z"
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

function Items() {
  return (
    <div className='p-5'>
      <span>
        <h1 className='text-xl font-satoshi-bold'>Relatório de itens</h1>
      </span>
      <div className='space-y-10 flex justify-center w-full bg-red-6000'>
        <div></div>
        <table>
          <tr>
            <th>Marca</th>
            <th>Nome</th>
            <th>Disponível</th>
            <th></th>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Items