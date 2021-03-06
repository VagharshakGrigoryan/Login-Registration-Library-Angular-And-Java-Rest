package com.example.loginregisterserver.repository;

import com.example.loginregisterserver.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface BookRepository extends JpaRepository<Book, Long>{
    List<Book> findByAuthorId(@Param("id") Long id);
}
