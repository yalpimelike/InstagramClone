package com.sivrikaya.instagramcloneservice.repository;

import com.sivrikaya.instagramcloneservice.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment,Long> {
}
