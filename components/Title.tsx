import { useQuery } from "@apollo/client";
import workOperations from "../graphqlOperations/work";
import { currentWorkTab } from "../apollo-client";

interface Props {
  name: string;
  currentMenu?: string;
}

interface TabsQuery {
  workTabs: { tab: string }[];
}

export default function Title({ name, currentMenu }: Props) {
  const menus = {
    workTabs: [{ tab: "All" }, { tab: "Recent" }, { tab: "Favourite" }],
  };

  return (
    <div className="customLine relative before:bottom-0 borderLeft z-20 py-10 flex flex-wrap gap-8 justify-center sm:justify-between items-center">
      <span className="ml-12 customCircle relative tracking-wide capitalize text-3xl text-gray-300 font-medium">
        {name}
      </span>

      {currentMenu && menus && (
        <ul className="flex flex-wrap items-center gap-6 mr-12 ml-12">
          {menus.workTabs.map((menu, idx) => (
            <li
              key={idx}
              onClick={() => currentWorkTab(menu.tab)}
              className={`text-[1.4rem] cursor-pointer tracking-wide ${
                currentMenu === menu.tab ? "text-main-orange" : "text-gray-300"
              }`}
            >
              {menu.tab}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
