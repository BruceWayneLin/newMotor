<template>
  <!--<div class="errorPage">-->
    <!--<nav class="navbar navbar-default">-->
      <!--<div class="container-fluid">-->
        <!--<div class="navbar-header">-->
          <!--<div class="logo" @click="toGoBackIndex('logo')"><a><img id="logoImg" style="max-width:180px;" src="../../static/assets/logo.png"/></a></div>-->
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

    <!--<div style=" min-height:720px;" class="container customerInfo animated slideInLeft">-->
      <!--<div class="row activityRow" v-for="activity in activities">-->
        <!--<div class="container">-->
          <!--<div class="col-sm-12">-->
            <!--<img @click="toGoBackIndex()" style="width: 100%;cursor:pointer" id="activityImg3" class="img-responsive" :src="activity.activityBanner3" alt="">-->
          <!--</div>-->
          <!--<div class="col-xs-12 text-center">-->
            <!--<h3>11 12月抽獎活動 秋季大賞萬元旅遊金月月抽</h3>-->
          <!--</div>-->
          <!--<div class="col-sm-12 activity" style="text-align: left;">-->
            <!--<div style="margin-bottom: 15px;">-->
              <!--<div class="col-sm-12">-->
                <!--<strong><a href="https://www.facebook.com/kaistraventure/videos/1983748741911137/" target="_blank"><span style="color: #0000ff;">點我看 11月份抽獎直播</span></a></strong>-->
              <!--</div>-->
              <!--<div class="col-sm-12">-->
                <!--<strong><a href="https://www.facebook.com/kaistraventure/photos/a.1903827036569975.1073741828.1856981887921157/1970994976519847/?type=3&amp;theater" target="_blank"><span style="color: #0000ff;">點我看 獎品開箱文</span></a></strong>-->
              <!--</div>-->
              <!--<div class="col-sm-12">-->
                <!--<strong>活動獎項：</strong>-->
                <!--<ul>-->
                  <!--<li style="line-height:2.5">1. 易遊網旅行社兌換禮金<span style="color:#e84466;">10,000元</span>， 每月各抽<span style="color:#e84466;">2名，總共4名</span> 。<br/>-->
                    <!--<span style="position: relative;top: -10px;">(旅遊禮金面額2,000元x5張，可全額兌換旅遊行程、機票、國內外訂房等<a href="http://www.eztravel.com.tw/" target="_blank"><span style="color: #0000ff;">易遊網</span></a>旅行社網站所有商品，無使用限期)</span>-->
                  <!--</li>-->
                  <!--<li style="line-height:2.5">2. 新光三越商品禮券<span style="color:#e84466;">1,000元</span>， 每月各抽<span style="color:#e84466;">5名，總共10名</span> 。</li>-->
                  <!--<li style="line-height:2.5">3. 投保機車險成功，立即獲得<span style="color:#e84466;">150元</span>全家便利商店禮物卡。</li>-->

                <!--</ul>-->
              <!--</div>-->
              <!--<div class="col-sm-12">-->
                <!--<strong>活動期間：</strong>-->
                <!--<strong style="font-size: 16px;" class="actTime">2017年 11月 1日 00 : 01 ~ 2017年 12月 31日 23 : 59 止。</strong>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="col-sm-12">-->
              <!--<strong>活動辦法：</strong>-->
              <!--<ul>-->
                <!--<li>1. 活動期間於<b><a target="_blank" href="https://www.careline.com.tw/" style="color: #0000ff;text-decoration: underline;">英國凱萊</a></b>完成任ㄧ保險商品投保成功<b>(<a href="https://www.careline.com.tw/CareLineMotor/motorbike/index.html#/" style="color: #0000ff;text-decoration: underline;">機車強制險</a>、<a target="_blank" style="color: #0000ff;text-decoration: underline;" href="https://www.careline.com.tw/CareLineTravel/">旅行平安險</a>)</b>將獲得本活動抽獎資格ㄧ次。活動期間第二次完成英國凱萊任ㄧ保險商品投保成功(機車強制險、旅行平安險) 將獲得本活動抽獎資格兩次…以此類推。保險期間可不在活動期間內，核保成功後又取消保單者將喪失活動資格。</li>-->
                <!--<li>2. 11月份獎項將在12/1於英國凱萊官方粉絲團抽獎直播中，由電腦隨機抽出中獎者，12月份獎項將在1/2於英國凱萊官方粉絲團抽獎直播中，由電腦隨機抽出中獎者。</li>-->
                <!--<li>3. 11月份沒有中獎的所有活動參加者，擁有的抽獎資格與次數將累進至12月份抽獎活動中。</li>-->
                <!--<li>4. 收看抽獎直播請至官方粉絲團：<span style="color: #0000ff;text-decoration: underline;"><strong><a href="https://business.facebook.com/kaistraventure" target="_blank"><span style="color: #0000ff;">英國凱萊-凱的小生活大冒險</span></a></strong></span></li>-->
              <!--</ul>-->
            <!--</div>-->
            <!--<div class="notification col-sm-12">-->
              <!--<strong>注意事項：</strong>-->
              <!--<ul>-->
                <!--<li>1. 消費者須確保所有資料填寫無誤，填寫資料不實者將喪失得獎資格。</li>-->
                <!--<li>2. 依中華民國所得稅法規定，當年度中獎金額超過新臺幣1,000元，獎項所得應列入當年度個人綜合所得稅申報；若獎項所得總額超過新臺幣2萬元，需先行繳納10%稅額。</li>-->
                <!--<li>3. 本公司將主動以E-Mail、聯絡電話通知活動得獎人，活動得獎人需於指定回覆資料截止日前，提供真實姓名、身分證字號、地址、電話…等個人資訊以利相關領獎作業，逾期回覆或未回覆者視為棄權，本公司不遞補名額。</li>-->
                <!--<li>4. 獎項使用需遵守當地政府使用規範(法律、自治條例等)，本公司不負責所有後續使用相關的法律責任。</li>-->
                <!--<li>5. 本公司不負責獎項的後續保固、維修等衍生問題與責任。</li>-->
                <!--<li>6. 本活動僅限台灣地區（包含金門、馬祖、澎湖）設有居住所知本國人參加。獎品寄送亦僅限前述地區。</li>-->
                <!--<li>7. 如發現有足以影響活動公平性之事由，本公司有權取消其得獎資格，並不另行通知。</li>-->
                <!--<li>8. 本公司將保有修改、變更或暫停活動之最終權力。</li>-->
              <!--</ul>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="col-sm-12 text-center">-->
            <!--<button class="form-control goBkIndexBtn text-center" @click="toGoBackIndex('bakToIndex')">回到首頁</button>-->
            <!--<button class="backToIndexOfOtherPageButton text-center" @click="toGoBackIndex()">立即投保</button>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->

    <!--<div class="row">-->
      <!--<div class="col-xs-12 text-center">-->
        <!--<h2 class="specialH2">九、十月份活動</h2>-->
      <!--</div>-->
    <!--</div>-->

    <!--<div style=" min-height:720px;" class="container customerInfo animated slideInLeft">-->
      <!--<div class="row activityRow" v-for="activity in activities">-->
        <!--<div class="container">-->
          <!--<div class="col-sm-12">-->
            <!--<img style="width: 100%;" id="activityImg" class="img-responsive" :src="activity.activityBanner" alt="">-->
          <!--</div>-->
          <!--<div class="col-xs-12 text-center">-->
            <!--<h3>英國凱萊-華麗贈禮4重奏</h3>-->
          <!--</div>-->
          <!--<div class="col-sm-12 activity" style="text-align: left;">-->
            <!--<div style="margin-bottom: 15px;">-->
              <!--<div class="col-sm-12">-->
                <!--<p style="font-size: medium; color: #0000ff;"> <strong style="color: #0000ff;"><a style="color: #0000ff;" href="https://www.facebook.com/kaistraventure/posts/1946486095637402?pnref=story" target="_blank"><span style="color: #0000ff;"><strong><span><span style="color: #0000ff;text-decoration: underline;">點我看 獎品開箱文</span></span></strong></span></a> </strong></p>-->
                <!--<p style="font-size: medium; color: #0000ff;"><strong><a href="https://www.facebook.com/kaistraventure/videos/1970497376569607/" target="_blank"><span style="color: #0000ff;">點我看 十月份抽獎直播</span></a></strong></p>-->
                <!--<p style="font-size: medium; color: #0000ff;"><a style="color: #0000ff;" href="https://www.facebook.com/kaistraventure/videos/1957747474511264/" target="_blank"><span style="color: #0000ff;"><strong><span><span style="color: #0000ff;text-decoration: underline;">點我看 九月份抽獎直播</span></span></strong></span></a> </p>-->
              <!--</div>-->
              <!--<div class="col-sm-12">-->
                <!--<strong>活動名稱：</strong>-->
                <!--<strong class="activityTitle">{{activity.activityTitle}}</strong>-->
              <!--</div>-->
              <!--<div class="col-sm-12">-->
                <!--<strong>活動期間：</strong>-->
                <!--<strong style="font-size: 16px;" class="actTime">2017年9月1日00：01起至2017年10月31日23：59止。</strong>-->
              <!--</div>-->
              <!--<div class="col-sm-12">-->
                <!--<h4>-->
                  <!--<strong>活動獎項：</strong>-->
                <!--</h4>-->
                <!--<div class="row">-->
                  <!--<div class="col-xs-12 specialTable">-->
                    <!--<table>-->
                      <!--<tr>-->
                        <!--<td>-->
                          <!--<span class="titleSpan"  style="color: #e84466;font-weight:bold;">1.BALMUDA The Toaster蒸氣烤麵包機</span>-->
                          <!--<span>9月、10月各抽 <span style="color:red;font-weight:bold;">1 </span>名，總共 <span style="color:red;font-weight:bold;">2 </span>名。</span>-->
                        <!--</td>-->
                      <!--</tr>-->
                      <!--<tr>-->
                        <!--<td>-->
                          <!--<span class="titleSpan"  style="color: #e84466;font-weight:bold;">-->
                            <!--2.任天堂Switch-->
                          <!--</span>-->
                          <!--<span>9月、10月各抽</span>-->
                          <!--<span style="color:red;font-weight:bold;">1</span>-->
                          <!--名，總共-->
                          <!--<span style="color:red;font-weight:bold;">2</span>-->
                          <!--名。</span>-->
                        <!--</td>-->
                      <!--</tr>-->
                      <!--<tr>-->
                        <!--<td><span class="titleSpan"  style="color: #e84466;font-weight:bold;">3.Panasonic 奈米水離子吹風機(EH-NA98)</span>-->
                          <!--<span>9月、10月各抽-->
                        <!--<span style="color:red;font-weight:bold;">1</span>-->
                        <!--名，總共-->
                        <!--<span style="color:red;font-weight:bold;">2</span>-->
                        <!--名。</span>-->
                        <!--</td>-->
                      <!--</tr>-->
                      <!--<tr>-->
                        <!--<td>-->
                        <!--<span class="titleSpan" style="color: #e84466;font-weight:bold;">-->
                          <!--4.新光三越商品禮券 1,000元-->
                        <!--</span>-->
                          <!--<span>-->
                          <!--9月、10月各抽-->
                          <!--<span style="color:red;font-weight:bold;">5</span>-->
                          <!--名，總共-->
                          <!--<span style="color:red;font-weight:bold;">10</span>-->
                          <!--名。-->
                          <!--</span>-->
                        <!--</td>-->
                      <!--</tr>-->
                    <!--</table>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="col-sm-12">-->
                <!--<strong>活動辦法：</strong>-->
                <!--<ul>-->
                  <!--<li>1. 活動期間於<b><a href="https://www.careline.com.tw/" style="color: #0000ff;text-decoration: underline;">英國凱萊</a></b>完成任ㄧ保險商品投保成功<b>(<a href="https://www.careline.com.tw/CareLineMotor/motorbike/index.html#/" style="color: #0000ff;text-decoration: underline;">機車強制險</a>、<a target="_blank" style="color: #0000ff;text-decoration: underline;" href="https://www.careline.com.tw/CareLineTravel/">旅行平安險</a>)</b>將獲得本活動抽獎資格ㄧ次。活動期間第二次完成英國凱萊任ㄧ保險商品投保成功(機車強制險、旅行平安險) 將獲得本活動抽獎資格兩次…以此類推。保險期間可不在活動期間內，核保成功後又取消保單者將喪失活動資格。</li>-->
                  <!--<li>2. 9月份獎項將在10/2於英國凱萊官方粉絲團抽獎直播中，由電腦隨機抽出中獎者，10月份獎項將在11/1於英國凱萊官方粉絲團抽獎直播中，由電腦隨機抽出中獎者。</li>-->
                  <!--<li>3. 9月份沒有中獎的所有活動參加者，擁有的抽獎資格與次數將累進至10月份抽獎活動中。</li>-->
                  <!--<li>4. 收看抽獎直播請至官方粉絲團：<span style="color: #0000ff;text-decoration: underline;"><strong><a href="https://business.facebook.com/kaistraventure" target="_blank"><span style="color: #0000ff;">英國凱萊-凱的小生活大冒險</span></a></strong></span></li>-->
                <!--</ul>-->
            <!--</div>-->
            <!--<div class="col-sm-12 hidden">-->
              <!--<img style="width: 100%;" id="activityImg" class="img-responsive" src="" alt="">-->
            <!--</div>-->
            <!--<div class="notification col-sm-12">-->
              <!--<strong>注意事項：</strong>-->
              <!--<ul>-->
                <!--<li>1. 消費者須確保所有資料填寫無誤，填寫資料不實者將喪失得獎資格。</li>-->
                <!--<li>2. 依中華民國所得稅法規定，當年度中獎金額超過新臺幣1,000元，獎項所得應列入當年度個人綜合所得稅申報；若獎項所得總額超過新臺幣2萬元，需先行繳納10%稅額。</li>-->
                <!--<li>3. 本公司將主動以E-Mail、聯絡電話通知活動得獎人，活動得獎人需於指定回覆資料截止日前，提供真實姓名、身分證字號、地址、電話…等個人資訊以利相關領獎作業，逾期回覆或未回覆者視為棄權，本公司不遞補名額。</li>-->
                <!--<li>4. 獎項使用需遵守當地政府使用規範(法律、自治條例等)，本公司不負責所有後續使用相關的法律責任。</li>-->
                <!--<li>5. 本公司不負責獎項的後續保固、維修等衍生問題與責任。</li>-->
                <!--<li>6. 本活動僅限台灣地區（包含金門、馬祖、澎湖）設有居住所知本國人參加。獎品寄送亦僅限前述地區。</li>-->
                <!--<li>7. 如發現有足以影響活動公平性之事由，本公司有權取消其得獎資格，並不另行通知。</li>-->
                <!--<li>8. 本公司將保有修改、變更或暫停活動之最終權力。</li>-->
              <!--</ul>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->

    <!--<div class="row">-->
      <!--<div class="col-xs-12 text-center">-->
        <!--<h2 class="specialH2">七、八月份活動</h2>-->
      <!--</div>-->
    <!--</div>-->

    <!--<div style=" min-height:720px;" class="container customerInfo animated slideInLeft">-->
      <!--<div class="row activityRow" v-for="activity in activities">-->
        <!--<div class="container">-->
          <!--<div class="col-sm-12">-->
            <!--<img style="width: 100%;" id="activityImg2" class="img-responsive" :src="activity.activityBanner2" alt="">-->
          <!--</div>-->
          <!--<div class="col-xs-12 text-center">-->
            <!--<h3>夏之祭-投保抽電動滑板車</h3>-->
          <!--</div>-->
          <!--<div class="col-sm-12 activity" style="text-align: left;">-->
            <!--<div style="margin-bottom: 15px;">-->
              <!--<div class="col-sm-12">-->
                <!--<strong>活動名稱：</strong>-->
                <!--<strong class="activityTitle">夏之祭-投保抽小米電動滑板車。</strong>-->
              <!--</div>-->
              <!--<div class="col-sm-12">-->
                <!--<strong>活動期間：</strong>-->
                <!--<strong style="font-size: 16px;" class="actTime">2017年7月1日00：01起至2017年8月31日23：59止。</strong>-->
              <!--</div>-->
              <!--<div class="col-sm-12">-->
                <!--<strong>活動獎項：</strong>-->
                <!--<strong style="font-size: 16px;" class="actTime"><span style="color:#e84466;">小米電動滑板車</span>7月份、8月份各抽一台。</strong>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="col-sm-12">-->
              <!--<strong>活動內容：</strong>-->
              <!--<ul>-->
                <!--<li>1. 活動期間於<b><a href="https://www.careline.com.tw/">英國凱萊</a></b>完成任ㄧ保險商品投保成功<b>(<a href="https://www.careline.com.tw/CareLineMotor/motorbike/index.html#/">機車強制險</a>、<a target="_blank" href="https://www.careline.com.tw/CareLineTravel/">旅行平安險</a>)</b>將獲得本活動抽獎資格ㄧ次。活動期間第二次完成英國凱萊任ㄧ保險商品投保成功(機車強制險、旅行平安險) 將獲得本活動抽獎資格兩次…以此類推。保險期間可不在活動期間內，核保成功後又取消保單者將喪失活動資格。</li>-->
                <!--<br/>-->
                <!--<li>2. 7月份獎項將於8/1由電腦隨機抽出，8月份獎項將於9/1由電腦隨機抽出。7月份沒有中獎的所有活動參加者，擁有的抽獎資格與次數將累進至8月份抽獎活動中。獎項恕無法選色。</li>-->
                <!--<li>-->
                  <!--<span style="color: #0000ff;"><strong><a href="https://www.facebook.com/kaistraventure/videos/vb.1856981887921157/1943941622558516/?type=2&amp;theater" target="_blank"><span style="color: #0000ff;">點我看 八月份抽獎直播</span></a></strong></span>-->
                <!--</li>-->
                <!--<li>-->
                  <!--<span style="font-size: medium; color: #0000ff;"><strong><a href="https://www.facebook.com/kaistraventure/videos/vb.1856981887921157/1930400740579271/?type=2&amp;theater" target="_blank"><span style="color: #0000ff;">點我看 七月份抽獎直播</span></a></strong></span>-->
                <!--</li>-->
                <!--<li>-->
                  <!--<span style="font-size: medium; background-color: #ffffff; color: #0000ff;"><strong><strong><a href="https://goo.gl/Mvjhgb" target="_blank"><span style="color: #0000ff;">點我看 獎品開箱文</span></a></strong></strong></span>-->
                <!--</li>-->
              <!--</ul>-->
            <!--</div>-->
            <!--<div class="col-xs-12">-->
              <!--<img class="img-responsive" id="activityImgTwo2" src="static/images/activityPic/activityTwo.jpg" alt="">-->
            <!--</div>-->
            <!--<div class="notification col-sm-12">-->
              <!--<strong>注意事項：</strong>-->
              <!--<ul>-->
                <!--<li>1. 消費者須確保所有資料填寫無誤，填寫資料不實者將喪失得獎資格。</li>-->
                <!--<li>2. 依中華民國所得稅法規定，當年度中獎金額超過新臺幣1,000元，獎項所得應列入當年度個人綜合所得稅申報；若獎項所得總額超過新臺幣2萬元，需先行繳納10%稅額。</li>-->
                <!--<li>3. 本公司將主動以E-Mail、聯絡電話通知活動得獎人，活動得獎人需於指定回覆資料截止日前，提供真實姓名、身分證字號、地址、電話…等個人資訊以利相關領獎作業，逾期回覆或未回覆者視為棄權，本公司不遞補名額。</li>-->
                <!--<li>4. 獎項使用需遵守當地政府使用規範(法律、自治條例等)，本公司不負責所有後續使用相關的法律責任。</li>-->
                <!--<li>5. 本公司不負責獎項的後續保固、維修等衍生問題與責任。</li>-->
                <!--<li>6. 本活動僅限台灣地區（包含金門、馬祖、澎湖）設有居住所知本國人參加。獎品寄送亦僅限前述地區。</li>-->
                <!--<li>7. 如發現有足以影響活動公平性之事由，本公司有權取消其得獎資格，並不另行通知。</li>-->
                <!--<li>8. 本公司將保有修改、變更或暫停活動之最終權力。</li>-->
              <!--</ul>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
  <!--</div>-->
