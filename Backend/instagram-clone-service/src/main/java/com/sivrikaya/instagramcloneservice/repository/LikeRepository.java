package com.sivrikaya.instagramcloneservice.repository;

import com.sivrikaya.instagramcloneservice.model.Like;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LikeRepository extends JpaRepository<Like,Long> {
}
