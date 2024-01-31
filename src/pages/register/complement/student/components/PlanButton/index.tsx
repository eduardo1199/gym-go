interface PlanButtonProps {
  name: string
  price: string
  onSelectedPlan: (idPlan: string) => void
  id: string
  isSelected: boolean
}

export function PlanButton({
  name,
  price,
  onSelectedPlan,
  id,
  isSelected,
}: PlanButtonProps) {
  return (
    <button
      className={`border border-primary-gray p-6 flex justify-between items-center hover:bg-primary-purple animate-visible hover:-translate-y-1 hover:scale-105 ease-in duration-300 group ${
        isSelected
          ? 'bg-primary-purple -translate-y-1 scale-105'
          : 'bg-transparent'
      }`}
      onClick={() => onSelectedPlan(id)}
    >
      <span className="text-white font-extrabold text-lg">{name}</span>

      <p
        className={`text-lg group-hover:text-primary-blue ${
          isSelected ? 'text-primary-blue' : 'text-primary-purple'
        }`}
      >
        {price}
      </p>
    </button>
  )
}
