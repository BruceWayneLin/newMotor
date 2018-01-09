<template>
  <div class="thanksPage" style="margin-top: 80px;">

    <!-- <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <div class="logo" @click="toGoBackIndex('logo')"><a><img id="logoImg" style="max-width:180px;" src="../../static/assets/logo.png"/></a></div>
          <button type="button" @click="showingNavBar" class="navbar-toggle collapsed" data-toggle="collapse">
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
            <li><p style="cursor:default"><i class="fa fa-phone" aria-hidden="true"></i>免費客服專線 0800-234-088 (週一~週五 09:30~18:00)</p></li>
          </ul>
        </div>
      </div>
    </nav> -->
{{toShowActivity}}
    <div class="row">
        <div class="img processImg">
          <img src="../assets/route994.png" class="img-responsive" alt="">
        </div>
    </div>

    <div style="" class="container customerInfo animated slideInLeft">
      <div class="row">
        <div class="col-sm-12 thanksDiv" style="">
          <div class="col-sm-12 text-center" style="margin-bottom:10px;">
            <h2><i class="fa fa-check-circle" aria-hidden="true"></i>感謝您選擇英國凱萊，訂單編號_{{orderNumber}}_已成立</h2>
            <h3>請留意，相關資訊將會寄到您的E-mail信箱</h3>
          </div>
          <div class="col-sm-12" style="margin-top: 5px;">
            <div class="thanksWords text-center">
              <p style="color:#e84466;font-size:16px;">提醒您：此次訂購紀錄，並非正式保險契約憑證，核保完成後本公司將會郵寄保險卡及保費收據至保單登記地址。</p>
              <div class="buttonProject text-center" style="margin-top: 30px;">
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

          <div class="modal-footer text-center"  style="">
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
  name: 'thanksPage',
  head: {
    title: {
      inner: '機車強制訂購完成 | Care Line英國凱萊 機車強制險'
    },
    meta: [
      {name: 'description', content: '訂購完成｜感謝您已完成機車保險訂單，相關資訊將會寄送到您的E-mail信箱…若有任何疑問，請撥打免費客服專線：0800-234-088 (週一~週五 09：30~18：00)'},
      {name: 'keywords', content: '投保,線上投保,Care Line,英國凱萊,Care Line英國凱萊,機車險,強制險,網路車險,凱, 安安,壯壯'},
      {property: 'og:title', content: '機車強制訂購完成 | Care Line英國凱萊 機車強制險'},
      {property: 'og:description', content: '訂購完成｜感謝您已完成機車保險訂單，相關資訊將會寄送到您的E-mail信箱…若有任何疑問，請撥打免費客服專線：0800-234-088 (週一~週五 09：30~18：00)'},
      {property: 'og:image', content: 'https://motor.careline.com.tw/FB.jpg'},
      {property: 'og:site_name', content: '英國凱萊CareLine 網路保險'},
      {property: 'og:email', content: 'service@careline.com.tw'},
      {property: 'og:phone_number', content: '0800234088'},
      {property: 'og:url', content: 'https://www.careline.com.tw/CareLineMotor/motorbike/thanksPage'}
    ]
  },
  data () {
    return {
      errorMsgOfFailSent: '',
      orderNumber: '',
      visible: false
    }
  },
  methods: {
    showingNavBar: function () {
      $('#navbar').css({
        'height': '300px'
      })
      $('#navbar').toggle()
    },
    toGoBackIndex: function (val) {
      if (val === 'logo') {
        this.$ga.event({
          eventCategory: '訂購成功頁',
          eventAction: 'click',
          eventLabel: 'User Click Logo',
          value: ''
        })
        window.location.href = 'http://www.careline.com.tw'
      } else {
        this.$ga.event({
          eventCategory: '訂購成功頁',
          eventAction: 'click',
          eventLabel: 'User Click 回首頁',
          value: ''
        })
        this.$router.push('/')
      }
    },
    closeModal: function () {
      this.visible = false
    },
    toGoQandAPage: function () {
      this.$ga.event({
        eventCategory: '訂購成功頁',
        eventAction: 'click',
        eventLabel: 'User Click QA',
        value: ''
      })
      window.open('/faq', '_blank')
    },
    goToActivityTwo: function () {
      window.open('/activity', '_blank')
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
          setTimeout(function(){
            localStorage.setItem('style', 'true');
            $('#defaultIndex img').attr('src', './static/assets/logo.png');
            $('#defaultIndex #navbar').css({
              'background-color': 'white'
            });
            $('#defaultIndex #navbar span').css({
              'color': 'gray'
            });
            $('#defaultIndex #navbar svg').css({
              'fill': 'gray'
            });
            $('#defaultIndex #navbar p').css({
              'color': 'gray'
            });
            $('#defaultIndex #navbar button').css({
              'color': 'gray',
              'border-color': 'gray'
            });
            $('#defaultIndex #navbar #logOut').css({
              'border-color': 'gray',
              'color': 'white',
              'background-color': 'gray'
            })
            $('#defaultIndex #navbar #logOut span').css({
              'color': 'white',
            })
            $('#defaultIndex #navbar #logOut i').css({
              'color': 'white',
            })
            $('#navbar #logIn').mouseover(function(){
              $('#navbar #logIn').css({
                'border-color': '#d0596e',
                'color': 'white',
                'background-color': '#d0596e'
              })
            });
            $('#navbar #logIn').mouseleave(function(){
              $('#navbar #logIn').css({
                'border-color': 'gray',
                'color': 'gray',
                'background-color': 'transparent'
              })
            });
            $('#navbar #logOut').mouseover(function(){
              $('#navbar #logOut').css({
                'border-color': '#d0596e',
                'color': 'white',
                'background-color': '#d0596e'
              })
            });

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
            $('.mask').hide();
        }, 500);
    }
  },
  mounted () {
    /* eslint-disable */
    var CE_SNAPSHOT_NAME = "機車強制訂購完成 | Care Line英國凱萊 機車強制險 | 立刻投保 | Care Line英國凱萊 機車強制險"
    /* eslint-enable */

    window.scrollTo(0, 0)
    var webUrl = window.location.href
    var tokenForOrderNumb = this.toGetDataFromUrl(webUrl)
//    if (tokenForOrderNumb === undefined) {
//      this.$router.push('/')
//    }
    var dataForApi = tokenForOrderNumb.dataId[0]
    axios({
      url: '/CareLineMotor/motorbike-mbr/journey/getInfo4ThanksPage',
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
        this.orderNumber = response.data.dataId
        this.$analytics.fbq.event('AddToCart', {
          content_name: 'Completed Bike Order ' + response.data.dataId
        })
        this.$ga.event({
          eventCategory: '訂購成功頁',
          eventAction: 'completed',
          eventLabel: 'User Completed Bike Order ' + response.data.dataId,
          value: ''
        })
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
  

  .customerInfo, .customerInfo h4, .customerInfo h3 {
    border:none;
  }
  .customerInfo h2 {
    font-weight: bold;
  }
  .thanksDiv {
    margin-top: 5%;
    min-height: 500px;
  }
  @media screen and (max-width: 414px) {
    .thanksDiv {
      margin-top: -15px;
    }
  }
</style>
