<template>


  <!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="style.css" />
	<title>Pweb aku ni</title>
</head>
<body>
	<div class="wrapper">
			<div class="nav">
				<div class="logo">
					My Porto
				</div>
				<div class="menu">
					<ul>
						<router-link
              to="/"
              name="fade"
              class="btn btn-outline border text-secondary">
              Home
            </router-link>
			<router-link
              to="/about"
              name="fade"
              class="btn btn-outline border text-secondary">
              About
            </router-link>

					</ul>
				</div>
				<div class="header">
					<div class="typewriter">
				<h1>Muhammad Zulfikri</h1>
					</div>
					<div class="typewriter">
				<p>Programmer and game developer</p>
				</div>
			</div>
		</div>
	</div>
</body>
</html>
</template>

<script>
import { directive as motion } from "@vueuse/motion";

export default {};
</script>

<style>
html,body{
	margin: 0;
	padding: 0;
	width: 100%;
	
}



body{
	background: url("https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
	height: 100vh;
	width: 100%;
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	display: table;
	background-attachment: fixed;
	
	font-family: montserrat;
}
.nav{
	position: fixed;
	top: 0;
	left: 0;
	margin: 0;
	padding: 0;
	width: 100%;
	height: 80px;
	border-bottom: 1px solid rgba(255,255,255,0.5)
}
.logo{
	letter-spacing: 1px;
	float:left;
	margin-left: 20px;
	color: #fff;
	line-height: 80px;
	font-size: 22px
	padding 0 6em;
}

.menu{
	float: left;
	line-height: 50px;
	margin: 0 6em;
}

.menu ul{
	list-style: none;
	color: #fff;
}

.menu ul li{
	display: inline-block;
}

.menu ul li a{
	text-decoration: none;
	color: rgb(255, 255, 255);
	font-size: 16px;
	font-weight: lighter;
	padding: 0 20px;

}

ul li:nth-child(5) a{

	color: #009f8b;
	border: 1px solid #009f8b;
	padding: 20px 20px;
	border-radius: 4px;

}

.header{
	position: absolute;
	top: 500%;
	left: 50%;
	transform: translate(-50%,-50%);
	text-align: center;

}

.header h1{
	color: rgb(216, 226, 216);
	font-size: 40px;
	font-weight: 400px;
	margin-bottom: 8px;
	
}

.header p{
	color: rgb(207, 207, 207);
	font-size: 24px;
	font-weight: lighter;
}

.typewriter h1 {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  animation: 
    typing 3.5s steps(40, end),
    blink-caret .75s step-end infinite;
}

.typewriter p {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  animation: 
    typing 3.5s steps(40, end),
    blink-caret .75s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: orange; }
}
</style>
