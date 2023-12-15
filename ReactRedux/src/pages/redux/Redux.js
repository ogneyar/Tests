
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Header from '../../components/Header'
import { addCustomerAction, removeCustomerAction } from '../../store/customerReducer'
import { addCashAction, getCashAction } from '../../store/cashReducer'
import './Redux.css'


const Redux = () => {

    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)
    const customers = useSelector(state => state.customers.customers)

    const addCash = () => {
        dispatch(addCashAction(5))
    }

    const getCash = () => {
        dispatch(getCashAction(5))
    }

    const addCustomer = (name) => {
        const customer = {
            id: Date.now(),
            name,
        }
        dispatch(addCustomerAction(customer))
    }

    const removeCustomer = (id) => {
        dispatch(removeCustomerAction(id))
    }


    return (
        <>
        <Header />
        <div className='Redux'>
            <header>Redux</header>
            
            <div className='Redux-box'>
                <div className='Redux-box-cash'>{cash}</div>
                <button onClick={() => addCash()}>Пополнить счёт</button>
                <button onClick={() => getCash()}>Снять со счёта</button>
                <br />
                <br />
                <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
                {/* <button onClick={() => getCash()}>Удалить клиента</button> */}
            </div>
            {customers.length > 0 
            ?
                <div>
                    {customers.map(customer => 
                        <div
                            className='Redux-box-customer'
                            onClick={() => removeCustomer(customer.id)}
                        >
                            {customer.name}
                        </div>
                    )}
                </div>
            :
                <div>
                    Клиенты отсутствуют
                </div>
            }
        </div>
        </>
    )
}

export default Redux
