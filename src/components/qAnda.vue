<template>
  <div class="qAndaPage">

    <!--<nav class="navbar navbar-default">-->
      <!--<div class="container-fluid">-->
        <!--<div class="navbar-header">-->
          <!--<div class="logo" @click="toGoBackIndex"><a><img id="logoImg" style="max-width:180px;" src="../../static/assets/logo.png"/></a></div>-->
          <!--<button @click="showingNavBar" type="button" class="navbar-toggle collapsed" data-toggle="collapse">-->
            <!--<span class="sr-only">Toggle navigation</span>-->
            <!--<span class="icon-bar"></span>-->
            <!--<span class="icon-bar"></span>-->
            <!--<span class="icon-bar"></span>-->
          <!--</button>-->
        <!--</div>-->
        <!--<div id="navbar" class="navbar-collapse collapse">-->
          <!--<ul class="nav navbar-nav navbar-right">-->
            <!--<li v-show="toShowActivity"><p @click="goToActivityTwo">活動專區<span class="sr-only">活動專區<</span></p></li>-->
            <!--<li><p @click="toGoQandAPage">Q&A <span class="sr-only">(current)</span></p></li>-->
            <!--<li><a href="https://www.facebook.com/kaistraventure/" target="_blank"><p><i class="fa fa-facebook-square" aria-hidden="true"></i></p></a></li>-->
            <!--<li><p style="cursor:default"><i class="fa fa-phone" aria-hidden="true"></i>免費客服專線 0800-234-088 (週一~週五 09:30~18:00)</p></li>-->
          <!--</ul>-->
        <!--</div>&lt;!&ndash;/.nav-collapse &ndash;&gt;-->
      <!--</div>&lt;!&ndash;/.container-fluid &ndash;&gt;-->
    <!--</nav>-->

    <!--<div class="row">-->
        <!--<div class="img processImg">-->
          <!--<img src="../assets/qa.jpg" class="img-responsive" alt="">-->
        <!--</div>-->
    <!--</div>-->

    <!--<div class="row" style="">-->
      <!--<div style="margin-top: 35px;" id="qaDiv" class="container customerInfo animated slideInLeft">-->
        <!--<div class="row" style="">-->
          <!--<div class="row">-->
            <!--<div class="col-sm-12 text-center">-->
              <!--<h3>車險 Q & A</h3>-->
            <!--</div>-->
          <!--</div>-->

          <!--<div class="row">-->
            <!--<div class="col-sm-12">-->
              <!--<div class="col-sm-6">-->

                <!--<div class="col-sm-12">-->
                  <!--<h4 class="text-left"><span>Q1</span> 什麼是機車強制險？</h4>-->
                  <!--<p class="text-left">-->
                    <!--強制險為政府規定強制要保，保障範圍為機車以外第三人及車上乘客之體傷，如未投保無法換照、過戶，並依汽機車種處以罰鍰。-->
                  <!--</p>-->
                <!--</div>-->

                <!--<div class="col-sm-12">-->
                  <!--<h4 class="text-left"><span>Q2</span> 機車強制險保額多少？能更改嗎？</h4>-->
                  <!--<p class="text-left">-->
                    <!--強制險保額為身故/全殘200萬，傷害醫療上限20萬。-->
                    <!--強制險是配合政策實行之社會保險，保險內容由政府單位擬訂無法更動。-->
                  <!--</p>-->
                <!--</div>-->

                <!--<div class="col-sm-12">-->
                  <!--<h4 class="text-left"><span>Q3</span> 投保強制險是否可以附加其他任意險？</h4>-->
                  <!--<p class="text-left">-->
                    <!--目前線上僅提供投保強制險，如您想附加其他任意險可撥打客服專線諮詢，將有專人為您服務。-->
                  <!--</p>-->
                <!--</div>-->

                <!--<div class="col-sm-12">-->
                  <!--<h4 class="text-left"><span>Q4</span> 網路保險服務「交易流程」及「繳費方式」為何？</h4>-->
                  <!--<p class="text-left">-->
                    <!--交易流程：輸入投保資料→閱讀聲明事項→輸入車籍資料→確認投保資料→輸入信用卡資料→交易成功。-->
                    <!--繳費方式：目前僅開放信用卡繳費方式。-->
                  <!--</p>-->
                <!--</div>-->

              <!--</div>-->
              <!--<div class="col-sm-6">-->
                <!--<div class="col-sm-12">-->
                  <!--<h4 class="text-left"><span>Q5</span> 網路保險服務完成後，如何確定「交易已成功」及何時「收到保險證(單)」？</h4>-->
                  <!--<p class="text-left">-->
                    <!--投保完成後，系統會E-MAIL一封訂單確認函至您所留信箱；紙本保單將於交易日起七個工作天內掛號寄出。-->
                  <!--</p>-->
                <!--</div>-->

                <!--<div class="col-sm-12">-->
                  <!--<h4 class="text-left"><span>Q6</span> 網路保險服務可使用那些信用卡繳費？</h4>-->
                  <!--<p class="text-left">-->
                    <!--目前可使用VISA、MASTER、JCB、聯合信用卡，其他信用卡(例如美國運通卡、郵局金融卡)暫時無法使用。-->
                  <!--</p>-->
                <!--</div>-->

                <!--<div class="col-sm-12">-->
                  <!--<h4 class="text-left"><span>Q7</span> 填寫完成刷卡資料並送出資料後，卻出現「付款失敗」的畫面？</h4>-->
                  <!--<p class="text-left">-->
                    <!--建議您可先向信用卡發卡銀行查詢，或麻煩您重新操作一次。如需協助請撥打英國凱萊客服專線。-->
                  <!--</p>-->
                <!--</div>-->

              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->

  </div>
