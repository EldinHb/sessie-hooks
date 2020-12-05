import React from 'react';

export const useFetch = <T>(url: string, execute = true) => {
    const [isLoading, setIsLoading] = React.useState(execute);
    const [data, setData] = React.useState<T>();
    const [status, setStatus] = React.useState<FetchStatus>();

    React.useEffect(() => {
        const asyncTask = async () => {
            setStatus('loading');
            setTimeout( async () => {  
                const response = await fetch(url);
                if (response.ok) {
                    const parsedData: T = JSON.parse(await response.text());
                    setData(parsedData);
                    setIsLoading(false);
                    setStatus('succes')
                } 
                else setStatus('failed');
            }, 2000);
        }

        asyncTask();
    }, []);

    return [isLoading, data, status] as const;
}

export type FetchStatus = 'idle' | 'succes' | 'failed' | "loading";