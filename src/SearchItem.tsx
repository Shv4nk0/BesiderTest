import type { Item } from "./types";

const SearchItem = ({ item }: { item: Item }) => {
	return (
		<div className="flex">
			<img
				width={110}
				className="self-center max-height-[80%] py-2"
				src={`https://static01.nyt.com/${item?.multimedia?.[0]?.url}`}
			/>
			<div className="flex flex-col p-1 pl-4 mt-3">
				<p className="flex font-bold text-[14px] text-blue-700">
					{item?.source}
				</p>
				<p className="text-[16px] mt-1 line-clamp-6">{item?.abstract}</p>
				<p className="text-[14px] text-gray-500 my-2">
					{new Intl.DateTimeFormat("en-US", {
						month: "short",
						day: "numeric",
						year: "numeric",
						hour: "2-digit",
						minute: "2-digit",
						hour12: true,
					})
						.format(new Date(item?.pub_date))
						.replace(":", ".")}
				</p>
			</div>
		</div>
	);
};

export default SearchItem;
