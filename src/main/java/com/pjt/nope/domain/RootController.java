package com.pjt.nope.domain;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class RootController {
	
	@Value("${nope.js.lang.path}")
	private String langPackPath;

	@Value("${nope.js.lang.kor}")
	private String jsLangKorean;
	
	@GetMapping("/")
	public String index() {
		return "index";
	}

	@GetMapping("/check/language")
	@ResponseBody
	public String getLanguagePackPath(@RequestParam(value = "lang", required = false, defaultValue = "kor") String lang) {
		String result	= langPackPath;

		try {
			System.out.println(lang);
			if(lang == null) throw new NullPointerException();
			else result	+= jsLangKorean;
		} catch(Exception e) {
			e.printStackTrace();
			result	+= jsLangKorean;
		}
		return result;
	}

}
