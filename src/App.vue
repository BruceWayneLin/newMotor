<template>
  <div id="app">
    <nav id="defaultIndex" class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <div class="logo" style="cursor:pointer;"><a href="https://www.careline.com.tw/" @click="userClickLogo()"><img id="logoImg" style="max-width:180px;" src="./assets/logoStand.png?v=1s"/></a></div>
          <button type="button" @click="showingNavBar()" class="navbar-toggle collapsed" data-toggle="collapse">
            <span class="sr-only">Toggle navigation</span>
            <i class="fa fa-times hidden"></i>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-left">
            <li><a href="/CareLineTravel/travel" @click="userClickSpan('國外旅平')"><p><i class="fa fa-plane" style="margin-right:5px;"></i>國外旅平<span class="sr-only">(current)</span></p></a></li>
            <li><a href="#">
            <p id="motorPli">
              <i id="motorPli" class="icon-cl-motorbike" style="margin-right:5px;">
                <svg version="1.1" id="圖層_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	                width="12.671px" height="18.002px" viewBox="0 0 12.671 18.002" enable-background="new 0 0 12.671 18.002" xml:space="preserve">
                  <g>
                    <g>
                      <path d="M7.829,13.193c-0.029-0.875-0.708-1.548-1.53-1.544c-0.82,0.003-1.505,0.665-1.524,1.531
                        c-0.024,1.099-0.027,2.197,0,3.296c0.024,0.988,0.862,1.662,1.807,1.502c0.718-0.121,1.24-0.775,1.253-1.582
                        c0.009-0.519,0.001-1.037,0.001-1.556H7.833C7.833,14.291,7.848,13.742,7.829,13.193z M12.656,2.658
                        c-0.076-0.389-0.39-0.68-0.766-0.689c-0.401-0.01-0.804-0.003-1.206-0.004c-0.588,0-1.176,0-1.768,0
                        c-0.058-0.144-0.1-0.288-0.17-0.416C8.174,0.486,7.299-0.075,6.111,0.008C4.995,0.087,4.213,0.702,3.773,1.76
                        C3.709,1.912,3.648,1.973,3.479,1.97C2.584,1.96,1.69,1.96,0.796,1.968C0.227,1.971-0.144,2.516,0.053,3.041
                        c0.121,0.324,0.404,0.507,0.803,0.508c0.9,0.002,1.801,0.003,2.702-0.002c0.129-0.001,0.188,0.04,0.23,0.167
                        c0.158,0.472,0.432,0.864,0.81,1.178C4.693,4.97,4.791,5.044,4.901,5.131C4.798,5.168,4.72,5.196,4.64,5.225
                        c-1.841,0.646-3.247,2.519-3.314,4.52c-0.05,1.499-0.022,3.002-0.013,4.502c0.003,0.518,0.262,0.906,0.714,1.135
                        c0.504,0.256,1.046,0.1,1.586,0.15c0-0.099,0-0.166,0-0.232c0-0.68-0.002-1.359,0.001-2.038c0.002-0.646,0.205-1.222,0.592-1.729
                        c0.695-0.912,1.893-1.289,2.958-0.935c1.088,0.364,1.854,1.377,1.891,2.539c0.021,0.722,0.008,1.444,0.01,2.166
                        c0,0.071,0,0.142,0,0.217c0.386,0,0.741,0.022,1.094-0.004c0.712-0.054,1.199-0.573,1.207-1.312
                        c0.014-1.396,0.003-2.791-0.002-4.187c0-0.185-0.015-0.37-0.039-0.554c-0.18-1.408-0.822-2.546-1.9-3.428
                        C8.94,5.639,8.395,5.363,7.772,5.17c0.068-0.051,0.104-0.079,0.143-0.107c0.461-0.333,0.795-0.769,0.98-1.315
                        c0.044-0.132,0.105-0.162,0.23-0.161c0.889,0.005,1.776,0.007,2.665-0.001c0.146-0.001,0.304-0.021,0.438-0.078
                        C12.554,3.369,12.725,3.008,12.656,2.658z M6.282,4.374c-0.844-0.018-1.531-0.745-1.514-1.6C4.785,1.905,5.485,1.206,6.322,1.22
                        c0.861,0.015,1.53,0.739,1.511,1.635C7.813,3.729,7.137,4.392,6.282,4.374z"/>
                    </g>
                  </g>
                </svg>
              </i><span class="icon-motor-li" @click="userClickSpan('機車強制')">機車強制</span></p></a></li>
            <li>
              <a href="/activity"><p id="activityPli">
              <i id="activityPli" class="icon-activity">
                <svg version="1.1" id="圖層_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  width="13.539px" height="17.899px" viewBox="0 0 13.539 17.899" enable-background="new 0 0 13.539 17.899" xml:space="preserve">
                <path d="M12.705,7.316c-0.489-0.9-1.111-1.728-1.674-2.587c-0.008-0.013-0.026-0.02-0.058-0.039
                  c0.005,0.044,0.007,0.071,0.012,0.098c0.118,0.614,0.233,1.229,0.36,1.843c0.171,0.835,0.168,1.65-0.207,2.437
                  c-0.147,0.309-0.336,0.589-0.594,0.845c-0.022-0.396-0.041-0.77-0.07-1.141c-0.14-1.727-0.517-3.39-1.352-4.924
                  c-0.623-1.147-1.46-2.1-2.59-2.778C5.25,0.3,3.843,0.028,2.369,0.021C1.991,0.021,1.613,0.007,1.234,0
                  c-0.035,0.005-0.07,0.01-0.106,0.015c0.051,0.048,0.1,0.099,0.154,0.143C1.876,0.629,2.504,1.063,3.06,1.574
                  c0.833,0.768,1.377,1.713,1.482,2.869c0.051,0.562-0.016,1.11-0.195,1.656c-0.294-1.396-1.181-2.18-2.551-2.483
                  C1.854,3.914,1.91,4.213,1.97,4.511C2.168,5.49,2.068,6.445,1.681,7.358C1.37,8.089,1.007,8.797,0.671,9.516
                  c-0.368,0.785-0.648,1.594-0.67,2.474c-0.024,0.956,0.213,1.859,0.599,2.727c0.772,1.737,2.141,2.699,3.982,3.041
                  c0.688,0.127,1.383,0.159,2.082,0.127c0.047-0.002,0.094,0.01,0.14,0.016c0.274-0.039,0.549-0.078,0.823-0.119
                  c0.27-0.097,0.547-0.179,0.809-0.295c1.997-0.885,3.499-2.301,4.438-4.273C13.819,11.228,13.75,9.235,12.705,7.316z M7.807,15.316
                  c-1.198,2.115-3.761,1.881-4.605,0.649c-0.632-0.924-0.977-2.161,0.497-3.192c0.977-0.685,2.934-0.587,1.761-4.109
                  C5.46,8.664,9.47,12.382,7.807,15.316z"/>
                </svg> 
              </i>
              <span class="activityW-li" @click="userClickSpan('活動專區')">活動專區</span></p></a>
              </li>
          </ul>
          <a href="/CareLineMember/member/">
          <button id="logIn" class="" @click="toMemberZone()">
            <i class="fa fa-user"></i>
            {{memberLoginWords}}
          </button>
          </a>
          <button id="logOut" class="logOut hidden" @click="toLogOut()">
            <i class="fa fa-sign-out"></i>
            <span>登出</span>
          </button>
        </div><!--/.nav-collapse -->
      </div><!--/.container-fluid -->
    </nav>
    <div class="mask">
    </div>        <!-- <li><p style="cursor:default"><i class="fa fa-phone" aria-hidden="true"></i>免費客服專線 0800-234-088 (週一~週五 09:30~18:00)</p></li> -->

    <router-view>
    </router-view>
    <div @click="clickLiveAgented()" class="liveAgent" v-show="liveAgentButton || liveAgentOn">
      <div id="liveAgentArea">
        <!--<div class="blockNonfun">-->
        <!--</div>-->
        <a id="liveagent_button_online_57361000000PLrF" href="javascript://Chat" style="display: none;" onclick="liveagent.startChat('57361000000PLrF')" class="AgentOnline" >
        </a>
      </div>
      <div id="liveAgentArea2">
        <div class="AgentOffline" id="liveagent_button_offline_57361000000PLrF" style="display: none;">
        </div>
      </div>
    </div>
    <footer id="footer" class="text-center">
      <div class="row">
        <div class="col-xs-1">
        </div>
        <div class="col-xs-10">
          <div class="col-xs-3 text-center">
            <a href="/story" @click="footerIcons('凱的故事')">
            <img class="img-responsive" src="static/images/footerImg/kai.png" alt="">
            <p class="title">凱的故事</p>
            </a>
          </div>
          <div class="col-xs-3 text-center">
            <a href="/aboutus" @click="footerIcons('關於我們')">
            <img class="img-responsive" src="static/images/footerImg/about.png" alt="">
            <p class="title">關於我們</p>
            </a>
          </div>
          <div class="col-xs-3 text-center">
            <a href="/policy" @click="footerIcons('保單條款')">
            <img class="img-responsive" src="static/images/footerImg/condition.png" alt="">
            <p class="title">保單條款</p>
            </a>
          </div>
          <div class="col-xs-3 text-center">
            <a href="/faq" @click="footerIcons('FAQ')">
              <img class="img-responsive" src="static/images/footerImg/qa.png" alt="">
              <p class="title">FAQ</p>
            </a>
          </div>
        </div>
        <div class="col-xs-1">
        </div>
      </div>
    </footer>
    <footer id="footer-Bottom">
      <div class="container">
        <div class="col-xs-12">
          <div class="col-xs-6 text-center">
            <h3>快速連結</h3>
            <div class="col-xs-12 text-center">
              <a href="/CareLineTravel/travel" @click="superLinke('國外旅平')"><span style="cursor:pointer;">國外旅平</span></a>
              <a href="/CareLineMotor/motorbike/index.html" @click="superLinke('機車強制')"><span style="cursor:pointer;">機車強制</span></a>
              <a href="/activity" @click="superLinke('熱門活動')"><span style="cursor:pointer;">熱門活動</span></a>
              <a href="/legal/regulations" @click="superLinke('法規專區')"><span style="cursor:pointer;">法規專區</span></a>
            </div>
            <div class="col-xs-12 text-center">
              <a href="/legal/declaration" @click="superLinke('聲明事項')"><span style="cursor:pointer;">聲明事項</span></a>
              <a href="/legal/obligations" @click="superLinke('義務內容')"><span style="cursor:pointer;">義務內容</span></a>
              <a href="/legal/terms_of_use" @click="superLinke('使用條款')"><span style="cursor:pointer;">使用條款</span></a>
              <a href="/legal/privacy_policy" @click="superLinke('隱私政策')"><span style="cursor:pointer;">隱私政策</span></a>
            </div>
          </div>
          <div id="specialLine"></div>
          <div id="specialColFooter" class="col-xs-3 text-center">
            <h3 style="padding-top: 0px;margin-top:0px;">免費客服專線</h3>
            <div class="text-center">
            <div class="phone">
              <span>
                <img src="static/images/footerImg/tel.png" alt="" class="img-responsive">
              </span>
              <span style="position:relative;top:-30px;">
                0800-234-088
              </span>
              <h4>(週一~週五 09:30~18:00)</h4>
            </div>
            </div>
          </div>
          <div id="specialLine"></div>
          <div class="col-xs-3">
            <div class="getContact">
              <h3 style="padding-top: 0px;margin-top:0px;">取得聯繫</h3>
             <span id="fbSVG" @click="fbClick()">
                <a href="https://www.facebook.com/kaistraventure">
                <div class="fbround">
                  <svg version="1.1" id="圖層_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                      width="9.175px" height="19.732px" viewBox="0 0 9.175 19.732" enable-background="new 0 0 9.175 19.732" xml:space="preserve">
                    <path d="M8.817,9.877c-0.925,0-1.821,0-2.757,0c0,3.291,0,6.557,0,9.854c-1.386,0-2.732,0-4.117,0c0-3.264,0-6.531,0-9.838
                      c-0.664,0-1.293,0-1.943,0c0-1.172,0-2.305,0-3.486c0.631,0,1.259,0,1.93,0c0-0.715-0.02-1.384,0.006-2.05
                      c0.02-0.489,0.047-0.987,0.157-1.461c0.389-1.654,1.561-2.718,3.28-2.85c1.226-0.094,2.464-0.019,3.723-0.019
                      c0,1.107,0,2.215,0,3.366c-0.664,0-1.319-0.001-1.976,0C6.317,3.396,6.045,3.666,6.04,4.473c-0.003,0.622,0,1.244,0,1.917
                      c1.051,0,2.073,0,3.135,0C9.054,7.573,8.938,8.701,8.817,9.877z"/>
                  </svg>
                </div>
                </a>
              </span>
            </div>  
          </div>
        </div>  
        <div class="col-xs-12 text-center copyright">
         <div class="col-xs-12" id="fbClick">
            <h6>© 2017 Careline. All Rights Reserved.
            </h6>
         </div>
        </div>
      </div>
    </footer>
    {{renderJquery}}
    <div class="modal-mask" v-show="visible">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              <img class="logoModal" src="./assets/logo.png"/>
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              <pdf v-show="true" :page="page" :src="src"></pdf>
              <span @click="toNxtPDFPage">下一頁 <i class="fa fa-angle-right"></i></span>
            </slot>
          </div>

          <div class="modal-footer text-center">
            <slot name="footer">
              <button class="modal-default-button" @click="closeModal">
                關閉
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import pdf from 'vue-pdf'
import router from './router'
// import VueGtm from 'vue-gtm'
import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import VueFacebookPixel from 'vue-analytics-facebook-pixel'
import Meta from 'vue-meta'
// import VueAnimateNumber from '../node_modules/vue-animate-number'
Vue.use(VueFacebookPixel, { router })
Vue.use(Meta)
// Vue.use(VueAnimateNumber)
var getWinLocation = window.location.href.slice(0, 27)
if (getWinLocation === 'https://www.careline.com.tw') {
  Vue.use(VueFacebookPixel, { router })
  Vue.analytics.fbq.init('1882426715333419', {
    em: 'insert_email_variable,'
  })
  Vue.use(VueAnalytics, {
    id: 'UA-81617302-1',
    router,
    autoTracking: {
      pageviewTemplate: function (route) {
        return {
          page: '/CareLineMotor/motorbike/index.html' + route.path,
          title: document.title,
          location: window.location.href
        }
      }
    }
  })
} else {
  Vue.use(VueFacebookPixel, { router })
  Vue.analytics.fbq.init('1323474284410783', {
    em: 'insert_email_variable,'
  })
  Vue.use(VueAnalytics, {
    id: 'UA-101013550-1',
    router,
    autoTracking: {
      pageviewTemplate: function (route) {
        return {
          page: '/CareLineMotor/motorbike/index.html' + route.path,
          title: document.title,
          location: window.location.href
        }
      }
    }
  })
}

