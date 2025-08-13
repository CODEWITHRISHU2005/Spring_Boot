package com.CodeWithRishu.SpringAI.record;


public class Movie {
    private String movieName;
    private String leadActor;
    private String director;
    private int year;

    public Movie(String movieName, String leadActor, String director, int year) {
        this.movieName = movieName;
        this.leadActor = leadActor;
        this.director = director;
        this.year = year;
    }

    public String getMovieName() {
        return movieName;
    }

    public void setMovieName(String movieName) {
        this.movieName = movieName;
    }

    public String getLeadActor() {
        return leadActor;
    }

    public void setLeadActor(String leadActor) {
        this.leadActor = leadActor;
    }

    public String getDirector() {
        return director;
    }

    public void setDirector(String director) {
        this.director = director;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }
}