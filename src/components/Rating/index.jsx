import { StarIcon } from "@heroicons/react/20/solid/index.js";
import { getClassNames } from "../../js/utils/getClassNames.js";

export default function Rating(props) {
  const { value, count = 1, className = "" } = props;

  return (
    <span className={`inline-flex items-baseline gap-2 ${className}`}>
      <StarIcon className={getClassNames(
        count ? "text-yellow-400" : "text-slate-200",
        'h-5 w-5 flex-shrink-0 mt-0.5 self-start'
      )}
        aria-hidden="true"
      />
      {value}
      {count ? (
        <span className="text-sm text-slate-400">
          (based on {count} {count > 1 ? "votes" : "vote"})
        </span>
      ) : null}
    </span>
  )
}