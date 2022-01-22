import React, { useContext } from "react"
import { v4 as uuidV4 } from "uuid"
import useLocalStorage from "../hooks/useLocalStorage"

const ProviderContext = React.createContext()

export function useBudgets() {
    return useContext(ProviderContext)
}

export const FunctionProvider = ({ child }) => {
    
    const [categories, setCategory] = useLocalStorage("categories",[])
    const [expenses, setExpense] = useLocalStorage("expenses", [])

    function getExpenses(id) {
        return expenses.filter(expense => expense.id === id)
    }

    function addExpense({description, amount, expId}) {
        setExpense(previous => {
            return [...previous, { id: uuidV4(), description, amount, expId}]
        })
    }

    function addCategory({name, max}) {

        setCategory(previous => {
            if(previous.find(category => category.name === name))
                return previous
            return [...previous, { id: uuidV4(), name, max}]
        })

    }

    function deleteExpense({ id }) {
        setCategory(previous => {
            return previous.filter(expense => expense.id !== id)
        })
    }
     
    function deleteCategory({ id }) {
        setCategory(previous => {
            return previous.map(expense => {
                if(expense.expId !== id) return expense
                return { ...expense, expId: -1}
            })
        })

        setCategory(previous => {
            return previous.filter(category => category.id !== id)
        })
    }

    
    return (
    <ProviderContext.Provider 
        value={{
            categories,
            expenses,
            getExpenses,
            addExpense,
            addCategory,
            deleteCategory,
            deleteExpense,
        }}
    >
        {child}
    </ProviderContext.Provider>
    )
}