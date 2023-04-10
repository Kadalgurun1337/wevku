<template>
   <!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="style.css" />
	<title>Pemograman web</title>
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
              class="btn">
              Home
            </router-link>
						<router-link
              to="/about"
              name="fade"
              class="btn">
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
 


 
  <div id="aidio" class="bg-green-50 page-section pt-5 -mb-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 py-3 wow zoomIn">
          <div class="img-place text-center hidden lg:flex">
            <lottie-player
              src="https://assets1.lottiefiles.com/packages/lf20_q8ND1A8ibK.json"
              background="transparent"
              speed="1"
              style="max-width: 500px; max-height: 500px"
              autoplay></lottie-player>
          </div>
        </div>

        <div class="col-lg-6 p-4">
          <h2 class="text-white title-section text-2xl">
            Semua Tentang
            <span class="colored">Saya</span>
          </h2>
          <div class="divider"></div>

          <div>
            <p>
              Saya mulai tertarik tentang dunia digital semenjak saya mempunyai playstation 1,
              dimana saya mulai penasaran bagaimana cara kerja logic,scripting dan pembuatan object pada 
              game itu sendiri.
            </p>
          </div>

          <div>
            <p>
              Saat ini saya berdomisili di indonesia,saya juga adalah seorang freelancer untuk 3d dan environtment 
              modeling
            </p>
          </div>

          <div>
            <p class="hidden lg:flex">
              Saya juga mempelajari web development dan sysadmin,
            </p>
          </div>

 

          <router-link to="/projects" class="btn btn-success ml-2">
            My Projects
          </router-link>
        </div>
      </div>
    </div>
    <!-- .container -->
  
</div>
</template>



<script>
export default {
  data() {
    return {
      scrollPosition: 0,
    };
  },

  methods: {
    handleScroll(e) {
      this.scrollPosition = e.target.scrollTop;

      if (this.scrollPosition > 100) {
        console.log("UP");
      } else {
        console.log("DOWN");
      }
    },
  },
};
</script>

<style>


#aidio{
  background-image: linear-gradient(60deg, #122b23 0%, #122b23 100%);
}



.blokk{
  color: #ffff;
}
#bek{
  background-image: linear-gradient(60deg, #122b23 0%, #122b23 100%);
}

.colored{
  color: green;
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
