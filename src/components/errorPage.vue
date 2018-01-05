<template>
  <div class="errorPage">

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

    <div class="row">
        <div class="img processImg">

        </div>
    </div>

    <div style="margin-top:50px;  min-height:720px;" class="container customerInfo animated slideInLeft">
      <div class="row">
        <div class="col-sm-12 thanksDiv" style="">
          <div class="col-sm-12 text-center" style="margin-bottom:10px;margin-top: 15px;">
            <img src="../assets/errorPage.png" alt="img-responsive" style="height:150px; width:auto;">
          </div>
          <div class="col-sm-12">
            <h4 style="border-bottom:none;margin-top:23px;">系統似乎繁忙中，需要任何協助請撥打免費客服專線：</h4>
            <h4>0800-234-088 (週一~週五 09：30~18：00)，英國凱萊感謝您.</h4>
            <div class="thanksWords text-center" style="margin-top:23px;">
              <div class="buttonProject">
                <button class="backToIndexOfOtherPageButton" @click="toGoBackIndex">回到首頁</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

var $ = require('jquery')
window.jQuery = $
window.$ = $

export default {
  name: 'errorPage',
  head: {
    title: {
      inner: '系統忙碌中 | Care Line英國凱萊 機車強制險'
    },
    meta: [
      {name: 'description', content: '系統似乎繁忙中，需要任何協助請撥打免費客服專線：0800-234-088 (週一~週五 09：30~18：00)，英國凱萊感謝您.'},
      {name: 'keywords', content: '投保,線上投保,Care Line,英國凱萊,Care Line英國凱萊,機車險,強制險,網路車險,凱, 安安,壯壯'},
      {property: 'og:title', content: '系統忙碌中 | Care Line英國凱萊 機車強制險'},
      {property: 'og:description', content: '系統似乎繁忙中，需要任何協助請撥打免費客服專線：0800-234-088 (週一~週五 09：30~18：00)，英國凱萊感謝您.'},
      {property: 'og:image', content: 'https://motor.careline.com.tw/FB.jpg'},
      {property: 'og:site_name', content: '英國凱萊CareLine 網路保險'},
      {property: 'og:email', content: 'service@careline.com.tw'},
      {property: 'og:phone_number', content: '0800234088'},
      {property: 'og:url', content: 'https://www.careline.com.tw/CareLineMotor/motorbike/errorPage'}
    ]
  },
  data () {
    return {
    }
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
          eventCategory: '錯誤頁',
          eventAction: 'click',
          eventLabel: 'User Click Logo',
          value: ''
        })
        window.location.href = 'http://www.careline.com.tw'
//        window.open('http://www.careline.com.tw')
      } else {
        this.$ga.event({
          eventCategory: '錯誤頁',
          eventAction: 'click',
          eventLabel: 'User Click 回首頁',
          value: ''
        })
        this.$router.push('/')
      }
    },
    toGoQandAPage: function () {
      this.$ga.event({
        eventCategory: '錯誤頁',
        eventAction: 'click',
        eventLabel: 'User Click QA',
        value: ''
      })
      window.open('/faq', '_blank')
    }
  },
  computed: {
    toShowActivity: function () {
      return this.$parent.$parent.isActivityShow
    }
  },
  mounted () {
    /* eslint-disable */
    var CE_SNAPSHOT_NAME = "系統忙碌中 | Care Line英國凱萊 機車強制險 | 立刻投保 | Care Line英國凱萊 機車強制險"
    /* eslint-enable */
    window.scrollTo(0, 0)
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

  .modal-container {
    width: 300px;
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
    margin-top:10px;
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

  .customerInfo, .customerInfo h4 {
    border:none;
  }

  .thanksDiv {
    margin-top: 5%;
    min-height: 555px;
  }
  @media screen and (max-width: 414px) {
    .thanksDiv {
      margin-top: -15px;
    }
  }
</style>
