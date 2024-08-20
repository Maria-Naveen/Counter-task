const Counter = ({ count, onClick }) => {
  return (
    <div className="w-full mx-4 md:w-1/4 h-1/4 flex flex-col gap-4 items-center justify-center border border-white">
      <p>Current count:{count}</p>
      <button
        className="w-24 h-6 border-2 border-white"
        count={count}
        onClick={onClick}
      >
        Click me
      </button>
    </div>
  );
};

export default Counter;
