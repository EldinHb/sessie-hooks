import React from 'react';
import './NormalButton.css';

interface INormalButtonProps {
    onClick?: () => void;
    title: string;
}

export class NormalButton extends React.Component<INormalButtonProps, {}> {
    constructor(props: INormalButtonProps) {
        super(props);

        this._onClick = this._onClick.bind(this);
    }

    private _onClick() {
        if (this.props.onClick) this.props.onClick();
    }

    render() {
        return(
            <div
                onClick={this._onClick}>
                <div className='button'>
                    <p className='unselectable'>{this.props.title}</p>
                </div>
            </div>
        );
    }
}