var $ = require('jquery')
window.jQuery = $
window.$ = $

export default {
  name: 'app',
  components: {
    pdf
  },
  data () {
    return {
      visible: false,
      page: 1,
      src: '',
      liveAgentOn: '',
      memberLoginWords: '會員專區',
      pageTitle:''

    }
  },
  methods: {
    userClickLogo: function() {
      var PageName = this.returnPageTitle(this.$router.currentRoute.name);
      this.$ga.event({
        eventCategory: pageName,
        eventAction: 'click',
        eventLabel: 'User Click Logo',
        value: ''
      })
    },
    userClickSpan: function(name) {
      var PageName = this.returnPageTitle(this.$router.currentRoute.name);
      this.$ga.event({
        eventCategory: pageName,
        eventAction: 'click',
        eventLabel: 'User Click ' + name,
        value: ''
      })
    },
    toMemberZone: function() {
      var PageName = this.returnPageTitle(this.$router.currentRoute.name);
      this.$ga.event({
        eventCategory: pageName,
        eventAction: 'click',
        eventLabel: 'User Click 會員專區',
        value: ''
      })
    },
    toLogOut: function() {
      var PageName = this.returnPageTitle(this.$router.currentRoute.name);
      this.$ga.event({
        eventCategory: PageName,
        eventAction: 'click',
        eventLabel: 'User Click 登出',
        value: ''
      })
      axios({
            url: '/CareLineMember/member-mbr/common/logout',
            method: 'post',
            params: {
              data: ''
            }
          }).then(response => {
            console.log('12343231243214', response);
            window.location.href = '/CareLineMember/member/login';
            if (response.data.isEx === true) {
              alert(response.data.msgs);
              return false
            } else {
              // location.reload();
            }
          }, response => {
            // error callback
          })
    },
    superLinke: function(name){
      var PageName = this.returnPageTitle(this.$router.currentRoute.name);
      this.$ga.event({
        eventCategory: pageName,
        eventAction: 'click',
        eventLabel: 'User Click Footer '+ name,
        value: ''
      })
    },
    fbClick: function() {
      var PageName = this.returnPageTitle(this.$router.currentRoute.name);
      this.$ga.event({
        eventCategory: pageName,
        eventAction: 'click',
        eventLabel: 'User Click Footer facebook icon',
        value: ''
      })
    },
    footerIcons: function(name){
      var PageName = this.returnPageTitle(this.$router.currentRoute.name);
      this.$ga.event({
        eventCategory: pageName,
        eventAction: 'click',
        eventLabel: 'User Click Footer '+ name,
        value: ''
      })
    },
    clickLiveAgented: function(){
      var PageName = this.returnPageTitle(this.$router.currentRoute.name);
      this.$ga.event({
        eventCategory: pageName,
        eventAction: 'click',
        eventLabel: 'User Click Live Agent',
        value: ''
      })
    },
    showingNavBar: function () {
      $('#navbar').css({
        'height': 'auto',
        'background-color': 'hsla(0,0%,100%,.8)'
      })
      if($('.fa-times').hasClass('hidden')){
        $('.icon-bar').addClass('hidden');
        $('.fa-times').removeClass('hidden');
      }else{
        $('.fa-times').addClass('hidden');
        $('.icon-bar').removeClass('hidden');
      }
      

      $('#logIn').css({
        'color': '#777777',
        'margin-top': '0px',
        'margin-bottom': '10px',
        'margin-left': 'auto',
        'margin-right': 'auto',
        'float': 'none'
      })
      
      $('#navbar').toggle()
    },
    toNxtPDFPage: function () {
      if (this.page === 2) {
        this.page = 1
      } else {
        this.page++
      }
    },
    closeModal: function () {
      this.visible = false
    },
    principleAnnounce: function () {
      let pageName = this.$router.currentRoute.name
      switch (pageName) {
        case 'indexPage':
          pageName = '首頁'
          break
        case 'form':
          pageName = '車主資料頁'
          break
        case 'motorForm':
          pageName = '車籍資料頁'
          break
        case 'infoPage':
          pageName = '投保資料確認頁'
          break
        case 'thanksPage':
          pageName = '訂購成功頁'
          break
        case 'failPayment':
          pageName = '訂購失敗頁'
          break
        case 'notFound':
          pageName = '找不到頁'
          break
        case 'errorPage':
          pageName = '錯誤碼頁'
          break
        case 'qPage':
          pageName = 'QA頁'
          break
        default:
      }
      this.$ga.event({
        eventCategory: pageName,
        eventAction: 'click',
        eventLabel: 'User Click 使用條款',
        value: ''
      })
    },
    returnPageTitle: function(pageName) {
      // let pageName = this.$router.currentRoute.name
      switch (pageName) {
        case 'indexPage':
          return pageName = '首頁'
          break
        case 'form':
          return pageName = '車主資料頁'
          break
        case 'motorForm':
          return pageName = '車籍資料頁'
          break
        case 'infoPage':
          return pageName = '投保資料確認頁'
          break
        case 'thanksPage':
          return pageName = '訂購成功頁'
          break
        case 'failPayment':
          return pageName = '訂購失敗頁'
          break
        case 'notFound':
          return pageName = '找不到頁'
          break
        case 'errorPage':
          return pageName = '錯誤碼頁'
          break
        case 'qPage':
          return pageName = 'QA頁'
          break
        default:
      }
    },
    toStyle: function() {
      if(this.$router.currentRoute.name == 'indexPage'){
          $(document).on('scroll', function(){
            console.log($(document).scrollTop())
            if($(document).scrollTop() > 400){
              $('#defaultIndex img').attr('src', './static/assets/logo.png');
            }else{
              $('#defaultIndex img').attr('src', './static/assets/logoWhite.png');
            }  
          });
        }else{
        }
    },
    privateAnnouce: function () {
      let pageName = this.$router.currentRoute.name
      switch (pageName) {
        case 'indexPage':
          pageName = '首頁'
          break
        case 'form':
          pageName = '車主資料頁'
          break
        case 'motorForm':
          pageName = '車籍資料頁'
          break
        case 'infoPage':
          pageName = '投保資料確認頁'
          break
        case 'thanksPage':
          pageName = '訂購成功頁'
          break
        case 'failPayment':
          pageName = '訂購失敗頁'
          break
        case 'notFound':
          pageName = '找不到頁'
          break
        case 'errorPage':
          pageName = '錯誤碼頁'
          break
        case 'qPage':
          pageName = 'QA頁'
          break
        default:
      }
      this.$ga.event({
        eventCategory: pageName,
        eventAction: 'click',
        eventLabel: 'User Click 隱私政策',
        value: ''
      })
    }
  },
  computed: {
    renderJquery: function() {
      this.toStyle();
      $(document).ready(function(){
        if(!localStorage.getItem('style')){
          if($(document).scrollTop() < 400 && $(document).width() < 767){
            $('#defaultIndex ul svg').css({
              "fill": "gray"
            });
          }
        }
        if(window.innerWidth <= 767){
          $('#MobileIdBanner6').css({
            'max-width': '120%'
          });
        }else{
          $('#defaultIndex ul li span').mouseover(function(){
            if($(document).scrollTop() > 400){
              $('#motorPli').mouseover(function(){
                $('.icon-cl-motorbike svg').css({
                  'fill': '#d0596e'
                });
                $('.icon-motor-li').css({
                  'color': '#d0596e'
                });
              });
              $('#activityPli').mouseover(function(){
                $('.icon-activity svg').css({
                  'fill': '#d0596e'
                });
                $('.activityW-li').css({
                  'color': '#d0596e'
                });
              });
              $('#motorPli').mouseleave(function(){
                $('.icon-cl-motorbike svg').css({
                  'fill': 'gray'
                });
                $('.icon-motor-li').css({
                  'color': 'gray'
                });
              });
              $('#activityPli').mouseleave(function(){
                $('.icon-activity svg').css({
                  'fill': 'gray'
                });
                $('.activityW-li').css({
                  'color': 'gray'
                });
              });
            }else{
              console.log('123423142', localStorage.getItem('style'));
              if(!localStorage.getItem('style') && localStorage.getItem('style') == null){
                $('#motorPli').mouseover(function(){
                  $('.icon-cl-motorbike svg').css({
                    'fill': '#d0596e'
                  });
                  $('.icon-motor-li').css({
                    'color': '#d0596e'
                  });
                });
                $('#activityPli').mouseover(function(){
                  $('.icon-activity svg').css({
                    'fill': '#d0596e'
                  });
                  $('.activityW-li').css({
                    'color': '#d0596e'
                  });
                });
                $('#motorPli').mouseleave(function(){
                  $('.icon-cl-motorbike svg').css({
                    'fill': 'white'
                  });
                  $('.icon-motor-li').css({
                    'color': 'white'
                  });
                });
                $('#activityPli').mouseleave(function(){
                  $('.icon-activity svg').css({
                    'fill': 'white'
                  });
                  $('.activityW-li').css({
                    'color': 'white'
                  });
                });
              }
            }
          });
            $('#fbSVG').mouseover(function(){
              $('#fbSVG .fbround svg').css({
                'fill': 'white'
              });
            });
            $('#fbSVG').mouseleave(function(){
              $('#fbSVG .fbround svg').css({
                'fill': '#4267b2'
              });
            });
        }
      });
      $(window).on('scroll', document, function(){
          console.log($(document).scrollTop())
          if(!JSON.parse(localStorage.getItem('style'))){
             if($(document).scrollTop() > 400){
              //bigger
              $('#defaultIndex').css({
                "background-color" : "hsla(0,0%,100%,.8)",
              });
              // $('#defaultIndex #navbar').css({
              //     "background-color" : "hsla(0,0%,100%,.8)",
              // });
              $('#defaultIndex ul li p').css({
                  "color": "gray"
              });
              $('#navbar button').css({
                "color": "gray"
              });
              $('#navbar #logOut').css({
                  "color": "gray"
              });
              $('.navbar-default .navbar-toggle .icon-bar').css({
                "background-color" : "#ddd",
              });
              if($(document).width() < 767) {
                $('#navbar').css({
                  "background-color" : "rgba(0,0,0,.8)"
                });
                $('#defaultIndex ul li span').css({
                  "color": "white"
                });
                $('#defaultIndex ul li p').css({
                  "color": "white"
                });
                $('#defaultIndex ul li i svg').css({
                  "fill": "white"
                });
                $('#navbar #logOut').css({
                  "color": "#fff"
                });
                $('#navbar button').css({
                  "color": "#fff"
                });
              } else {
                $('#navbar #logOut').css({
                  "color": "gray",
                  "background-color": "white"
                });
                 if($(document).scrollTop() > 400){
                   $('#navbar #logIn').mouseover(function(){
                    $('#navbar #logIn').css({
                      "color": "white", 
                      "background-color": "#d0596e" 
                    }); 
                  });
                  $('#navbar #logIn').mouseleave(function(){
                    $('#navbar #logIn').css({
                      "color": "gray", 
                      "border-color": "gray", 
                      "background-color": "transparent" 
                    }); 
                  });
                 }else{
                  // $('#defaultIndex ul li span').css({
                  // "color": "gray"
                  // });
                  // $('#defaultIndex ul li span').css({
                  // "color": "gray"
                  // });
                  // $('#defaultIndex ul li svg').css({
                  //   "fill": "gray"
                  // });
                 }
                $('#defaultIndex ul li span').css({
                  "fill": "gray",
                  "color": "gray"
                  }); 
                $('#defaultIndex ul li i svg').css({
                  "fill": "gray"
                });
                $('#navbar button').css({
                  "color": "gray",
                  "border-color": "gray"
                });
                $('#navbar #logOut').css({
                  "color": "white",
                  "background-color": "gray"
                });
              }
            }else{
                //smaller 
                $('#defaultIndex #navbar').css({
                  "background-color" : "transparent"
                });
                $('#navbar button').css({
                  "color": "#fff"
                });
                // $('#navbar #logOut').css({
                //   "color": "gray"
                // });
                $('#defaultIndex').css({
                  "background-color" : "transparent",
                });
                $('#defaultIndex ul li p').css({
                    "color": "#fff",
                });
                $('#defaultIndex ul li i svg').css({
                    "fill": "white",
                });
                if($(document).width() < 767) {
                  // $('#navbar').css({
                  //   "background-color" : "rgba(255, 255, 255, 0.8)"
                  // });
                  $('#defaultIndex #navbar').css({
                  "background-color" : "rgba(255, 255, 255, 0.8)",
                  });
                  $('#defaultIndex ul li p').css({
                    "color": "gray"
                  });
                  $('#defaultIndex ul svg').css({
                    "fill": "gray"
                  });
                  $('#navbar button').css({
                    "color": "gray"
                  });
                  $('#defaultIndex ul li span').css({
                  "color": "gray"
                  });
                $('#defaultIndex ul li p').css({
                  "color": "gray"
                });
                $('#defaultIndex ul li i svg').css({
                  "fill": "gray"
                });
                }else {
                  $('#navbar #logOut').css({
                    "color": "gray",
                    "background-color": "white",
                    "border-color": "white"
                  });
                  $('#navbar #logIn').css({
                    "border-color": "white"
                  });
                  $('#defaultIndex ul li span').css({
                  "fill": "white",
                  "color": "white"
                  }); 
                  if($(document).scrollTop() < 400){
                  $('#navbar #logIn').mouseover(function(){
                    $('#navbar #logIn').css({
                      "color": "#d0596e", 
                      "background-color": "transparent",
                      "border-color":"#d0596e"
                    }); 
                  });
                  $('#navbar #logIn').mouseleave(function(){
                    $('#navbar #logIn').css({
                      "color": "white", 
                      "background-color": "transparent",
                      "border-color":"white"
                    }); 
                  });
                  $('#navbar #logOut').mouseleave(function(){
                    $('#navbar #logOut').css({
                      "color": "white", 
                      "background-color": "gray",
                      "border-color":"gray"
                    }); 
                  });
                 }
                }
            }  
          };
          
      });
    },
    liveAgentButton: function () {
      this.liveAgentOn = this.$parent.liveAgentButton
      return this.$parent.liveAgentButton
    }
  },
  mounted () {
    if(this.$router.currentRoute.name == 'indexPage'){
      localStorage.removeItem('style');
    }else{
    }
    this.liveAgentOn = this.$parent.liveAgentButton
    axios({
        method: 'get',
        url: '/CareLineMember/member-mbr/common/checkLogin'
      }).then((response) => {
        var result = response.data
        if(!result['login']){
          
        }else{
          if(window.innerWidth <= 700){
            $('.logOut').removeClass('hidden');
            $('.logOut').removeClass('logOut');
            $('#navbar button').addClass('buttonAlign');
            $('#navbar #logOut').css({
              // 'margin-right': '38%',
              // 'margin-top': '15%'
            })
          }else{
            $('.logOut').removeClass('hidden');
            $('#logIn').addClass('logIn');
            $('#logIn').css({
                'position': 'absolute',
                'right': '90px'
            });
            if($(document).scrollTop() < 400){
                if(!JSON.parse(localStorage.getItem('style'))){
                  $('#navbar #logIn').css({
                    'border-color': 'white',
                    'color': 'white'
                  })
                  $('#navbar #logOut').css({
                    'border-color': 'white',
                    'color': 'gray',
                    'background-color': 'white'
                  })
                  $('#navbar #logOut').mouseover(function(){
                    $('#navbar #logOut').css({
                      'border-color': '#d0596e',
                      'color': 'white',
                      'background-color': '#d0596e'
                    })
                  });
                  $('#navbar #logOut').mouseleave(function(){
                    if($(document).scrollTop() > 400){
                      $('#navbar #logOut').css({
                      'border-color': 'gray',
                      'color': 'white',
                      'background-color': 'gray'
                      })
                    }else{
                      $('#navbar #logOut').css({
                      'border-color': 'gray',
                      'color': 'white',
                      'background-color': 'gray'
                      })
                    }
                  });
                }else{
                  $('#navbar #logOut').mouseover(function(){
                        $('#navbar #logOut').css({
                          'border-color': '#d0596e',
                          'color': 'white',
                          'background-color': '#d0596e'
                        })
                      });
                      $('#navbar #logOut').mouseleave(function(){
                        $('#navbar #logOut').css({
                          'border-color': 'gray',
                          'color': 'white',
                          'background-color': 'gray'
                        })
                      });
                      $('#navbar #logIn').mouseover(function(){
                        $('#navbar #logIn').css({
                          'border-color': '#d0596e',
                          'color': 'white',
                          'background-color': '#d0596e'
                        })
                      });
                      $('#navbar #logIn').mouseleave(function(){
                        $('#navbar #logOut').css({
                          'border-color': 'gray',
                          'color': 'white',
                          'background-color': 'gray'
                        })
                      });
                }
              }else{
                      $('#navbar #logOut').mouseover(function(){
                        $('#navbar #logOut').css({
                          'border-color': '#d0596e',
                          'color': 'white',
                          'background-color': '#d0596e'
                        })
                      });
                      $('#navbar #logOut').mouseleave(function(){
                        $('#navbar #logOut').css({
                          'border-color': 'gray',
                          'color': 'white',
                          'background-color': 'gray'
                        })
                      });
                      $('#navbar #logIn').mouseover(function(){
                        $('#navbar #logIn').css({
                          'border-color': '#d0596e',
                          'color': 'white',
                          'background-color': '#d0596e'
                        })
                      });
                      $('#navbar #logIn').mouseleave(function(){
                        $('#navbar #logOut').css({
                          'border-color': 'gray',
                          'color': 'white',
                          'background-color': 'gray'
                        })
                      });
              }
          }
        }
      })
    this.$nextTick(function () {
      $('#navbar #logOut').mouseleave(function(){
        if($(document).scrollTop() > 400){
          $('#navbar #logOut').css({
          'border-color': 'gray',
          'color': 'white',
          'background-color': 'gray'
          })
        }else{
          $('#navbar #logOut').css({
          'border-color': 'gray',
          'color': 'white',
          'background-color': 'gray'
          })
        }
      });
      if ($(window).width() < 500) {
        $('.first-slide').attr('src', './static/css/img/mobileBanner5.jpg')
        $('.first-slide').css({
          'min-width': 'auto',
          'min-height': 'auto',
          'margin-top': '17%'
        })
//        $('.firs').click(function () {
//          window.location = 'index.html#/activityPage'
//          this.$ga.event({
//            eventCategory: '首頁',
//            eventAction: 'click',
//            eventLabel: 'User Click 按了首頁活動騎車的凱和字',
//            value: ''
//          })
//        })
      } else {
        $('.first-slide').attr('src', './static/css/img/banner5.jpg')
      }
    })
    var sessionKey = sessionStorage.getItem('sessionKey')
    if (sessionKey === 'true') {
    } else {
      this.$localStorage.remove('motorInfo')
      this.$localStorage.remove('formStore')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#navbar button.buttonAlign {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
  border-color: gray;
  color: gray;
  float: none;
  position: relative;
  left: -8px;
}

#footer {
  padding-top: 48px;
  padding-bottom: 48px;
  width: 100%;
  background-size: contain;
  position: relative;
  bottom: 0px;
  z-index: 10;
  height: 213px;
  background-color: #f7f7f7;
}
@media screen and (max-width:480px) {
  .mask {
    display:none!important;
  }
}

#footer img {
  display: inline-block;
}
#footer .title {
  font-weight: 400;
  font-size: 19.5px;
  color:rgb(128, 128, 128);
}

