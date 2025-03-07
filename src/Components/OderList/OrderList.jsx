import React from 'react';


const OrderList = () => {
    const orders = [
        { id: 1, item: 'Laptop', quantity: 1, price: '$1000', status: 'Shipped' },
        { id: 2, item: 'Phone', quantity: 2, price: '$500', status: 'Processing' },
        { id: 3, item: 'Headphones', quantity: 1, price: '$200', status: 'Delivered' },
        { id: 4, item: 'Monitor', quantity: 2, price: '$300', status: 'Shipped' },
        { id: 5, item: 'Keyboard', quantity: 1, price: '$100', status: 'Delivered' },
        { id: 6, item: 'Mouse', quantity: 3, price: '$50', status: 'Processing' },
        { id: 7, item: 'Tablet', quantity: 1, price: '$400', status: 'Shipped' },
        { id: 8, item: 'Charger', quantity: 2, price: '$30', status: 'Delivered' },
        { id: 9, item: 'Camera', quantity: 1, price: '$600', status: 'Processing' },
        { id: 10, item: 'Printer', quantity: 1, price: '$150', status: 'Shipped' },
    ];

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Order List</h2>
            <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {orders.map(order => (
                    <li key={order.id} className="p-4 rounded-lg shadow-lg bg-white">
                        <div className="flex justify-between mb-2">
                            <span className="font-semibold">{order.item}</span>
                            <span>{order.price}</span>
                        </div>
                        <div className="flex justify-between text-sm text-gray-600">
                            <span>Quantity: {order.quantity}</span>
                            <span>Status: {order.status}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderList;