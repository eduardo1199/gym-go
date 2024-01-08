interface InputMessageErrorProps {
  message?: string
}

export function InputMessageError({ message }: InputMessageErrorProps) {
  return (
    <span className="text-sm font-semibold text-rose-500">{message ?? ''}</span>
  )
}
