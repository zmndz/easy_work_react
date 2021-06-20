import React from 'react';
import classes from './Features.module.css';


export const Features = () => (
	<div className={classes.wrapper}>
		<div className={classes.section}>
			<div className={classes.image}>
				<img src="/images/content-001.png" alt="" />
			</div>
			<div className={classes.text}>
				<div className={classes.title}>
					We can give you <br /> our best user experience <br /> to your system
				</div>
				<div className={classes.subtitle}>
					Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
				</div>
			</div>
		</div>

		<div className={classes.section}>
			<div className={classes.image}>
				<img src="/images/content-002.png" alt="" />
			</div>
			<div className={classes.text}>
				<div className={classes.title}>
					Easy access. <br /> Whenever, whereever you want
				</div>
				<div className={classes.subtitle}>
					Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
				</div>
			</div>

		</div>

	</div>
);


export default Features;