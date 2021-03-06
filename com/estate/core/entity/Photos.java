package com.estate.core.entity;
// Generated May 9, 2021, 8:36:41 PM by Hibernate Tools 4.3.5.Final

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Photos generated by hbm2java
 */
@Entity
@Table(name = "photos", schema = "public")
public class Photos implements java.io.Serializable {

	private int id;
	private String title;
	private String image;
	private short type;
	private int idProduct;
	private int status;

	public Photos() {
	}

	public Photos(int id, String title, String image, short type, int idProduct, int status) {
		this.id = id;
		this.title = title;
		this.image = image;
		this.type = type;
		this.idProduct = idProduct;
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

	@Column(name = "image", nullable = false)
	public String getImage() {
		return this.image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	@Column(name = "type", nullable = false)
	public short getType() {
		return this.type;
	}

	public void setType(short type) {
		this.type = type;
	}

	@Column(name = "id_product", nullable = false)
	public int getIdProduct() {
		return this.idProduct;
	}

	public void setIdProduct(int idProduct) {
		this.idProduct = idProduct;
	}

	@Column(name = "status", nullable = false)
	public int getStatus() {
		return this.status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

}
