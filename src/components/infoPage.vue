<template>
  <div class="infoPage">

    <!-- <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <div class="logo" @click="toGoBackIndex"><a><img id="logoImg" style="max-width:180px;" src="../../static/assets/logo.png"/></a></div>
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
          <img src="../assets/route993.png" class="img-responsive" alt="">
        </div>
    </div>

    <div style="margin:20px auto;" class="container customerInfo animated slideInLeft">
      <div id="mobileRWD" class="container-fluid">
        <div class="row title">
          <div class="col-sm-12 text-center">
            <h3 style="font-weight: bold;">投保資料確認</h3>
          </div>
        </div>

        <div id="needToMobRWD" class="row">
          <div class="col-sm-12">
            <!--要保人資料-->
            <div class="col-sm-6 specialColSm">
              <div style="padding: 0 15px;" class="col-sm-12">
                <h4>要保人資料</h4>
              </div>
              <div class="col-sm-12">
                <div class="col-sm-3">
                  <p class="mobileTitle">姓名:</p>
                </div>
                <div class="col-sm-9 text-left">
                  <p>{{applicant.applicantLastName}} {{ applicant.applicantFistName }}</p>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="col-sm-3">
                  <p class="mobileTitle">身分證字號:</p>
                </div>
                <div class="col-sm-9 text-left">
                  <p>{{ applicant.applicantPid }}</p>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="col-sm-3">
                  <p class="mobileTitle">性別:</p>
                </div>
                <div class="col-sm-9 text-left">
                  <p>{{ applicant.applicantGender == 'male' ? '男' : '女' }}</p>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="col-sm-3">
                  <p class="mobileTitle">出生日期:</p>
                </div>
                <div class="col-sm-9 text-left">
                  <p>{{ applicant.applicantBirthday.replace(/,/g, '') }}</p>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="col-sm-3">
                  <p class="mobileTitle">E-Mail信箱:</p>
                </div>
                <div class="col-sm-9 text-left">
                  <p style="word-break:break-all">{{ applicant.applicantEmail }}</p>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="col-sm-3">
                  <p class="mobileTitle">手機號碼:</p>
                </div>
                <div class="col-sm-9 text-left">
                  <p>{{ applicant.applicantMobile }}</p>
                </div>
              </div>
              <div class="col-sm-12" >
                <div class="col-sm-3">
                  <p class="mobileTitle">地址:</p>
                </div>
                <div class="col-sm-9 text-left wordWrap">
                  <p class="">{{applicant.applicantCity['name']}} {{applicant.applicantDistrict['name']}} {{ applicant.applicantAddr }}</p>
                </div>
              </div>
            </div>
            <!--被保人資料-->
            <div class="col-sm-6 specialColSm">
              <div style="padding: 0 15px;" class="col-sm-12">
                <h4>被保人資料({{ insuredPP.withInsuredRelationShipItemText }})</h4>
              </div>
              <div class="col-sm-12">
                <div class="col-sm-3">
                  <p class="mobileTitle">姓名:</p>
                </div>
                <div class="col-sm-9 text-left">
                  <p>{{ insuredPP.insuredLastName }} {{ insuredPP.insuredFirstName }}</p>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="col-sm-3">
                  <p class="mobileTitle">身分證字號:</p>
                </div>
                <div class="col-sm-9 text-left">
                  <p>{{ insuredPP.insuredPid }}</p>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="col-sm-3">
                  <p class="mobileTitle">性別:</p>
                </div>
                <div class="col-sm-9 text-left">
                  <p>{{ insuredPP.insuredGender == 'male' ? '男' : '女' }}</p>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="col-sm-3">
                  <p class="mobileTitle">出生日期:</p>
                </div>
                <div class="col-sm-9 text-left">
                  <p>{{ insuredPP.insuredBirthdayForCheck.replace(/,/g, '') }}</p>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="col-sm-3">
                  <p class="mobileTitle">E-Mail信箱:</p>
                </div>
                <div class="col-sm-9 text-left">
                  <p style="word-break:break-all">{{ insuredPP.insuredEmail }}</p>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="col-sm-3">
                  <p class="mobileTitle">手機號碼:</p>
                </div>
                <div class="col-sm-9 text-left">
                  <p>{{ insuredPP.insuredMobile }}</p>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="col-sm-3">
                  <p class="mobileTitle">地址:</p>
                </div>
                <div class="col-sm-9 text-left wordWrap">
                  <p class="">{{insuredPP.insuredCity['name']}} {{insuredPP.insuredDistrict['name']}} {{ insuredPP.insuredAddr }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="mobileRWD" class="container-fluid toBeingPadding">
        <div class="row">
          <div class="col-sm-12">
            <div class="col-sm-12">
              <h4>機車資料</h4>
            </div>
          </div>
        </div>

        <div id="needToMobRWD" class="row">
          <div class="col-sm-12">
            <div class="col-sm-6">
              <div class="col-sm-3"><p class="mobileTitle">車牌:</p></div>
              <div class="col-sm-9 text-left"><p>{{motoInfoPlateEng === '' ? '新車無牌照' : motoInfoPlateEng}} {{motoInfoPlateEng === '' ? '' : '-'}}  {{motoInfoPlateNum === '' ? '' : motoInfoPlateNum}}</p></div>
            </div>
            <div class="col-sm-6">
              <div class="col-sm-3"><p class="mobileTitle">發照日期:</p></div>
              <div class="col-sm-9 text-left"><p>{{motoInfo.motoReleasePlateDateForCheck.replace(/,/g, '')}}</p></div>
            </div>
          </div>
        </div>

        <div id="needToMobRWD" class="row">
          <div class="col-sm-12">
            <div class="col-sm-6">
              <div class="col-sm-3"><p class="mobileTitle">車子品牌:</p></div>
              <div class="col-sm-9 text-left"><p>{{motoInfo.motoBrand}}</p></div>
            </div>
            <div class="col-sm-6">
              <div class="col-sm-3"><p class="mobileTitle">出廠日期:</p></div>
              <div class="col-sm-9 text-left"><p>{{motoInfo.motoFactoryDateForCheck.replace(/,/g, '')}}</p></div>
            </div>
          </div>
        </div>

        <div id="needToMobRWD" class="row">
          <div class="col-sm-12">
            <div class="col-sm-6">
              <div class="col-sm-3"><p class="mobileTitle">排氣量:</p></div>
              <div class="col-sm-9 text-left"><p>{{ userEnteredProdcutCC }}</p></div>
            </div>
            <div class="col-sm-6">
              <div class="col-sm-3"><p class="mobileTitle">引擊/車身號碼:</p></div>
              <div id="motorEngine" class="col-sm-9 text-left"><p>{{motoInfo.engineNumber}}</p></div>
            </div>
          </div>
        </div>
      </div>

      <div id="mobileRWD" class="container-fluid ulNoPadding" style="margin-top:0px;">
        <div class="row">
          <div class="col-sm-12">
            <div class="col-sm-12">
              <h4>保單資料</h4>
            </div>
          </div>
        </div>

        <div class="row lastRow">
          <div class="col-sm-12">
            <div class="col-sm-4">
              <ul>
                <li>
                  <p class="mobileTitle">保險種類:</p>
                </li>
                <li class="specialLi">
                  <p>{{ productInfo.prodInfo['title']  }}</p>
                </li>
                <li class="specialLi">
                  <a href="/CareLineMotor/motorbike-mbr/viewpdf/motorRe" target="_blank" @click="toCMotorResponsbility">保險相關條款</a>
                </li>
              </ul>
            </div>
            <div class="col-sm-4">
              <ul>
                <li>
                  <p class="mobileTitle">保險金額:</p>
                </li>
                <li class="specialLi" v-for="item in productInfo.prodInfo['content']">
                  <p>{{ item }}</p>
                </li>
              </ul>
            </div>
            <div class="col-sm-4">
              <ul>
                <li>
                  <p class="mobileTitle">保險開始日:</p>
                </li>
                <li class="specialLi">
                  <p>{{motoInfo.executionDay}}</p>
                </li>
                <li class="specialLi">
                  <p>中午12點起保({{ productInfo.prodInfo['year'] }}年期)</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="row lastColumn">
          <div class="col-sm-12">
            <div class="col-sm-6 text-left">
              <strong>總保費</strong>
            </div>
            <div class="col-sm-6 text-right">
              <ul>
                <li>
                  <p style="text-decoration: line-through; display:inline-block;"> {{ productInfo.prodInfo['discountPrice'] }}</p>
                </li>
                <li>
                  <strong style="color: #e84466;">NT$ {{ productInfo.prodInfo['price'] }}</strong>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-6">

          </div>
          <div class="col-sm-6">
            <div class="givenCard text-right">
              <img src="../assets/pics/kaiTalk.png" alt="">
              <span>
              您的150元全家禮物卡將同保卡掛號寄出！
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid" style="margin-top: 0px;">
        <div class="row">
          <div class="col-sm-12 text-left MobileUse">
            <button class="btn btn-primary NextButton" @click="toGoOnNextPay" >下一步</button>
            <button class="btn btn-danger NextButton" @click="goBack" >上一步</button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal-mask" v-show="theMotorModal">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              <img class="logoModal" src="../assets/logo.png" />
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              <pdf :page="page" :src="src"></pdf>
              <span @click="toNxtPDFPage">下一頁 <i class="fa fa-angle-right"></i></span>
            </slot>
          </div>

          <div class="modal-footer text-center">
            <slot name="footer">
              <button class="modal-default-button" @click="closeMotorModal">
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
var $ = require('jquery')
window.jQuery = $
window.$ = $

export default {
  name: 'infoPage',
  components: {
    pdf
  },
  head: {
    title: {
      inner: '訂購確認 | Care Line英國凱萊 機車強制險'
    },
    meta: [
      {name: 'description', content: '投保資料確認｜要保人資料. 被保人資料. 機車資料. 保單資料. 總保費…上一步修改. 下一步結帳'},
      {name: 'keywords', content: '投保,線上投保,Care Line,英國凱萊,Care Line英國凱萊,機車險,強制險,網路車險,凱, 安安,壯壯'},
      {property: 'og:title', content: '訂購確認 | Care Line英國凱萊 機車強制險'},
      {property: 'og:description', content: '投保資料確認｜要保人資料. 被保人資料. 機車資料. 保單資料. 總保費…上一步修改. 下一步結帳'},
      {property: 'og:image', content: 'https://motor.careline.com.tw/FB.jpg'},
      {property: 'og:site_name', content: '英國凱萊CareLine 網路保險'},
      {property: 'og:email', content: 'service@careline.com.tw'},
      {property: 'og:phone_number', content: '0800234088'},
      {property: 'og:url', content: 'https://www.careline.com.tw/CareLineMotor/motorbike/confirmPage'}
    ]
  },
  data () {
    return {
      motoInfoPlateEng: '',
      motoInfoPlateNum: '',
      src: '',
      page: 1,
      theMotorModal: false
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
    toCMotorResponsbility: function () {
      this.$ga.event({
        eventCategory: '投保資料確認頁',
        eventAction: 'click',
        eventLabel: 'User Click 保險相關條款',
        value: ''
      })
    },
    closeMotorModal: function () {
      this.theMotorModal = false
      this.src = ''
      this.page = 1
    },
    toNxtPDFPage: function () {
      if (this.page === 7) {
        this.page = 1
      } else {
        this.page++
      }
    },
    toGoBackIndex: function () {
      this.$ga.event({
        eventCategory: '投保資料確認頁',
        eventAction: 'click',
        eventLabel: 'User Click Logo',
        value: ''
      })
//      window.open('http://www.careline.com.tw')
//      this.$router.push('/')
      window.location.href = 'http://www.careline.com.tw'
    },
    goBack: function () {
      this.$ga.event({
        eventCategory: '投保資料確認頁',
        eventAction: 'click',
        eventLabel: 'User Click 上一步',
        value: ''
      })
      this.$router.push('/viForm')
    },
    toGoOnNextPay: function () {
      this.$ga.event({
        eventCategory: '投保資料確認頁',
        eventAction: 'click',
        eventLabel: 'User Click 前往付款',
        value: ''
      })
      this.$localStorage.remove('motorInfo')
      this.$localStorage.remove('formStore')
      var dataIdx = this.$parent.dataId
      var dataUrl = encodeURIComponent(dataIdx)
      window.location.href = '/CareLineMotor/motorbike-mbr/payment/goToPaymentPage?dataId=' + dataUrl
    },
    toGoQandAPage: function () {
      this.$ga.event({
        eventCategory: '投保資料確認頁',
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
    },
    applicant: function () {
      return this.$parent.$parent.applicantData
    },
    insuredPP: function () {
      return this.$parent.$parent.insuredData
    },
    motoInfo: function () {
      if (this.$parent.motocycleInfo['plateNum'] !== undefined || this.$parent.motocycleInfo['plateEng'] !== undefined) {
        this.motoInfoPlateNum = this.$parent.motocycleInfo['plateNum'].toUpperCase()
        this.motoInfoPlateEng = this.$parent.motocycleInfo['plateEng'].toUpperCase()
      }
      return this.$parent.motocycleInfo
    },
    productInfo: function () {
      let returnVal = {}
      returnVal['prodInfo'] = this.$parent.userSelectedProduct
      return returnVal
    },
    userEnteredProdcutCC: function () {
      var isMH = this.$parent.$parent.isMH
      var text = this.$parent.$parent.userEnteredProdcutCC + (isMH === true ? 'hp' : 'cc')
      return text
    }
  },
  mounted () {
    /* eslint-disable */
    var CE_SNAPSHOT_NAME = "車籍資料 | Care Line英國凱萊 機車強制險 | 立刻投保 | Care Line英國凱萊 機車強制險"
    /* eslint-enable */

    window.scrollTo(0, 0)
    console.log(this.$parent.$parent.applicantData['applicantLastName'])
    console.log(this.$parent.$parent.insuredData['insuredLastName'])
    if ((this.$parent.$parent.applicantData['applicantLastName'] === undefined) || (this.$parent.$parent.insuredData['insuredLastName'] === undefined)) {
      this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .logo {
    height: 40px;
    widht: auto;
  }
  .mobileTitle {
    font-weight:700;
    white-space: nowrap;
  }
  .customerInfo {
    padding-bottom: 10px;
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

  @media screen and (min-width: 1366px) {
    #motorEngine {
      padding-left:14px;
    }
    .toBeingPadding {
      margin-bottom: 30px;
    }
  }
  @media screen and (max-width: 1366px) and (min-width: 1000px){
    #motorEngine {
      padding-left:28px;
    }
  }
  @media screen and (min-width: 910px) and (max-width: 1000px) {
    p {
      font-size: 13px;
    }
    #motorEngine {
      padding-left: 28px;
    }
  }

  @media screen and (min-width: 691px) {
    .container.customerInfo.animated.slideInLeft {
      font-size: 17px;
    }
    .ulNoPadding ul {
      padding: 0px!important;
    }
    .customerInfo h4 {
      font-size: 22px;
    }
    .mobileTitle {
      text-align: left;
    }
    .toBeingPadding .col-sm-6 {
      padding-left: 30px;
    }
    .lastRow .mobileTitle {
      text-align: center;
    }
    #mobileRWD.container-fluid.toBeingPadding {
      margin-bottom: 25px;
    }
  }

  @media screen and (max-width:769px) and (min-width:758px) {
    ul.nav.navbar-nav.navbar-right {
      font-size: 15px!important;
    }
    div.col-sm-6 {
      width: 100%!important;
    }
    .specialColSm {
      margin-bottom: 25px;
    }
  }

  @media screen and (max-width: 690px) {
    .specialColSm {
      margin-bottom: 25px;
    }
    .customerInfo h4 {
      text-align: left;
    }
    .customerInfo .col-sm-6 .col-sm-12, .customerInfo .col-sm-6 {
      padding: 3px 0px;
    }
    .customerInfo .col-sm-3 p, .customerInfo .col-sm-4 p {
      text-align: left;
    }
    .mobileTitle {
      font-weight: 600;
    }
    .customerInfo .col-sm-4 a {
      display: block;
      position:relative;
      text-align: left;
    }
    .customerInfo h3 {
      font-weight: bold;
    }
    .customerInfo .title {
      margin: 0px;
    }
    #mobileRWD {
      padding:0px;
    }
    .lastColumn {
      padding:15px;
    }
    #needToMobRWD .col-sm-9.text-left {
      position:absolute;
      left: 100px;
      top: 5px;
    }
    .specialLi {
      position: relative;
      left: 100px;
      top: -30px;
    }
    .lastRow ul {
      height: 50px;
    }
    .customerInfo {
      border-bottom: none!important;
    }
    .lastColumn ul {
      border-top: 1px solid #ddd;
    }
    #mobileRWD.container-fluid.toBeingPadding {
      margin-bottom: 25px!important;
    }
  }

  @media screen and (max-width: 500px) {
    .givenCard span{
      font-size: 16px;
      color: #01a29a;
      font-weight: 800;
    }
  }

  @media screen and (max-width: 320px) {
    .givenCard span{
      font-size: 13px;
      color: #01a29a;
      font-weight: 800;
    }
  }


  .givenCard {
    font-size: 18px;
    color: #01a29a;
    font-weight: 800;
  }

  .givenCard img{
    margin-bottom: 5px;
  }
</style>
