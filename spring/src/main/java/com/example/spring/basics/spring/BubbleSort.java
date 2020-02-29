package com.example.spring.basics.spring;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

@Component
@Primary
public class BubbleSort implements Sort{
	
	public int[] sortNumbers(int[] numbers) {
		return numbers;
	}

}
