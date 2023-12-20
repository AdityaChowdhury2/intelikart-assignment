import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Button,
} from '@material-tailwind/react';
import { useInfiniteQuery } from '@tanstack/react-query';
import InfiniteScroll from 'react-infinite-scroll-component';

const getProducts = async ({ pageParam = 0 }) => {
	const res = await fetch(
		`https://dummyjson.com/products?limit=${9}&offset=${pageParam}`
	);
	const data = await res.json();
	return { ...data, prevOffset: pageParam };
};

const Cards = () => {
	// let skip;
	const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
		queryKey: ['products'],
		queryFn: getProducts,
		getNextPageParam: lastPage => {
			if (lastPage.prevOffset + 9 > lastPage.total) {
				return false;
			}
			return lastPage.prevOffset + 9;
		},
	});
	const products = data?.pages.reduce((acc, page) => {
		return [...acc, ...page.products];
	}, []);
	return (
		<InfiniteScroll
			dataLength={products ? products.length : 0}
			next={() => fetchNextPage()}
			hasMore={hasNextPage}
		>
			<h3 className="text-center text-3xl text-[var(--primary-color)]">
				All Products
			</h3>
			<div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-10">
				{products?.map((product, idx) => (
					<Card key={idx} className="bg-[var(--light)]">
						<CardHeader shadow={false} floated={false} className="h-96">
							<img
								src={product.thumbnail}
								alt="card-image"
								className="h-full w-full object-cover"
							/>
						</CardHeader>
						<CardBody>
							<div className="mb-2 flex items-center justify-between">
								<Typography
									color="blue-gray"
									className="font-medium capitalize"
								>
									{product.title}
								</Typography>
								<Typography color="blue-gray" className="font-medium">
									${product.price}
								</Typography>
							</div>
							<Typography
								variant="small"
								color="gray"
								className="font-normal opacity-75"
							>
								{product.description}
							</Typography>
						</CardBody>
						<CardFooter className="pt-0">
							<Button
								ripple={false}
								fullWidth={true}
								className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
							>
								Add to Cart
							</Button>
						</CardFooter>
					</Card>
				))}
			</div>
		</InfiniteScroll>
	);
};

export default Cards;
