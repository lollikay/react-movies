import { StarIcon } from "@heroicons/react/20/solid/index.js";

export default function Rating(props) {
  const { value, className } = props;

  return (
    <span className={`inline-flex items-center ${className}`}>
      <StarIcon className='h-5 w-5 flex-shrink-0 text-yellow-400 mr-2'
        aria-hidden="true"
      />
      {value}
    </span>
  )
}