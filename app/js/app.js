(function() {
  var app = angular.module('timelineApp', []);

  app.controller('TimelineController', function() {
	this.listOfData = data;
  });
  
	  var data = {
			"timeline": [
				{
					"activity_id": "010",
					"startDate":"2014-08-09",
					"endDate":"2014-08-9",
					"headline":"[Only Text] - NDP updates!",
					"text":"Participants seated, with pre-national day performance ended. National Day Parade starts. ",
					"asset": {
						"asset":"",
						"thumbnail":"img/thumbnail/spf logo.jpg",
						"type": "",
						"caption":"",
					}
				},
				{
					"activity_id": "020",
					"startDate":"2014-08-09",
					"endDate":"",
					"headline":"[Text and Image] - History of Singapore",
					"text":"<a href='http://en.wikipedia.org/wiki/History_of_Singapore'>History of Singapore</a><p>In the early 2000s, Singapore went through some post-independence crises, including the SARS outbreak in 2003 and the threat of terrorism. In December 2001, a plot to bomb embassies and other infrastructure in Singapore was uncovered[69] and as many as 36 members of the Jemaah Islamiyah group were arrested under the Internal Security Act.Major counter-terrorism measures were put in place to detect and prevent potential terrorism acts and to minimise damages should they occur. More emphasis was placed on promoting social integration and trust between the different communities. </p>",
					"asset": {
						"asset":"media/img/NDP1.jpg",
						"thumbnail":"img/thumbnail/scdf logo.jpg",
						"type": "image",
						"caption":"Singapore History",
					}
				},
				{
					"activity_id": "030",
					"startDate":"2014-08-09",
					"endDate":"",
					"headline":"[Only Image] - NDP picture from facebook.",
					"text":"",
					"asset": {
						"asset":"media/img/NDP2.jpg",
						"thumbnail":"img/thumbnail/facebook logo.jpg",
						"type": "image",
						"caption":"Only image",
					}
				},
				{
					"activity_id": "040",
					"startDate":"2014-08-09",
					"endDate":"",
					"headline":"Text and Google maps",
					"text":"To add a Google map, only add the embed link in the media field.",
					"asset": {
						"asset":"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d38604053.539696164!2d12.480607714614377!3d53.803645794129494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sde!2sat!4v1415620468057",
						"thumbnail":"img/thumbnail/googlemap logo.jpg",
						"type": "google-embed",
						"caption":"Worldmap",
					}
				},
				{
					"activity_id": "050",
					"startDate":"2014-08-09",
					"endDate":"",
					"headline":"",
					"text":"",
					"asset": {
						"asset":"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d38604053.539696164!2d12.480607714614377!3d53.803645794129494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sde!2sat!4v1415620468057",
						"thumbnail":"",
						"type": "google-embed",
						"caption":"Only Google maps",
					}
				},
				{
					"activity_id": "060",
					"startDate":"2014-08-09",
					"endDate":"",
					"headline":"Text and Youtube video",
					"text":"For a Youtube video, only add the id of the video in the media field.",
					"asset": {
						"asset":"ltvFuTuf2wE",
						"thumbnail":"img/thumbnail/twitter logo.jpg",
						"type": "youtube-embed",
						"caption":"NDP FIreWorks!!",
					}
				},
				{
					"activity_id": "070",
					"startDate":"2014-08-09",
					"endDate":"",
					"headline":"",
					"text":"",
					"asset": {
						"asset":"ltvFuTuf2wE",
						"thumbnail":"img/thumbnail/youtube logo.jpg",
						"type": "youtube-embed",
						"caption":"Only Youtube video",
					}
				},
				{
					"activity_id": "080",
					"startDate":"2014-08-09",
					"endDate":"",
					"headline":"Own video",
					"text":"<video width='400' height='240' controls='controls'><source src='media/video/NDP Video.mp4' type='video/ogg' />Your browser does not support the video tag.</video>",
					"asset": {
						"asset":"",
						"thumbnail":"img/thumbnail/youtube logo.jpg",
						"type": "",
						"caption":"video",
					}
				},
				{
					"activity_id": "090",
					"startDate":"2014-08-09",
					"endDate":"",
					"headline":"Own Audio and image",
					"text":"<p>Audio update from the ground. </p><audio controls='controls'><source src='media/audio/We will get there.mp3' type='audio/mp3' />Your browser does not support the video tag.</audio",
					"asset": {
						"asset":"media/img/NDP4.jpg",
						"thumbnail":"img/thumbnail/audio logo.jpg",
						"type": "image",
						"caption":"Audio",
					}
				}
				
				//To do (1) pptx, docx, (2)pdf (3)own map
			],
			"config": {
				"zoom": 1,
				"keyboardCommands": true,
				"date": {
					"language": "en",
					"format": "d F Y",
					"buttonFormat": "d.m.y"
				}
			}
		};

})();
