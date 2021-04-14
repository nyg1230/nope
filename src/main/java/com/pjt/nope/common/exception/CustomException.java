package com.pjt.nope.common.exception;

import java.util.HashMap;
import java.util.Map;

public class CustomException extends RuntimeException {
	
	private static final long serialVersionUID = 7248381490157496756L;
	private String errorCode;

	public CustomException(Exception e) {
		super(e.getLocalizedMessage());
		this.errorCode	= "unkowon";
	}

	public CustomException(String errorMsg, String errorCode) {
		super(errorMsg);
		this.errorCode	= errorCode;
	}

	public CustomException(CustomExceptionCode customExceptionCode) {
		super(customExceptionCode.getErrorMsg());
		this.errorCode	= customExceptionCode.getErrorCode();
	}

	public String getErrorCode() {
		return this.errorCode;
	}

	public String getErrorMsg() {
		return super.getMessage();
	}

	public Map<String, Object> getErrorInfo() {
		Map<String, Object> map	= new HashMap<>();

		map.put("errorCode", this.getErrorCode());
		map.put("errorMsg", this.getMessage());

		return map;
	}

}
