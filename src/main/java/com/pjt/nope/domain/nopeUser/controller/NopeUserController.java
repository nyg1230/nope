package com.pjt.nope.domain.nopeUser.controller;

import com.pjt.nope.common.exception.CustomException;
import com.pjt.nope.domain.nopeUser.exception.NopeUserExceptionCode;
import com.pjt.nope.domain.nopeUser.service.NopeUserServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class NopeUserController {
	
	@Autowired
	private NopeUserServiceImpl nopeUserService;

	@GetMapping("/login.do")
	@ResponseBody
	public String loginDo(
		@RequestParam("loginId") String loginId,
		@RequestParam("loginPw") String loginPw
	) {
		String result	= "";
		System.out.println(loginId);
		System.out.println(loginPw);
		
		return result;
	}

}
