import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
	return (
		<section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
			<div className="flex-1">
				<img
					src={offer}
					width={773}
					height={687}
					className="object-contain w-full"
				/>
			</div>

			<div className="flex flex-1 flex-col">
				<h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
					<span> Special</span> Offer
				</h2>
				<p className="mt-4 lg:max-w-lg info-text">
					We are offering a special discount on all products for a limited time
					only. Don&apos;t miss out on this opportunity to save big on our high
					quality products.
				</p>
				<p className="mt-6 lg:max-w-lg info-text">
					Discount code: <span className="font-bold">SPRING2024</span>
				</p>
				<div className="mt-11 flex flex-wrap gap-4">
					<Button label="Shop now" />
					<Button
						label="Learn more"
						backgroundColor="bg-white"
						borderColor="border-slate-gray"
						textColor="text-slate-gray"
					/>
				</div>
			</div>
		</section>
	);
};

export default SpecialOffer;
