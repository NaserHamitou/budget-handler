import { useEffect, useState } from "react"

const useLocalStorage = (key, defaultValue) => {

    const [value, setValue] = useState(() => {
        const JSONValue = localStorage.getItem(key)

        if (JSONValue != null) return JSON.parse(JSONValue)

        if (typeof defaultValue === "function") return defaultValue()

        return defaultValue
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue]
}

export default useLocalStorage