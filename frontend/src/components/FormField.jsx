function FormField({
  label,
  id,
  type = 'text',
  value,
  onChange,
  placeholder,
  min,
  step,
  required = false,
  hint,
  error,
  textarea = false,
}) {
  const sharedProps = {
    id,
    name: id,
    value,
    onChange,
    placeholder,
    required,
    className: `input-control${error ? ' input-error' : ''}`,
  }

  return (
    <label className="field-group" htmlFor={id}>
      <span className="field-label">
        {label}
        {required ? ' *' : ''}
      </span>
      {textarea ? (
        <textarea {...sharedProps} rows="5" />
      ) : (
        <input {...sharedProps} type={type} min={min} step={step} />
      )}
      {hint ? <span className="field-hint">{hint}</span> : null}
      {error ? <span className="field-error">{error}</span> : null}
    </label>
  )
}

export default FormField
