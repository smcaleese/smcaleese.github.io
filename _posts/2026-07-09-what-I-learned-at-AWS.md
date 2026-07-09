---
layout: post
title: What I learned at AWS
tags:
  - Essay
  - Software Engineering
  - AWS
---

In 2022 and 2023 I worked as a software engineer at AWS (Amazon Web Services). It was my first full-time software engineering job outside of college and I think it’s an interesting company so I would like to share my experience working there.

## Company size and structure

Amazon is a really large company with more than one million employees in total and over 300k corporate employees. AWS has over 100k corporate employees and tens of thousands of software engineers.

In Dublin, Ireland where I worked there are about 3,000 employees distributed in three separate offices.

As a new-grad software engineer, I joined Amazon at L4 as an SDE I.

I worked in a backend-focused team in CloudWatch. CloudWatch is an AWS service focused on observability: collecting and analyzing metrics and logs from services so that developers using AWS products can identify and troubleshoot the applications they are running.

Our team maintained one of the many CloudWatch services and had about five software engineers and an engineering manager. For backend roles in AWS, it’s common to have one team for every backend service. AWS as a whole is a collection of these services communicating with each other over the internet and therefore cross-team collaboration is common.

The company is generally structured in a hierarchical way: multiple teams are managed by a senior engineering manager, a director manages dozens of teams and so on. At the top level, VPs, senior VPs and the CEO manage the entire company.

## Software engineering talent

I generally found that my colleagues were highly talented people. Amazon is known as one of the top “FAANG” software companies so it attracts a lot of talented people.

In high school and college I often achieved top grades but I felt like I had a roughly average leverage of ability at Amazon, given its high standards.

Amazon has several rounds of selective interviews so getting hired requires a non-trivial amount of talent and hard work.

The company is also highly international: despite being Irish and working in Dublin, I was one of the few Irish people in my team and most of my colleagues were from other countries.

My managers were also talented. Despite the stereotype that corporate managers are incompetent or lazy, most Amazon managers I encountered were highly intelligent, skilled at making decisions and generally good leaders. And most managers are former software engineers so they are technical enough to communicate with software engineers.

Working in an organization with talented people has pros and cons.

First, it can be inspiring to work with talented and motivated people and learn from them.

Standards are high which provides opportunities for growth and learning. Employees are given autonomy and expected to solve challenging problems and act with agency even if they just recently joined the company.

The downsides are that there is a risk of imposter syndrome and working in an organization with high expectations can be stressful at times.

## Software engineering practices

Like most software companies, Amazon typically follows standard software engineering practices like using version control, merging changes to a central repository, writing automated tests, using continuous integration pipelines and deploying code to containers in a cloud environment.

What’s unique about Amazon is the scale the company is operating at and their role in the tech ecosystem. 

Given the massive demand for AWS services and the fact that AWS is the leading cloud provider, it’s not an exaggeration to say that AWS is the backbone of the internet.  
So what is AWS? At the most basic level, AWS provides compute services such as EC2, storage services such as S3, and managed database services such as RDS. This means that if you want to create a web app, you can quickly provision computing resources, store files and set up a database without having to buy and operate your own physical servers. Though there are many other higher-level services in AWS such as CloudWatch.

Many large internet companies like Netflix, Stripe and Uber are running their servers and other digital infrastructure on AWS. Consequently, customers expect AWS services to be extremely reliable and secure.

For software companies there are generally two main tasks: product development which involves creating new software features and operations which is about keeping systems working and available for customers.

Most software companies devote some effort to operations and availability but AWS takes it to another level.

One key metric is availability or uptime: the percentage of the time that an application or service is usable and working for users. For example, if a system has 99% availability then on average for every 100 hours of operation we expect it to be working for 99 hours and down for 1 hour.

Many AWS services such as CloudWatch offer 99.9% availability (which is equivalent to just 8 hours of downtime per year) and compensate customers if their availability drops lower than that.

Here are some operations practices that allow AWS to achieve what they call “operational excellence”: very high availability, low latency, and the ability to rapidly resolve issues:

* **Designing for reliability:** Software system design is a key factor that affects reliability and it’s not accidental: Software is reliable because it’s intentionally designed to be (more on this below).  
* **Regular, precise measurement:** Internal AWS teams have dashboards that they regularly review to measure key performance metrics of their services such as availability and latency. As the saying goes, what gets measured gets managed.  
* **Incident analysis and constant improvement:** Software and people are not perfect and incidents such as outages happen. But for every outage at AWS, staff write a report and take actions to prevent the problem from happening again.

## Designing software for fault tolerance, reliability and availability