#fbSVG .fbround {
  /* Safari 3-4, iOS 1-3.2, Android 1.6- */
  -webkit-border-radius: 50%; 

  /* Firefox 1-3.6 */
  -moz-border-radius: 50%; 
  
  /* Opera 10.5, IE 9, Safari 5, Chrome, Firefox 4, iOS 4, Android 2.1+ */
  border-radius: 50%; 
  border: 2px solid #4267b2;
  width: 30px;
  height: 30px;
  padding-top: 3px;
}

#logIn:hover {
  border-color:#d0596e;
}

#fbSVG svg {
  fill: #4267b2;
}

#fbSVG svg:hover {
  fill: white;
}

#fbSVG .fbround:hover {
  background-color: #4267b2;
}

#fbSVG {
  position: relative;
  top: 5px;
}

#footer-Bottom h3 {
  font-weight:500;
  font-size: 20px;
  color:rgb(51, 51, 51);
  padding-top:80px;
  border:none;
}

#footer-Bottom span {
font-size:14.4px;
font-weight:400;
margin-bottom: 16px;
display: inline-block;
color:rgb(115, 115, 115);
padding-left: 5px;
text-decoration-style: solid;
}

#specialColFooter {
    border-right: 1px solid #ababab;
    border-left: 1px solid #ababab;
    height: 125px;
    position: relative;
    top: 88px;
}

