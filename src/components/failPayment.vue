<template>
  <div class="failPayment">

    <!-- <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <div class="logo" @click="toGoBackIndex('logo')"><a href="#"><img id="logoImg" style="max-width:180px;" src="../../static/assets/logo.png"/></a></div>
          <button @click="showingNavBar" type="button" class="navbar-toggle collapsed" data-toggle="collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
            <li v-show="toShowActivity"><p @click="goToActivityTwo">活動專區<span class="sr-only">活動專區<</span></p></li>
            <li><p @click="toGoQandAPage">Q&A <span class="sr-only">(current)</span></p></li>
            <li><a href="https://www.facebook.com/kaistraventure/" target="_blank"><p><i class="fa fa-facebook-square" aria-hidden="true"></i></p></a></li>
            <li style="cursor:default"><p><i class="fa fa-phone" aria-hidden="true"></i>免費客服專線 0800-234-088 (週一~週五 09:30~18:00)</p></li>
          </ul>
        </div>
      </div>
    </nav> -->

    <div class="row">
        <div class="img processImg">

        </div>
    </div>

    <div style=" min-height:720px;" class="container customerInfo animated slideInLeft">
      <div class="row">
        <div class="col-sm-12 thanksDiv">
          <div class="col-sm-12 text-center" style="margin-bottom:10px; padding-top:10%;">
            <h2>付款失敗</h2>
            <h3 style=" margin-bottom: 20px;border:none;"><span v-show="!errorCodeE3001">銀行系統維護中,</span>錯誤代碼: {{errorCode}}<span  v-show="errorCodeE3001">發卡銀行拒絕授權</span></h3>
            <img src="../assets/failPayment.png" alt="img-responsive" style="height:100px; width:auto;">
            <h4 v-show="errorCodeE3001" style="border-bottom:none;margin-top:30px;">請洽原發卡行詢問或撥打英國凱萊客服專線洽詢，</h4>
            <h4 v-show="errorCodeE3001">英國凱萊感謝您。</h4>
            <h4 v-show="!errorCodeE3001" style="border-bottom:none;margin-top:30px;">請洽原發卡行詢問或再重新操作一次，</h4>
            <h4 v-show="!errorCodeE3001">若仍需要協助請撥打英國凱萊客服專線洽詢，英國凱萊感謝您。</h4>
          </div>
          <div class="col-sm-12">
            <div class="thanksWords text-center">
              <div class="buttonProject">
                <button class="backToIndexOfOtherPageButton" @click="toGoBackIndex">回到首頁</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--pdf modal-->
    <div class="modal-mask" v-show="visible">
      <div class="modal-wrapper">
        <div class="modal-container" style="width:100%;">

          <div class="modal-header">
            <slot name="header">
              <img style="height:40px" class="logoModal" src="../assets/logo.png"/>
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              <ul>
                <li v-for="item in errorMsgOfFailSent">
                  {{item}}
                </li>
              </ul>
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
import axios from '../../node_modules/axios-es6/dist/axios.min.js'
var $ = require('jquery')
window.jQuery = $
window.$ = $

