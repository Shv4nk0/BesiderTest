import { Menu, X } from "lucide-react";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "./components/ui/separator";

const Header = () => {
	return (
		<>
			<div className="flex w-full items-center px-5 py-[22px] justify-between">
				<Sheet>
					<SheetTrigger>
						<Menu className="w-7 h-7" />
					</SheetTrigger>

					<SheetContent
						side="left"
						className="w-full h-full bg-white space-y-6 p-8"
					>
						<SheetHeader className="absolute top-0 left-0 w-full  ">
							<SheetClose className="absolute right-4 top-[8px] bg-white z-10">
								<X className="h-8 w-8 " strokeWidth={2} />
							</SheetClose>
						</SheetHeader>
						<div className="flex flex-col gap-4 my-auto justify-between">
							<button className="text-2xl font-semibold flex">SCIENCE</button>
							<button className="text-2xl font-semibold flex">GENERAL</button>
							<button className="text-2xl font-semibold flex">
								ENTERTAINMENT
							</button>
							<button className="text-2xl font-semibold flex">
								TECHNOLOGY
							</button>
							<button className="text-2xl font-semibold flex">BUSINESS</button>
							<button className="text-2xl font-semibold flex">HEALTH</button>
							<button className="text-2xl font-semibold flex">SPORTS</button>
						</div>
					</SheetContent>
				</Sheet>
				<h1 className="absolute left-1/2 -translate-x-1/2 text-3xl font-semibold font-lato">
					BESIDER
				</h1>
			</div>
			<Separator className=" w-screen bg-black opacity-15 " />
		</>
	);
};

export default Header;
