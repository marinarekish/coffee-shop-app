import { MdClose } from "react-icons/md";

export function Cart() {
  return (
    <div>
      <h1 className="text-center mb-4">
        It's time to review and <span>order some goods</span>
      </h1>
      <div>
        <div className="flex justify-between">
          <img />
          <h2>title</h2>
          <div className="flex">
            <button>-</button>
            <p>1</p>
            <button>+</button>
          </div>
          <h3>$ 5.50</h3>
          <MdClose />
        </div>
      </div>
    </div>
  );
}
