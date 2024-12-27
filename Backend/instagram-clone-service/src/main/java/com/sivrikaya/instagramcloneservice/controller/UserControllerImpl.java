package com.sivrikaya.instagramcloneservice.controller;

import com.sivrikaya.instagramcloneservice.dto.request.CreateUserRequest;
import com.sivrikaya.instagramcloneservice.dto.response.UserResponse;
import com.sivrikaya.instagramcloneservice.model.User;
import com.sivrikaya.instagramcloneservice.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/users")
public class UserControllerImpl implements UserController {

    private final UserService userService;

    @GetMapping
    @Override
    public List<UserResponse> getAll() {
        return userService.getAll();
    }

    @GetMapping("{id}")
    @Override
    public Optional<User> getById(@PathVariable Long id) {
        return userService.getById(id);
    }

    @PostMapping
    @Override
    public UserResponse create(@RequestBody CreateUserRequest user) {
        return userService.create(user);
    }

    @PutMapping
    @Override
    public UserResponse update(@RequestBody User user) {
        return userService.update(user);
    }

    @DeleteMapping("{id}")
    @Override
    public boolean deleteById(@PathVariable Long id) {
        return userService.deleteById(id);
    }

}
