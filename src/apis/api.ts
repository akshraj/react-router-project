import { VanType } from "../pages/Vans/Vans";

export const getVans = async (url: string) => {
    const res = await fetch(url);
    if (!res.ok) {
        throw {
            message: 'Failed to fetch vans',
            statusText: res.statusText,
            status: res.status
        };
    }
    const data = await res.json();
    return data.vans as VanType[];
}

export const getVanDetail = async (url: string) => {
    const res = await fetch(url);
    if (!res.ok) {
        throw {
            message: 'Failed to fetch van detail',
            statusText: res.statusText,
            status: res.status
        };
    }
    const data = await res.json();
    return data.vans as VanType;
}

export const loginUser = async (url: string, { arg }: { arg: { email: string, password: string } }) => {
    const requestInit: RequestInit = {
        method: 'POST',
        headers: {} as Headers,
        body: JSON.stringify(arg),
    };

    const res = await fetch(url, requestInit);
    const data = await res.json();
    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        };
    }
    return data
}