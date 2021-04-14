package com.pjt.nope.common.exception;

import java.util.Map;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class CustomExceptionHandler {
	
	@ExceptionHandler(CustomException.class)
	public Map<String, Object> customExceptionHandler(CustomException ce) {
		System.out.println(ce.getErrorCode());
		System.out.println(ce.getErrorMsg());
		return ce.getErrorInfo();
	}

	@ExceptionHandler(Exception.class)
	public Map<String, Object> defaultExceptionHandler(Exception e) {
		CustomException ce	= new CustomException(e);
		Map<String, Object> result	= ce.getErrorInfo();
		
		return result;
	}

}
