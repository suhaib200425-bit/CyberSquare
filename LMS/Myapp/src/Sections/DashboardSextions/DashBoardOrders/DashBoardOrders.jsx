import React from 'react'
import './DashBoardOrders.css'
function DashBoardOrders() {
    return (
        <div className='DashBoardOrders'>

            <h5 className='m-0 mt-2'>Orders & Payments</h5>
            <p className='m-0'>Your purchase history</p>
            <table class="table mt-3">
                <thead>
                    <tr>
                        <th scope="col">Course</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Date</th>
                        <th scope="col">Method</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row">Complete React Developer Bootcamp 2024</td>
                        <td>$49.99</td>
                        <td>2024-04-01</td>
                        <td>Credit Card</td>
                        <td>completed</td>
                    </tr>
                    <tr>
                        <td scope="row">Complete React Developer Bootcamp 2024</td>
                        <td>$49.99</td>
                        <td>2024-04-01</td>
                        <td>Credit Card</td>
                        <td>completed</td>
                    </tr>
                    <tr>
                        <td scope="row">Complete React Developer Bootcamp 2024</td>
                        <td>$49.99</td>
                        <td>2024-04-01</td>
                        <td>Credit Card</td>
                        <td>completed</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default DashBoardOrders