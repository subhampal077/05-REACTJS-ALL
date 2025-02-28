import { useState } from "react"

export function useFilter(dataList, callback) {
    const [query, setQuery] = useState("");

    const filteredData = dataList.filter((el) => {
        return callback(el).toLowerCase().includes(query)
    });

    return [filteredData, setQuery]
}