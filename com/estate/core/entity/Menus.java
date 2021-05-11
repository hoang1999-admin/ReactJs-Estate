package com.estate.core.entity;
// Generated May 9, 2021, 8:36:41 PM by Hibernate Tools 4.3.5.Final

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 * Menus generated by hbm2java
 */
@Entity
@Table(name = "menus", schema = "public")
public class Menus implements java.io.Serializable {

	private int id;
	private String title;
	private String link;
	private String type;
	private Integer tableid;
	private Integer parentid;
	private String position;
	private String image;
	private Integer orders;
	private Date createdAt;
	private int status;

	public Menus() {
	}

	public Menus(int id, String title, String link, String type, int status) {
		this.id = id;
		this.title = title;
		this.link = link;
		this.type = type;
		this.status = status;
	}

	public Menus(int id, String title, String link, String type, Integer tableid, Integer parentid, String position,
			String image, Integer orders, Date createdAt, int status) {
		this.id = id;
		this.title = title;
		this.link = link;
		this.type = type;
		this.tableid = tableid;
		this.parentid = parentid;
		this.position = position;
		this.image = image;
		this.orders = orders;
		this.createdAt = createdAt;
		this.status = status;
	}

	@Id

	@Column(name = "id", unique = true, nullable = false)
	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	@Column(name = "title", nullable = false)
	public String getTitle() {
		return this.title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	@Column(name = "link", nullable = false)
	public String getLink() {
		return this.link;
	}

	public void setLink(String link) {
		this.link = link;
	}

	@Column(name = "type", nullable = false)
	public String getType() {
		return this.type;
	}

	public void setType(String type) {
		this.type = type;
	}

	@Column(name = "tableid")
	public Integer getTableid() {
		return this.tableid;
	}

	public void setTableid(Integer tableid) {
		this.tableid = tableid;
	}

	@Column(name = "parentid")
	public Integer getParentid() {
		return this.parentid;
	}

	public void setParentid(Integer parentid) {
		this.parentid = parentid;
	}

	@Column(name = "position")
	public String getPosition() {
		return this.position;
	}

	public void setPosition(String position) {
		this.position = position;
	}

	@Column(name = "image")
	public String getImage() {
		return this.image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	@Column(name = "orders")
	public Integer getOrders() {
		return this.orders;
	}

	public void setOrders(Integer orders) {
		this.orders = orders;
	}

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "created_at", length = 29)
	public Date getCreatedAt() {
		return this.createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	@Column(name = "status", nullable = false)
	public int getStatus() {
		return this.status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

}
