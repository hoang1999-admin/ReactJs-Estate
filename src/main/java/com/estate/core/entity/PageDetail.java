/*
 * (C) Copyright 2021 ESTATE REACTJS SPRING BOOT API. All Rights
 * 
 * @author ngodi
 * @date Jul 6, 2021
 * @hour 11:25:57 PM
*/

package com.estate.core.entity;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "pagedetails")
public class PageDetail {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long idLong;@Column(name = "page_id")
	private Long pageIdLong;@Column(name = "description1")
	private String description1String;@Column(name = "description2")
	private String description2String;@Column(name = "description3")
	private String description3String;@Column(name = "description4")
	private String description4String;@Column(name = "description5")
	private String description5String;@Column(name = "description6")
	private String description6String;@Column(name = "description7")
	private String description7String;@Column(name = "description8")
	private String description8String;@Column(name = "description9")
	private String description9String;@Column(name = "description10")
	private String description10String;@Column(name = "description11")
	private String description11String;@Column(name = "description12")
	private String description12String;@Column(name = "description13")
	private String description13String;@Column(name = "description14")
	private String description14String;@Column(name = "description15")
	private String description15String;@Column(name = "description16")
	private String description16String;@Column(name = "description17")
	private String description17String;@Column(name = "description18")
	private String description18String;@Column(name = "description19")
	private String description19String;@Column(name = "description20")
	private String description20String;@Column(name = "description21")
	private String description21String;@Column(name = "description22")
	private String description22String;@Column(name = "description23")
	private String description23String;@Column(name = "description24")
	private String description24String;@Column(name = "description25")
	private String description25String;@Column(name = "description26")
	private String description26String;@Column(name = "description27")
	private String description27String;@Column(name = "description28")
	private String description28String;@Column(name = "description29")
	private String description29String;@Column(name = "description30")
	private String description30String;@Column(name = "image1")
	private String image1String;@Column(name = "image2")
	private String image2String;@Column(name = "image3")
	private String image3String;@Column(name = "created_at")
	private Timestamp createdatTimestamp;@Column(name = "status")
	private String statusString;
	public Long getIdLong() {
		return idLong;
	}
	public void setIdLong(Long idLong) {
		this.idLong = idLong;
	}
	
	public Long getPageIdLong() {
		return pageIdLong;
	}
	public void setPageIdLong(Long pageIdLong) {
		this.pageIdLong = pageIdLong;
	}
	public String getDescription1String() {
		return description1String;
	}
	public void setDescription1String(String description1String) {
		this.description1String = description1String;
	}
	public String getDescription2String() {
		return description2String;
	}
	public void setDescription2String(String description2String) {
		this.description2String = description2String;
	}
	public String getDescription3String() {
		return description3String;
	}
	public void setDescription3String(String description3String) {
		this.description3String = description3String;
	}
	public String getDescription4String() {
		return description4String;
	}
	public void setDescription4String(String description4String) {
		this.description4String = description4String;
	}
	public String getDescription5String() {
		return description5String;
	}
	public void setDescription5String(String description5String) {
		this.description5String = description5String;
	}
	public String getDescription6String() {
		return description6String;
	}
	public void setDescription6String(String description6String) {
		this.description6String = description6String;
	}
	public String getDescription7String() {
		return description7String;
	}
	public void setDescription7String(String description7String) {
		this.description7String = description7String;
	}
	public String getDescription8String() {
		return description8String;
	}
	public void setDescription8String(String description8String) {
		this.description8String = description8String;
	}
	public String getDescription9String() {
		return description9String;
	}
	public void setDescription9String(String description9String) {
		this.description9String = description9String;
	}
	public String getDescription10String() {
		return description10String;
	}
	public void setDescription10String(String description10String) {
		this.description10String = description10String;
	}
	public String getDescription11String() {
		return description11String;
	}
	public void setDescription11String(String description11String) {
		this.description11String = description11String;
	}
	public String getDescription12String() {
		return description12String;
	}
	public void setDescription12String(String description12String) {
		this.description12String = description12String;
	}
	public String getDescription13String() {
		return description13String;
	}
	public void setDescription13String(String description13String) {
		this.description13String = description13String;
	}
	public String getDescription14String() {
		return description14String;
	}
	public void setDescription14String(String description14String) {
		this.description14String = description14String;
	}
	public String getDescription15String() {
		return description15String;
	}
	public void setDescription15String(String description15String) {
		this.description15String = description15String;
	}
	public String getDescription16String() {
		return description16String;
	}
	public void setDescription16String(String description16String) {
		this.description16String = description16String;
	}
	public String getDescription17String() {
		return description17String;
	}
	public void setDescription17String(String description17String) {
		this.description17String = description17String;
	}
	public String getDescription18String() {
		return description18String;
	}
	public void setDescription18String(String description18String) {
		this.description18String = description18String;
	}
	public String getDescription19String() {
		return description19String;
	}
	public void setDescription19String(String description19String) {
		this.description19String = description19String;
	}
	public String getDescription20String() {
		return description20String;
	}
	public void setDescription20String(String description20String) {
		this.description20String = description20String;
	}
	public String getDescription21String() {
		return description21String;
	}
	public void setDescription21String(String description21String) {
		this.description21String = description21String;
	}
	public String getDescription22String() {
		return description22String;
	}
	public void setDescription22String(String description22String) {
		this.description22String = description22String;
	}
	public String getDescription23String() {
		return description23String;
	}
	public void setDescription23String(String description23String) {
		this.description23String = description23String;
	}
	public String getDescription24String() {
		return description24String;
	}
	public void setDescription24String(String description24String) {
		this.description24String = description24String;
	}
	public String getDescription25String() {
		return description25String;
	}
	public void setDescription25String(String description25String) {
		this.description25String = description25String;
	}
	public String getDescription26String() {
		return description26String;
	}
	public void setDescription26String(String description26String) {
		this.description26String = description26String;
	}
	public String getDescription27String() {
		return description27String;
	}
	public void setDescription27String(String description27String) {
		this.description27String = description27String;
	}
	public String getDescription28String() {
		return description28String;
	}
	public void setDescription28String(String description28String) {
		this.description28String = description28String;
	}
	public String getDescription29String() {
		return description29String;
	}
	public void setDescription29String(String description29String) {
		this.description29String = description29String;
	}
	public String getDescription30String() {
		return description30String;
	}
	public void setDescription30String(String description30String) {
		this.description30String = description30String;
	}
	public String getImage1String() {
		return image1String;
	}
	public void setImage1String(String image1String) {
		this.image1String = image1String;
	}
	public String getImage2String() {
		return image2String;
	}
	public void setImage2String(String image2String) {
		this.image2String = image2String;
	}
	public String getImage3String() {
		return image3String;
	}
	public void setImage3String(String image3String) {
		this.image3String = image3String;
	}
	public Timestamp getCreatedatTimestamp() {
		return createdatTimestamp;
	}
	public void setCreatedatTimestamp(Timestamp createdatTimestamp) {
		this.createdatTimestamp = createdatTimestamp;
	}
	public String getStatusString() {
		return statusString;
	}
	public void setStatusString(String statusString) {
		this.statusString = statusString;
	}
	
}
