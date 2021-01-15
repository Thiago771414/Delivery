package com.devsuperior.dsdeliver.repositores;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.devsuperior.dsdeliver.entities.Order;

//JpaRepository faz o crud na entidade
public interface OrderRepository extends JpaRepository<Order, Long> {
	
	//escrever consulta
	@Query("SELECT DISTINCT obj FROM Order obj JOIN FETCH obj.products "
			+ " WHERE obj.status = 0 ORDER BY obj.moment ASC")
	List<Order> findOrderSwitchProducts();
}
