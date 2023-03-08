package com.rohith.cri.Controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.rohith.cri.Entity.CricEntity;
import com.rohith.cri.Service.CricService;


@RestController
@CrossOrigin
public class CricController {

	@Autowired
	 private CricService cs;
	 
	 @PostMapping("/save")
	 public String savingCompany(@RequestBody CricEntity d) {
		  cs.savedata(d);
		  return "saved";
	 }
	 @GetMapping("/findall")
	 public List<CricEntity > listing()
	  {
	 	 return cs.findall();
	  }
	 @PutMapping("/updatedata")
	 public String updateCompany(@RequestBody CricEntity  d) {
		  cs.updatedata(d);
		  return "updated";
	 }
	 @DeleteMapping("/delete/{player_id}")
	 public String deleteCompany(@PathVariable("player_id")int player_id) {
		 cs.deletedata(player_id);
		 return "deleted";
	}
}


