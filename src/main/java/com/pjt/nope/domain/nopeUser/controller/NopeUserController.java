package com.pjt.nope.domain.nopeUser.controller;

import com.pjt.nope.common.token.JWT;
import com.pjt.nope.domain.nopeUser.vo.NopeUser;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class NopeUserController {
	
	// @Autowired
	// private NopeUserServiceImpl nopeUserService;

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

	@GetMapping("/tokenTest.do")
	@ResponseBody
	public String test() {
		NopeUser nopeUser	= new NopeUser();
		nopeUser.setAccount("acc");
		String test	= new JWT().createToken(nopeUser);
		System.out.println(test);
		new JWT().validCheckToken(test);
		return test;
	}

	@GetMapping("/signup/dupChk/{chkType}/{chkTxt}")
	@ResponseBody
	public boolean dupChk(@PathVariable("chkType") String chkType, @PathVariable("chkTxt") String chkTxt) {
		System.out.println(chkType);
		System.out.println(chkTxt);
		return false;
	}

}
