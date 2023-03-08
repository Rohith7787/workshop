package com.rohith.cri.Service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rohith.cri.Entity.CricEntity;
import com.rohith.cri.Repository.CricRepository;

import java.util.List;
@Service
public class CricService {

	@Autowired
	private CricRepository com;
	
	public CricEntity savedata(CricEntity s) {
		return com.save(s);
	}
	public List<CricEntity> findall(){
		return com.findAll();
	}
	public void deletedata(int id) {
		com.deleteById(id);
	}
	public CricEntity updatedata(CricEntity s) {
		return com.saveAndFlush(s);
	}
}

