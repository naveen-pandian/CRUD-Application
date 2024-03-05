package com.RestAPIProject.Demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.RestAPIProject.Demo.models.User;

public interface UserRepo extends JpaRepository<User,Long>{

}
