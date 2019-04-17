<template>
<div>

   <!-- <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #F5F2EE">
     <a class="navbar-brand" href="#">Sam Kahr</a>
     <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav"
     aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
     </button>
     <div class="collapse navbar-collapse" id="navbarNav">
       <ul class="navbar-nav mr-auto">
         <li class="nav-item">
           <a class="nav-link" href="#experience">Experience</a>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="#portfolio">Portfolio</a>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="https://medium.com/@samkahr" target="_blank">Blog</a>
         </li>
       </ul>
     </div>
     </nav> -->

     <b-navbar class='navbar' toggleable="lg" type="light"  style="background-color: #F5F2EE">
        <b-navbar-brand href="#">Sam Kahr</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
             <b-navbar-nav>
               <b-nav-item href="#experience">Experience</b-nav-item>
               <b-nav-item href="#portfolio">Portfolio</b-nav-item>
               <b-nav-item href="#resume">Resume</b-nav-item>
               <b-nav-item href="https://medium.com/@samkahr" target="_blank">Blog</b-nav-item>
             </b-navbar-nav>
 </b-collapse>
</b-navbar>






 <div class="container-fluid">
    <div class="row flash align-items-center">
        <div data-aos="fade-down"
             data-aos-duration="1000"
             data-aos-once="true"
             class="col-sm-12 col-md-6 d-flex justify-content-center">
            <div>
              <img src="../assets/sam.png" class="img-fluid" alt="Responsive image">
            </div>
        </div>
        <div data-aos="fade-up"
             data-aos-duration="500" data-aos-anchor-placement="bottom-bottom"
             class="col-sm-12 col-md-6 text-center justify-content-center">
            <h1>Howdy, I'm Sam</h1>
            <link rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
        crossorigin="anonymous">
         <div id="fa">
                <a href="mailto:samkahr@gmail.com" target="_blank"><i class="fa fa-envelope fa-2x"></i></a>
                <a href="https://www.linkedin.com/in/samkahr/" target="_blank"><i class="fab fa-linkedin fa-2x"></i></a>
                <a href="https://github.com/samkahr" target="_blank"><i class="fab fa-github-square fa-2x"></i></a>
            </div>

            <p> I am a customer centric software engineer based in San Francisco. As a former technical account manager, I was frustrated
              the most challenging problems went over my head. I have retrained to become an engineer
            that puts customers first.    </p>

    </div>
  </div>


  <div id="experience" class="row timeline" data-color="dark" data-aos="fade-up"
            data-aos-duration="1000" data-aos-once="true">
       <div class="col-12 align-items-center" >
           <h1 class="section-header text-uppercase" > Experience </h1>


          <carousel :nav="false" >
               <div class="item">
                   <div class="row">
                       <div class="col-12">
                           <h3><i class="fa fa-graduation-cap" aria-hidden="true"></i> Claremont McKenna College</h3>
                           <h6>Chemistry // International Relations GPA: 3.52</h6>
                           <h6><a href='https://www.cmc.edu/admission/scholarships/iss' style="color:black;" target="_blank">Interdisciplinary Science Scholarship</a></h6>
                            <h6>Class of 2014</h6>
                       </div>
                   </div>
               </div>

               <div class="item">
                   <div class="row">
                       <div class="col-12">
                           <h3><i class="fa fa-graduation-cap" aria-hidden="true"></i> <a href='https://www.bloc.io/web-developer-track' style="color:black;" target="_blank"> Bloc Web Dev Bootcamp</a></h3>

                           <h6>Javascript // React // Data Structures & Algorithms // Git // Agile Development</h6>
                            <h6>Sept 2018 - Dec 2018</h6>
                       </div>
                   </div>
               </div>

               <div class="item">
                   <div class="row">
                       <div class="col-12">
                           <h3><i class="fa fa-graduation-cap" aria-hidden="true"></i> <a href='https://edu.google.com/computer-science/applied-computing-series/intensive.html' style="color:black;" target="_blank"> Google's Applied Machine Learning Intensive Bootcamp</a></h3>

                           <h6>Python // Tensorflow // SciKit Learn // Data Engineering on Google Cloud // Machine Learning Ethics </h6>
                            <h6>Feb 2019 - April 2019</h6>
                       </div>
                   </div>
               </div>


               <div class="item">
                   <div class="row">
                       <div class="col-12">
                           <h1><i class="fa fa-building" aria-hidden="true"></i> Google</h1>
                           <h6>Technical Account Manager</h6>
                           <h6>Supported Google's Largest Customers Using Analytics, Adwords, Merchant Center and Tag Manager</h6>
                           <h6>Sept 2014 - August 2017</h6>
                       </div>
                   </div>
               </div>
               <div class="item">
                   <div class="row">
                       <div class="col-12">
                           <h1><i class="fa fa-building" aria-hidden="true"></i> <a href='https://www.acquired.io' style="color:black;" target="_blank">Acquired.io</a></h1>
                           <h6>Customer Success Leader</h6>
                           <h6>Interface between customers and engineering team tasked with creating a seemless customer experience</h6>
                           <h6>Jan 2018 - August 2018</h6>
                       </div>
                   </div>
                </div>

             </carousel>

           </div>

       </div>
       <div id="projects" class="row projects " data-color="light" data-aos="fade-up"
    data-aos-duration="1000" data-aos-once="true" >
    <div class="col-12 align-items-center">
    <ItemFilter />
    </div>
    </div>


    <div id="resume" class="row resume" data-color="grey">
       <div class="col-12 align-items-center resume">
           <h1 id="resumetext" class="section-header text-uppercase">Resume</h1>
       </div>
       <div class="col-12 align-items-center p-4 ">
           <div class="resume-block rounded-top ">
               <div class="text-center p-2">
                   <h2>Sam Kahr</h2>
                   <p>samkahr.com / samkahr@gmail.com / 734-546-8963</p>
               </div>
               <div class="separator mx-4"></div>
               <div class="blur px-4">
                   <p class="m-0"><b>Education</b></p>
                   <p class="m-0"><em>Claremont McKenna College</em>
                       <p><span class="pull-right">Class of 2014</span></p>
                   <p class="m-0">Bachelor of Science in Chemistry and International Relations</p>

               </div>
               <div class="scribd-url text-center">
                   <a href="https://www.scribd.com/embeds/406565473/content?start_page=1&view_mode=scroll" class="h5 text-uppercase" target="_blank" style="color:black;">
                       View on Scribd <small><i class="fa fa-chevron-right" aria-hidden="true"></i></small></h5>
                   </a>
               </div>


           </div>
       </div>
   </div>
   </div>

</div>



</template>

<script>

import carousel from 'vue-owl-carousel'
import ItemFilter from './ItemFilter.vue';


export default {
  name: "Header",
  components: {
    carousel,
  ItemFilter },

}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans|Source+Code+Pro');
.navbar  {
  font-family: 'Source Code Pro', monospace;
  background-color: #F8F8F8;
}
#fa {
  display:flex;
  justify-content: center;
  padding: 0px;
}
#fa > a {
  margin:15px
}

h1 {
  font-family: 'Source Code Pro', monospace;
}

p {

  font-family: 'Source Code Pro', monospace;
}

img {
  padding: 10px;
}

#experience {
  background-color: #95A79F;
  padding: 10px;
  margin: 10px;
  font-family: 'Source Code Pro', monospace;

}
.item {
   margin-left: 10px;
}

#resumetext {
  text-indent: 0.1em;
}

#resume {
  background-color: #A95E43;
  font-family: 'Source Code Pro', monospace;
  margin: 10px;
  padding: 10px;

}

</style>
