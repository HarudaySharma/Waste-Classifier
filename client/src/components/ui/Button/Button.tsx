import React, { FC } from 'react'

interface ButtonProps {
    className?: string;
    size?: string;
    variant?: string
    children?: React.ReactNode;
}

const Button: FC<ButtonProps> = ({className}) => {
    return (
        <div></div>
    )
}

export default Button
