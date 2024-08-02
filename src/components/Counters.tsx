import { useDispatch, useSelector } from "react-redux";

import { decrement, increment } from "@/features/counters/countersSlice";
import Counter from "./Counter";

function Counters() {
  const counters = useSelector((state: any) => state.counters);
  const dispatch = useDispatch();

  const handleIncrement = (counterId: number) => {
    dispatch(increment(counterId));
  };
  const handleDecrement = (counterId: number) => {
    dispatch(decrement(counterId));
  };
  const totalCount = counters.reduce(
    (sum: number, curr: { value: number }) => sum + curr.value,
    0
  );
  return (
    <div className="flex flex-col items-center p-10 gap-y-4">
      <h1 className="text-xl font-bold py-6"> Simple counter application</h1>

      {counters.map((counter: any) => (
        <Counter
          key={counter.id}
          count={counter.value}
          onIncrement={() => handleIncrement(counter.id)}
          onDecrement={() => handleDecrement(counter.id)}
        />
      ))}

      <div className="bg-gray-300 w-[500px] p-4">
        <p className="text-center">Total value:{totalCount}</p>
      </div>
    </div>
  );
}

export default Counters;
