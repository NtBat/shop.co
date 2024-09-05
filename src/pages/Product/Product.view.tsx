import { Breadcrumb, Button } from "@components";
import { Minus, Plus } from "lucide-react";

const breadcrumbItems = [
  { name: "Casual", path: "/t-shirt", isCurrently: true },
];

export function Product() {
  return (
    <div className="container-custom">
      <div className="space-y-6 border-t border-solid border-gray-200 pt-6">
        <Breadcrumb breadcrumbItems={breadcrumbItems} />
      </div>

      <div className="grid grid-cols-2 gap-10">
        <div></div>
        <div>
          <h1>One Life Graphic T-shirt</h1>
          <div></div>
          <div></div>
          <p className="text-sm">
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>
          <div className="mt-4 border-t border-solid border-gray-200 pt-4">
            <span>Select Colors</span>
          </div>
          <div className="mt-4 border-t border-solid border-gray-200 pt-4">
            <span>Choose Size</span>
          </div>
          <div className="mt-4 flex gap-3 border-t border-solid border-gray-200 pt-4">
            <div className="flex h-12 w-40 items-center justify-between rounded-full bg-gray-100 px-2">
              <button>
                <Minus />
              </button>
              <input
                type="text"
                value={1}
                placeholder="1"
                className="w-12 bg-transparent text-center text-sm focus:outline-none"
              />
              <button>
                <Plus />
              </button>
            </div>
            <div className="flex-1">
              <Button>Add to Cart</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
