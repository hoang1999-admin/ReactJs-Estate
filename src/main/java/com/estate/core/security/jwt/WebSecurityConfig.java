/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date Jun 3, 2021
 * @hour 2:53:14 PM
*/


package com.estate.core.security.jwt;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(
		// securedEnabled = true,
		// jsr250Enabled = true,
		prePostEnabled = true)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter{
	@Autowired
	UserDetailsServiceImpl userDetailsService;

	@Autowired
	private AuthEntryPointJwt unauthorizedHandler;

	@Bean
	public AuthTokenFilter authenticationJwtTokenFilter() {
		return new AuthTokenFilter();
	}

	@Override
	public void configure(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {
		authenticationManagerBuilder.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
	}

	@Bean
	@Override
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.cors().and().csrf().disable()
			.exceptionHandling().authenticationEntryPoint(unauthorizedHandler).and()
			.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
			.authorizeRequests()
			
			.antMatchers("/api/v1/auth/**","/api/v1/auth/signup/**").permitAll()
			.antMatchers("/api/v1/test/**","/api/v1/auth/signin/**").permitAll()
			//Interface
			.antMatchers(HttpMethod.GET,
					"/api/v1/order/**",
					"/api/v1/cart/**", 
					"/api/v1/product/**", 
					"/api/v1/product-page/**",
					"/api/v1/products/**", 
					"/api/v1/product-top/**",
					"/api/v1/product-top12/**",
					"/api/v1/productsale/**", 
					"/api/v1/productrent/**",
					"/api/v1/productdeal/**",
					"/api/v1/productrelations/**", 
					"/api/v1/productphoto/**",
					"/api/v1/productbycategory/**",
					"/api/v1/getProductsByCategory/**",
					"/api/v1/category/**",
					"/api/v1/categorysaleandrent/**",
					"/api/v1/category-top/**",
					"/api/v1/category-sale/**",
					"/api/v1/category-rent/**",
					"/api/v1/category-apply/**",
					"/api/v1/category-furnitureandexterior/**",
					"/api/v1/category-fengshui/**",
					"/api/v1/category-recruitment/**", 
					"/api/v1/category-example/**",
					"/api/v1/slider/**",
					"/api/v1/contact/**", 
					"/api/v1/photo/**",
					"/api/v1/request/**",
					"/api/v1/area/**",
					"/api/v1/email/**",
					"/api/v1/productrelation/**",
					"/api/v1/area-top/**",
					"/api/v1/cart/addProduct/**",
					"/api/v1/cart/updateQtyForCart/**",
					"/api/v1/cart/removeProductFromCart/**", 
					"/api/v1/cart/getCartsByUserId/**"
					)
			.permitAll()
			.antMatchers(HttpMethod.POST,
					"/api/v1/order/**",
					"/api/v1/cart/**",
					"/api/v1/product/**",
					"/api/v1/product-page/**",
					"/api/v1/products/**",
					"/api/v1/product-top/**",
					"/api/v1/product-top12/**",
					"/api/v1/productsale/**", 
					"/api/v1/productrent/**", 
					"/api/v1/productdeal/**",
					"/api/v1/productrelations/**",
					"/api/v1/productphoto/**",
					"/api/v1/productbycategory/**",
					"/api/v1/getProductsByCategory/**", 
					"/api/v1/category/**",
					"/api/v1/category-top/**",
					"/api/v1/categorysaleandrent/**",
					"/api/v1/category-sale/**",
					"/api/v1/category-rent/**",
					"/api/v1/category-apply/**",
					"/api/v1/category-furnitureandexterior/**",
					"/api/v1/category-fengshui/**",
					"/api/v1/category-recruitment/**",
					"/api/v1/category-example/**", 
					"/api/v1/slider/**",
					"/api/v1/contact/**",
					"/api/v1/photo/**", 
					"/api/v1/request/**",
					"/api/v1/area/**",
					"/api/v1/area-top/**",
					"/api/v1/email/**",
					"/api/v1/productrelation/**", 
					"/api/v1/area-top/**",
					"/api/v1/cart/addProduct/**",
					"/api/v1/cart/updateQtyForCart/**",
					"/api/v1/cart/removeProductFromCart/**",
					"/api/v1/cart/getCartsByUserId/**")
			.permitAll()
			.antMatchers(HttpMethod.PUT,
					"/api/v1/order/**",
					"/api/v1/cart/**",
					"/api/v1/product/**", 
					"/api/v1/product-page/**",
					"/api/v1/products/**",
					"/api/v1/product-top/**",
					"/api/v1/product-top12/**",
					"/api/v1/productsale/**",
					"/api/v1/productrent/**", 
					"/api/v1/productdeal/**",
					"/api/v1/productrelations/**",
					"/api/v1/productphoto/**",
					"/api/v1/productbycategory/**",
					"/api/v1/getProductsByCategory/**",
					"/api/v1/category/**", 
					"/api/v1/category-top/**",
					"/api/v1/categorysaleandrent/**",
					"/api/v1/category-sale/**", 
					"/api/v1/category-rent/**", 
					"/api/v1/category-apply/**",
					"/api/v1/category-furnitureandexterior/**", 
					"/api/v1/category-fengshui/**",
					"/api/v1/category-recruitment/**",
					"/api/v1/category-example/**",
					"/api/v1/slider/**",
					"/api/v1/contact/**", 
					"/api/v1/photo/**",
					"/api/v1/request/**",
					"/api/v1/area/**", 
					"/api/v1/area-top/**",
					"/api/v1/email/**",
					"/api/v1/productrelation/**",
					"/api/v1/area-top/**",
					"/api/v1/cart/addProduct/**",
					"/api/v1/cart/updateQtyForCart/**",
					"/api/v1/cart/removeProductFromCart/**",
					"/api/v1/cart/getCartsByUserId/**")
			.permitAll()
			.antMatchers(HttpMethod.DELETE,
					"/api/v1/order/**",
					"/api/v1/cart/**", 
					"/api/v1/product/**", 
					"/api/v1/product-page/**",
					"/api/v1/products/**", 
					"/api/v1/product-top/**",
					"/api/v1/product-top12/**",
					"/api/v1/productsale/**",
					"/api/v1/productrent/**", 
					"/api/v1/productdeal/**",
					"/api/v1/productrelations/**",
					"/api/v1/productphoto/**", 
					"/api/v1/productbycategory/**",
					"/api/v1/getProductsByCategory/**", 
					"/api/v1/category/**",
					"/api/v1/category-top/**",
					"/api/v1/categorysaleandrent/**",
					"/api/v1/category-sale/**",
					"/api/v1/category-rent/**",
					"/api/v1/category-apply/**",
					"/api/v1/category-furnitureandexterior/**",
					"/api/v1/category-fengshui/**",
					"/api/v1/category-recruitment/**",
					"/api/v1/category-example/**", "/api/v1/slider/**",
					"/api/v1/contact/**",
					"/api/v1/photo/**",
					"/api/v1/request/**",
					"/api/v1/area/**", 
					"/api/v1/area-top/**",
					"/api/v1/email/**", 
					"/api/v1/productrelation/**",
					"/api/v1/area-top/**",
					"/api/v1/cart/addProduct/**",
					"/api/v1/cart/updateQtyForCart/**",
					"/api/v1/cart/removeProductFromCart/**",
					"/api/v1/cart/getCartsByUserId/**")
			.permitAll()
			// Admin
			.antMatchers(HttpMethod.GET,
					"/api/v1/user_roleadmin/**",
					"/api/v1/roleadmin/**",
					"/api/v1/productadmin/**",
					"/api/v1/useradmin/**",
					"/api/v1/categoryadmin/**",
					"/api/v1/slideradmin/**",
					"/api/v1/contactadmin/**", 
					"/api/v1/photoadmin/**",
					"/api/v1/requestadmin/**",
					"/api/v1/areaadmin/**",
					"/api/v1/emailadmin/**",
					"/api/v1/productrelationadmin/**")
					
			.permitAll()
			.antMatchers(HttpMethod.POST,
					"/api/v1/user_roleadmin/**",
					"/api/v1/roleadmin/**",
					"/api/v1/productadmin/**",
					"/api/v1/useradmin/**",
					"/api/v1/categoryadmin/**",
					"/api/v1/slideradmin/**",
					"/api/v1/contactadmin/**", 
					"/api/v1/photoadmin/**",
					"/api/v1/requestadmin/**",
					"/api/v1/areaadmin/**",
					"/api/v1/emailadmin/**",
					"/api/v1/productrelationadmin/**")
			.permitAll()
			.antMatchers(HttpMethod.PUT,
					"/api/v1/user_roleadmin/**",
					"/api/v1/roleadmin/**",
					"/api/v1/productadmin/**",
					"/api/v1/useradmin/**",
					"/api/v1/categoryadmin/**",
					"/api/v1/slideradmin/**",
					"/api/v1/contactadmin/**", 
					"/api/v1/photoadmin/**",
					"/api/v1/requestadmin/**",
					"/api/v1/areaadmin/**",
					"/api/v1/emailadmin/**",
					"/api/v1/productrelationadmin/**")
			.permitAll()
			.antMatchers(HttpMethod.DELETE,
					"/api/v1/user_roleadmin/**",
					"/api/v1/roleadmin/**",
					"/api/v1/productadmin/**",
					"/api/v1/useradmin/**",
					"/api/v1/categoryadmin/**",
					"/api/v1/slideradmin/**",
					"/api/v1/contactadmin/**", 
					"/api/v1/photoadmin/**",
					"/api/v1/requestadmin/**",
					"/api/v1/areaadmin/**",
					"/api/v1/emailadmin/**",
					"/api/v1/productrelationadmin/**")
			.permitAll()
			.anyRequest().authenticated();

		http.addFilterBefore(authenticationJwtTokenFilter(), UsernamePasswordAuthenticationFilter.class);
	}
}
