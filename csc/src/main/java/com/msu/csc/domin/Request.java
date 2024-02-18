package com.msu.csc.domin;

public class Request {

    private String name;
    private String mnumber;
    private String email;
    private String credits;
    private String graduating;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMnumber() {
        return mnumber;
    }

    public void setMnumber(String mnumber) {
        this.mnumber = mnumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCredits() {
        return credits;
    }

    public void setCredits(String credits) {
        this.credits = credits;
    }

    public String getGraduating() {
        return graduating;
    }

    public void setGraduating(String graduating) {
        this.graduating = graduating;
    }

    @Override
    public String toString() {
        return "Request{" +
                "name='" + name + '\'' +
                ", mnumber='" + mnumber + '\'' +
                ", email='" + email + '\'' +
                ", credits='" + credits + '\'' +
                ", graduating='" + graduating + '\'' +
                '}';
    }
}
