import {
	Navbar,
	Collapse,
	Typography,
	IconButton,
} from '@material-tailwind/react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import logo from '../../assets/Intelikart-logo.png';

import { useState } from 'react';

function NavList() {
	return (
		<ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 font-medium"
			>
				<a
					href="#"
					className="flex items-center hover:text-[var(--secondary-color)] text-[var(--primary-color)] transition-colors"
				>
					About
				</a>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 font-medium"
			>
				<a
					href="#"
					className="flex items-center hover:text-[var(--secondary-color)] text-[var(--primary-color)] transition-colors"
				>
					Services
				</a>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 font-medium"
			>
				<a
					href="#"
					className="flex items-center hover:text-[var(--secondary-color)] text-[var(--primary-color)] transition-colors"
				>
					Pricing
				</a>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 font-medium"
			>
				<a
					href="#"
					className="flex items-center hover:text-[var(--secondary-color)] text-[var(--primary-color)] transition-colors"
				>
					FAQs
				</a>
			</Typography>
		</ul>
	);
}

const MyNavbar = () => {
	const [openNav, setOpenNav] = useState(false);

	return (
		<Navbar className="mx-auto max-w-screen-xl px-6 py-3 shadow-transparent">
			<div className="flex items-center justify-between text-[var(--primary-color)]">
				<div className="w-40">
					<img src={logo} alt="" className="w-full" />
				</div>
				<div className="hidden lg:block">
					<NavList />
				</div>
				<IconButton
					variant="text"
					className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
					ripple={false}
					onClick={() => setOpenNav(!openNav)}
				>
					{openNav ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
				</IconButton>
			</div>
			<Collapse open={openNav}>
				<NavList />
			</Collapse>
		</Navbar>
	);
};

export default MyNavbar;
