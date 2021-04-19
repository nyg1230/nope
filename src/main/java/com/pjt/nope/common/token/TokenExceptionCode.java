package com.pjt.nope.common.token;

import com.pjt.nope.common.exception.CustomExceptionCode;

public enum TokenExceptionCode implements CustomExceptionCode {
	
	NOT_EXIST_USER_INFO("T00001", "사용자 정보가 없음"),
	EXPIRE_TOKEN("T00002", "만료된 토큰입니다."),
	;

	final private String errorCode;
	final private String errorMsg;

	TokenExceptionCode(String errorCode, String errorMsg) {
		this.errorCode	= errorCode;
		this.errorMsg	= errorMsg;
	}

	@Override
	public String getErrorCode() {
		return this.errorCode;
	}

	@Override
	public String getErrorMsg() {
		return this.errorMsg;
	}
	
}
