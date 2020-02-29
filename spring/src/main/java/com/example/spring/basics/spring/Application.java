package com.example.spring.basics.spring;



import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		//What are beans?
		//What are the dependency of beans?
		//Where to search for beans?
		
		//running spring framework
		ApplicationContext applicationContext=		SpringApplication.run(Application.class, args);
		BinarySearch binarySearch=applicationContext.getBean(BinarySearch.class);
		
		//BinarySearch binarySearch=new BinarySearch(new BubbleSort());
		
		int result=binarySearch.binarySearch(new int[] {12, 4,6},3);
		System.out.println(result);
		
	}
}
