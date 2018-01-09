<template>
  <div class="notFound">

    <!-- <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <div class="logo" @click="toGoBackIndex('logo')"><a><img id="logoImg" style="max-width:180px;" src="../../static/assets/logo.png"/></a></div>
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
            <li><p style="cursor:default"><i class="fa fa-phone" aria-hidden="true"></i>免費客服專線 0800-234-088 (週一~週五 09:30~18:00)</p></li>
          </ul>
        </div>
      </div>
    </nav> -->

    <div class="row">
        <div class="img processImg">

        </div>
    </div>

    <div style="height:600px;" class="container customerInfo animated slideInLeft">
      <div class="row">
        <div class="col-sm-12 thanksDiv" style="">
          <div class="col-sm-12 text-center" style="margin-bottom:10px; padding-top:5%;">
            <h2>找不到頁面</h2>
            <img src="../assets/notFound.png" alt="img-responsive" style="margin: 20px 0px;height:200px; width:auto;">
            <h4 style="border-bottom:none;">您似乎迷路了！需要任何協助請撥打免費客服專線：</h4>
            <h4>0800-234-088 (週一~週五 09：30~18：00)，英國凱萊感謝您。</h4>
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
{{toShowActivity}}
  </div>
</template>

<script>

var $ = require('jquery')
window.jQuery = $
window.$ = $

export default {
  name: 'notFound',
  head: {
    title: {
      inner: '找不到頁面 | Care Line英國凱萊 機車強制險'
    },
    meta: [
      {name: 'description', content: '您似乎迷路了！需要任何協助請撥打免費客服專線：0800-234-088 (週一~週五 09：30~18：00)，英國凱萊感謝您.'},
      {name: 'keywords', content: '投保,線上投保,Care Line,英國凱萊,Care Line英國凱萊,機車險,強制險,網路車險,凱, 安安,壯壯'},
      {property: 'og:title', content: '找不到頁面 | Care Line英國凱萊 機車強制險'},
      {property: 'og:description', content: '您似乎迷路了！需要任何協助請撥打免費客服專線：0800-234-088 (週一~週五 09：30~18：00)，英國凱萊感謝您.'},
      {property: 'og:image', content: 'https://motor.careline.com.tw/FB.jpg'},
      {property: 'og:site_name', content: '英國凱萊CareLine 網路保險'},
      {property: 'og:email', content: 'service@careline.com.tw'},
      {property: 'og:phone_number', content: '0800234088'},
      {property: 'og:url', content: 'https://www.careline.com.tw/CareLineMotor/motorbike/notFound'}
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
          eventCategory: '找不到頁',
          eventAction: 'click',
          eventLabel: 'User Click Logo',
          value: ''
        })
        window.location.href = 'http://www.careline.com.tw'
//        window.open('http://www.careline.com.tw')
      } else {
        this.$ga.event({
          eventCategory: '找不到頁',
          eventAction: 'click',
          eventLabel: 'User Click 回首頁',
          value: ''
        })
        this.$router.push('/')
      }
    },
    toGoQandAPage: function () {
      this.$ga.event({
        eventCategory: '找不到頁',
        eventAction: 'click',
        eventLabel: 'User Click QA',
        value: ''
      })
      window.open('/faq', '_blank')
    },
    closeModal: function () {
      this.visible = false
    }
  },
  computed: {
     toShowActivity: function () {
          setTimeout(function(){
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
    var CE_SNAPSHOT_NAME = "找不到頁面 | Care Line英國凱萊 機車強制險 | 立刻投保 | Care Line英國凱萊 機車強制險"
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
  

  .customerInfo, .customerInfo h4 {
    border:none;
  }
  .customerInfo h2 {
    color: #e84466;
    font-weight: bold;
  }
  .customerInfo .thanksDiv {
    margin-top: 30px;
    margin-bottom: 120px;
  }
</style>
