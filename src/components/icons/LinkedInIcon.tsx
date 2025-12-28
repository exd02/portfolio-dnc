interface LinkedInIconProps {
  size?: number
  color?: string
  className?: string
}

function LinkedInIcon({ size = 32, color = 'currentColor', className }: LinkedInIconProps) {
  // LinkedIn icon: white background with black icon inside
  const bgColor = color === 'currentColor' ? '#fff' : color === '#fff' ? '#fff' : color
  const iconColor = '#000'
  
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="32" height="32" rx="3" fill={bgColor} />
      <path
        d="M7.5 11.5h4v13h-4v-13zm2-6.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5zm6.5 6.5h3.5v1.75c.5-1 1.75-2 3.75-2 4 0 4.75 2.5 4.75 5.75v7.75h-4v-7c0-1.5-.5-2.5-2-2.5-1.5 0-2.5 1-2.5 2.5v7h-4v-13z"
        fill={iconColor}
      />
    </svg>
  )
}

export default LinkedInIcon