Two key operation metrics are reliability and availability which are both helped by fault tolerance.

![The relationship between fault tolerance, reliability and availability]({{ '/assets/images/posts/what-I-learned-at-AWS/fault-tolerance-reliability-availability.png' | relative_url }})

*Fault tolerance supports reliability and availability, while reliability also contributes to availability.*

## Reliability

Reliability is how long we expect the system to run before failing. A highly reliable system fails infrequently and operates as intended for long periods of time.

The metric for reliability is mean time between failures (MTBF): the average time a system operates before it fails.

## Availability

Availability describes the percentage of the time the system is accessible and usable to users. A highly available system is usable for users most of the time and is unlikely to be “down” or unavailable at any given time.

There are two metrics for availability:

* Availability \= Uptime / (Uptime \+ Downtime)  
* Availability \= MTBF / (MTBF \+ MTTR)

Components of the availability formula:

* MTBF \= Mean Time Between Failures  
* MTTR \= Mean Time to Resolution

Available can be improved by increasing the Mean Time Between Failures (MTBF) or decreasing the Mean Time to Resolution (MTTR).

In general, a highly reliable system is highly available provided that recovery time (MTTR) is low.

High availability does not imply high reliability if there is a situation where failures are frequent and recovery time (MTTR) is fast.

Here is a table that illustrates the relationship between reliability and availability:

|  | High Availability | Low Availability |
| :---- | :---- | :---- |
| High Reliability | Rarely fails, recovers fast | Rarely fails, but recovery is slow when it does |
| Low Reliability | Fails often, but recovers almost instantly | Fails often *and* recovery is slow |

## Fault tolerance

Fault tolerance is a design property of a system that allows it to continue functioning even if one or more of its components fails.

In contrast, a system that fails if one of its components fails is not fault tolerant and if a component fails and can bring down the entire system then it is called a single point of failure.

When a system is fault tolerant, it tends to have higher reliability and availability by having higher  Mean Time Between Failures (MTBF) and lower Mean Time to Resolution (MTTR).

The relationship between the three terms is fault tolerance \-\> reliability \-\> availability: a fault-tolerant system fails less frequently and is more reliable and consequently it’s more available.

In general, designing for fault tolerance is about thinking about various ways a service can fail and then implementing contingency mechanisms for each failure case.

Here are several design techniques that can increase fault tolerance:

* **Redundancy:** Avoids a single point of failure and provides alternatives if a single instance fails. For example, it’s common to create multiple instances of a server behind a load balancer across several availability zones. If one instance fails, the other ones can still handle traffic. Mathematically, assuming that each component failure is an independent probability, the probability of all components failing is P^N where P is the probability of failure and N is the number of replicas. For example, if there are three servers which each have 50% probability of failing per month, then the monthly risk of all servers being down is 0.5^3 \= 0.125 which is significantly lower than 0.5.  
* **Graceful degradation and self-healing:** A fault tolerant system should be able to run in a degraded mode or self-heal if a component fails. API request retries with exponential backoff allow self-healing and graceful degradation in the form of higher latency in the event of a transient API or network failure. Note that retries require idempotency: making the request one or more times should have the same effect and not result in duplicated consequences. The system should be designed so that non-essential features can go down without bringing down the whole service.  
* **Isolation and fault containment:** A failing component shouldn’t be able to bring down the entire system. Circuit breakers temporarily block requests to a failing service for a period of time after several failed attempts to allow the failing service to recover. Timeouts on requests ensure that resources are not allocated forever for a request and are eventually freed up for other requests.



## Unique company processes

Amazon also has unique company processes and ideas that were developed by Jeff Bezos, the founder and original CEO of Amazon.

Amazon’s corporate culture is driven by distinct internal processes pioneered by its founder and former CEO, Jeff Bezos. Two of the most famous practices are the "Six-Page Narrative" and the “PR/FAQ”.

One of the most notable aspects of Amazon’s culture is the lack of Powerpoint presentations in meetings. Instead meetings begin with a silent reading period of a “six-pager” document explaining the meeting agenda and core ideas. Bezos introduced this because writing requires linear, structured thinking. Reading a narrative forces team members to digest information critically and deeply, leading to more productive discussions than passively watching a slide deck.

Another unique practice is the “PR FAQ”. Whereas many companies may plan forward by breaking a large future project into sub-tasks and creating a timeline, Amazonians instead work backwards from a major future goal by writing a PR FAQ.

A PR FAQ is a fictional press release with a future date that explains what the project is and why it’s valuable. The FAQ section addresses challenging questions and ensures that the case for working on the project is strong and well-reasoned.
