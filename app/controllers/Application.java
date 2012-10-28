package controllers;

import play.*;
import play.mvc.*;
import java.util.*;
import javax.persistence.*;
import play.db.jpa.*;

import models.*;

public class Application extends Controller {

    public static void index() {

        List<Task> tasks = Task.findAll();

     //   renderJSON(tasks);
        render(tasks);
    }



    public static void saveTask(String txt) {
        Task task = new Task();
        task.task_txt = txt;
        task.save();
        Long idTask = task.id;
        renderJSON("{\"idTask\": " + idTask +"}");
    }



    public static void updateTask(Long id, String txt) {


        Task task = Task.findById(id) ;
        if(txt.length() != 0) {
        task.task_txt = txt;
        task.save();
        } else {
            task.delete();
        }


    }

}