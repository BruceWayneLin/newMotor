import Vue from 'vue'
import Router from 'vue-router'
import InfoPage from '@/components/infoPage'
import FormPage from '@/components/formPage'
import MotorFormPage from '@/components/motorFormPage'
import IndexPage from '@/components/indexPage'
import ThanksPage from '@/components/thanksPage'
import QandAPage from '@/components/qAnda'
import ErrorPage from '@/components/errorPage'
import FailPayment from '@/components/failPayment'
import NotFound from '@/components/notFound'
import activityPage from '@/components/activityPage'
import versions from '@/components/versions'

Vue.use(Router)
var $ = require('jquery')
window.jQuery = $
window.$ = $

export default new Router({
 routes: [
    {
      path: '/versions',
      name: '/versions',
      component: versions
    },
    {
      path: '/activityPage',
      name: 'activityPage',
      component: activityPage
    },
    {
      path: '/notFound',
      name: 'notFound',
      component: NotFound
    },
    {
      path: '/failPayment',
      name: 'failPayment',
      component: FailPayment
    },
    {
      path: '/errorPage',
      name: 'errorPage',
      component: ErrorPage
    },
    {
      path: '/faqPage',
      name: 'qPage',
      component: QandAPage
    },
    {
      path: '/thanksPage',
      name: 'thanksPage',
      component: ThanksPage
    },
    {
      path: '/piForm',
      name: 'form',
      component: FormPage
    },
    {
      path: '/confirmPage',
      name: 'infoPage',
      component: InfoPage
    },
    {
      path: '/viForm',
      name: 'motorForm',
      component: MotorFormPage
    },
    {
      path: '/',
      name: 'indexPage',
      component: IndexPage,
      beforeEnter: (to, from, next) => {
        // localStorage.removeItem('style');
        // $('#defaultIndex #navbar').css({
        //   'background-color': 'transparent'
        // });
        // $('#defaultIndex').css({
        //   'background-color': 'transparent'
        // });
        // $('#defaultIndex img').attr('src', './static/assets/logoWhite.png');
        // $('#defaultIndex ul li span').css({
        //   "color": "white"
        // });
        // $('#defaultIndex ul li p').css({
        //   "color": "white"
        // });
        // $('#defaultIndex ul li i svg').css({
        //   "fill": "white"
        // });
        // $('#navbar #logOut').css({
        //   "color": "#fff"
        // });
        // $('#navbar button').css({
        //   "color": "#fff"
        // });
        // $('#navbar #logIn').css({
        //   'border-color': 'white',
        //   'color': 'white'
        // })
        // $('#navbar #logOut').css({
        //   'border-color': 'white',
        //   'color': 'gray',
        //   'background-color': 'white'
        // })
        // $('#navbar #logOut').mouseover(function(){
        //   $('#navbar #logOut').css({
        //     'border-color': '#d0596e',
        //     'color': 'white',
        //     'background-color': '#d0596e'
        //   })
        // });
        // $('#navbar #logOut').mouseleave(function(){
        //   if($(document).scrollTop() > 400){
        //     $('#navbar #logOut').css({
        //     'border-color': 'gray',
        //     'color': 'white',
        //     'background-color': 'gray'
        //     })
        //   }else{
        //     $('#navbar #logOut').css({
        //     'border-color': 'white',
        //     'color': 'gray',
        //     'background-color': 'white'
        //     })
        //     $('#navbar #logOut span').css({
        //       'border-color': 'white',
        //       'color': 'gray',
        //       'background-color': 'white'
        //     })
        //     $('#navbar #logOut i').css({
        //       'border-color': 'white',
        //       'color': 'gray',
        //       'background-color': 'white'
        //     })  
        //   }
        // });
        // $('#navbar #logIn').mouseleave(function(){
        //   $('#navbar #logIn').css({
        //     "color": "white", 
        //     "background-color": "transparent",
        //     "border-color":"white"
        //   }); 
        // });
        // setTimeout(function(){
        //   $('#navbar #logOut').css({
        //     'border-color': 'gray',
        //     'color': 'white',
        //     'background-color': 'gray'
        //   })
        //   $('#navbar #logOut').mouseleave(function(){
        //     if($(document).scrollTop() > 400){
        //       $('#navbar #logOut').css({
        //       'border-color': 'gray',
        //       'color': 'white',
        //       'background-color': 'gray'
        //       })
        //     }else{
        //       $('#navbar #logOut').css({
        //       'border-color': 'white',
        //       'color': 'gray',
        //       'background-color': 'white'
        //       })
        //       $('#navbar #logOut span').css({
        //         'border-color': 'white',
        //         'color': 'gray',
        //         'background-color': 'white'
        //       })
        //       $('#navbar #logOut i').css({
        //         'border-color': 'white',
        //         'color': 'gray',
        //         'background-color': 'white'
        //       })  
        //     }
        //   });
          // $(window).on('scroll', document, function(){
          //   if($(document).scrollTop() > 400){
  
          //   } else {
          //     $('#navbar #logOut').css({
          //       "background-color": "white"
          //     });
          //     $('#navbar #logOut span').css({
          //       "color": "gray"
          //     });
          //     $('#navbar #logOut i').css({
          //       "color": "gray"
          //     });
          //   }
          // });
        // }, 300);
        
        next()
      }
    }
  ]
})
