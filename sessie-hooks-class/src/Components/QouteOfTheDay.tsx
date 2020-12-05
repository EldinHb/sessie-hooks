import React from 'react';
import { QuoteResponse } from '../Library/Quotes';

interface QuoteState {
    isLoading: boolean;
    quoteResponse?: QuoteResponse;
}

export class QuoteOfTheDay extends React.Component<{}, QuoteState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            isLoading: true
        };
    }

    public componentDidMount() {
        setTimeout(async () => {
            const response = await fetch('https://quotes.rest/qod');
            if (response.ok) {
                const parsedData = JSON.parse(await response.text());
                this.setState({
                    quoteResponse: parsedData,
                    isLoading: false
                });
            }
        }, 2000);
    }

    public render() {
        return(
            <div>
            {
                this.state.isLoading ? 
                <p>...loading</p> 
                :
                this.state.quoteResponse ? 
                this.state.quoteResponse.contents.quotes.map((x, i) => {
                    return(<p key={i.toString()}>{x.quote}</p>)
                })
                :
                null
            }
        </div>
        );
    }
}