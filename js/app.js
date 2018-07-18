/*
  Please add all Javascript code to this file.
*/

// $.get("https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json", function(results) {

// 	console.log(results);

// 	results.data.feed.forEach(function(result){
// 		$('ul').append('<li>' + result.content.title + '</li>')
// 	});

// });

// let newsApi1 = JSON.parse();

// for (let i = 0; i < newsApi1.items.length; i++) {
//   console.log(newsApi1.items[i].title + " " + newsApi1.items[i].published);
// }

// let links = [];
// for (let i = 0; i < flickrObj.items.length; i++) {
//   links.push(flickrObj.items[i].link);

// }

// let newsAPI = 'https://newsapi.org/v2/top-headlines';
// $.get(newsAPI, {
//     country: 'us',
//     category: 'business',
//     apiKey: 'dd591ea74bd0486ea58d22ea637a0b4e'
// }, function(data){
//     console.log('data: ', data)
// })

// const headline = 'https://newsapi.org/v2/top-headlines?country=us';
// const apiKey: '0e961e3edde446558316a839d8744149'
// $.get(headline, {
//     pageSize: 5,
// }, function (response){
// })
// let articleMain = $('#article');



// $.get(weatherUrl, {
//     q: 'San Francisco',
//     appId: apiKey
// }, function(response){
//     const temp = response.main.temp;
//     const tempF = kelvinToFahrenheit(temp);

//     $('#openWeatherTemp').text(tempF);
// });

// for (let i = 0; i < flickrObj.items.length; i++) {
//     console.log(flickrObj.items[i].title + " " + flickrObj.items[i].published);
// }

// When the user selects an article's title, 
// the app should show the #popUp overlay. 
// The content of the article must be inserted 
// in the .container class inside #popUp. 
// Make sure you remove the .loader class 
// when toggling the article information 
// in the pop up.


// $(document).ajaxStart(function() {
//   console.log('ajax start');
//   $('#popUp.loader').show();
//   $('#main').hide();
// }).ajaxStop(function() {
//   console.log('ajax stop');
//   $('#popUp.loader').hide();
//   $('#main').show();
// });

// $.ajax({ 
//   url: newsAPI,
//   type: 'GET',
//   apiKey: apiKey,
// }, function(){
//   $('#pacman').hide();
// });

// $('#popUp.loader').show();
// console.log('showingthing');

// $.get(newsAPI, {
//   country: 'us',
//   category: 'business',
//   apiKey: apiKey
// }, function(success){
// $('#popUp.loader').hide();
//   console.log('ajax loader');
// });

// $.ajax({
//   url: newsAPI,
//   type: 'GET',
//   apiKey: apiKey,
  
//   success: function(data) {
//       // TODO: hide your spinner
//       $('#popUp.loader').hide();
//       console.log('does this work');
//   },
//   success: function(result) {
//       // TODO: handle the results
//   }
// });

$("#pacman").show();
setTimeout(function () {
  //AJAX REQUEST CODE
  $("#pacman").hide();
},10);


const newsAPI = 'https://newsapi.org/v2/top-headlines';
const apiKey = '10ad0a0d974f4b4fa85d248e2cd89564';


// $.ajax({ 
//   url: newsAPI,
//   type: 'GET',
//   apiKey: apiKey,
//                  beforeSend: function () { $('#pacman').show( 800 ); },
                

//                  success: function (data) { $('#pacman').hide(); } 
//         });


