package com.example.demo.event;

import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

import com.example.demo.service.VerificationTokenService;

@Component
public class SignupEventListener {
	private final VerificationTokenService verificationTokenService;
	private final JavaMailSender javaMailSender;

	public SignupEventListener (VerificationTokenService verificationTokenService, JavaMailSender mailSender) {
		this.verificationTokenService = verificationTokenService;
	}
}