#footer-Bottom .phone {
  font-size: 26px;
  font-weight: 300;
}

#footer-Bottom .phone span {
    display: inline-block;
    font-size: 26px;
}

#footer-Bottom .phone h4 {
  position: relative;
  top: -30px;
  color: #888686;
  font-size: 19.2px;
  font-weight: 300px;
}

#footer-Bottom #fbClick {
  border-top: 1px solid #ababab;
  margin-top: 48px;
  margin-bottom: 16px;
  padding-top: 16px;
}

#navbar .navbar-left {
  font-size: 16px;
}

#navbar svg {
  fill: white;
}

.mask{
    background: linear-gradient(180deg,rgba(0,0,0,.5),rgba(0,0,0,.15) 50%,transparent);
    top: 0;
    width: 100%;
    height: 30%;
    position: absolute;
}

#navbar svg:hover {
  fill: #d0596e;
}

#navbar .navbar-left li p:hover {
    color: #d0596e!important;
    cursor: pointer;
}

#navbar svg:hover {
  fill: #d0596e;
}

#footer .title:hover {
  color: #d0596e!important;
}

#footer-Bottom span:hover {
  color: #d0596e!important;
}

#footer-Bottom a:hover {
  text-decoration: none;
}

#footer-Bottom #specialColFooter span:hover {
  color:rgb(115, 115, 115)!important;
}

