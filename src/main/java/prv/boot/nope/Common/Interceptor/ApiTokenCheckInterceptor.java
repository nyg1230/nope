package prv.boot.nope.Common.Interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.HandlerInterceptor;

import prv.boot.nope.Common.Util.CustomUtil;
import prv.boot.nope.Common.Util.Token.JWTToken;
import prv.boot.nope.Common.Util.Token.TokenOption;

public class ApiTokenCheckInterceptor implements HandlerInterceptor {

	private static final String X_TOKEN = "X-TOKEN";
	private CustomUtil customUtil	= new CustomUtil();
	
	@Override
	public boolean preHandle(HttpServletRequest req, HttpServletResponse res, Object handler) throws Exception {

		String strToekn	= req.getHeader(X_TOKEN);

		JWTToken token	= new JWTToken(strToekn);
		boolean _verify	= token.verifyToken();
		boolean result	= false;

		System.out.println(customUtil.getClientIP(req));
		System.out.println(req.getHeader(TokenOption.NICKNAME.getStringValue()));

		// http://127.0.0.1:8887/public/api/user/test

		if(req.getMethod().equals("GET")) result = true;
		else if(!_verify) result = true;
		else if(!_verify) {
			result = false;
			res.sendRedirect(req.getContextPath() + "/");
		}

		return result;
	}
}
