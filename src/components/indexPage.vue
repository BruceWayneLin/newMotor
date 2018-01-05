<template>
  <div class="indexPage">
    <nav id="defaultIndex" class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <div class="logo" @click="toGoBackIndex"><a><img id="logoImg" style="max-width:180px;" src="../assets/logoStand.png?v=1s"/></a></div>
          <button type="button" @click="showingNavBar" class="navbar-toggle collapsed" data-toggle="collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <div id="navbar" class="navbar-collapse collapse" v-bind:class="{secondPageNav: alterChangeNav}">
          <ul class="nav navbar-nav navbar-right">
            <li v-show="toShowActivity"><p @click="goToActivityTwo">活動專區<span class="sr-only">活動專區</span></p></li>
            <li><p @click="toGoQandAPage">Q&A <span class="sr-only">(current)</span></p></li>
            <li><a href="https://www.facebook.com/kaistraventure/" target="_blank"><p><i class="fa fa-facebook-square" aria-hidden="true"></i></p></a></li>
            <li><p style="cursor:default"><i class="fa fa-phone" aria-hidden="true"></i>免費客服專線 0800-234-088 (週一~週五 09:30~18:00)</p></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div><!--/.container-fluid -->
    </nav>

    <!--<div id="myCarousel" class="carousel slide" data-ride="carousel" style="background-color: transparent;!important;">-->
      <!--<div class="carousel-inner" role="listbox">-->
        <!--<div class="item active">-->
          <!--<div class="inner">-->
          <!--</div>-->
          <!--&lt;!&ndash;<div class="shadowUse">&ndash;&gt;-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
          <!--<img class="first-slide" src="" alt="First slide">-->
          <!--<div class="titleDivH4" v-show="false"><h2>CareLine</h2></div>-->
          <!--<div class="textDiv" style="cursor:pointer" @click="goToActivity"></div>-->
          <!--<img class="kai150 hidden" style="cursor:pointer; z-index:999;"  @click="goToActivity" src="static/css/img/card150.png" alt="">-->
          <!--<div class="titleButton"><button @click="toTriggerAnimate()" id="likeToInsured">立即投保<i class="fa fa-chevron-circle-down" aria-hidden="true"></i></button></div>-->
          <!--<div class="container">-->
            <!--<div class="carousel-caption">-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->

    <!--<div id="giftInfo" v-show="toShowActivity" class="giftInfo hidden" :class="{'moveRight': showGift}">-->
      <!--<div><img style="max-width: 320px" @click="goToActivity" class="activityImg" :src="giftLink" /> </div>-->
      <!--<div @click="toShowTagAnimate('initAdOpen')" class="tag shine"><img class="giftImg" src="static/assets/gift.png" alt=""></i></div>-->
    <!--</div>-->
    <div>
      <img id="DesktopIdBanner6" class="img-responsive" src="static/css/img/banner5.jpg" alt="">
      <img id="MobileIdBanner6" class="img-responsive" src="static/css/img/mobileBanner6.jpg" alt="">
      <div id="activityContainer">
        <div class="textDiv2" style="cursor:pointer" @click="goToActivity"></div>
        <div class="titleButton">
          <button @click="toTriggerAnimate()" id="likeToInsured">
            快速投保
            <span style="letter-spacing: 4px;">GO!</span>
            <i class="fa fa-chevron-circle-down hidden" aria-hidden="true"></i>
          </button>
          <div id="fingerDiv" class="fingerDiv hidden"></div>
        </div>
        <img class="kaiKaiCard" src="static/css/img/gifts/150.png" alt="" @click="goToActivity">
        <div class="robotDiv col-xs-12">
          <div class="col-xs-3"></div>
          <div class="col-xs-6">
            <div id="activityGiftContainer" class="col-xs-12">
              <img id="giftcard" class="col-xs-3 img-responsive" @click="goToActivity" src="static/css/img/gifts/giftcard.png">
              <img id="iphone" class="col-xs-3 img-responsive" @click="goToActivity" src="static/css/img/gifts/iphone.png">
              <img id="robotImg" class="col-xs-3 img-responsive" @click="goToActivity" src="static/css/img/gifts/robot.png">
              <img id="dryer" class="col-xs-3 img-responsive" @click="goToActivity" src="static/css/img/gifts/dryer.png">
            </div>
          </div>
          <div class="col-xs-3"></div>
        </div>
      </div>
    </div>

    <section id="myProducts" class="productSection animated" v-bind:class="{fadeInUp: isActive, fadeInDown: !isActive,}">
      <div class="row">
        <div class="col-sm-12 text-center">
          <h4 class="selectProduct" style="font-weight:bold;">選擇您的車牌顏色</h4>
        </div>
      </div>
      <div id="productContainerDiv" class="container-fluid">
        <div class="row">
          <div class="col-sm-12">
            <div class="products col-sm-3 text-center" v-for="(product, key) in products">
              <div class="productContentDiv animated" :class="'pic' + product.color">
                  <div class="plateColor" @click="productClicked(product, key)" :style="{ backgroundColor: product.color, height: '90px', color: product.textColor }"><span>{{ product.cc }}</span></div>
                  <div class="cardPlateImg"></div>
                  <div class="productContent">
                    <div class="title" :class="{'OneYearTitle': !isActive}"><div class="yearTitle"><p>{{ product.year }}年</p></div><span>{{ product.title }}<div class="priceDiscount">{{ product.discountPrice }}</div></span></div>
                    <div class="priceDiv">
                      <p class="priceNormal">NT$ {{ product.price }}<p/>
                    </div>
                  </div>
              </div>
              <div class="hoverDiv" @click="productClicked(product, key)"></div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 buttonProject">
            <div class="col-sm-12 text-center">
              <button class="btn btn-lg" :class="{isActiveButton:changeButton}" @click="whichProductToShow">{{productText}}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="hidden" style="display:none;">
      {{toInit}}
      {{toOpenAd}}
    </div>
  </div>