</template>

<script>

var $ = require('jquery')
window.jQuery = $
window.$ = $

export default {
  name: 'qPage',
  head: {
    title: {
      inner: 'FAQ | Care Line英國凱萊 機車強制險'
    },
    meta: [
      {name: 'description', content: '車險FAQ. 車險常見問題. Q：什麼是機車強制險？... Q：強制險理賠範圍包含哪些呢？ ...機車：駕駛人以外第三人體傷賠償。 汽車：車外第三人體傷賠償。'},
      {name: 'keywords', content: '投保,線上投保,Care Line,英國凱萊,Care Line英國凱萊,機車險,強制險,網路車險,凱, 安安,壯壯'},
      {property: 'og:title', content: 'FAQ | Care Line英國凱萊 機車強制險'},
      {property: 'og:description', content: '車險FAQ. 車險常見問題. Q：什麼是機車強制險？... Q：強制險理賠範圍包含哪些呢？ ...機車：駕駛人以外第三人體傷賠償。 汽車：車外第三人體傷賠償'},
      {property: 'og:image', content: 'https://motor.careline.com.tw/FB.jpg'},
      {property: 'og:site_name', content: '英國凱萊CareLine 網路保險'},
      {property: 'og:email', content: 'service@careline.com.tw'},
      {property: 'og:phone_number', content: '0800234088'},
      {property: 'og:url', content: 'https://www.careline.com.tw/CareLineMotor/motorbike/faqPage'}
    ]
  },
  data () {
    return {
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
    toGoBackIndex: function () {
      this.$ga.event({
        eventCategory: 'Q&A頁',
        eventAction: 'click',
        eventLabel: 'User Click Logo',
        value: ''
      })
//      window.open('http://www.careline.com.tw')
//      this.$router.push('/')
      window.location.href = 'http://www.careline.com.tw'
    },
    toGoQandAPage: function () {
      window.open('/faq', '_blank')
    },
    goToActivityTwo: function () {
      window.open('/activity', '_blank')
    }
  },
  computed: {
    toShowActivity: function () {
      return this.$parent.$parent.isActivityShow
    }
  },
  mounted () {
    $('#footer').addClass('hidden')
    /* eslint-disable */
    var CE_SNAPSHOT_NAME = "FAQ | Care Line英國凱萊 機車強制險 | 立刻投保 | Care Line英國凱萊 機車強制險"
    /* eslint-enable */
    window.scrollTo(0, 0)
  },
  beforeMount () {
    window.location.href = '/faq'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .qAndaPage {
    height: 900px;
  }
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

  /*modal css*/
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-header .logo {
    max-width: 180px;
  }

  .modal-container {
    width: 100%;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
  }

  .modal-body {
    margin: 20px 0;
  }

  .modal-default-button {
    float: right;
  }

  .modal-default-button {
    margin: auto 25%;
    float: right;
    background-color: #db4160;
    border: none;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    border-radius: 30px;
    min-width: 100px;
    color: white;
  }
  /*modal css end*/

  @media screen and (max-width:500px) {
    #qaDiv {
      margin-bottom: 15px;
      margin-top: 15px;
    }
  }

  h4 {
    line-height: 25px;
  }

  .customerInfo {
    /*border:none;*/
    padding: 0px 15px;
    margin-top: 15px;
  }
</style>
