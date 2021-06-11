<%@page import="java.util.ArrayList"%>
<%@page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name = "viewport" content = "width = device-width, initial-scale=1.0">
    <title>HAGUS HARDWARE</title>
    <link rel='stylesheet' type='text/css' href='../../css/pages.css'>
    <script src="includeHTML.js"></script>
</head>


<body>
    <header>
        <h3><a href = "../../index.html">HAGUS <br> HARDWARE</a></h3> 
        <ul id="main_menu">
        </ul>

        <script src = "../../MainMenu.js"></script>
    </header>

    <section class="section">
        <div style = "margin-left: 40%;">만드는 중 :)</div>
        <%! 
    int num = 10;
    String str = "Hello";
    ArrayList<String> list = new ArrayList<>();
    %>
    <%!
    public static void tagMethod() {
    %>
      <p> hello Tag </p>
    <%! 
    }
    %>
    
    <!-- HTML 주석 태그 -->
    <%-- JSP 주석 태그 --%>
    
    <%-- 스크립트릿 태그 --%>
    <%
    if(num > 0) {
    %>
    <p> num > 0 </p>
    <%
    }else {
    %>
    <p> num <=0 </p>
    <%
    }
    %>
    
    <%-- 표현식 태그 --%>
    num is <%= num %> <br><br>
    str is <%= str %>
    </section>    
</body>
</html>