export default {
  name: 'failPayment',
  data () {
    return {
      visible: false,
      errorMsgOfFailSent: '',
      errorCode: '',
      errorCodeE3001: false
    }
  },
  head: {
    title: {
      inner: '機車強制險付款失敗 | Care Line英國凱萊 機車強制險'
    },
    meta: [
      {name: 'description', content: '付款失敗｜金流付款失敗，還請您稍後再試，若有任何疑問，請撥打免費客服專線：0800-234-088 (週一~週五 09：30~18：00)'},
      {name: 'keywords', content: '投保,線上投保,Care Line,英國凱萊,Care Line英國凱萊,機車險,強制險,網路車險,凱, 安安,壯壯'},
      {property: 'og:title', content: '機車強制險付款失敗 | Care Line英國凱萊 機車強制險'},
      {property: 'og:description', content: '付款失敗｜金流付款失敗，還請您稍後再試，若有任何疑問，請撥打免費客服專線：0800-234-088 (週一~週五 09：30~18：00)'},
      {property: 'og:image', content: 'https://motor.careline.com.tw/FB.jpg'},
      {property: 'og:site_name', content: '英國凱萊CareLine 網路保險'},
      {property: 'og:email', content: 'service@careline.com.tw'},
      {property: 'og:phone_number', content: '0800234088'},
      {property: 'og:url', content: 'https://www.careline.com.tw/CareLineMotor/motorbike/failPayment'}
    ]
  },
  methods: {
    showingNavBar: function () {
      $('#navbar').css({
        'height': '300px'
      })
      $('#navbar').toggle()
    },
    goToActivityTwo: function () {
      window.open('/activity', '_blank')
    },
    toGoBackIndex: function (val) {
      if (val === 'logo') {
        this.$ga.event({
          eventCategory: '付款失敗頁',
          eventAction: 'click',
          eventLabel: 'User Click Logo',
          value: ''
        })
//        window.open('http://www.careline.com.tw')
        window.location.href = 'http://www.careline.com.tw'
      } else {
        this.$ga.event({
          eventCategory: '付款失敗頁',
          eventAction: 'click',
          eventLabel: 'User Click 回首頁',
          value: ''
        })
        this.$router.push('/')
      }
    },
    toGoQandAPage: function () {
      this.$ga.event({
        eventCategory: '付款失敗頁',
        eventAction: 'click',
        eventLabel: 'User Click QA',
        value: ''
      })
      window.open('/faq', '_blank')
    },
    closeModal: function () {
      this.visible = false
    },
    toGetDataFromUrl: function (url) {
      var queryStart = url.indexOf('?') + 1
      var queryEnd = url.length + 1
      var query = url.slice(queryStart, queryEnd - 1)
      var pairs = query.replace(/\+/g, '').split('&')
      var parms = {}
      var i
      var n
      var v
      var nv
      if (query === url || query === '') return
      for (i = 0; i < pairs.length; i++) {
        nv = pairs[i].split('=', 2)
        n = decodeURIComponent(nv[0])
        v = decodeURIComponent(nv[1])
        if (!parms.hasOwnProperty(n)) parms[n] = []
        parms[n].push(nv.length === 2 ? v : null)
      }
      console.log(parms)
      return parms
    }
  },
  computed: {
    toShowActivity: function () {
      return this.$parent.$parent.isActivityShow
    }
  },
  mounted () {
    /* eslint-disable */
    var CE_SNAPSHOT_NAME = "機車強制險付款失敗 | Care Line英國凱萊 機車強制險 | 立刻投保 | Care Line英國凱萊 機車強制險" 	/* eslint-disable-line rule-name */
    /* eslint-enable */
    window.scrollTo(0, 0)
    var webUrl = window.location.href
    var tokenForOrderNumb = this.toGetDataFromUrl(webUrl)
    var dataForApi = tokenForOrderNumb.dataId[0]
    axios({
      url: '/CareLineMotor/motorbike-mbr/journey/getInfo4FailPayment',
      method: 'post',
      params: {
        dataId: dataForApi
      }
    }).then(response => {
      if (response.data.isEx === true) {
        this.errorMsgOfFailSent = response.data.msgs
        this.visible = true
        return false
      } else {
        this.errorCode = response.data.statusCode
        if (this.errorCode === 'E001') {
          this.errorCodeE3001 = true
        }
      }
    }, response => {
      // error callback
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .logo {
    height: 40px;
    widht: auto;
  }
  .carousel {
    position: relative;
    top: -60px;
  }
  #navbar {
    height: 75px;
  }
  #navbar p {
    color: #777;
    margin: 15px;
    font-weight: bold;
  }
  .processImg {
    padding-top: 18px;
  }
  .customerInfo, .customerInfo h4 {
    border:none;
  }
  .customerInfo h2 {
    color: #e84466;
    font-weight: bold;
  }
</style>
