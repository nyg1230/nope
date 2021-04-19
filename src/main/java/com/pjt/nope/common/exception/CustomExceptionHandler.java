package com.pjt.nope.common.exception;

import java.util.Map;

import com.pjt.nope.common.token.TokenExceptionCode;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import io.jsonwebtoken.ExpiredJwtException;

@RestControllerAdvice
public class CustomExceptionHandler {
	
	@ExceptionHandler(CustomException.class)
	public Map<String, Object> customExceptionHandler(CustomException ce) {
		return ce.getErrorInfo();
	}

	@ExceptionHandler(ExpiredJwtException.class)
	public Map<String, Object> expireExceptionHandler(ExpiredJwtException e) {
		CustomException ce	= new CustomException(TokenExceptionCode.EXPIRE_TOKEN);
		return ce.getErrorInfo();
	}

	@ExceptionHandler(Exception.class)
	public Map<String, Object> defaultExceptionHandler(Exception e) {
		CustomException ce	= new CustomException(e);
		Map<String, Object> result	= ce.getErrorInfo();
		return result;
	}

}
