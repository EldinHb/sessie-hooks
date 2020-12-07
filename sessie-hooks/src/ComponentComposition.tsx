import React from 'react';

export const ChildComp = (props: ChildProps) => {
    return(
        <div 
            className={'ChildCompClassName ' + props.className}
            onClick={props.onClick} 
            key={props.id}
        >
            {props.title}
        </div>
    );
}

export const NewComp = (props: NewProps) => {
    return(
        <ChildComp
            {...props.childProps}
            className='NewComp'
        />
    );
}

type ChildProps = {
    title: string;
    onClick?: () => void;
    id: number;
    className?: string;
}

type NewProps = {
    childProps: ChildProps;
}