function PrimaryButton({
  children,
  type = 'button',
  onClick,
  disabled = false,
  secondary = false,
  className = '',
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`button${secondary ? ' button-secondary' : ''}${className ? ` ${className}` : ''}`}
    >
      {children}
    </button>
  )
}

export default PrimaryButton
