package com.SpringBoot.SpringBootWeb;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HomeController {
    // Dispatcher Servlet or Front Controller will look for the view in the /WEB-INF/views/ directory

    @ModelAttribute("course")
    public String courseName() {
        return "Spring Boot";
    }

    @RequestMapping("/")
    public String home() {
        return "index";
    }

//    @RequestMapping("add")
//    public String add(HttpServletRequest req, HttpSession session) {
//
//        int num1 = Integer.parseInt(req.getParameter("num1"));
//        int num2 = Integer.parseInt(req.getParameter("num2"));
//        int result = num1 + num2;
//
//        session.setAttribute("result", result);
//
//        return "result.jsp";
//    }

//    @RequestMapping("add")
//    public String add(@RequestParam("num1") int num1, @RequestParam("num2") int num2, Model model) {
//        int result = num1 + num2;
//        model.addAttribute("result", result);
//
//        return "result";
//    }

    @RequestMapping("add")
    public ModelAndView add(@RequestParam("num1") int num1, @RequestParam("num2") int num2, ModelAndView mv) {
        int result = num1 + num2;
        mv.addObject("result", result);
        mv.setViewName("result");

        return mv;
    }

    @RequestMapping("addEmployee")
    public String addEmployee(Employee emp) { // @ModelAttribute("e")
        return "result";
    }

//    @RequestMapping("addEmployee")
//    public ModelAndView addEmployee(@RequestParam("Id") int Id, @RequestParam("empName") String empName, ModelAndView mv) {
//
//        Employee emp = new Employee();
//        emp.setId(Id);
//        emp.setEmpName(empName);
//
//        mv.addObject("emp", emp);
//        mv.setViewName("result");
//
//        return mv;
//    }

    @ExceptionHandler(MissingServletRequestParameterException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ModelAndView handleMissingParams(MissingServletRequestParameterException ex) {
        ModelAndView mv = new ModelAndView("error");
        mv.addObject("message", ex.getMessage());
        return mv;
    }

}
