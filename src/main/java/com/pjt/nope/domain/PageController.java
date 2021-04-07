package com.pjt.nope.domain;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageController {
	
	@GetMapping("/")
	public String index() {
		return "index";
	}

	@GetMapping("/main")
	public String mainPage() {
		return "";
	}

	@GetMapping("/error")
	public String errorPage() {
		return "";
	}
}