#footer a:hover {
  text-decoration: none;
}

#footer-Bottom .copyright {
  padding: 0 15%;
}

#footer-Bottom .copyright h6 {
  margin-top: 11px;
  font-size:14.4px;
  font-weight: 300;
  color:rgb(115, 115, 115);
}

#navbar .logOut {
    transition: all .2s ease;
    color: #fff;
    background: gray;
    border-color: gray;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    float: right;
    margin-left: -1px;
    width: auto;
    padding-left: .75rem;
    padding-right: 1rem;
    z-index: 5;
    position: relative;
}

#navbar .logIn {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: none;
    padding-left: 1rem;
    padding-right: 1rem;
    width: auto;
}

@media screen and (max-width: 767px) {
  #navbar li {
    text-align: center;
    line-height: 3.5rem;
    border-bottom: 1.5px solid #9e9e9e;
    font-size: 19.2px;
  }

  #footer .title {
    font-size: 16px;
    color: rgb(128, 128, 128);
    position: relative;
    left: -95%;
  }

  #footer-Bottom .col-xs-6 {
    width: 100%!important;
  }
  #footer-Bottom .col-xs-6 {
    width: 100%!important;
  }
  #navbar {
    background-color: transparent;
  }
  #defaultIndex .navbar-toggle {
    border-width: 3px;
    width: 48px;
    height: 38px;
  }
  #defaultIndex .icon-bar {
    border-width: 2px;
    color:#d0596e
  }
  #footer-Bottom h3 {
    padding-top: 10px;
  }
  #footer-Bottom #specialColFooter {
    top: 0px;
    width: 100%!important;
    border:none;
  }
  #footer-Bottom .col-xs-3{
    top: 0px;
    width: 100%!important;
    border:none;
  }
  #footer-Bottom {
    padding: 0px;
  }
  #footer-Bottom .getContact{
    margin-top: -20px!important;
  }
  #fbSVG {
    left: -3px;
  }
}

