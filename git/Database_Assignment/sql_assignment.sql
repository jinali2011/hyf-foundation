git add--1.How many tasks are in the task table?-36
select count(*) from task t;
--2.How many tasks in the task table do not have a valid due date?----not done
select count(*) from task t where due_date is null;
--3.Find all the tasks that are marked as done.-13
select * from status s ;-- 3 = done 
select * from task t where status_id = 3;
--4.Find all the tasks that are not marked as done----error
select s.name ,t.title from task t join status s on t.status_id =s.id where s.name !='Done';
--5.Get all the tasks, sorted with the most recently created first.
select * from task order by created DESC;
--6.Get the single most recently created task.-done
select * from task t order by created DESC limit 1;
--7.Get the title and due date of all tasks where the title or description contains database.
select * from task t;
select title, due_date from task t where t.title like '%database%' or t.description like '%database%';
--8.Get the title and status (as text) of all tasks.
select t.title,s.name as [Status] from task t join status s on t.status_id=s.id; 
--9.Get the name of each status, along with a count of how many tasks have that status.
select count(t.title),s.name as [Status] from task t join status s on t.status_id=s.id group by s.name ; 
--10.Get the names of all statuses, sorted by the status with most tasks first.
--select * from status s ;
select * from task t ;
select COUNT (t.id ),t.status_id   from task t group by t.status_id;
--count, sum

select COUNT(t.title),s.name  from task t inner join status s on t.status_id=s.id group by s.name ORDER BY COUNT(t.title) desc;

