package com.msu.csc.domin;

public class Request {

    private String name;
    private String mnumber;
    private String email;
    private String credits;
    private String graduating;
    private String preference1;
    private String preference2;
    private String preference3;
    private String preference4;

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

    public String getPreference1() {
        return preference1;
    }

    public void setPreference1(String preference1) {
        this.preference1 = preference1;
    }

    public String getPreference2() {
        return preference2;
    }

    public void setPreference2(String preference2) {
        this.preference2 = preference2;
    }

    public String getPreference3() {
        return preference3;
    }

    public void setPreference3(String preference3) {
        this.preference3 = preference3;
    }

    public String getPreference4() {
        return preference4;
    }

    public void setPreference4(String preference4) {
        this.preference4 = preference4;
    }

    @Override
    public String toString() {
        return "Request{" +
                "name='" + name + '\'' +
                ", mnumber='" + mnumber + '\'' +
                ", email='" + email + '\'' +
                ", credits='" + credits + '\'' +
                ", graduating='" + graduating + '\'' +
                ", preference1='" + preference1 + '\'' +
                ", preference2='" + preference2 + '\'' +
                ", preference3='" + preference3 + '\'' +
                ", preference4='" + preference4 + '\'' +
                '}';
    }
}
