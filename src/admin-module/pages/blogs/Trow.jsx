import { Switch } from "@mantine/core";
import { useState } from "react";

function Trow({ data, featurePost }) {
  const condition = data.feature_post === "0" ? false : true;
  const [isPostFeatured, setIsPostFeatured] = useState(condition);

  return (
    <tr
      className={`"border-b  odd:bg-gray-100 odd:text-black   hover:bg-green-200 duration-100 text-little`}
    >
      <td className="text-center py-[5px]">
        <div className="capitalize flex justify-center items-center gap-[5px]">
          <img
            src={data.main_image || "/placeholder2.png"}
            className="h-[50px] rounded-full w-[50px]"
          />
        </div>
      </td>

      <td className="hidden md:block py-5">
        <div className="w-full flex h-full  justify-center items-center">
          <span>{data.title}</span>
        </div>
      </td>

      <td className="py-5">
        <div className="flex items-center justify-center">
          {new Date(data.created_at).toLocaleDateString()}
        </div>
      </td>

      <td className="hidden md:block">
        <p className=" text-center font-semibold">
          {new Date(data.updated_at).toLocaleDateString()}
        </p>
      </td>

      <td>
        <div className="items-center flex justify-center py-[15px]">
          <Switch
            checked={isPostFeatured}
            onChange={async (e) => {
              console.log(e.currentTarget.checked);
              await featurePost(data, e.currentTarget.checked);
              setIsPostFeatured(e.currentTarget.checked || false);
            }}
          />
        </div>
      </td>
    </tr>
  );
}

export default Trow;