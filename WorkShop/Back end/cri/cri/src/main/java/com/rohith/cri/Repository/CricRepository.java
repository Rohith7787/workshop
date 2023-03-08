package com.rohith.cri.Repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.rohith.cri.Entity.CricEntity;



public interface CricRepository extends JpaRepository<CricEntity, Integer> {

}