</template>

<script>
var $ = require('jquery')
window.jQuery = $
window.$ = $

export default {
  name: 'activityPage',
  head: {
    title: {
      inner: '活動說明 | Care Line英國凱萊 機車強制險'
    },
    meta: [
      {name: 'description', content: '活動說明｜英國凱萊不定期舉辦相關活動，活動說明請參考說明頁或撥打免費客服專線：0800-234-088 (週一~週五 09：30~18：00)'},
      {name: 'keywords', content: '投保,線上投保,Care Line,英國凱萊,Care Line英國凱萊,機車險,強制險,網路車險,活動,凱, 安安,壯壯'},
      {property: 'og:title', content: '活動說明 | Care Line英國凱萊 機車強制險'},
      {property: 'og:description', content: '活動說明｜英國凱萊不定期舉辦相關活動，活動說明請參考說明頁或撥打免費客服專線：0800-234-088 (週一~週五 09：30~18：00)'},
      {property: 'og:image', content: 'https://motor.careline.com.tw/FB.jpg'},
      {property: 'og:site_name', content: '英國凱萊CareLine 網路保險'},
      {property: 'og:email', content: 'service@careline.com.tw'},
      {property: 'og:phone_number', content: '0800234088'},
      {property: 'og:url', content: 'https://www.careline.com.tw/CareLineMotor/motorbike/index.html#/activityPage'}
    ]
  },
  data () {
    return {
      activities: [
        {
          activityBannerTwo: 'static/images/activityPic/activityTwo.jpg',
          activityBanner: 'static/images/activityPic/activity.jpg',
          activityBanner2: 'static/images/activityPic/augActivity.png',
          activityBanner3: 'static/images/activityPic/activity32.jpg',
          activityTitle: '英國凱萊-華麗贈禮4重奏。',
          activityTime: '',
          activityReward: '',
          activityContent: [
          ]
        }
      ]

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
          eventCategory: '活動專區頁',
          eventAction: 'click',
          eventLabel: 'User Click Logo',
          value: ''
        })
        window.location.href = 'http://www.careline.com.tw'
      } else if (val === 'bakToIndex') {
        this.$ga.event({
          eventCategory: '活動專區頁',
          eventAction: 'click',
          eventLabel: 'User Click 回到首頁',
          value: ''
        })
        this.$parent.$parent.toAnimatedDiv = false
        localStorage.setItem('toAnimatedDiv', false)
        this.$router.push('/')
      } else {
        this.$ga.event({
          eventCategory: '活動專區頁',
          eventAction: 'click',
          eventLabel: 'User Click 我要投保',
          value: ''
        })
        this.$parent.$parent.toAnimatedDiv = true
        localStorage.setItem('toAnimatedDiv', true)
        this.$router.push('/')
      }
