"use client"

import { askQuestion } from "@/utils/api"
import { useState } from "react"

const Question = () => {
    const [value, setValue] = useState('')
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState()
    const onChange = (e:any) => {
        setValue(e.target.value)
    }
    const handleSubmit = async (e:any) => {
        e.preventDefault()
        setLoading(true)
        const answer = await askQuestion(value)
        setValue('')
        setResponse(answer)
        setLoading(false)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="mb-10">
                <input
                disabled={loading} 
                onChange={onChange} 
                value={value} 
                type="text" 
                placeholder="Ask me a question" 
                className="border border-black/20 px-4 py-2 text-lg rounded-lg"
                />
                <button
                disabled={loading} 
                className="bg-blue-400/20 px-4 py-2 rounded-lg text-lg" 
                type="submit">
                    Ask
                </button>
            </form>
            {loading && (<div>Loading...</div>)}
            {response && (<div>{response}</div>)}
        </div>
    )
}

export default Question