export default function Loader(props) {
  const { className } = props;

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}