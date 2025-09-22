import { useSelector } from "react-redux";
import { useEffect, useMemo, useRef, useState } from "react";

import loader from "./assets/Vector.png";
import SearchItem from "./SearchItem";
import { Separator } from "@radix-ui/react-separator";

import type { Item } from "./types";
import type { RootState } from "./store";

const SearchList = () => {
	const [visibleCount, setVisibleCount] = useState(10);
	const [isFakeLoading, setIsFakeLoading] = useState(false);
	const data = useSelector((state: RootState) => state.archive.data);
	const loadMoreRef = useRef<HTMLDivElement>(null);

	const grouped = useMemo(() => {
		if (!data) return {};
		return [...data.response.docs]
			.reverse()
			.slice(0, visibleCount)
			.reduce<Record<string, Item[]>>((acc, item) => {
				const day = new Date(item.pub_date).toISOString().slice(0, 10);
				(acc[day] ||= []).push(item);
				return acc;
			}, {});
	}, [data, visibleCount]);

	useEffect(() => {
		if (!data || !loadMoreRef.current) return;

		const el: HTMLDivElement = loadMoreRef.current;
		let timer: ReturnType<typeof setTimeout>;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsFakeLoading(true);
					timer = setTimeout(() => {
						setVisibleCount((prev) => prev + 10);
						setIsFakeLoading(false);
					}, 600);
				}
			},
			{ rootMargin: "300px" }
		);

		observer.observe(el);

		return () => {
			observer.disconnect();
			if (timer) clearTimeout(timer);
		};
	}, [data]);

	if (!data)
		return (
			<div className="h-screen flex items-center justify-center">
				<div className="w-full flex justify-center py-14">
					<img src={loader} className="animate-spin" />
				</div>
			</div>
		);

	return (
		<div className="px-5 w-full mt-3">
			{(Object.entries(grouped) as [string, Item[]][]).map(([date, posts]) => (
				<div key={date}>
					<h2 className="font-bold text-xl">
						News for {date.split("-").reverse().join(".")}
					</h2>
					{posts.map((item, index) => (
						<div key={item._id}>
							<SearchItem item={item} />
							{index !== posts.length - 1 && (
								<Separator className="bg-black opacity-15 h-[1px]" />
							)}
						</div>
					))}
				</div>
			))}
			<div ref={loadMoreRef} />

			{isFakeLoading && (
				<div className="w-full flex justify-center py-12">
					<img src={loader} className="animate-spin" />
				</div>
			)}
		</div>
	);
};

export default SearchList;
