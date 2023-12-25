import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
} from '@material-tailwind/react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const CardSkeleton = () => {
	console.log('inskeleton');
	return (
		<Card className="">
			<CardHeader shadow={false} floated={false} className="h-96">
				<Skeleton height={'100%'} />
			</CardHeader>
			<CardBody>
				<div className="flex mb-4 items-center justify-between">
					<Skeleton width={150} height={25} containerClassName="flex-1" />
					<Skeleton width={70} height={25} />
				</div>
				<Skeleton />
				<Skeleton width={'45%'} />
			</CardBody>
			<CardFooter className="pt-0">
				<Skeleton height={40} />
			</CardFooter>
		</Card>
	);
};

export default CardSkeleton;
