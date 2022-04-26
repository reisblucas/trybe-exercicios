-- select * from film where title like '%ace%'; 
-- select * from film where description like '%china';
-- select * from film where description like '%girl%' and title like '%lord%';
-- select * from film where title like '___gon%' and description like '%Documentary%';
-- select * from film where title like  '%academy' or title like 'mosquito%'; 
-- select * from film where description like '%monkey%' or description like '%sumo%';

-- Date exercises:
-- select * from payment;
-- select count(date(payment_date)) from payment where payment_date between '2005-05-24' and '2005-05-26';
-- select count(date(payment_date)) from payment where payment_date between '2005-07-01' and '2005-08-22';
-- select
-- 	date(rental_date) as date,
--     year(rental_date) as year,
--     month(rental_date) as month,
--     day(rental_date) as day,
--     hour(rental_date) as hour,
--     minute(rental_date) as minutes,
--     second(rental_date) as seconds
-- from rental
-- 	where rental_id = 10330;
select * from rental
	where date(rental_date) = '2005-07-28'
		and hour(rental_date) > '22'
order by rental_date;