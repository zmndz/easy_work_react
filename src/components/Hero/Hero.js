import React from 'react';
import classes from './Hero.module.css';


export const Hero = () => (
	<div className={classes.wrapper}>
		<div className={classes.nav}>
			<div className={classes.logo}>
				<img src="/images/logo.png" alt="" />
			</div>
			<ul className={classes.menu}>
				<li>
					<a href="#" className={`${classes.menu__item} ${classes.menu__item_active}`}>
						Home
					</a>
				</li>
				<li>
					<a href="#" className={classes.menu__item}>
						About us
					</a>
				</li>
				<li>
					<a href="#" className={classes.menu__item}>
						Services
					</a>
				</li>
				<li>
					<a href="#" className={classes.menu__item}>
						Pricing
					</a>
				</li>
				<li>
					<a href="#" className={classes.menu__item}>
						Careers
					</a>
				</li>
			</ul>
			<div className={classes.search}>
				<span className="icon-search"></span>
			</div>
		</div>

		<div className={classes.hero}>
			{/* <div className={classes.background}>
				<div className={classes.background-left}>
				</div>
				<div className={classes.background-right}>
				</div>


			</div> */}

			<div className={classes.text}>
				<div className={classes.title}>
					Make development <br /> easy with us.
				</div>
				<div className={classes.subtitle}>
					Doing development can never be easy, and it takes time and resources.
				</div>
				<div className={classes.subtitle}>
					We at EasyWork has the solution.
				</div>
			</div>
			<div className={classes.banner}>
				<div className={classes.banner__image}>
				</div>
			</div>
		</div>
	</div>
);


export default Hero;