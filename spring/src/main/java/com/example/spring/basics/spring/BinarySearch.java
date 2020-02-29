package com.example.spring.basics.spring;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class BinarySearch {
	@Autowired
	private Sort sort;
	
	public BinarySearch(Sort sort) {
		this.sort=sort;
	}
	
	public int binarySearch(int[] arrays,int number) {
		sort.sortNumbers(arrays);
		System.out.println(sort);
		return number;
	}

}
