package com.pjt.nope.domain.nopeUser.vo;

import java.math.BigInteger;
import java.sql.Timestamp;

public class NopeUser {

	private BigInteger seqId;
	private String account;
	private String password;
	private String nickname;
	private char sex;
	private String email;
	private Timestamp createDate;
	private Timestamp modifyDate;
	private Timestamp deleteDate;
	private char isDelete;

	public BigInteger getSeqId() {
		return this.seqId;
	}

	public void setSeqId(BigInteger seqId) {
		this.seqId = seqId;
	}

	public String getAccount() {
		return this.account;
	}

	public void setAccount(String account) {
		this.account = account;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getNickname() {
		return this.nickname;
	}

	public void setNickname(String nickname) {
		this.nickname = nickname;
	}

	public char getSex() {
		return this.sex;
	}

	public void setSex(char sex) {
		this.sex = sex;
	}

	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Timestamp getCreateDate() {
		return this.createDate;
	}

	public void setCreateDate(Timestamp createDate) {
		this.createDate = createDate;
	}

	public Timestamp getModifyDate() {
		return this.modifyDate;
	}

	public void setModifyDate(Timestamp modifyDate) {
		this.modifyDate = modifyDate;
	}

	public Timestamp getDeleteDate() {
		return this.deleteDate;
	}

	public void setDeleteDate(Timestamp deleteDate) {
		this.deleteDate = deleteDate;
	}

	public char getIsDelete() {
		return this.isDelete;
	}

	public void setIsDelete(char isDelete) {
		this.isDelete = isDelete;
	}

}
