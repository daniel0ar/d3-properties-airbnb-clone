"use client";
import { useRouter } from "next/navigation";
import Button from "./Button";

const EmptyState = ({
  title = "No exact matches",
  subtitle = "Try changing or removing some filters",
  showReset,
}) => {
  const router = useRouter();

  return (
    <div className="h-[60vh] flex flex-col gap-2 justify-center items-center">
      <h3 className="text-2xl leading-normal font-semibold text-d3prop-light-black">
        {title}
      </h3>
      <p className="text-gray-500">{subtitle}</p>
      <div className="w-48 mt-4">
        {showReset && (
          <Button
            outline
            label="Remove all filters"
            onClick={() => router.push('/')}  
          >
          </Button>
        )}

      </div>
    </div>
  );
};

export default EmptyState;
