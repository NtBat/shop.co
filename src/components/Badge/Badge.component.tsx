type BadgeProps = {
  discountValue: number;
};

export function Badge({ discountValue }: BadgeProps) {
  return (
    <span className="flex items-center justify-center bg-red-200 px-3 py-2 text-xs text-red-600">
      -{discountValue}%
    </span>
  );
}
