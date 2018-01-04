<template>
  <div id="app">
    <router-view>
    </router-view>
    <div class="liveAgent" v-show="liveAgentButton || liveAgentOn">
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
      <p>本站保險服務，由『<a href="http://www.careline.com.tw" target="_blank" >凱萊保險代理人股份有限公司 </a>』提供 </p>
      <p>本站產險商品，由『泰安產物保險公司』提供 </p>
      <p ><a style="cursor:pointer;" href="/CareLineMotor/motorbike-mbr/viewpdf/term" target="_blank"  @click="principleAnnounce" >使用條款</a> | <a style="cursor:pointer;" href="/CareLineMotor/motorbike-mbr/viewpdf/privacy" target="_blank"  @click="privateAnnouce">隱私政策</a></p>
      <div class="footer-bottom">
        <span>© 2017 Careline. All Rights Reserved.</span>
      </div>
    </footer>
    
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
      liveAgentOn: ''
    }
  },
  methods: {
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
    liveAgentButton: function () {
      this.liveAgentOn = this.$parent.liveAgentButton
      return this.$parent.liveAgentButton
    }
  },
  mounted () {
    this.liveAgentOn = this.$parent.liveAgentButton
    this.$nextTick(function () {
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
  margin-top: 60px;
}
@media screen and (max-width: 767px) {
  #navbar li {
    border: 1px solid #e2e2e2;
  }
  #navbar {
    background-color: rgba(0, 0, 0, 0.56)!important;
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

.navbar-default .navbar-toggle:focus, .navbar-default .navbar-toggle:hover {
  background-color: transparent;
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
