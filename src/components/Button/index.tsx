import cn from 'classnames'
import React, { ButtonHTMLAttributes, ReactNode } from 'react'

export const buttonClasses = {
  base: 'items-center focus:outline-none transition ease-in-out duration-300 font-nunito text-white',
  pill: 'rounded-full',
  size: {
    md: 'px-4 py-2'
  },
  variant: {
    primary: 'bg-[#fff] capitalize hover:bg-white/80',
    disabled: 'px-5 bg-cloud-800 cursor-not-allowed text-cloud-500 border border-cloud-700'
  },
  weight: {
    bold: 'font-extrabold',
    normal: 'font-medium',
    light: 'font-semibold'
  }
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  iconPosition?: 'left' | 'right' | 'top' | 'bottom'
  disabled?: boolean
  variant?: keyof typeof buttonClasses.variant
  size?: keyof typeof buttonClasses.size
  weight?: keyof typeof buttonClasses.weight
  pill?: boolean
  fluid?: boolean
  className?: string
  onClick?: () => void
  isLoading?: boolean
  icon?: ReactNode
  type?: 'button' | 'submit' | 'reset' | undefined
}

const Button = ({
  children,
  size = 'md',
  variant = 'primary',
  disabled = false,
  weight = 'bold',
  pill = true,
  className = '',
  fluid = true,
  isLoading = false,
  type = 'button',
  onClick,
  icon,
  iconPosition = 'right',
  ...rest
}: ButtonProps) => {
  const handleOnClick =
    disabled || isLoading
      ? () => {
          null
        }
      : onClick

  return (
    <button
      onClick={handleOnClick}
      type={type}
      className={cn(
        isLoading ? buttonClasses.variant['disabled'] : '',
        buttonClasses.base,
        buttonClasses.size[size],
        buttonClasses.variant[variant],
        buttonClasses.weight[weight],
        pill ? buttonClasses.pill : 'rounded-lg',
        disabled ? buttonClasses.variant['disabled'] : '',
        fluid ? 'w-full' : '',
        className
      )}
      {...rest}
    >
      <>{children}</>
    </button>
  )
}

export default React.memo(Button)
