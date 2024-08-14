type BadgeProps = {
  discountValue: number;
};

export function Badge({ discountValue }: BadgeProps) {
  return (
    <span className="flex items-center justify-center rounded-full bg-red-200 px-2 py-1 text-xs text-red-600">
      -{discountValue}%
    </span>
  );
}