//      this.$router.push('/')
    },
    toGoQandAPage: function () {
      this.$ga.event({
        eventCategory: '活動專區頁',
        eventAction: 'click',
        eventLabel: 'User Click QA',
        value: ''
      })
      window.open('/faq', '_blank')
    }
  },
  computed: {
    toShowActivity: function () {
      if (this.$parent.$parent.isActivityShow === false) {
        this.$router.push('/')
      } else {
        return this.$parent.$parent.isActivityShow
      }
    }
  },
  mounted () {
    $('#footer').addClass('hidden')
    window.location.href = '/activity'
    /* eslint-disable */
    var CE_SNAPSHOT_NAME = "活動說明 | Care Line英國凱萊 機車強制險 | 立刻投保 | Care Line英國凱萊 機車強制險"
    /* eslint-enable */
    window.scrollTo(0, 0)
    if ($(window).width() < 500) {
      $('#activityImg').attr('src', './static/images/activityPic/mobile/motorActivity4.jpg')
      $('#activityImg2').attr('src', './static/images/activityPic/mobile/motorActivitybak.jpg')
      $('#activityImgTwo2').attr('src', './static/images/activityPic/mobile/activityTwo.jpg')
      $('#activityImg3').attr('src', './static/images/activityPic/mobile/activity5Mobile.jpg')
    } else {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .specialH2 {
    color: rgb(204, 204, 204);
    background: white;
    position: relative;
    width: 250px;
    margin: 0 auto;
    z-index: 2;
  }
  strong {
    font-family: "segoe ui", "microsoft jhenghei", "microsoft mhei", stheititc, sans-serif;
    color: #808080;
    font-size: 16px;
    line-height: 1.5;
  }
  .activityTitle {
    color: #db4160;
    font-size: 16px;
    font-weight: 600;
  }
  .actTime {
    font-size: 16px;
    font-weight: normal;
  }

  .titleSpan {
    width:450px;
  }

  .logo {
    height: 40px;
    width: auto;
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
  .specilSecTable {
    position: relative;
    left: -40%;
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
  .goBkIndexBtn {
    display:inline-block;
    color: #8c8c8c;
    height: 40px;
    padding-top: 5px;
    background-color: white;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    width: 200px;
    border-color: #ccc;
    margin-right: 5px;
    margin-left: 5px;
    border-radius: 36px;
  }
  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
  }

  .activityRow h3 {
    text-transform: uppercase;
    font-size: 25px;
    color: #e84466;
    font-family: "segoe ui", "microsoft jhenghei", "microsoft mhei", stheititc, sans-serif;
  }

  .specialTable table {
    margin-left: 83px;
    font-size: 16px;
  }

  .customerInfo ul {
    padding-left: 84px!important;
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

  .activityRow {
    border: 1px solid #cccccc;
    margin-top:40px;
    padding: 15px;
    margin-bottom: 40px;
  }

  .activity {
    margin-top: 20px;
    margin-bottom: 30px;
  }
  .specialTable span {
    display: inline-block;
  }

  .customerInfo ul {
    padding-left: 105px;
  }
  a {
    text-decoration: underline!important;
  }
  @media screen and (max-width: 415px) {
    .goBkIndexBtn {
      position: relative;
      top: 50px;
    }
    .specilSecTable {
      position: relative;
      left:0px;
    }
    .specialTable span {
      height: 28px;
    }
    .thanksDiv {
      margin-top: -15px;
    }
    .specialTable table {
      margin-left: 0px;
      font-size: 16px;
    }
    .specialTable table td {
    }
    strong {
      font-size: 20px;
    }
    .backToIndexOfOtherPageButton {
      margin-bottom: 10px;
      font-size: 16px;
      border-color: transparent;
      position: relative;
      top: -50px;
    }
    .customerInfo ul {
      padding-left: 0px!important;
      padding-top: 5px;
    }
    .customerInfo ul li {
      padding-bottom: 5px;
    }
    .activity .col-sm-12 {
      padding-left: 0px;
      padding-right: 0px;
    }
    .col-sm-12 {
      padding-bottom: 5px;
    }
    .notification li {
      font-size: 14px!important;
    }
  }
  .col-sm-12 {
    padding-bottom: 10px;
  }
  .backToIndexOfOtherPageButton {
    display: inline-block;
    width: 200px;
    background-color: #e84466;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    color: white;
    border-radius: 10px;
    border-color: #ccc;
    -webkit-border-radius: 36px;
    -moz-border-radius: 36px;
    border-radius: 36px;
    font-size: 16px;
  }
  ul li {
    font-size: 16px;
    line-height: 1.5;
  }
  .notification li {
    font-size: 14px;
  }
  .notification {
    margin-top: 15px;
  }

</style>