</template>
<script>
var $ = require('jquery')
window.jQuery = $
window.$ = $
import fbAna from '../assets/js/analytic'
import Vue from 'vue'
let counTime = 0
Vue.use(fbAna)
export default {
  name: 'indexPage',
  data () {
    return {
      selectedProduct: {},
      isActive: true,
      giftLink: 'static/assets/activityGiftTwo2.jpg?v=1',
      productText: '',
      visible: false,
      showGift: false,
      changeButton: true,
      initActivityInfoBlockOpen: '',
      products: [
//          {title: '機車強制險', year: 2, price: 735, discountPrice: 'NT$' + 848, content: ['每一人體傷20萬元', '每一人死殘200萬元'], color: 'green', cc: '1-50cc', textColor: 'white'},
//          {title: '機車強制險', year: 2, price: 1200, discountPrice: 'NT$' + 1316, content: ['每一人體傷20萬元', '每一人死殘200萬元'], color: 'white', cc: '51-250cc', textColor: 'black'},
//          {title: '機車強制險', year: 2, price: 1306, discountPrice: 'NT$' + 1422, content: ['每一人體傷20萬元', '每一人死殘200萬元'], color: 'yellow', cc: '251-549cc', textColor: 'black'},
//          {title: '機車強制險', year: 2, price: 1306, discountPrice: 'NT$' + 1422, content: ['每一人體傷20萬元', '每一人死殘200萬元'], color: 'red', cc: '550cc+', textColor: 'white'}
      ]
    }
  },
  head: {
    title: {
      inner: '立即投保| Care Line英國凱萊機車強制險'
    },
    meta: [
      {name: 'description', content: '投保機車強制險，就送 150 元全家禮物卡! | Care Line英國凱萊 網路機車強制險'},
      {name: 'keywords', content: '投保機車強制險，就送 150 元全家禮物卡! | Care Line英國凱萊 網路機車強制險'},
      {property: 'og:title', content: 'Care Line英國凱萊 網路機車強制險'},
      {property: 'og:description', content: '投保機車強制險，就送 150 元全家禮物卡! | Care Line英國凱萊 網路機車強制險'},
      {property: 'og:image', content: 'https://motor.careline.com.tw/FB.jpg'},
      {property: 'og:site_name', content: '英國凱萊CareLine 網路保險'},
      {property: 'og:email', content: 'service@careline.com.tw'},
      {property: 'og:phone_number', content: '0800234088'},
      {property: 'og:url', content: 'https://motor.careline.com.tw'}
    ],
    script: [
      {type: 'text/javascript', src: '', async: true, body: true}
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
      this.$ga.event({
        eventCategory: '首頁',
        eventAction: 'click',
        eventLabel: 'User Click Menu上的活動專區',
        value: ''
      })
      window.open('/activity', '_blank')
    },
    goToActivity: function () {
      this.$ga.event({
        eventCategory: '首頁',
        eventAction: 'click',
        eventLabel: 'User Click 按了首頁活動騎車的凱和字',
        value: ''
      })
      window.location.href = '/activity/17'
    },
    // gta functions
    toTriggerAnimate: function () {
      if ($(window).width() < 500) {
        $('#myCarousel').css({
          'background-color': 'rgba(0, 0, 0, 0.56)!important;'
        })
        $('html, body').animate({
          scrollTop: $('#myProducts').offset().top - 183
        }, 500)
        localStorage.setItem('toAnimatedDiv', false)
      } else {
        $('html, body').animate({
          scrollTop: $('#myProducts').offset().top - 200
        }, 500)
        localStorage.setItem('toAnimatedDiv', false)
      }
      this.$ga.event({
        eventCategory: '首頁',
        eventAction: 'click',
        eventLabel: 'User Click 立即投保',
        value: ''
      })
    },
    toShowTagAnimate: function (val) {
      if (this.toOpenAd || val === 'initAdOpen') {
        this.showGift = !this.showGift
      }
    },
    toGoBackIndex: function () {
      this.$ga.event({
        eventCategory: '首頁',
        eventAction: 'click',
        eventLabel: 'User Click 首頁的Logo',
        value: ''
      })
//      window.open('http://www.careline.com.tw')
      window.location.href = 'http://www.careline.com.tw'
//      this.$router.push('/')
    },
    toGoQandAPage: function () {
      this.$ga.event({
        eventCategory: 'QA',
        eventAction: 'click',
        eventLabel: 'User Click QA',
        value: ''
      })
      window.open('/faq', '_blank')
    },
    whichProductToShow: function () {
      this.changeButton = !this.changeButton
      if (this.isActive) {
        this.$ga.event({
          eventCategory: '首頁',
          eventAction: 'click',
          eventLabel: 'User Click 1年方案',
          value: ''
        })
        this.productText = '2年方案'
        this.oneYearProduct()
      } else {
        this.$ga.event({
          eventCategory: '首頁',
          eventAction: 'click',
          eventLabel: 'User Click 2年方案',
          value: ''
        })
        this.productText = '1年方案'
        this.twoYearProduct()
      }
    },
    oneYearProduct: function (event) {
      this.isActive = false
      this.products = [
        { title: '機車強制險', year: 1, price: 424, discountPrice: '', content: ['每一人體傷20萬元', '每一人死殘200萬元'], color: 'green', cc: '1-50cc', textColor: 'white' },
        { title: '機車強制險', year: 1, price: 658, discountPrice: '', content: ['每一人體傷20萬元', '每一人死殘200萬元'], color: 'white', cc: '51-250cc', textColor: 'black' },
        { title: '機車強制險', year: 1, price: 711, discountPrice: '', content: ['每一人體傷20萬元', '每一人死殘200萬元'], color: 'yellow', cc: '251-549cc', textColor: 'black' },
        { title: '機車強制險', year: 1, price: 711, discountPrice: '', content: ['每一人體傷20萬元', '每一人死殘200萬元'], color: 'red', cc: '550cc+', textColor: 'white' }
      ]
    },
    twoYearProduct: function (event) {
      this.isActive = true
      this.products = [
        { title: '機車強制險', year: 2, price: 735, discountPrice: 'NT$' + 848, content: ['每一人體傷20萬元', '每一人死殘200萬元'], color: 'green', cc: '1-50cc', textColor: 'white' },
        { title: '機車強制險', year: 2, price: 1200, discountPrice: 'NT$' + 1316, content: ['每一人體傷20萬元', '每一人死殘200萬元'], color: 'white', cc: '51-250cc', textColor: 'black' },
        { title: '機車強制險', year: 2, price: 1306, discountPrice: 'NT$' + 1422, content: ['每一人體傷20萬元', '每一人死殘200萬元'], color: 'yellow', cc: '251-549cc', textColor: 'black' },
        { title: '機車強制險', year: 2, price: 1306, discountPrice: 'NT$' + 1422, content: ['每一人體傷20萬元', '每一人死殘200萬元'], color: 'red', cc: '550cc+', textColor: 'white' }
      ]
    },
    toGetDataFromUrl(url) {
    var queryStart = url.indexOf('?') + 1;
    var queryEnd = url.length + 1;
    var query = url.slice(queryStart, queryEnd - 1);
    var pairs = query.replace(/\+/g, '').split('&');
    var parms = {};
    var i;
    var n;
    var v;
    var nv;
    if (query === url || query === '') return;
    for (i = 0; i < pairs.length; i++) {
      nv = pairs[i].split('=', 2);
      n = decodeURIComponent(nv[0]);
      v = decodeURIComponent(nv[1]);
      if (!parms.hasOwnProperty(n)) parms[n] = [];
      parms[n].push(nv.length === 2 ? v : null);
    }
    return parms;
    },
    productClicked: function (product, index) {
      this.$parent.secondPageNav = true
      switch (index) {
        case 0:
          this.selectedProduct['productCC'] = 'green'
          this.$ga.event({
            eventCategory: '首頁',
            eventAction: 'click',
            eventLabel: 'User Click 綠色車牌',
            value: ''
          })
          break
        case 1:
          this.selectedProduct['productCC'] = 'white'
          this.$ga.event({
            eventCategory: '首頁',
            eventAction: 'click',
            eventLabel: 'User Click 白色車牌',
            value: ''
          })
          break
        case 2:
          this.selectedProduct['productCC'] = 'yellow'
          this.$ga.event({
            eventeventCategory: '首頁',
            eventeventAction: 'click',
            eventeventLabel: 'User Click 黃色車牌',
            eventValue: ''
          })
          break
        case 3:
          this.selectedProduct['productCC'] = 'red'
          this.$ga.event({
            eventCategory: '首頁',
            eventAction: 'click',
            eventLabel: 'User Click 紅色車牌',
            value: ''
          })
          break
        default:
          this.selectedProduct['productCC'] = ''
      }
      this.selectedProduct['title'] = product.title
      this.selectedProduct['year'] = product.year
      this.selectedProduct['price'] = product.price
      this.selectedProduct['discountPrice'] = product.discountPrice
      this.selectedProduct['content'] = product.content
      this.$parent.userSelectedProduct = this.selectedProduct
      try {
        sessionStorage.setItem('sessionKey', 'true')
      } catch (e) {
      }
      this.$router.push('/piform')
    }
  },
  computed: {
    toOpenAd: function () {
      // console.log('ddddd', localStorage.getItem('toAnimatedDiv'))
      // if (localStorage.getItem('toAnimatedDiv') === 'true') {
      //   console.log('12342134213412', localStorage.getItem('toAnimatedDiv'))
      //   var body = $('html, body')
      //   if (window.innerWidth <= 500) {
      //     body.stop().animate({ scrollTop: 420 }, 200, 'swing', function () {
      //     })
      //     localStorage.setItem('toAnimatedDiv', false)
      //   } else {
      //     body.stop().animate({ scrollTop: 800 }, 200, 'swing', function () {
      //     })
      //     localStorage.setItem('toAnimatedDiv', false)
      //   }
      // }
      // return this.$parent.$parent.initActivityInfoBlockOpen
    },
    toInit: function () {
      if (this.toOpenAd && counTime === 0) {
        counTime++
        this.toShowTagAnimate()
      }
      if (this.$parent.$parent.$data['initPackageYear'] === '1') {
        this.productText = '2年方案'
        this.oneYearProduct()
      } else {
        this.productText = '1年方案'
        this.twoYearProduct()
      }
      return this.$parent.$parent.$data['initPackageYear']
    },
    toShowActivity: function () {
      return this.$parent.$parent.isActivityShow
    },
    alterChangeNav: function () {
      return this.$parent.secondPageNav
    },
    returnMsg: function () {
      return this.$parent.returnMsg
    },
    pdfContentToShow: function () {
      return this.$parent.pdfContentToShow
    }
  },
  created: function () {
  },
  mounted: function () {
      var url = window.location.href;
      var getUrl = this.toGetDataFromUrl(url);
      if(getUrl && getUrl['scrollDown'] !== undefined){
        if(getUrl['scrollDown'][0] == 'true'){
        setTimeout(function(){
          if ($(window).width() < 500) {
            $('#myCarousel').css({
              'background-color': 'rgba(0, 0, 0, 0.56)!important;'
            })
            $('html, body').animate({
              scrollTop: $('#myProducts').offset().top - 183
            }, 500)
            localStorage.setItem('toAnimatedDiv', false)
          } else {
            $('html, body').animate({
              scrollTop: $('#myProducts').offset().top - 200
            }, 500)
            localStorage.setItem('toAnimatedDiv', false)
          }
        }, 500);
      }else{
        window.scrollTo(0, 0);
      }  
    }
      
    if ($(window).width() < 500) {
      $('.first-slide').attr('src', './static/css/img/mobileBanner5.jpg')
      $('.first-slide').css({
        'min-width': 'auto',
        'min-height': 'auto',
        'margin-top': '17%'
      })
      $('.first-slide').click(function () {
        window.location.href = '/activity/16'
        this.$ga.event({
          eventCategory: '首頁',
          eventAction: 'click',
          eventLabel: 'User Click 按了首頁活動騎車的凱和字',
          value: ''
        })
      })
    } else {
//      $('.first-slide').attr('src', './static/css/img/banner5.jpg')
    }
    /* eslint-disable */
    var CE_SNAPSHOT_NAME = "立即投保| Care Line英國凱萊機車強制險 | 立刻投保 | Care Line英國凱萊 機車強制險"
    /* eslint-enable */
    $('#defaultIndex').css({
      'background-color': 'rgba(0, 0, 0, 0.56)'
    })

    function first() {
        setTimeout(function() {
          $('#fingerDiv').addClass('animated bounceInRight').removeClass('hidden')  
            setTimeout(function(){
                $('#fingerDiv').removeClass('animated bounceInRight')
                $('#fingerDiv').addClass('animateInite')
          }, 2000)
        }, 1900);
      }
    first()
    setTimeout(function () {       
        first().then(second()) 
      }, 1900)

    if (window.innerWidth > 500) {
      setTimeout(function () {
        $('#robotImg').addClass('animated bounceInRight')
      }, 300)
      setTimeout(function () {
        $('#robotImg').removeClass('animated bounceInRight')
      }, 1800)
      setTimeout(function () {
        $('#giftcard').addClass('animated bounceInLeft')
      }, 300)
      setTimeout(function () {
        $('#giftcard').removeClass('animated bounceInLeft')
      }, 1800)
      setTimeout(function () {
        $('#iphone').addClass('animated bounceInRight')
      }, 300)
      setTimeout(function () {
        $('#iphone').removeClass('animated bounceInRight')
      }, 1800)
      setTimeout(function () {
        $('#dryer').addClass('animated bounceInUp')
      }, 300)
      setTimeout(function () {
        $('#dryer').removeClass('animated bounceInUp')
      }, 1800)
    }
//    if ($(window).width() < 500) {
//      $('.first-slide').attr('src', './static/css/img/mobileBanner5.jpg')
//      $('.first-slide').css('min-width', '100%')
//      $('.textDiv').hide()
//    } else {
//      $('.first-slide').attr('src', './static/css/img/banner5.jpg')
//    }
    // if (this.$parent.$parent.toAnimatedDiv === true) {
    //   if ($(window).width() < 500) {
    //     var body = $('html, body')
    //     body.stop().animate({ scrollTop: 420 }, 200, 'swing', function () {
    //     })
    //     this.$parent.$parent.toAnimatedDiv = false
    //     localStorage.setItem('toAnimatedDiv', false)
    //   } else {
    //     body.stop().animate({ scrollTop: 800 }, 200, 'swing', function () {
    //     })
    //     this.$parent.$parent.toAnimatedDiv = false
    //     localStorage.setItem('toAnimatedDiv', false)
    //   }
    // } else {

// }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title.OneYearTitle {
    position: relative;
    left: 45px;
    padding-top: 50px;
    top:-30px;
  }

  @media screen and (max-width: 500px){
    .textDiv {
      display:none;
      z-index: -22;
    }
    .carousel .kai150 {
      max-width: 150px!important;
      min-height: 40px;
      min-width: 105px;
      top: 45%!important;
      left: 50%;
    }
  }

  /*@media screen and (min-width:500px) {*/
    /*.first-slide {*/
      /*margin-top: 9%!important;*/
    /*}*/
  /*}*/

  @media screen and (max-width: 767px) and (min-width: 500px){
    .carousel .kai150 {
      width: 25%!important;
      min-height: 40px;
      min-width: 50px;
      top: 53%!important;
    }
    .titleButton {
      left: -7%;
      top: 48%;
    }
    .textDiv {
      width: 70%;
      left: 7%;
      top: 16%;
    }
  }

  @media screen and (max-width: 680px) {
    .titleButton {
      left: 66%!important;
      top: 35%!important;
    }
  }

  @media screen and (max-width:1300px) and (min-width: 1630px) {
    .carousel .kai150 {
      width: 100%;
    }
  }

  @media screen and (max-width: 1300px) and (min-width: 920px) {
    .carousel .kai150 {
      width: 25%!important;
      top: 33%!important;
    }
  }


  @media screen and (max-width: 920px) and (min-width: 767px){
    .carousel .kai150 {
      top: 32%!important;
      width: 25%!important;
    }
  }

  @media screen and (min-width:1679px) {
    .carousel .kai150 {
      width: 30%!important;
      top: 25%!important;
      right: 18%;
    }
  }
  .carousel .kai150 {
    width:100%;
    position: absolute;
    top: 26%;
    right: 10%;
    width: 420px;

    /*-webkit-animation: animateThis 1s ease-in;*/
    /*-webkit-animation-fill-mode: forwards;*/
  }

  @-webkit-keyframes animateThis {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }

  .priceAnimate {
    font-size: 40px;
    font-weight: bold;
    color: #fff;
    text-shadow: 2px 2px 2px black;
  }
  .giftInfo {
    color: black;
    background-color: white;
    height: 265px;
    width: 300px;
    position: fixed;
    top: 75px;
    left: -320px;
  }
  .activityImg {
    border: 10px solid rgba(255, 255, 255, 0.5);
    cursor: pointer;
  }
  #giftInfo.giftInfo.moveRight {
    left: 0px!important;
    background-color: transparent;
  }
  .giftInfo .tag {
    background-color: rgba(232, 68, 102, 0.67);
    height: 20%;
    float: right;
    position: absolute;
    top: 37px;
    width: 72px;
    right: -91px;
  }
  .giftInfo i {
    font-size: 18px;
    float:right;
    margin-top: 15px;
    color: white;
    width: 100%;
  }
  .productAhref:hover {
    color: transparent;
  }
  .logoModal {
    margin: 0px;
    height: 40px;
    width: auto;
  }
  .carousel {
    position: relative;
    top: -60px;
  }
  #navbar {
    background-color: rgba(0, 0, 0, 0.56);
  }
  #navbar p {
    color: white;
    margin: 15px;
    font-weight: bold;
  }

  .tag img {
    height: 30px;
    width: 70%;
    position: relative;
    top: 10px;
  }

  @media screen and (max-width: 470px) {
    .hoverDiv {
      z-index: 20;
    }
  }
  @media screen and (max-width: 860px) and (min-width: 772px) {
    .plateColor {
      height: 18%!important;
      width: 95%!important;
      max-width: 180px;
    }
  }
  @media screen and (max-width: 769px) and (min-width: 767px) {
    .plateColor {
      height: 16%!important;
    }
  }

  .moveRight {
    -webkit-animation: moveRight 0.2s; /* Safari 4.0 - 8.0 */
    animation: moveRight 0.2s ;
  }

  @-webkit-keyframes moveRight {
    0% {left: -300px;}
    100% {left: 0px;}
  }

  @keyframes moveRight {
    0% {left: -300px;}
    100% {left: 0px;}
  }

  .shine {
    -webkit-animation: shine 2s infinite; /* Safari 4.0 - 8.0 */
    animation: shine 2s infinite;
  }

  .showAnimatedNumb {
    display: none;
  }

  @-webkit-keyframes shine{
    from {
      background-repeat:no-repeat;
      background-image:-webkit-linear-gradient(
        top left,
        rgba(255, 255, 255, 0.0) 0%,
        rgba(255, 255, 255, 0.0) 45%,
        rgba(255, 255, 255, 0.5) 48%,
        rgba(255, 255, 255, 0.8) 50%,
        rgba(255, 255, 255, 0.5) 52%,
        rgba(255, 255, 255, 0.0) 57%,
        rgba(255, 255, 255, 0.0) 100%
      );
      background-position:-250px -250px;
      background-size: 600px 600px
    }
    to {
      background-repeat:no-repeat;
      background-position:250px 250px;
    }
  }
  @keyframes shine{
    from {
      background-repeat:no-repeat;
      background-image:-webkit-linear-gradient(
        top left,
        rgba(255, 255, 255, 0.0) 0%,
        rgba(255, 255, 255, 0.0) 45%,
        rgba(255, 255, 255, 0.5) 48%,
        rgba(255, 255, 255, 0.8) 50%,
        rgba(255, 255, 255, 0.5) 52%,
        rgba(255, 255, 255, 0.0) 57%,
        rgba(255, 255, 255, 0.0) 100%
      );
      background-position:-250px -250px;
      background-size: 600px 600px
    }
    to {
      background-repeat:no-repeat;
      background-position:250px 250px;
    }
  }
</style>
