import newsapi from "./assets/newsapi.png";

const Footer = () => {
	return (
		<div className="flex flex-col gap-6 py-4 items-center text-[12px]">
			<div className="flex justify-center gap-4 w-full">
				<button>Log In</button>
				<button>About Us</button>
				<button>Publishers</button>
				<button>Sitemap</button>
			</div>
			<div className="flex flex-col gap-2 items-center">
				<div>Powered By</div>
				<img src={newsapi} width={84} />
			</div>
			<div>© 2023 Besider. Inspired by Insider</div>
		</div>
	);
};

export default Footer;
