<template>
<div id="app">

	<div class="title-container">
  <div id="portfolio">
    <h1>PORTFOLIO</h1>
  </div>
		<div class="filters">
			<span class="filter" v-bind:class="{ active: currentFilter === 'ALL' }" v-on:click="setFilter('ALL')">All</span>
			<span class="filter" v-bind:class="{ active: currentFilter === 'ART' }" v-on:click="setFilter('Front End')">Front End</span>
			<span class="filter" v-bind:class="{ active: currentFilter === 'WORKSHOPS' }" v-on:click="setFilter('Machine Learning')">Machine Learning</span>
		</div>
	</div>

	<transition-group class="projects" name="projects" >
		<div class="project" v-if="currentFilter === project.category || currentFilter === 'ALL'" v-bind:key="project.title" v-for="project in projects">
  <div class="card-body">
    <h5 class="card-title">{{project.title}}</h5>
    <p class="card-text">{{project.overview}}</p>
    <a v-bind:href=project.link class="btn btn-primary" target="_blank">View on Github</a>

</div>
</div>
	</transition-group>
</div>

</template>

<script>

export default {
	name: "ItemFilter",
	data() {
    return {
		currentFilter: 'ALL',
		projects: [
			{title: "Bloc Jams", overview: "Built a custom music player in React.", category: 'Front End', link: 'https://github.com/samkahr/bloc-jams-react' },
			{title: "Bloc Chatroom", overview: "Using Firebase and React, created a chat room app", category: 'Front End', link: 'https://github.com/samkahr/bloc-chatroom'},
			{title: "Digital Braille", overview: "Built a machine learning app that translates text in a picture to on screen brail. Built using Javascript and Google Clouds ML Engine", category: 'Machine Learning', link: 'https://github.com/dxh9845/braille-vibrate'},
			{title: "Hot Dog or No Hot Dog", overview: "End to end machine learning app that takes a raw jpeg file and will determine whether image contains a hot dog or not. Built using TensorFlow and OpenCV", category: 'Machine Learning', link: ''},
			{title: 'Video Object Recognition', overview: "Object detection using trained TensorFlow model, & exporting .mp4 with labels using OpenCV" , category: 'Machine Learning', link: 'https://github.com/samkahr/videoObjectRecognition/blob/master/Video%20Object%20Recognition.ipynb'},
      {title: 'Ad CTR Prediction', overview: "Created an end to end machine learning app that allows marketers to upload a CVS with ad targeting criteria and get click through rate predictions" , category: 'Machine Learning', link: 'https://github.com/kanalyzers/ad_optimization'},

		]
	}
},
	methods: {
		setFilter(filter) {
			this.currentFilter = filter;
		}
	 }
  }

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans|Source+Code+Pro');
.card{
  margin: 5px;
}
.title-container {
	display:flex;
	flex-direction:column;
	justify-content:center;
	align-items:center;
	font-family: 'Source Code Pro', monospace;
}
#portfolio{
	display:flex;
	flex-direction: column;
	align-self: flex-start;
	text-indent: 2em;
}

.project-title {
font-size:16pt
}

.filter {
	padding: 6px 6px;
	cursor:pointer;
	border-radius: 6px;
	transition: all 0.35s;
}

.filter.active {
	box-shadow:0px 1px 3px 0px #00000026;
}

.filter:hover {
	background:lightgray;
}

.projects {
	margin-bottom:50px;
	margin-top:25px;
	display:flex;
	flex-wrap:wrap;
	justify-content:center;
}

.projects-enter {
	transform: scale(0.5) translatey(-80px);
	opacity:0;
}

.projects-leave-to{
	transform: translatey(30px);
	opacity:0;
}

.projects-leave-active {
	position: absolute;
	z-index:-1;
}

.project {
	transition: all .35s ease-in-out;
	margin:10px;
	box-shadow:0px 2px 8px lightgrey;
	border-radius:3px;
	width:20em;
	display:flex;
	flex-direction:column;
	align-items:center;
	font-family: 'Source Code Pro', monospace;
}


</style>
