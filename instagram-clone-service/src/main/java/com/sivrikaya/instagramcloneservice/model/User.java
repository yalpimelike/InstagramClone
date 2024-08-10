package com.sivrikaya.instagramcloneservice.model;

import com.sivrikaya.instagramcloneservice.dto.request.CreateUserRequest;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Lazy;

import java.util.Collection;
import java.util.List;

@Data
@AllArgsConstructor
@RequiredArgsConstructor
@Entity
@Builder
@Table(name = "users")
public class User{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String firstname,lastname,fullName,username,email,password,phone,profilePhoto;
    public User(CreateUserRequest request){
        this.username=request.getUsername();
        this.email=request.getEmail();
        this.password=request.getPassword();
    }

    @OneToMany
    private List<Post> postList;

    // TODO kullanıcının attığı yorumlar eklenecek

}
