import { Button } from "@components";
import { useProductFilters } from "@hooks/useProductFilters";
import { getColorClass } from "@utils";
import { CheckIcon, ChevronDown, SlidersVertical } from "lucide-react";
import { useState } from "react";

type FilterCriteria = {
  colors: string[];
  sizes: string[];
};

type FilterProps = {
  onFilterChange: (filters: FilterCriteria) => void;
};

export function Filter({ onFilterChange }: FilterProps) {
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  const handleColorChange = (color: string) => {
    setSelectedColors((prevSelectedColors) =>
      prevSelectedColors.includes(color)
        ? prevSelectedColors.filter((c) => c !== color)
        : [...prevSelectedColors, color],
    );
  };

  const handleSizeChange = (size: string) => {
    setSelectedSizes((prevSelectedSizes) =>
      prevSelectedSizes.includes(size)
        ? prevSelectedSizes.filter((s) => s !== size)
        : [...prevSelectedSizes, size],
    );
  };

  const applyFilter = () => {
    onFilterChange({
      colors: selectedColors,
      sizes: selectedSizes,
    });
  };

  const { data } = useProductFilters();

  if (!data) {
    return <div>Loading...</div>;
  }

  const { sizes, colors } = data;

  return (
    <div className="space-y-6 rounded-2xl border border-solid border-gray-300 px-6 py-5">
      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold">Filters</span>
        <SlidersVertical size={18} className="text-gray-500" />
      </div>
      <div>
        <button className="flex w-full items-center justify-between border-t border-solid border-gray-300 pt-6 text-lg font-semibold">
          Colors
          <ChevronDown size={18} />
        </button>
        <div className="mt-3 flex flex-wrap gap-2">
          {colors.map((color) => (
            <div className="relative" key={color}>
              <div>
                <input
                  type="checkbox"
                  className="peer/color absolute left-0 top-0 h-full w-full cursor-pointer opacity-0"
                  id={`color_${color}`}
                  onChange={() => handleColorChange(color)}
                />
                <CheckIcon
                  size={16}
                  className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 text-white peer-checked/color:block"
                />
              </div>
              <label htmlFor={`color_${color}`}>
                <div
                  className={`h-8 w-8 rounded-full ${getColorClass(color)}`}></div>
              </label>
            </div>
          ))}
        </div>
      </div>
      <div>
        <button className="flex w-full items-center justify-between border-t border-solid border-gray-300 pt-6 text-lg font-semibold">
          Size
          <ChevronDown size={18} />
        </button>
        <div className="mt-3 flex flex-wrap gap-2">
          {sizes.map((size) => (
            <div className="relative" key={size}>
              <input
                type="checkbox"
                className="peer/size absolute left-0 top-0 h-full w-full cursor-pointer opacity-0"
                id={`size_${size}`}
                onChange={() => handleSizeChange(size)}
              />
              <label
                htmlFor={`size_${size}`}
                className="flex items-center justify-center rounded-full bg-gray-200 px-3 py-2 text-sm text-gray-700 transition-all duration-200 ease-in-out peer-checked/size:bg-black peer-checked/size:text-white">
                {size.charAt(0).toUpperCase() + size.slice(1)}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Button onClick={applyFilter}>Apply Filter</Button>
      </div>
    </div>
  );
}