#giftInfo {
  z-index: 1;
}
@media screen and (max-width: 414px) and (min-width: 400px) {
  .textDiv {
    left: 2%;
  }
}

/* @media (max-width: 1200px){
  #defaultIndex .navbar-toggle {
      display: initial;
      margin-top: 20px;
  }
  #navbar ul.navbar-left {
    display: none;
  }
  #defaultIndex .navbar-header {
    width:100%!important;
  }
} */

@media screen and (max-width: 450px) {
  .activityImg {
    width: 300px;
  }
  #giftInfo.giftInfo .tag {
    right: -61px;
    width: 61px;
  }
  #giftInfo {
    left: -300px;
  }
  .activityRow {
    border-top: none!important;
  }
}
  #navbar {
    background-color: transparent;
  }
  #navbar p {
    color: white;
    margin: 15px;
    font-weight: bold;
  }

  #navbar button {
      /* Safari 3-4, iOS 1-3.2, Android 1.6- */
    -webkit-border-radius: 25px; 

    /* Firefox 1-3.6 */
    -moz-border-radius: 25px; 

    /* Opera 10.5, IE 9, Safari 5, Chrome, Firefox 4, iOS 4, Android 2.1+ */
    border-radius: 25px; 

    color: #fff;
    background: transparent;
    border-color: #fff;
    margin-top: 18px;
    width: 144px;
    height: 40px;
    border: 2px solid;
    font-size: 16px;
    font-weight: 400;
    float: right;
  }

  @media screen and (max-width:1024px){
    .phone img {
      width: 50%!important;
    }
    .phone span, .phone h4{
      font-size: 16px!important;
    }
    .phone span {
      top: -18px!important;
      left: -11%;
    }
  }

  .fa.fa-times {
    color:#d0596e!important;
    font-size: 26px;
    position: relative;
    top: -6px;
  }
  .icon-bar {
    color: #d0596e!important;
    background-color: #d0596e!important;
  }

  #navbar i:hover {
    fill: #d0596e;
  }

  #navbar button:hover {
    color:#d0596e;
  }

  #footer-Bottom .getContact {
    margin-top: 88px;
  }

.navbar-default .navbar-toggle:focus, .navbar-default .navbar-toggle:hover {
  background-color: transparent;
}

.navbar span:hover {
  > svg {
    fill: #d0596e;
    stroke: #d0596e;
  }
}
#fbClick:hover {
  > .fbround {
      background-color:rgb(66, 103, 178);
  }
  > svg {
    fill: white;
    stroke: white;
  }
}

@media screen and (max-width: 1000px) {
  #navbar .navbar-right{
    font-size:10px!important;
    margin-top: 20px;
  }
  #navbar p {
    font-size: 14px;
    margin-left: 0px!important;
  }
  .logo {
    margin-right: 6px;
    margin-left: 10px;
  }
}
</style>
