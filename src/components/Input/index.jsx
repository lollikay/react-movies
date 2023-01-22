import {getClassNames} from "../../js/utils/getClassNames.js";

export const Input = (props) => {
  const {
    className = "",
    changeHandler = () => {},
    ...inputProps
  } = props;

  return (
    <input className={getClassNames(
             "block w-full rounded-md focus:border-pink-500 focus:ring-pink-500 placeholder:text-slate-400 placeholder:font-light",
             className
           )}
           onChange={changeHandler}
           { ...inputProps }
    />
  )
}