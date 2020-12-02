import React from 'react';
import { useFetch } from '../hooks/UseFetch';
import { QuoteResponse } from '../library/Quotes';

export const QuoteOfTheDay = (props: QuoteOfTheDayProps) => {
    const [isLoading, quoteResponse, status] = useFetch<QuoteResponse>('https://quotes.rest/qod');

    return(
        <div>
            {
                isLoading ? 
                <p>...{status}</p> :
                quoteResponse ? 
                    quoteResponse.contents.quotes.map((x, i) => {
                        return(<p key={i.toString()}>{x.quote}</p>)
                    })
                    :
                    null
            }
        </div>
    );
}

export type QuoteOfTheDayProps = {
    
}