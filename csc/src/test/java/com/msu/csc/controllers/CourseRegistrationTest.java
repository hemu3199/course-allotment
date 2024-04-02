package com.msu.csc.controllers;

import com.msu.csc.domin.Request;
import org.mockito.Mock;
import org.mockito.Mockito;

public class CourseRegistrationTest {

    CourseRegistration courseRegistration = Mockito.mock(CourseRegistration.class);


    public void student_choicesTest() {
        Request request = new Request();
        request.setName("Hemanth");
        courseRegistration.student_choices(request);
    }
}
