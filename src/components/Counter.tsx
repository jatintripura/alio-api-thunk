import { Button } from "./ui/button";
function Counter({ count, onIncrement, onDecrement }) {
  return (
    <div>
      {" "}
      <div className="bg-gray-300 w-[500px] flex items-center flex-col gap-y-6 p-4">
        <p className="texl-lg font-medium"> Counter value:{count}</p>
        <div className="flex gap-x-6">
          <Button onClick={onIncrement} type="button" variant={"default"}>
            Increment
          </Button>
          <Button onClick={onDecrement} type="button" variant={"destructive"}>
            Decrement
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
