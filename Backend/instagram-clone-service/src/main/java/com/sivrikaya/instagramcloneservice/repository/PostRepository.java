package com.sivrikaya.instagramcloneservice.repository;

import com.sivrikaya.instagramcloneservice.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PostRepository extends JpaRepository<Post,Long> {
}
