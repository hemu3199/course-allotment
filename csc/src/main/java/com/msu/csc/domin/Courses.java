package com.msu.csc.domin;

public class Courses {
    private String course_number;
    private String course_section;
    private String course_name;
    private String professor_name;
    private String seats_available;
    private String semester;
    private String year;
    public String getCourse_number() {
        return course_number;
    }
    public void setCourse_number(String course_number) {
        this.course_number = course_number;
    }
    public String getCourse_section() {
        return course_section;
    }
    public void setCourse_section(String course_section) {
        this.course_section = course_section;
    }
    public String getCourse_name() {
        return course_name;
    }
    public void setCourse_name(String course_name) {
        this.course_name = course_name;
    }
    public String getProfessor_name() {
        return professor_name;
    }
    public void setProfessor_name(String professor_name) {
        this.professor_name = professor_name;
    }
    public String getSeats_available() {
        return seats_available;
    }
    public void setSeats_available(String seats_available) {
        this.seats_available = seats_available;
    }
    public String getSemester() {
        return semester;
    }
    public void setSemester(String semester) {
        this.semester = semester;
    }
    public String getYear() {
        return year;
    }
    public void setYear(String year) {
        this.year = year;
    }
    @Override
    public String toString() {
        return "Courses [course_number=" + course_number + ", course_section=" + course_section + ", course_name="
                + course_name + ", professor_name=" + professor_name + ", seats_available=" + seats_available
                + ", semester=" + semester + ", year=" + year + "]";
    }
    
    


}
