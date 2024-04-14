import React, { FC } from 'react'

interface ButtonProps {
    className?: string;
    id?: string;
    onClickHandler?: React.MouseEventHandler<HTMLButtonElement>
    size?: string;
    variant?: string
    aria_expanded?: boolean;
    aria_labelledby?: string;
    aria_label?: string;
    children?: React.ReactNode;
    btnRef?: React.MutableRefObject<HTMLButtonElement>
}

const Button: FC<ButtonProps> = ({ btnRef, className, id, children, onClickHandler, aria_expanded, aria_labelledby, aria_label }) => {
    return (
        <button
            ref={btnRef}
            id={id}
            className={className}
            aria-expanded={aria_expanded}
            aria-labelledby={aria_labelledby}
            aria-label={aria_label}
            onClick={onClickHandler}
        >
            {children}
        </button>
    )
}

export default Button
