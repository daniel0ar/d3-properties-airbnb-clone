import { useSearchParams, useRouter } from "next/navigation";
import qs from "query-string";
import { useCallback } from "react";

const CategoryBox = ({ icon, name, selected }) => {
  
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery = {
      ...currentQuery,
      locationType: name
    }

    if (params?.get('locationType') === name){
      delete updatedQuery.locationType;
    }

    const url = qs.stringifyUrl({
      url: '/',
      query: updatedQuery
    }, {skipNull: true});

    router.push(url);
  }, [name, params, router])

  return (
    <li
      key={name}
      className={`w-max flex flex-col items-center justify-between h-16 cursor-pointer 
        brightness-[4] text-gray-900 hover:filter-none focus:filter-none
        ${
          selected
            ? "border-b-neutral-800 text-neutral-950 filter-none"
            : "border-transparent text-neutral-800"
        }`}
      onClick={handleClick}
    >
      <span className="h-10 w-10 flex items-center justify-center">{icon}</span>
      <div className="text-xs font-semibold break-keep w-[inherit]">{name}</div>
    </li>
  );
};

export default CategoryBox;
