package com.pjt.nope.common.token;

import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import com.pjt.nope.common.exception.CustomException;
import com.pjt.nope.domain.nopeUser.vo.NopeUser;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

public class JWT {

	public String createToken(NopeUser nopeUser) {

		if(nopeUser == null) throw new CustomException(TokenExceptionCode.NOT_EXIST_USER_INFO);

		String resultToken	= "";

		// header part
		Map<String, Object> header	= new HashMap<>();
		header.put((String)TokenSettingValue.TYPE_NAME.getValue(), (String)TokenSettingValue.TYPE.getValue());
		header.put((String)TokenSettingValue.ALG_NAME.getValue(), (String)TokenSettingValue.ALG.getValue());

		// payload part
		Map<String, Object> payload	= new HashMap<>();
		payload.put((String)TokenSettingValue.DATA_NAME.getValue(), "test");

		Long expireTime	= (Long)TokenSettingValue.EXPIRE_TIME.getValue();
		Date expireDate	= new Date();
		expireDate.setTime(expireDate.getTime() + expireTime);

		// carete token
		resultToken	= Jwts
						.builder()
						.setHeader(header)
						.setClaims(payload)
						.setSubject(Base64.getEncoder().encodeToString(nopeUser.getAccount().getBytes()))
						.setExpiration(expireDate)
						.signWith(SignatureAlgorithm.HS256, String.valueOf(TokenSettingValue.KEY.getValue()).getBytes())
						.compact();
		
		return resultToken;
	}

	public Boolean validCheckToken(String token) {
		Boolean result	= false;

		try {
			Claims claims	= Jwts
								.parser()
								.setSigningKey(String.valueOf(TokenSettingValue.KEY.getValue()).getBytes("UTF-8"))
								.parseClaimsJws(token)
								.getBody();
			System.out.println(claims);
			result	= true;

		} catch(ExpiredJwtException e) {
			throw new NullPointerException();
		} catch(Exception e) {

		}

		return result;
	}

}
