import { StarIcon } from "@heroicons/react/20/solid/index.js";

export default function Rating(props) {
  const { value, count = 1, className = "" } = props;

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <StarIcon className='h-5 w-5 flex-shrink-0 text-yellow-400'
        aria-hidden="true"
      />
      {value}
      <span className="text-sm text-slate-400">
        / {count}
      </span>
    </span>
  )
}