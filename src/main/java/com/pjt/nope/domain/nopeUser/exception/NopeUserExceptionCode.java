package com.pjt.nope.domain.nopeUser.exception;

import com.pjt.nope.common.exception.CustomExceptionCode;

public enum NopeUserExceptionCode implements CustomExceptionCode {
	
	TEST("testCode001", "오류테스트"),
	;

	final private String errorCode;
	final private String errorMsg;

	NopeUserExceptionCode(String errorCode, String errorMsg) {
		this.errorCode	= errorCode;
		this.errorMsg	= errorMsg;
	}

	@Override
	public String getErrorCode() { return this.errorCode; }
	@Override
	public String getErrorMsg() { return this.errorMsg; }
}
