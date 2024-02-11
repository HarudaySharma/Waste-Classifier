import React, { FC } from 'react'

interface ButtonProps {
    className?: string;
    onClickHandler?: React.MouseEventHandler<HTMLButtonElement>
    size?: string;
    variant?: string
    children?: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ className, children , onClickHandler}) => {
    return (
        <button className={className} onClick={onClickHandler}>
            {children}
        </button>
    )
}

export default Button
