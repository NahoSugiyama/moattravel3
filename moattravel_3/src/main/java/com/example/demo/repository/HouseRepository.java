package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.House;

public interface HouseRepository extends JpaRepository<House, Integer> {

}
