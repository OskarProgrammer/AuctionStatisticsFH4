
export const getRequest = async (endpoint) => {
    let data = []

    try{
        data = await fetch (endpoint)
    } catch {
        throw new Error("Get request went wrong")
    }

    return data.json()
}

export const getRequestId = async (endpoint, id) => {
    let data = []

    try{
        data = await fetch (endpoint+id)
    } catch {
        throw new Error("Get request went wrong")
    }

    return data.json()
}

export const putRequest = async (endpoint, payload) => {
    const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    }

    try {
        await fetch(endpoint, requestOptions)
    } catch {
        throw new Error("Put request went wrong")
    }
}

export const postRequest = async (endpoint, payload) => {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    }

    try {
        await fetch(endpoint, requestOptions)
    } catch {
        throw new Error("Put request went wrong")
    }
}