import "./App.css";

import { useEffect } from "react";
import { useGetArchiveQuery } from "./services/api";

import Header from "./Header";
import SearchList from "./SearchList";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import { setData } from "./slice";

function App() {
	const { data } = useGetArchiveQuery({ year: 2025, month: 5 }); // Самый поздний доступный месяц в API на момент, похоже REAL TIME с ним не сделать ;(
	const dispatch = useDispatch();

	useEffect(() => {
		if (data) {
			dispatch(setData(data));
		}
		console.log(data?.response?.docs, import.meta.env.VITE_API_KEY);
	}, [data, dispatch]);

	return (
		<div className="h-screen w-screen flex flex-col font-lato">
			<Header />
			<SearchList />
			<Footer />
		</div>
	);
}

export default App;
