const AnimatedHamburgerIcon = ({
	isMobileNavOpen,
	setIsMobileNavOpen,
}: {
	isMobileNavOpen: boolean;
	setIsMobileNavOpen: (toggle: boolean) => void;
}) => {
	const spanClassName =
		'block absolute h-px opacity-100 bg-bright-gray rounded-sm left-0 transition-all duration-[250ms]';

	return (
		// eslint-disable-next-line jsx-a11y/click-events-have-key-events
		<div
			className='relative h-4 w-4 rotate-0 cursor-pointer transition-all duration-500'
			onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
			role='button'
			tabIndex={0}
			aria-label='menu'
		>
			<span
				className={`${spanClassName} rotate-0 ${
					isMobileNavOpen
						? 'left-1/2 top-[7.5px] w-0'
						: 'top-0.5 w-3.5'
				}`}
			/>
			<span
				className={`${spanClassName} top-[7.5px] w-3.5 ${
					isMobileNavOpen ? 'rotate-45' : 'rotate-0'
				}`}
			/>
			<span
				className={`${spanClassName} top-[7.5px] w-3.5 ${
					isMobileNavOpen ? '-rotate-45' : 'rotate-0'
				}`}
			/>
			<span
				className={`${spanClassName} rotate-0 ${
					isMobileNavOpen
						? 'left-1/2 top-[7.5px] w-0'
						: 'top-[13px] w-3.5'
				}`}
			/>
		</div>
	);
};

export default AnimatedHamburgerIcon;
