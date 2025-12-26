import Link from 'next/link'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
}

export default function Button({ 
  children, 
  href, 
  onClick, 
  variant = 'primary',
  className = '' 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200'
  
  const variants = {
    primary: 'bg-black text-white hover:bg-gray-900 shadow-lg hover:shadow-xl',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
    outline: 'border-2 border-white text-white hover:bg-white/10'
  }

  const buttonContent = (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.div>
  )

  if (href) {
    return <Link href={href}>{buttonContent}</Link>
  }

  return (
    <button onClick={onClick} className="border-none bg-transparent p-0">
      {buttonContent}
    </button>
  )
}

