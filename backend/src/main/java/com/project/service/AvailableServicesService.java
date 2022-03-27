package com.project.service;

import com.project.model.AvailableServices;
import com.project.repository.AvailableServicesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AvailableServicesService {


        @Autowired
        private AvailableServicesRepository availableServicesRepository;

        public AvailableServices save(AvailableServices availableServices) {
            return availableServicesRepository.save(availableServices);
        }

        public List<AvailableServices> findAll() {
            List<AvailableServices> availableServices = new ArrayList<>();
            Iterable<AvailableServices> all = availableServicesRepository.findAll();
            all.forEach(availableServices::add);
            return availableServices ;
        }
}


