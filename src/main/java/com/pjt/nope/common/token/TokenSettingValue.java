package com.pjt.nope.common.token;

public enum TokenSettingValue {
	
	TYPE_NAME("typ", ""),
	TYPE("JMT", ""),
	ALG_NAME("alg", ""),
	ALG("HS256", ""),
	EXPIRE_TIME(1000 * 60L * 30L, "만료 시간"),
	DATA_NAME("data", ""),
	KEY("nope", ""),

	;

	final private Object value;
	final private String desc;

	public Object getValue() {
		return this.value;
	}

	TokenSettingValue(Object value, String desc) {
		this.value	= value;
		this.desc	= desc;
	}	

}