$.get(newsAPI, {
    country: 'us',
    category: 'business',
    apiKey: apiKey
}, function(data){
    console.log('data: ', data)

    for (let i = 0; i < data.articles.length; i++){
      // console.log('data.articles[i].title');
      const article = data.articles[i];
      console.log('articles: ', article)

      const articleTitle = data.articles[i].title;
      const articlePub = data.articles[i].publishedAt;
      const articleImage = data.articles[i].urlToImage;
      const articleDes = data.articles[i].description;

      let articleTemplate = {
        "title": articleTitle,
        "published": articlePub,
        "image": articleImage,
        "description": articleDes,
      }
      console.log('article template:', articleTemplate);

      const articleHtml = $('#main');
      // console.log('article main:', articleHtml);

      // const articleClass = $('.article');
      // console.log('article class:', articleClass);

      let template;
        template = `
        <article class="article">
        <section class="featuredImage">
          <img src="${articleTemplate.image}" alt="" />
        </section>
        <section class="articleContent">
            <a href="#"><h3>${articleTemplate.title}</h3></a>
            <h6>${articleTemplate.published}</h6>
        </section>
        <section class="impressions">
        </section>
        <div class="clearfix"></div>
        </article>
        `;
        articleHtml.append(template);
        // articleHTML.remove();
        // articleClass.append(template);

        let templatePop;
        templatePop = `
        <div id="popUp" class="loader hidden">
        <a href="#" class="closePopUp">X</a>
        <div class="container">
          <h1>${articleTemplate.title}</h1>
          <p>
          ${articleTemplate.description}
          </p>
          <a href="#" class="popUpAction" target="_blank">Read more from source</a>
        </div>
      </div>
        `

//         $('#main').on('click', function (){
//           // $('#popUp .container').show();
//           $('#main').addClass('.popUpAction');
//           $('#popUp').append(templatePop);
//           // $('#main').attr('src', $(this).attr('src'));
//         });

//     }
// });

// When the user selects an article's title, 
// the app should show the #popUp overlay. 
// The content of the article must be inserted 
// in the .container class inside #popUp. 
// Make sure you remove the .loader class when 
// toggling the article information in the pop up.

// $('#main').on('click', function (){
//   $('#popUp').append(templatePop);
//   console.log('popup');
//   // $('#main').attr('src', $(this).attr('src'));
// });

// $('div.gallery img').on('click', function() {
// 	// $('body').append('<div class="background-overlay"></div>');
// 	$('body').addClass('open');
// 	$('div.modal img').attr('src', $(this).attr('src'));
// });

// $('.closePopUp').on('click', function () {
// 	$('.container').removeClass();
// });

// let i = 10;
// while (i > 0) {
//   console.log(i);
//   i -= 1;
// }


// /* <nav>
// <ul>
//   <li><a href="#">News Source: <span>Source Name</span></a>
//     <ul>
//         <li><a href="#">Source 1</a></li>
//         <li><a href="#">Source 2</a></li>
//         <li><a href="#">Source 3</a></li>
//     </ul>
//   </li>
// </ul>

// const sourceOne = $('nav.li')
// const sourceTwo = $('nav.li')
// const sourceThree = $('nav.li')

// sourceOne.on('click', function(event){
//   event.preventDefault();
// }) 

// const $loading = $('#popUp.loader');
// // $(document)function
// $(document).ready(function(){
//   $loading.ajaxStart(function () {
//     $loading.show();
//   })
//   $loading.ajaxStop(function () {
//     $loading.hide();
 
//   });

  //  $('#popUp.loader').ajaxStart(function() { 
  //   console.log('isthisworking?') 
  //   $(this).show(); });
  // $('#popUp.loader').ajaxComplete(function() { $(this).hide(); });


//   const articleSelect = $('.article');

//   articleSelect.on('click', function(event) {
//     event.preventDefault();
//     $('#popUp.loader').show();
//     $('#popUp.loader').hide();

//   });

  // const articleContent = $('this', template);


  // let articlePop = {
  //   "title": articleTitle,
  //   "published": articlePub,
  //   "image": articleImage,
  // }

//   let templatePop;
//   templatePop =
//   ` <div class="container">
//   <h1>${articlePop.title}</h1>
//   <p>
//   ${articlePop.descrip}
//   </p>
//   <a href="#" class="popUpAction" target="_blank">Read more from source</a>
// </div>
// `;


//   <div id="popUp" class="loader hidden">
//   <a href="#" class="closePopUp">X</a>
//   <div class="container">
//     <h1>Article title here</h1>
//     <p>
//       Article description/content here.
//     </p>
//     <a href="#" class="popUpAction" target="_blank">Read more from source</a>
//   </div>
// </div>
  
// newQuestionButton.on('click', function(event) { */
//   event.preventDefault();
//   let newQuestion = questionBox.val();
//   let survey = {
//       "question" : newQuestion,
//     };
 
// questionList.append(template)
// });

// const article = {
//   "title" : 'articles.items[i].title',
//   "category" : 'articles.items[i].category',
// };


// articleMain.append(template)