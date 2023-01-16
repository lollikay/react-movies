export default function Loader(props) {
  const { className = "" } = props;

  return (
    <div className={`fixed top-0 bottom-0 left-0 right-0 z-10 flex justify-center items-center bg-white bg-opacity-75 ${className}`}>
      <div className="animate-spin inline-block w-14 h-14 border-4 border-slate-700 rounded-full border-r-transparent border-t-8 border-b" role="status">
        <span className="hidden">Loading...</span>
      </div>
    </div>
  )
}