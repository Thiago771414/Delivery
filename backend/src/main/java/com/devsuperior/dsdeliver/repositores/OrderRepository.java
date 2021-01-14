package com.devsuperior.dsdeliver.repositores;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsdeliver.entities.Order;

//JpaRepository faz o crud na entidade
public interface OrderRepository extends JpaRepository<Order, Long> {

}
