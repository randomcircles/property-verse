const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null

async function fetchProperties() {
    try {

        // check if api domain is available
        if (!apiDomain) {
            return []
        }

        const res = await fetch(`${apiDomain}/properties`);

        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }

        return res.json();
    } catch (error) {
        console.log("Properties fetch error ", error);
        return [];
    }
}

export { fetchProperties };