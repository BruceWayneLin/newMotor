<template>
  <div class="formPage">
    <!-- <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <div class="logo" @click="toGoBackIndex()"><a><img id="logoImg" style="max-width:180px;" src="../../static/assets/logo.png"/></a></div>
          <button @click="showingNavBar" type="button" class="navbar-toggle collapsed" data-toggle="collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <div id="navbar" class="navbar-collapse collapse" v-bind:class="{secondPageNav: alterChangeNav}">
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
        <img src="../assets/route991.png" class="img-responsive" style="margin-top:15px;" alt="">
      </div>
    </div>
    <div></div>
    <!-- applicant and insured form -->
    <div class="container customerForm animated " v-bind:class="{ slideOutLeft: isSlide, slideInLeft: !isSlide }">

      <!-- applicant form start here -->
      <div id="appName" style="position:absolute;top:-90px;"></div>
      <div class="row">
        <div class="col-sm-12">
          <div class="col-sm-6">
            <strong>要保人資料</strong>
          </div>
          <div class="col-sm-6">
            <span class="formTitleSpan">要保人姓名:</span>
            <div class="col-sm-6">
              <div class="innerClass col-sm-12">
                <input v-model="applicantLastName" maxlength="2" v-bind:class="{errorShow:applicantLastNameInValid}" v-bind="toComputedData" @change="toCheckNameVal('last')" class="form-control" name="lastName" type="text" placeholder="姓" required>
                <span  class="errorMessage" style="padding-right:999px;" v-show="applicantFirstNameInValid || applicantLastNameInValid">請輸入正確的中文姓名</span>
                <div class="iconErrorMessageBack" v-show="applicantFirstNameInValid || applicantLastNameInValid"></div>
              </div>
            </div>
            <div class="col-sm-6" style="margin-top:0px;">
              <div class="innerClass col-sm-12">
                <input v-model="applicantFirstName" maxlength="10" v-bind:class="{errorShow:applicantFirstNameInValid}" class="form-control" @change="toCheckNameVal('first')"  name="firstName" type="text" placeholder="名"required>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="appId" style="position:relative;top:-90px;"></div>
      <div class="row">
        <div class="col-sm-12">
          <div class="col-sm-6">
            <div class="col-sm-12">
            </div>
          </div>
          <div class="col-sm-6">
            <span class="formTitleSpan">要保人身分證字號:</span>
            <div class="col-sm-12">
              <div class="innerClass col-sm-12">
                <input style="text-transform:uppercase" v-model="applicantPid" @click="toCheckNameVal('send')" v-bind:class="{errorShow:pidInValid}"  @change="checkPid" maxlength="10" class="form-control" type="text" name="id" placeholder="身分證字號" required>
                <span  class="errorMessage" style="padding-right: 999px;" v-show="pidInValid">{{ pidErrorMsg }}</span>
                <div class="iconErrorMessageBack" v-show="pidInValid"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-12" v-show="!pidInValid">
          <div class="col-sm-6">
          </div>
          <div class="col-sm-6">
            <div class="gender text-left" v-bind:class="{ishidden: !pidFilled}">
              <span>{{ applicantLastName }} {{ applicantFirstName }} {{ welcomeMsg }}</span>
            </div>
          </div>
        </div>
      </div>

      <div id="appBd" style="position:relative;top:-90px;"></div>
      <div class="row">
        <div class="col-sm-12">
          <div class="col-sm-6">
          </div>
          <div class="col-sm-6">
            <div id="showOverScreen" class="col-sm-3 birthSpan">
              <span  class="formTitleSpan" style="margin-bottom: -10px;margin-left: 0px;">要保人生日:</span>
              <span id="hideInLowScreenID" class="hideInLowScreen">要保人生日:</span>
            </div>
            <div class="col-sm-3">
              <div class="selectWrapper" v-bind:class="{errorShow:BYearInValid}">
                <select @click="checkPid" @change="checkBirthYear" class="form-control" v-model="applicantBirthYear" id="birthYear" required>
                  <option value="">民國年</option>
                  <option v-for=" year in taiwanYear">民國{{ year }}年</option>
                </select>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="selectWrapper" v-bind:class="{errorShow:BMonthInValid}">
                <select @change="checkBirthMonth" :disabled="applicantBirthYear == '' "  class="form-control" v-model="applicantBirthMonth" id="birthMonth" required>
                  <option value="">月</option>
                  <option v-for=" month in taiwanMonth ">{{ month }} 月</option>
                </select>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="col-sm-12 innerClass">
                <div class="selectWrapper" v-bind:class="{errorShow:BDayInValid}" >
                  <select @change="checkBirthDay" class="form-control" :disabled="applicantBirthMonth == ''" v-model="applicantBirthDay" id="birthDay" required>
                    <option value="">日</option>
                    <option v-for=" day in thisMonthDays ">{{ day }} 日 </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-12" v-show="BYearInValid || BMonthInValid || BDayInValid">
          <div class="col-sm-6">
            <div class="col-sm-12">
            </div>
          </div>
          <div class="col-sm-6">
            <div class="col-sm-12">
              <div style="top:-12px;left: -4px;" class="iconErrorMessageBack" v-show="BYearInValid || BMonthInValid || BDayInValid">
              </div>
              <span id="specialAddrShrink" class="errorMessage" style="padding-right:999px" v-show="BYearInValid || BMonthInValid || BDayInValid">{{ BYearErrorMsg }}</span>
            </div>
          </div>
        </div>
      </div>

      <div id="appEmail" style="position:relative;top:-90px;"></div>
      <div class="row">
        <div class="col-sm-12">
          <div class="col-sm-6">
          </div>
          <div class="col-sm-6">
            <span class="formTitleSpan">要保人E-Mail:</span>
            <div class="col-sm-12">
              <input @click="checkBirthAgain"  maxlength="50" @change="checkEmail" v-bind:class="{errorShow:emailInValid}" class="form-control" v-model="applicantEmail" type="text" name="email" placeholder="E-mail" required>
              <span class="errorMessage" style="padding-right: 999px;" v-show="emailInValid">{{ emailErrorMsg }}</span>
              <div style="left:0px;" class="iconErrorMessageBack" v-show="emailInValid"></div>
            </div>
          </div>
        </div>
      </div>

      <div id="appMobile" style="position:relative;top:-90px;"></div>
      <div class="row">
        <div class="col-sm-12">
          <div class="col-sm-6">
          </div>
          <div class="col-sm-6">
            <span class="formTitleSpan">要保人手機:</span>
            <div class="col-sm-12">
              <div class="col-sm-12 innerClass">
                <input @change="checkMobile" @click="checkEmail" v-bind:class="{errorShow:mobileInValid}"  class="form-control" maxlength="10" v-model="applicantMobile" type="text" name="mobile" placeholder="0912345678" required>
                <span class="errorMessage" style="padding-right: 999px;" v-show="mobileInValid">{{ mobileErrorMsg }}</span>
                <div class="iconErrorMessageBack" v-show="mobileInValid">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="appAd" style="position:relative;top:-90px;"></div>
      <div class="row">
        <div class="col-sm-12">
          <div class="col-sm-6">
          </div>
          <div class="col-sm-6">
            <span class="formTitleSpan" style="margin-bottom: -10px;">要保人聯絡地址:</span>
            <div class="col-sm-4 addr">
              <div class="selectWrapper" @click="checkMobile"  v-bind:class="{errorShow:addrCityInValid}">
                <select @change="checkCity" v-model="applicantLivingCity" class="form-control" id="city" required>
                  <option value="">縣市</option>
                  <option v-for="city in cityList" :value="city">{{ city.name }}</option>
                </select>
              </div>
            </div>
            <div class="col-sm-4 addr">
              <div class="selectWrapper" v-bind:class="{errorShow:addrAreaInValid}">
                <select @change="checkArea" v-model="applicantLivingDistrict" :disabled="applicantLivingCity == ''" class="form-control" id="city" required>
                  <option value="">區</option>
                  <option v-for=" area in applicantAreaList" :value="area" >{{ area.name }}</option>
                </select>
              </div>
            </div>
            <div class="col-sm-4 addr">
              <input class="form-control" v-model="applicantLivingZipCode" disabled type="text" name="zipcode" placeholder="區號" required>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-12">
          <div class="col-sm-6">
            <div class="col-sm-12">
            </div>
          </div>
          <div class="col-sm-6">
            <div class="col-sm-12">
              <div style="left:-6px; top: -8px;" class="iconErrorMessageBack" v-show="addrCityInValid || addrAreaInValid"></div>
              <span id="specialAddrShrink" class="errorMessage" style="top:5px;padding-right:999px;" v-show="addrCityInValid || addrAreaInValid">{{ addrCityErrorMsg }}{{ addrAreaErrorMsg }}{{ addrErrorMsg }} 請確認地址以寄送保險文件與活動獎項。</span>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-12">
          <div class="col-sm-6">
          </div>
          <div class="col-sm-6">
            <div class="col-sm-12">
              <input @change="checkAddr" v-bind:class="{errorShow:addrInValid}" maxlength="40" :disabled="!applicantLivingZipCode" type="text" name="addr" v-model="applicantAddr" class="form-control" placeholder="地址" required>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-12">
          <div class="col-sm-6">
            <div class="col-sm-12">
            </div>
          </div>
          <div class="col-sm-6">
            <div class="col-sm-12">
              <div style="left:-6px; top: -8px;" class="iconErrorMessageBack" v-show="addrInValid"></div>
              <span id="specialAddrShrink" class="errorMessage" style="top:5px;padding-right:999px" v-show="addrInValid">{{ addrErrorMsg }} 請確認地址以寄送保險文件與活動獎項。</span>
            </div>
          </div>
        </div>
      </div>

      <div class="spanLine"></div>

      <!-- insured form start from here -->

      <div class="row">
        <div class="col-sm-12" style="margin-top:25px;">

        </div>
      </div>
      <div id="flagTwo" style="position:relative; top:-110px;"></div>
      <div class="row">
        <div class="col-sm-12">
          <div class="col-sm-6">
            <div class="col-sm-12">
              <strong >車主資料</strong>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="col-sm-12">
              <div class="col-sm-4 innerClass">
                <i class="fa fa-check" style="color:white;" :class="{notActiveBtnAbove: !ischecked}"></i>
                <input @click="insuredSameAsApplicant" v-model="isSameAsAboveTxt" class="sameAsApplicant form-control text-center btn-sm" :class="{isActiveBtnAbove: ischecked}" type="button" name="sameAsApplicant">
                <span class="checkboxSpan" v-show="false">
                  車主資料同上
                </span>
              </div>
              <div class="col-sm-8">
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row" v-show="!ischecked">
        <div class="col-sm-12">
          <div class="col-sm-6">
          </div>
          <div class="col-sm-6">
            <div class="col-sm-12">
              <div id="insuredRelation" style="position:relative;top:-100px;"></div>
              <div class="selectWrapper" v-bind:class="{errorShow:relationshipInValid}">
                <select @change="relationShipVali()" v-bind:class="{errorShow:relationshipInValid}" v-model="withInsuredRelationShipItem"  required class="form-control">
                  <option value="0">請選擇與車主關係</option>
                  <option v-for="item in relationShipList" :value="item">{{ item.text }}</option>
                </select>
              </div>
              <span class="errorMessage" style="padding-right: 999px;" v-show="relationshipInValid">{{ relationshipErrorMsg }}</span>
              <div class="iconErrorMessageBack specialIcon" style="right: -25px; left: 0px;margin-top:20px;" v-show="relationshipInValid"></div>
            </div>
          </div>
        </div>
      </div>

      <div id="insuredName" style="position:relative;top:-100px;"></div>
      <div class="row">
        <div class="col-sm-12">
          <div class="col-sm-6">
          </div>
          <div class="col-sm-6">
            <span class="formTitleSpan">車主姓名:</span>
            <div class="col-sm-6">
              <div class="innerClass col-sm-12">
                <input @click="relationShipVali" @change="checkInsuredLastName" :disabled="ischecked"  v-bind:class="{errorShow:insuredLastNameInValid}" maxlength="2" class="form-control" v-model="insuredLastName" name="lastName" type="text" placeholder="姓" required>
              </div>
            </div>
            <div class="col-sm-6" style="margin-top:0px;">
              <div class="innerClass col-sm-12">
                <input class="form-control" maxlength="10" :disabled="ischecked" @change="toCheckInsuredFirstNameVal" v-model="insuredFirstName" v-bind:class="{errorShow:insuredFirstNameInValid}"  name="firstName" type="text" placeholder="名" required>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-12">
          <div class="col-sm-6">
          </div>
          <div class="col-sm-6">
            <div class="col-sm-12">
              <span class="errorMessage" style="padding-right: 999px;" v-show="insuredLastNameInValid || insuredFirstNameInValid">請輸入正確中文姓名</span>
              <div style="left:0px;" class="iconErrorMessageBack motoErrorIcon" v-show="insuredFirstNameInValid || insuredLastNameInValid"></div>
            </div>
          </div>
        </div>
      </div>

      <div id="insuredId" style="position:relative;top:-100px;"></div>
      <div class="row">
        <div class="col-sm-12">
          <div class="col-sm-6">
          </div>
          <div class="col-sm-6">
            <span class="formTitleSpan">車主身分證字號:</span>
            <div class="col-sm-12">
              <input @click="toValiMotorName" style="text-transform:uppercase" class="form-control" :disabled="ischecked" @change="checkInsuredPid" v-model="insuredPid" v-bind:class="{errorShow:insuredPidInValid}" maxlength="10" type="text" name="id" placeholder="身分證字號" required>
              <span  class="errorMessage" style="padding-right: 999px;" v-show="insuredPidInValid">{{ insuredPidErrorMsg }}</span>
              <div class="iconErrorMessageBack" style="right: -25px;left: 0px;" v-show="insuredPidInValid"></div>
            </div>
          </div>
        </div>
      </div>

      <div id="insuredBd" style="position:relative;top:-100px;"></div>
      <div class="row">
        <div class="col-sm-12">
          <div class="col-sm-6">
          </div>
          <div class="col-sm-6">
            <div class="col-sm-3 birthSpan" >
              <span class="formTitleSpan" style="margin-bottom: -10px;margin-left:5px;">車主生日:</span>
              <span id="hideInLowScreenID" class="hideInLowScreen">車主生日:</span>
            </div>
            <div class="col-sm-3">
              <div class="selectWrapper" v-bind:class="{errorShow:insuredBYearInValid}">
                <select @change="insuredCheckBirthYear" @click="checkInsuredPid" class="form-control" v-model="insuredBirthYear" :disabled="ischecked" id="birthYear" required>
                  <option value="">民國年</option>
                  <option v-for=" year in taiwanYear ">民國{{ year }}年</option>
                </select>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="selectWrapper" v-bind:class="{errorShow:insuredBMonthInValid}">
                <select @change="insuredCheckBirthMonth" :disabled="!insuredBirthYear || ischecked" class="form-control" v-model="insuredBirthMonth" id="birthMonth" required>
                  <option value="">月</option>
                  <option v-for=" month in taiwanMonth ">{{ month }} 月</option>
                </select>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="col-sm-12 innerClass">
                <div class="selectWrapper" v-bind:class="{errorShow:insuredBDayInValid}">
                  <select @change="insuredCheckBirthDay" class="form-control" v-model="insuredBirthDay" :disabled="!insuredBirthMonth || ischecked" id="birthDay" required>
                    <option value="">日</option>
                    <option v-for=" day in thisInsuredMonthDays ">{{ day }} 日</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-12" v-show="insuredBYearInValid || insuredBMonthInValid || insuredBDayInValid">
          <div class="col-sm-6">
            <div class="col-sm-12">
            </div>
          </div>
          <div class="col-sm-6">
            <div class="col-sm-12">
              <div style="left:0px;" class="iconErrorMessageBack motoErrorIcon" v-show="insuredBYearInValid || insuredBMonthInValid || insuredBDayInValid"></div>
              <span id="specialAddrShrink" class="errorMessage" style="padding-right: 999px;" v-show="insuredBYearInValid || insuredBMonthInValid || insuredBDayInValid">{{ insuredBYearErrorMsg }}</span>
            </div>
          </div>
        </div>
      </div>

      <div id="insuredEmail" style="position:relative;top:-100px;"></div>
      <div class="row">
        <div class="col-sm-12">
          <div class="col-sm-6">
          </div>
          <div class="col-sm-6">
            <span class="formTitleSpan">車主E-Mail:</span>
            <div class="col-sm-12">
              <input @change="insuredCheckEmail" maxlength="50" :disabled="ischecked" @click="checkInsuredBDAgain" v-bind:class="{errorShow:insuredEmailInValid}" class="form-control" v-model="insuredEmail" type="text" name="email" placeholder="E-mail" required>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-12">
          <div class="col-sm-6">
          </div>
          <div class="col-sm-6">
            <div class="iconErrorMessageBack" v-show="insuredEmailInValid" style="right:-25px;left:14px;top:-5px;"></div>
            <span class="errorMessage" style="padding-right: 999px;margin-left: 15px;" v-show="insuredEmailInValid">{{ insuredEmailErrorMsg }}</span>
          </div>
        </div>
      </div>

      <div id="insuredMobile" style="position:relative;top:-100px;"></div>
      <div class="row">
        <div class="col-sm-12">
          <div class="col-sm-6">
          </div>
          <div class="col-sm-6">
            <span class="formTitleSpan">車主手機:</span>
            <div class="col-sm-12">
              <div class="col-sm-12 innerClass">
                <input @change="insuredCheckMobile" @click="insuredCheckEmail" :disabled="ischecked"  v-bind:class="{errorShow:insuredMobileInValid}"  class="form-control" maxlength="10" v-model="insuredMobile" type="text" name="mobile" placeholder="0912345678" required>
                <span class="errorMessage" style="padding-right: 999px;" v-show="insuredMobileInValid">{{ insuredMobileErrorMsg }}</span>
                <div class="iconErrorMessageBack" v-show="insuredMobileInValid">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="insuredAd" style="position:relative;top:-100px;"></div>
      <div class="row">
        <div class="col-sm-12">
          <div class="col-sm-6">
          </div>
          <div class="col-sm-6">
            <span class="formTitleSpan" style="margin-bottom: -10px;">車主聯絡地址:</span>
            <div class="col-sm-4 addr">
              <div class="selectWrapper" v-bind:class="{errorShow:insuredaddrCityInValid}">
                <select @change="insuredCheckCity" @click="insuredCheckMobile" v-model="insuredCity" :disabled="ischecked" class="form-control" id="city" required>
                  <option value="">縣市</option>
                  <option v-for="city in cityList" :value="city" >{{ city.name }}</option>
                </select>
              </div>
            </div>
            <div class="col-sm-4 addr">
              <div class="selectWrapper" v-bind:class="{errorShow:insuredaddrAreaInValid}">
                <select @change="insuredCheckArea" v-model="insuredDistrict" :disabled="insuredCity == '' || ischecked" class="form-control" id="city" required>
                  <option value="">區</option>
                  <option v-for=" area in newAreaList" :value="area" >{{ area.name }}</option>
                </select>
              </div>
            </div>
            <div class="col-sm-4 addr">
              <input class="form-control" v-model="insuredZipCode"  disabled type="text" name="zipcode" placeholder="區號" required>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-12" v-show="insuredaddrCityInValid || insuredaddrAreaInValid">
          <div class="col-sm-6">
          </div>
          <div class="col-sm-6">
            <span id="specialAddrShrink" class="errorMessage" style="padding-right: 999px;top:5px;margin-left:15px;" v-show="insuredaddrCityInValid || insuredaddrAreaInValid">{{ insuredaddrCityErrorMsg }}{{ insuredaddrAreaErrorMsg }}{{ addrErrorMsg }} 請確認地址以寄送保險文件與活動獎項。</span>
            <div style="left:11px;top:-8px;" class="iconErrorMessageBack" v-show="insuredaddrCityInValid || insuredaddrAreaInValid"></div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-12">
          <div class="col-sm-6">
          </div>
          <div class="col-sm-6">
            <div class="col-sm-12">
              <input @change="insuredCheckAddr" maxlength="40" v-bind:class="{errorShow:insuredaddrInValid}" :disabled="!insuredZipCode || ischecked" type="text" name="addr" v-model="insuredAddr" class="form-control" placeholder="地址" required>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-12" v-show="insuredaddrInValid">
          <div class="col-sm-6">
          </div>
          <div class="col-sm-6">
            <div class="iconErrorMessageBack" style="top:-7px;left:9px;" v-show="insuredaddrInValid" ></div>
            <span id="specialAddrShrink" class="errorMessage" style="padding-left:15px; top:5px; padding-right:999px;" v-show="insuredaddrInValid">{{ insuredaddrErrorMsg }} 請確認地址以寄送保險文件與活動獎項。</span>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-12">
          <div class="col-sm-6">
          </div>
          <div class="col-sm-6">
            <div class="col-sm-12 contractRules">
              <p><input type="checkbox" v-model="agreementRead" name="agreementCheckBox">
                我已閱讀 << <a @click="principleAnnounce" href="/CareLineMotor/motorbike-mbr/viewpdf/announcement?v=1" target="_blank">網絡保險服務聲明事項</a> >> ， << <a href="/CareLineMotor/motorbike-mbr/viewpdf/protection?v=1" target="_blank" @click="showPersonalAnnouce">保險代理人履行個人資料保護法告知義務內容</a> >>文件，並同意。</p>
            </div>
          </div>
        </div>
      </div>

      <div class="row MobileUse">
        <div class="col-sm-12">
          <div class="col-sm-5">
          </div>
          <div class="col-sm-7">
            <button class="btn btn-primary NextButton"  @click="completeStepOne">下一步</button>
            <button class="btn btn-danger NextButton" @click="toGoBackIndex('up')">上一步</button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal-mask" v-show="visible">
      <div class="modal-wrapper">
        <div class="modal-container" style="width:300px;">

          <div class="modal-header">
            <slot name="header">
              <img class="logo" src="../assets/logo.png"/>
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              <p>{{errorMsgOfFailSent}}</p>
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

    <!--modal of pdf-->
    <div class="modal-mask" v-show="ModalVisible">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              <img class="logoModal" style="height:40px;" src="../assets/logo.png"/>
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              <pdf v-show="true" :page="page" :src="src"></pdf>
              <span @click="toNxtPDFPage">下一頁 <i class="fa fa-angle-right"></i></span>
              </object>
            </slot>
          </div>

          <div class="modal-footer text-center" >
            <slot name="footer">
              <button style="margin:10px auto" class="modal-default-button"  @click="closeModal">
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
import pdf from 'vue-pdf'

var $ = require('jquery')
window.jQuery = $
window.$ = $

export default {
  name: 'formPage',
  components: {
    pdf
  },
  head: {
    title: {
      inner: '要保人資料 | Care Line英國凱萊 機車強制險'
    },
    meta: [
      {name: 'description', content: '要保人資料｜車主資料 姓名. 身分證字號. 生日. 信箱. 手機. 住址…我已閱讀《網路要保聲明事項》，《個人資料聲明事項》文件，並同意'},
      {name: 'keywords', content: '投保,線上投保,Care Line,英國凱萊,Care Line英國凱萊,機車險,強制險,網路車險,凱, 安安,壯壯'},
      {property: 'og:title', content: '要保人資料 | Care Line英國凱萊 機車強制險'},
      {property: 'og:description', content: '要保人資料｜車主資料 姓名. 身分證字號. 生日. 信箱. 手機. 住址…我已閱讀《網路要保聲明事項》，《個人資料聲明事項》文件，並同意'},
      {property: 'og:image', content: 'https://motor.careline.com.tw/FB.jpg'},
      {property: 'og:site_name', content: '英國凱萊CareLine 網路保險'},
      {property: 'og:email', content: 'service@careline.com.tw'},
      {property: 'og:phone_number', content: '0800234088'},
      {property: 'og:url', content: 'https://www.careline.com.tw/CareLineMotor/motorbike/piForm'}
    ],
    script: [
    ]
  },
  data () {
    return {
      // ModalVisible
      src: '',
      page: 1,
      ModalVisible: false,
      // determine if the form slide
      isSlide: false,
      // is same as above text
      isSameAsAboveTxt: '車主資料同上',
      // applicant data
      applicantFirstNameInValid: false,
      applicantLastNameInValid: false,
      applicantNameInValid: false,
      applicantLastName: '',
      applicantFirstName: '',
      nameErrorMsg: '',
      applicantPid: '',
      pidInValid: false,
      gender: '',
      welcomeMsg: '',
      pidFilled: false,
      BYearErrorMsg: '',
      BMonthErrorMsg: '',
      BDayErrorMsg: '',
      pidErrorMsg: '',
      BYearInValid: false,
      BMonthInValid: false,
      BDayInValid: false,
      applicantBirthYear: '',
      applicantBirthMonth: '',
      applicantBirthDay: '',
      emailInValid: false,
      applicantEmail: '',
      emailErrorMsg: '',
      applicantMobile: '',
      mobileInValid: false,
      addrInValid: false,
      addrCityInValid: false,
      addrAreaInValid: false,
      newAreaList: [],
      mobileErrorMsg: '',
      addrCityErrorMsg: '',
      addrAreaErrorMsg: '',
      addrErrorMsg: '',
      applicantLivingCity: '',
      applicantLivingCityId: '',
      applicantLivingDistrict: '',
      applicantAddr: '',
      applicantAreaList: [],

      // from here is the insured value
      ischecked: true,
      agreementRead: true,
      relationshipInValid: false,
      insuredLastNameInValid: false,
      insuredFirstNameInValid: false,
      insuredPidInValid: false,
      insuredBYearInValid: false,
      insuredBMonthInValid: false,
      insuredBDayInValid: false,
      insuredMobileInValid: false,
      insuredaddrInValid: false,
      insuredaddrCityInValid: false,
      insuredaddrAreaInValid: false,
      insuredEmailInValid: false,
      relationshipErrorMsg: '',
      insuredLastNameErrorMsg: '',
      insuredFirstNameErrorMsg: '',
      insuredPidErrorMsg: '',
      withInsuredRelationShipItem: '0',
      withInsuredRelationShip: '',
      insuredLastName: '',
      insuredFirstName: '',
      insuredPid: '',
      insuredGender: '',
      insuredBirthYear: '',
      insuredBirthMonth: '',
      insuredBirthDay: '',
      insuredBYearErrorMsg: '',
      insuredBMonthErrorMsg: '',
      insuredBDayErrorMsg: '',
      insuredMobileErrorMsg: '',
      insuredaddrCityErrorMsg: '',
      insuredaddrAreaErrorMsg: '',
      insuredaddrErrorMsg: '',
      insuredEmailErrorMsg: '',
      insuredMobile: '',
      insuredCity: '',
      insuredCityId: '',
      insuredDistrict: '',
      insuredDistrictId: '',
      insuredAddr: '',
      insuredEmail: '',
      insuredDataSameAsApplicant: {},
      insuredareaList: [],

      // determine if the modal show or not
      visible: false,
      errorMsgOfFailSent: '',
      userSelectedProduct: {}
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
    closeModal: function () {
      this.ModalVisible = false
      this.visible = false
    },
    toNxtPDFPage: function () {
      if (this.page === 2) {
        this.page = 1
      } else {
        this.page++
      }
    },
    showPersonalAnnouce: function () {
      this.$ga.event({
        eventCategory: '車主資料頁',
        eventAction: 'click',
        eventLabel: 'User Click 產險業個人資料法',
        value: ''
      })
    },
    principleAnnounce: function () {
      this.$ga.event({
        eventCategory: '車主資料頁',
        eventAction: 'click',
        eventLabel: 'User Click 網路服務聲明事項',
        value: ''
      })
    },
    relationShipVali: function () {
      if (!this.withInsuredRelationShipItem || this.withInsuredRelationShipItem === '' || this.withInsuredRelationShipItem === '0') {
        this.relationshipErrorMsg = '被保人關係是必選欄位'
        this.relationshipInValid = true
        return false
      } else if (this.withInsuredRelationShipItem.value === 'SELF') {
        this.ischecked = true
        return true
      } else {
        this.relationshipErrorMsg = ''
        this.relationshipInValid = false
        return true
      }
    },
    toGoBackIndex: function (val) {
      console.log(val)
      if (val === 'up') {
        this.$ga.event({
          eventCategory: '車主資料頁',
          eventAction: 'click',
          eventLabel: 'User Click 上一步',
          value: ''
        })
        this.$router.push('/')
      } else {
        this.$ga.event({
          eventCategory: '車主資料頁',
          eventAction: 'click',
          eventLabel: 'User Click Logo',
          value: ''
        })
        window.location.href = 'http://www.careline.com.tw'
      }
    },
    toGoQandAPage: function () {
      this.$ga.event({
        eventCategory: '車主資料頁',
        eventAction: 'click',
        eventLabel: 'User Click QA',
        value: ''
      })
      window.open('/faq', '_blank')
    },
    // check Applicant name
    toCheckNameVal: function (value) {
      if (value === 'last') {
        if (!(/^[\u4E00-\u9FFF\u3400-\u4DFF]+$/.test(this.applicantLastName))) {
          this.applicantLastNameInValid = true
          this.applicantLastName = ''
          return false
        } else {
          this.applicantLastNameInValid = false
          return true
        }
      } else if (value === 'first') {
        if (!(/^[\u4E00-\u9FFF\u3400-\u4DFF]+$/.test(this.applicantFirstName))) {
          this.applicantFirstNameInValid = true
          this.applicantFirstName = ''
          return false
        } else {
          this.applicantFirstNameInValid = false
          return true
        }
      } else if (value === 'send') {
        if (!(/^[\u4E00-\u9FFF\u3400-\u4DFF]+$/.test(this.applicantFirstName)) && !(/^[\u4E00-\u9FFF\u3400-\u4DFF]+$/.test(this.applicantLastName))) {
          this.applicantFirstNameInValid = true
          this.applicantFirstName = ''
          this.applicantLastNameInValid = true
          this.applicantLastName = ''
          return false
        } else if (!(/^[\u4E00-\u9FFF\u3400-\u4DFF]+$/.test(this.applicantFirstName))) {
          this.applicantFirstNameInValid = true
          this.applicantFirstName = ''
          return false
        } else if (!(/^[\u4E00-\u9FFF\u3400-\u4DFF]+$/.test(this.applicantLastName))) {
          this.applicantLastNameInValid = true
          this.applicantLastName = ''
          return false
        } else {
          this.applicantLastNameInValid = false
          this.applicantFirstNameInValid = false
          return true
        }
      }
    },
    // pid validation
    CheckTaiwanID: function (userid) {
      // 身份證檢查函式
      var reg = /^[A-Z]{1}[1-2]{1}[0-9]{8}$/
      // 身份證的正規表示式
      if (reg.test(userid)) {
        var s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' // 把A取代成10,把B取代成11...的作法
        var ct = ['10', '11', '12', '13', '14', '15', '16', '17', '34', '18', '19', '20', '21',
          '22', '35', '23', '24', '25', '26', '27', '28', '29', '32', '30', '31', '33']
        var i = s.indexOf(userid.charAt(0))
        var tempuserid = ct[i] + userid.substr(1, 9) // 若此身份證號若是A123456789=>10123456789
        var num = tempuserid.charAt(0) * 1
        for (i = 1; i <= 9; i++) {
          num = num + tempuserid.charAt(i) * (10 - i)
        }
        num += tempuserid.charAt(10) * 1
        if ((num % 10) === 0) {
          return true
        } else {
          return false
        }
      } else {
        return false
      }
    },
    // check Applicant Pid
    checkPid: function () {
      if (this.applicantPid) {
        if (!this.CheckTaiwanID(this.applicantPid.toUpperCase())) {
          this.pidInValid = true
          this.pidErrorMsg = '身分證字號格式錯誤'
          return false
        } else {
          // 取出第一個字元和最後一個數字。
          let firstChar = this.applicantPid.charAt(1).toUpperCase()
          if (firstChar === '1') {
            this.welcomeMsg = '先生，您好！歡迎來到凱萊機車保險。'
            this.gender = 'male'
            this.pidFilled = true
          } else if (firstChar === '2') {
            this.welcomeMsg = '小姐，您好！歡迎來到凱萊機車保險。'
            this.gender = 'female'
            this.pidFilled = true
          }
          this.pidInValid = false
          return true
        }
      } else if (this.applicantPid === '') {
        this.pidInValid = true
        this.pidErrorMsg = '請輸入身分證字號'
        return false
      }
    },
    // check applicant birthday
    checkBirthYear: function () {
      // birthDay validation
      if (this.applicantBirthYear === '民國年' || this.applicantBirthYear === '') {
        this.BYearInValid = true
        this.BYearErrorMsg = '請選擇要保人生日，要保人須年滿18歲。'
        return false
      } else if (this.applicantBirthYear !== '' || this.applicantBirthMonth !== '' || this.applicantBirthDay !== '') {
        var year = parseInt(this.applicantBirthYear.slice(2, 5)) + 1929
        var month = parseInt(this.applicantBirthMonth.slice(0, 5))
        var day = parseInt(this.applicantBirthDay.slice(0, 5))
        var today = new Date()
        var dd = today.getDate()
        var mm = today.getMonth() + 1
        var yyyy = today.getFullYear()
        if (year === yyyy) {
          if ((month > mm && day > dd) || (month === mm && day > dd) || (month > mm)) {
            this.BYearInValid = true
            this.BMonthInValid = true
            this.BDayInValid = true
            this.BYearErrorMsg = '請選擇要保人生日，要保人須年滿18歲。'
            return false
          } else {
            this.BYearInValid = false
            this.BMonthInValid = false
            this.BDayInValid = false
            return true
          }
        } else {
          this.BYearInValid = false
          this.BMonthInValid = false
          this.BDayInValid = false
          return true
        }
      } else {
        this.BYearInValid = false
        this.BYearErrorMsg = ''
        return true
      }
    },
    checkBirthMonth: function (val) {
      if (this.applicantBirthMonth === '月' || this.applicantBirthMonth === '') {
        this.BMonthInValid = true
        this.BYearErrorMsg = '請選擇要保人生日，要保人須年滿18歲。'
        return false
      } else if (this.applicantBirthYear !== '' || this.applicantBirthMonth !== '' || this.applicantBirthDay !== '') {
        var year = parseInt(this.applicantBirthYear.slice(2, 5)) + 1929
        var month = parseInt(this.applicantBirthMonth.slice(0, 5))
        var day = parseInt(this.applicantBirthDay.slice(0, 5))
        var today = new Date()
        var dd = today.getDate()
        var mm = today.getMonth() + 1
        var yyyy = today.getFullYear()
        if (year === yyyy) {
          if ((month > mm && day > dd) || (month === mm && day > dd) || (month > mm)) {
            this.BMonthInValid = true
            this.BDayInValid = true
            this.BYearErrorMsg = '請選擇要保人生日，要保人須年滿18歲。'
            return false
          } else {
            this.BYearInValid = false
            this.BMonthInValid = false
            this.BDayInValid = false
            return true
          }
        } else {
          this.BYearInValid = false
          this.BMonthInValid = false
          this.BDayInValid = false
          return true
        }
      } else {
        if (val === 'last') {
        } else {
          this.applicantBirthDay = ''
        }
        this.BMonthInValid = false
        this.BMonthErrorMsg = ''
        return true
      }
    },
    checkBirthDay: function () {
      if (this.applicantBirthDay === '日' || this.applicantBirthDay === '') {
        this.BDayInValid = true
        this.BYearErrorMsg = '請選擇要保人生日，要保人須年滿18歲'
        return false
      } else if (this.applicantBirthYear !== '' || this.applicantBirthMonth !== '' || this.applicantBirthDay !== '') {
        var year = parseInt(this.applicantBirthYear.slice(2, 5)) + 1929
        var month = parseInt(this.applicantBirthMonth.slice(0, 5))
        var day = parseInt(this.applicantBirthDay.slice(0, 5))
        var today = new Date()
        var dd = today.getDate()
        var mm = today.getMonth() + 1
        var yyyy = today.getFullYear()
        if (year === yyyy) {
          if ((month > mm && day > dd) || (month === mm && day > dd) || (month > mm)) {
            this.BMonthInValid = true
            this.BDayInValid = true
            this.BYearErrorMsg = '請選擇要保人生日，要保人須年滿18歲。'
            return true
          } else {
            this.BYearInValid = false
            this.BMonthInValid = false
            this.BDayInValid = false
            return true
          }
        } else {
          this.BYearInValid = false
          this.BMonthInValid = false
          this.BDayInValid = false
          return true
        }
      } else {
        this.BDayInValid = false
        this.BMonthErrorMsg = ''
        return true
      }
    },
    checkEmail: function () {
      if (this.applicantEmail) {
        if ((this.applicantEmail.match(/^([a-z0-9+_-]+)(.[a-z0-9+_-]+)*@([a-z0-9-]+.)+[a-z]{2,6}$/gi))) {
          let reg = new RegExp('[^@]+@[^@]+\\.[^@]+')
          if (!reg.test(this.applicantEmail)) {
            this.emailInValid = true
            this.emailErrorMsg = '格式錯誤，請輸入正確email地址'
            return false
          } else {
            this.emailInValid = false
            return true
          }
        } else {
          this.emailInValid = true
          this.emailErrorMsg = '請輸入正確email地址'
          return false
        }
      } else if (this.applicantEmail === '') {
        this.emailInValid = true
        this.emailErrorMsg = '請輸入正確email地址'
        return false
      }
    },
    checkMobile: function () {
      if (this.applicantMobile) {
        var re = /^09\d{2}-?\d{3}-?\d{3}$/
        if (!re.test(this.applicantMobile)) {
          this.mobileInValid = true
          this.mobileErrorMsg = '格式錯誤，請提供行動電話如：0912345678'
          return false
        } else {
          this.mobileInValid = false
          return true
        }
      } else if (this.applicantMobile === '') {
        this.mobileInValid = true
        this.mobileErrorMsg = '請提供行動電話如：0912345678'
        return false
      }
    },
    checkCity: function () {
      if (!this.applicantLivingCity || this.applicantLivingCity === '') {
        this.addrCityInValid = true
        this.addrCityErrorMsg = ''
        return false
      } else {
        this.addrCityInValid = false
        this.applicantLivingDistrict = ''
        this.applicantLivingCityId = this.applicantLivingCity.id
        return true
      }
    },
    checkArea: function () {
      if (!this.applicantLivingDistrictId || this.applicantLivingDistrictId === '') {
        this.addrAreaInValid = true
        this.addrErrorMsg = ''
        return false
      } else {
        this.addrAreaInValid = false
        return true
      }
    },
    areaList: function () {
      var districtList = this.$parent.$parent.AdistrictList
      this.applicantLivingCityId = this.applicantLivingCity.id
      let returnNewAreaList = []
      for (var i = 0; i < districtList.length; i++) {
        if (districtList[i].cityId === this.applicantLivingCityId) {
          returnNewAreaList.push((districtList[i]))
        }
      }
      this.applicantAreaList = returnNewAreaList
    },
    insuredAreaList: function () {
      var districtList = this.$parent.$parent.IdistrictList
      this.insuredDistrictId = this.insuredCity.id
      var returnNewAreaList = []
      for (let i = 0; i < districtList.length; i++) {
        if (districtList[i].cityId === this.insuredDistrictId) {
          returnNewAreaList.push((districtList[i]))
        }
      }
      this.newAreaList = returnNewAreaList
    },
    checkAddr: function () {
      if (!this.applicantAddr || this.applicantAdd === '') {
        this.addrInValid = true
        this.addrErrorMsg = ''
        return false
      } else {
        this.addrInValid = false
        return true
      }
    },
    checkBirthAgain: function () {
      if (this.applicantBirthYear === '' || this.applicantBirthMonth === '' || this.applicantBirthDay === '') {
        this.BYearInValid = true
        this.BMonthInValid = true
        this.BDayInValid = true
        this.BYearErrorMsg = '請選擇要保人生日，要保人須年滿18歲。'
      } else {
      }
    },
    // insured data from here
    insuredSameAsApplicant: function (event) {
      this.$ga.event({
        eventCategory: '車主資料頁',
        eventAction: 'click',
        eventLabel: 'User Click 車主資料同上',
        value: ''
      })
      this.ischecked = !this.ischecked
      if (this.ischecked) {
        this.ischecked = true
        this.insuredLastName = this.applicantLastName
        this.insuredFirstName = this.applicantFirstName
        this.insuredPid = this.applicantPid
        this.insuredGender = this.gender
        this.insuredBirthYear = this.applicantBirthYear
        this.insuredBirthMonth = this.applicantBirthMonth
        this.insuredBirthDay = this.applicantBirthDay
        this.insuredMobile = this.applicantMobile
        this.insuredCity = this.applicantLivingCity
        this.insuredCityId = this.applicantLivingCityId
        this.insuredDistrict = this.applicantLivingDistrict
        this.insuredDistrictId = this.applicantLivingDistrictId
        this.insuredAddr = this.applicantAddr
        this.insuredEmail = this.applicantEmail
        this.agreementRead = true
        this.relationshipInValid = false
        this.insuredLastNameInValid = false
        this.insuredFirstNameInValid = false
        this.insuredPidInValid = false
        this.insuredBYearInValid = false
        this.insuredBMonthInValid = false
        this.insuredBDayInValid = false
        this.insuredMobileInValid = false
        this.insuredaddrInValid = false
        this.insuredaddrCityInValid = false
        this.insuredaddrAreaInValid = false
        this.insuredEmailInValid = false
        this.withInsuredRelationShipItem = { text: '本人', value: 'SELF' }
        this.withInsuredRelationShip = this.withInsuredRelationShipItem.value
      } else {
        this.insuredLastName = ''
        this.insuredFirstName = ''
        this.insuredPid = ''
        this.insuredGender = ''
        this.insuredBirthYear = ''
        this.insuredBirthMonth = ''
        this.insuredBirthDay = ''
        this.insuredMobile = ''
        this.insuredCity = ''
        this.insuredCityId = ''
        this.insuredDistrict = ''
        this.insuredDistrictId = ''
        this.insuredAddr = ''
        this.insuredEmail = ''
        this.agreementRead = true
        this.relationshipInValid = false
        this.insuredLastNameInValid = false
        this.insuredFirstNameInValid = false
        this.insuredPidInValid = false
        this.insuredBYearInValid = false
        this.insuredBMonthInValid = false
        this.insuredBDayInValid = false
        this.insuredMobileInValid = false
        this.insuredaddrInValid = false
        this.insuredaddrCityInValid = false
        this.insuredaddrAreaInValid = false
        this.insuredEmailInValid = false
        this.withInsuredRelationShipItem = '0'
      }
    },
    checkInsuredLastName: function (event) {
      // name validation
      if (this.insuredLastName) {
        if (this.insuredLastName.match(/[^\u3447-\uFA29]/ig)) {
          this.insuredLastName = ''
          this.insuredLastNameInValid = true
          this.insuredFirstNameErrorMsg = ''
          this.$parent.isCompleted = false
          return false
        } else {
          this.insuredLastNameInValid = false
          this.insuredLastNameErrorMsg = ''
          return true
        }
      } else if (this.insuredLastName === '') {
        this.insuredLastName = ''
        this.insuredLastNameInValid = true
        this.insuredLastNameErrorMsg = '請輸入車主姓名'
        return false
      }
    },
    toCheckInsuredFirstNameVal: function () {
      if (this.insuredFirstName) {
        if (this.insuredFirstName.match(/[^\u3447-\uFA29]/ig)) {
          this.insuredFirstName = ''
          this.insuredFirstNameInValid = true
          this.$parent.isCompleted = false
          this.insuredFirstNameErrorMsg = '請輸入正確中文姓名'
          return false
        } else {
          this.insuredFirstNameInValid = false
          this.insuredFirstNameErrorMsg = ''
          return true
        }
      } else if (this.insuredFirstName === '') {
        this.insuredFirstName = ''
        this.insuredFirstNameInValid = true
        this.insuredFirstNameErrorMsg = '請輸入車主姓名'
        return false
      }
    },
    checkInsuredPid: function () {
      if (this.insuredPid) {
        if (!this.CheckTaiwanID(this.insuredPid.toUpperCase())) {
          this.insuredPidInValid = true
          this.insuredPidErrorMsg = '身分證字號格式錯誤'
          return false
        } else {
          // 取出第一個字元和最後一個數字。
          let firstChar = this.insuredPid.charAt(1).toUpperCase()
          if ((this.insuredPid === this.applicantPid) && (this.withInsuredRelationShipItem.value !== 'SELF')) {
            this.insuredPidInValid = true
            this.insuredPidErrorMsg = '車主非本人，車主身分證字號不可以和要保人一樣。'
          } else if (firstChar === '1') {
            this.insuredGender = 'male'
            this.insuredPidInValid = false
            return true
          } else if (firstChar === '2') {
            this.insuredGender = 'female'
            this.insuredPidInValid = false
            return true
          }
        }
      } else if (this.insuredPid === '') {
        this.insuredPidInValid = true
        this.insuredPidErrorMsg = '請輸入車主身分證字號'
        return false
      }
    },
    insuredCheckBirthYear: function () {
      // birthDay validation
      if (this.insuredBirthYear === '民國年' || this.insuredBirthYear === '') {
        this.insuredBYearInValid = true
        this.insuredBYearErrorMsg = '請選擇車主生日，車主須年滿18歲。'
        return false
      } else if (this.insuredBirthYear !== '' || this.insuredBirthMonth !== '' || this.insuredBirthDay !== '') {
        var insuredyear = parseInt(this.insuredBirthYear.slice(2, 5)) + 1929
        var insuredmonth = parseInt(this.insuredBirthMonth.slice(0, 5))
        var insuredday = parseInt(this.insuredBirthDay.slice(0, 5))
        var insuredtoday = new Date()
        var insureddd = insuredtoday.getDate()
        var insuredmm = insuredtoday.getMonth() + 1
        var insuredyyyy = insuredtoday.getFullYear()
        if (insuredyear === insuredyyyy) {
          if ((insuredmonth > insuredmm && insuredday > insureddd) || (insuredmonth === insuredmm && insuredday > insureddd) || (insuredmonth > insuredmm)) {
            this.insuredBMonthInValid = true
            this.insuredBDayInValid = true
            this.insuredBYearErrorMsg = '請選擇要保人生日，要保人須年滿18歲。'
            return false
          } else {
            this.insuredBYearInValid = false
            this.insuredBMonthInValid = false
            this.insuredBDayInValid = false
            return true
          }
        } else {
          this.insuredBYearInValid = false
          this.insuredBMonthInValid = false
          this.insuredBDayInValid = false
          return true
        }
      } else {
        this.insuredBYearInValid = false
        this.insuredBYearErrorMsg = ''
        return true
      }
    },
    insuredCheckBirthMonth: function (val) {
      if (this.insuredBirthMonth === '月' || this.insuredBirthMonth === '') {
        this.insuredBMonthInValid = true
        this.insuredBYearErrorMsg = '請選擇車主生日，車主須年滿18歲。'
        return false
      } else if (this.insuredBirthYear !== '' || this.insuredBirthMonth !== '' || this.insuredBirthDay !== '') {
        var insuredyear = parseInt(this.insuredBirthYear.slice(2, 5)) + 1929
        var insuredmonth = parseInt(this.insuredBirthMonth.slice(0, 5))
        var insuredday = parseInt(this.insuredBirthDay.slice(0, 5))
        var insuredtoday = new Date()
        var insureddd = insuredtoday.getDate()
        var insuredmm = insuredtoday.getMonth() + 1
        var insuredyyyy = insuredtoday.getFullYear()
        if (insuredyear === insuredyyyy) {
          if ((insuredmonth > insuredmm && insuredday > insureddd) || (insuredmonth === insuredmm && insuredday > insureddd) || (insuredmonth > insuredmm)) {
            this.insuredBMonthInValid = true
            this.insuredBDayInValid = true
            this.insuredBYearErrorMsg = '請選擇要保人生日，要保人須年滿18歲。'
            return false
          } else {
            this.insuredBYearInValid = false
            this.insuredBMonthInValid = false
            this.insuredBDayInValid = false
            return true
          }
        } else {
          this.insuredBYearInValid = false
          this.insuredBMonthInValid = false
          this.insuredBDayInValid = false
          return true
        }
      } else {
        if (val === 'last') {
        } else {
          this.insuredBirthDay = ''
        }
        this.insuredBMonthInValid = false
        this.insuredBYearErrorMsg = ''
        return true
      }
    },
    toValiMotorName: function () {
      this.toCheckInsuredFirstNameVal()
      this.checkInsuredLastName()
    },
    insuredCheckBirthDay: function () {
      if (this.insuredBirthDay === '日' || this.insuredBirthDay === '') {
        this.insuredBDayInValid = true
        this.insuredBYearErrorMsg = '請選擇車主生日，車主須年滿18歲。'
        return false
      } else if (this.insuredBirthYear !== '' || this.insuredBirthMonth !== '' || this.insuredBirthDay !== '') {
        var insuredyear = parseInt(this.insuredBirthYear.slice(2, 5)) + 1929
        var insuredmonth = parseInt(this.insuredBirthMonth.slice(0, 5))
        var insuredday = parseInt(this.insuredBirthDay.slice(0, 5))
        var insuredtoday = new Date()
        var insureddd = insuredtoday.getDate()
        var insuredmm = insuredtoday.getMonth() + 1
        var insuredyyyy = insuredtoday.getFullYear()
        if (insuredyear === insuredyyyy) {
          if ((insuredmonth > insuredmm && insuredday > insureddd) || (insuredmonth === insuredmm && insuredday > insureddd) || (insuredmonth > insuredmm)) {
            this.insuredBMonthInValid = true
            this.insuredBDayInValid = true
            this.insuredBYearErrorMsg = '請選擇要保人生日，要保人須年滿18歲。'
            return false
          } else {
            this.insuredBYearInValid = false
            this.insuredBMonthInValid = false
            this.insuredBDayInValid = false
            return true
          }
        } else {
          this.insuredBYearInValid = false
          this.insuredBMonthInValid = false
          this.insuredBDayInValid = false
          return true
        }
      } else {
        this.insuredBDayInValid = false
        this.insuredBYearErrorMsg = ''
        return true
      }
    },
    checkInsuredBDAgain: function () {
      if (this.insuredBirthDay === '' || this.insuredBirthMonth === '' || this.insuredBirthDay === '') {
        this.insuredBYearInValid = true
        this.insuredBMonthInValid = true
        this.insuredBDayInValid = true
        this.insuredBYearErrorMsg = '請選擇車主生日，車主須年滿18歲。'
      } else {

      }
    },
    insuredCheckEmail: function () {
      if (this.insuredEmail) {
        if ((this.insuredEmail.match(/^([a-z0-9+_-]+)(.[a-z0-9+_-]+)*@([a-z0-9-]+.)+[a-z]{2,6}$/gi))) {
          let reg = new RegExp('[^@]+@[^@]+\\.[^@]+')
          if (!reg.test(this.insuredEmail)) {
            this.insuredEmailInValid = true
            this.$parent.isCompleted = false
            this.insuredEmailErrorMsg = '格式錯誤，請輸入正確email地址'
            return false
          } else {
            this.insuredEmailInValid = false
            return true
          }
        } else {
          this.insuredEmailInValid = true
          this.insuredEmailErrorMsg = '請輸入正確email地址'
          return false
        }
      } else if (this.insuredEmail === '') {
        this.insuredEmailInValid = true
        this.insuredEmailErrorMsg = '請輸入正確email地址'
        return false
      }
    },
    insuredCheckMobile: function () {
      if (this.insuredMobile) {
        var re = /^09\d{2}-?\d{3}-?\d{3}$/
        if (!re.test(this.insuredMobile)) {
          this.insuredMobileInValid = true
          this.$parent.isCompleted = false
          this.insuredMobileErrorMsg = '格式錯誤，請提供行動電話如：0912345678'
          return false
        } else {
          this.insuredMobileInValid = false
          return true
        }
      } else if (this.insuredMobile === '') {
        this.insuredMobileInValid = true
        this.insuredMobileErrorMsg = '請提供行動電話如：0912345678'
        return false
      }
    },
    insuredCheckCity: function () {
      if (!this.insuredCity) {
        this.insuredaddrCityInValid = true
        this.insuredaddrCityErrorMsg = ''
        return false
      } else {
        this.insuredaddrCityInValid = false
        this.insuredCityId = this.insuredCity.id
        this.insuredDistrict = ''
        return true
      }
    },
    insuredCheckArea: function () {
      if (!this.insuredDistrict) {
        this.insuredaddrAreaInValid = true
        this.insuredaddrAreaErrorMsg = ''
        return false
      } else {
        this.insuredaddrAreaInValid = false
        return true
      }
    },
    insuredCheckAddr: function () {
      if (!this.insuredAddr || this.insuredAddr === '') {
        this.insuredaddrInValid = true
        this.insuredaddrErrorMsg = ''
        return false
      } else {
        this.insuredaddrInValid = false
        return true
      }
    },
    scrollTo: function (element, to, duration) {
      if (duration <= 0) return
      var difference = to - element.scrollTop
      var perTick = difference / duration * 10

      setTimeout(function () {
        element.scrollTop = element.scrollTop + perTick
        if (element.scrollTop === to) return
        scrollTo(element, to, duration - 10)
      }, 10)
    },
    completeStepOne: function () {
      this.$ga.event({
        eventCategory: '車主資料頁',
        eventAction: 'click',
        eventLabel: 'User Click 下一步',
        value: ''
      })
      console.log('1', this.relationShipVali())
      console.log('2', this.toCheckNameVal('send'))
      console.log('3', this.checkPid())
      console.log('4', this.checkBirthYear())
      console.log('5', this.checkBirthMonth('last'))
      console.log('6', this.checkBirthDay())
      console.log('7', this.checkEmail())
      console.log('8', this.checkMobile())
      console.log('9', this.checkArea())
      console.log('10', this.checkAddr())
      console.log('12', this.checkInsuredLastName())
      console.log('13', this.toCheckInsuredFirstNameVal())
      console.log('14', this.checkInsuredPid())
      console.log('15', this.insuredCheckBirthYear())
      console.log('16', this.insuredCheckBirthMonth('last'))
      console.log('17', this.insuredCheckBirthDay())
      console.log('19', this.insuredCheckEmail())
      console.log('20', this.insuredCheckMobile())
      console.log('21', this.insuredCheckArea())
      console.log('22', this.insuredCheckAddr())
      console.log('23', this.insuredLastName)
      console.log('24', this.insuredFirstName)
      console.log('25', this.insuredPid)
      console.log('26', this.insuredGender)
      console.log('27', this.insuredBirthYear)
      console.log('28', this.insuredBirthMonth)
      console.log('29', this.insuredBirthDay)
      console.log('30', this.insuredMobile)
      console.log('31', this.insuredCity)
      console.log('32', this.insuredCityId)
      console.log('33', this.insuredDistrict)
      console.log('34', this.insuredDistrictId)
      console.log('35', this.insuredAddr)
      console.log('36', this.insuredEmail)
      console.log('37', this.agreementRead)
      console.log('38', this.withInsuredRelationShipItem)
      console.log('39', this.applicantLastName)
      console.log('40', this.applicantFirstName)
      console.log('41', this.applicantPid)
      console.log('42', this.gender)
      console.log('43', this.applicantBirthYear)
      console.log('44', this.applicantBirthMonth)
      console.log('45', this.applicantBirthDay)
      console.log('46', this.applicantMobile)
      console.log('47', this.applicantLivingCity)
      console.log('48', this.applicantLivingCityId)
      console.log('49', this.applicantLivingDistrict)
      console.log('50', this.applicantAddr)
      console.log('51', this.applicantEmail)
      this.relationShipVali()
      this.toCheckNameVal('send')
      this.checkPid()
      this.checkBirthYear()
      this.checkBirthMonth('last')
      this.checkBirthDay()
      this.checkEmail()
      this.checkMobile()
      this.checkArea()
      this.checkAddr()
      this.checkInsuredLastName()
      this.toCheckInsuredFirstNameVal()
      this.checkInsuredPid()
      this.insuredCheckBirthYear()
      this.insuredCheckBirthMonth('last')
      this.insuredCheckBirthDay()
      this.insuredCheckEmail()
      this.insuredCheckMobile()
      this.insuredCheckArea()
      this.insuredCheckAddr()
      if (
        !this.relationShipVali() ||
        !this.toCheckNameVal('send') ||
        !this.checkPid() ||
        !this.checkBirthYear() ||
        !this.checkBirthMonth('last') ||
        !this.checkBirthDay() ||
        !this.checkEmail() ||
        !this.checkMobile() ||
        !this.checkArea() ||
        !this.checkAddr() ||
        !this.checkInsuredLastName() ||
        !this.toCheckInsuredFirstNameVal() ||
        !this.checkInsuredPid() ||
        !this.insuredCheckBirthYear() ||
        !this.insuredCheckBirthMonth('last') ||
        !this.insuredCheckBirthDay() ||
        !this.insuredCheckEmail() ||
        !this.insuredCheckMobile() ||
        !this.insuredCheckArea() ||
        !this.insuredCheckAddr() ||
        !this.insuredLastName ||
        !this.insuredFirstName ||
        !this.insuredPid ||
        !this.insuredGender ||
        !this.insuredBirthYear ||
        !this.insuredBirthMonth ||
        !this.insuredBirthDay ||
        !this.insuredMobile ||
        !this.insuredCity ||
        !this.insuredCityId ||
        !this.insuredDistrict ||
        !this.insuredDistrictId ||
        !this.insuredAddr ||
        !this.insuredEmail ||
        !this.agreementRead ||
        !this.withInsuredRelationShipItem ||
        !this.applicantLastName ||
        !this.applicantFirstName ||
        !this.applicantPid ||
        !this.gender ||
        !this.applicantBirthYear ||
        !this.applicantBirthMonth ||
        !this.applicantBirthDay ||
        !this.applicantMobile ||
        !this.applicantLivingCity ||
        !this.applicantLivingCityId ||
        !this.applicantLivingDistrict ||
        !this.applicantLivingDistrictId ||
        !this.applicantAddr ||
        !this.applicantEmail
      ) {
        if (!this.agreementRead) {
          this.visible = true
          this.errorMsgOfFailSent = '提醒您，請閱讀並同意<<網路保險服務聲明事項>> 及 <<產險業履行個人資料保護法告知義務內容>>。'
        } else {
          if (
            !this.checkPid() ||
            !this.checkBirthYear() ||
            !this.checkBirthMonth('last') ||
            !this.checkBirthDay() ||
            !this.checkEmail() ||
            !this.checkMobile() ||
            !this.checkArea() ||
            !this.checkAddr() ||
            !this.applicantLastName ||
            !this.applicantFirstName ||
            !this.applicantPid ||
            !this.gender ||
            !this.applicantBirthYear ||
            !this.applicantBirthMonth ||
            !this.applicantBirthDay ||
            !this.applicantMobile ||
            !this.applicantLivingCity ||
            !this.applicantLivingCityId ||
            !this.applicantLivingDistrict ||
            !this.applicantLivingDistrictId ||
            !this.applicantAddr ||
            !this.applicantEmail
          ) {
            if (
              !this.checkArea() ||
              !this.checkAddr() ||
              !this.applicantLivingCity ||
              !this.applicantLivingCityId ||
              !this.applicantLivingDistrict ||
              !this.applicantLivingDistrictId ||
              !this.applicantAddr
            ) {
              document.querySelector('#appAd').scrollIntoView()
            }
            if (!this.checkMobile()) {
              document.querySelector('#appMobile').scrollIntoView()
            }
            if (!this.checkEmail()) {
              document.querySelector('#appEmail').scrollIntoView()
            }
            if (
              !this.checkBirthYear() ||
              !this.checkBirthMonth('last') ||
              !this.checkBirthDay()
            ) {
              document.querySelector('#appBd').scrollIntoView()
            }
            if (!this.checkPid()) {
              document.querySelector('#appId').scrollIntoView()
            }
            if (
              !this.applicantLastName ||
              !this.applicantFirstName
            ) {
              document.querySelector('#appName').scrollIntoView()
            }
          } else if (
            !this.checkInsuredLastName() ||
            !this.toCheckInsuredFirstNameVal() ||
            !this.checkInsuredPid() ||
            !this.insuredCheckBirthYear() ||
            !this.insuredCheckBirthMonth('last') ||
            !this.insuredCheckBirthDay() ||
            !this.insuredCheckEmail() ||
            !this.insuredCheckMobile() ||
            !this.insuredCheckArea() ||
            !this.insuredCheckAddr() ||
            !this.insuredLastName ||
            !this.insuredFirstName ||
            !this.insuredPid ||
            !this.insuredGender ||
            !this.insuredBirthYear ||
            !this.insuredBirthMonth ||
            !this.insuredBirthDay ||
            !this.insuredMobile ||
            !this.insuredCity ||
            !this.insuredCityId ||
            !this.insuredDistrict ||
            !this.insuredDistrictId ||
            !this.insuredAddr ||
            !this.insuredEmail
          ) {
            if (this.ischecked) {
              if (
                !this.checkArea() ||
                !this.checkAddr() ||
                !this.applicantLivingCity ||
                !this.applicantLivingCityId ||
                !this.applicantLivingDistrict ||
                !this.applicantLivingDistrictId ||
                !this.applicantAddr
              ) {
                document.querySelector('#appAd').scrollIntoView()
              }
              if (!this.checkMobile()) {
                document.querySelector('#appMobile').scrollIntoView()
              }
              if (!this.checkEmail()) {
                document.querySelector('#appEmail').scrollIntoView()
              }
              if (
                !this.checkBirthYear() ||
                !this.checkBirthMonth('last') ||
                !this.checkBirthDay()
              ) {
                document.querySelector('#appBd').scrollIntoView()
              }
              if (!this.checkPid()) {
                document.querySelector('#appId').scrollIntoView()
              }
              if (
                !this.applicantLastName ||
                !this.applicantFirstName
              ) {
                document.querySelector('#appName').scrollIntoView()
              }
            } else {
              if (
                !this.insuredCheckArea() ||
                !this.insuredCheckAddr() ||
                !this.insuredCityId ||
                !this.insuredDistrict ||
                !this.insuredDistrictId ||
                !this.insuredAddr
              ) {
                document.querySelector('#insuredAd').scrollIntoView()
              }
              if (!this.insuredCheckMobile()) {
                document.querySelector('#insuredMobile').scrollIntoView()
              }
              if (!this.insuredCheckEmail()) {
                document.querySelector('#insuredEmail').scrollIntoView()
              }
              if (
                !this.insuredCheckBirthYear() ||
                !this.insuredCheckBirthMonth('last') ||
                !this.insuredCheckBirthDay()
              ) {
                document.querySelector('#insuredBd').scrollIntoView()
              }
              if (!this.checkInsuredPid()) {
                document.querySelector('#insuredId').scrollIntoView()
              }
              if (
                !this.checkInsuredLastName() ||
                !this.toCheckInsuredFirstNameVal()
              ) {
                document.querySelector('#insuredName').scrollIntoView()
              }
              if (
                !this.relationShipVali()
              ) {
                document.querySelector('#insuredRelation').scrollIntoView()
              }
            }
          }
          this.visible = true
          this.errorMsgOfFailSent = '請填入正確資料。'
        }
      } else {
        // applicant data save for sending them to back-end
        this.$parent.$parent.applicantData['applicantLastName'] = this.applicantLastName
        this.$parent.$parent.applicantData['applicantFistName'] = this.applicantFirstName
        this.$parent.$parent.applicantData['applicantPid'] = this.applicantPid
        this.$parent.$parent.applicantData['applicantGender'] = this.gender
        this.$parent.$parent.applicantData['applicantRefillAddr'] = []
        this.$parent.$parent.applicantData['applicantRefillAddr'].push(this.applicantLivingCity)
        this.$parent.$parent.applicantData['applicantRefillAddr'].push(this.applicantLivingDistrict)
        this.$parent.$parent.applicantData['applicantBirthday'] = this.applicantBirthYear + ',' + this.applicantBirthMonth + ',' + this.applicantBirthDay
        this.$parent.$parent.applicantData['applicantBirthYear'] = this.applicantBirthYear
        this.$parent.$parent.applicantData['applicantBirthMonth'] = this.applicantBirthMonth
        this.$parent.$parent.applicantData['applicantBirthDay'] = this.applicantBirthDay
        this.$parent.$parent.applicantData['applicantMobile'] = this.applicantMobile
        this.$parent.$parent.applicantData['applicantCity'] = this.applicantLivingCity
        this.$parent.$parent.applicantData['applicantDistrict'] = this.applicantLivingDistrict
        this.$parent.$parent.applicantData['applicantCityId'] = this.applicantLivingCityId
        this.$parent.$parent.applicantData['applicantDistrictId'] = this.applicantLivingDistrictId
        this.$parent.$parent.applicantData['applicantZipcode'] = this.applicantLivingZipCode
        this.$parent.$parent.applicantData['applicantAddr'] = this.applicantAddr
        this.$parent.$parent.applicantData['applicantEmail'] = this.applicantEmail
        // insured data save for sending them to back-end
        this.$parent.$parent.insuredData['insuredLastName'] = this.insuredLastName
        this.$parent.$parent.insuredData['insuredFirstName'] = this.insuredFirstName
        this.$parent.$parent.insuredData['withInsuredRelationShipItem'] = this.withInsuredRelationShipItem
        this.$parent.$parent.insuredData['withInsuredRelationShipItemText'] = this.withInsuredRelationShipItem.text
        this.$parent.$parent.insuredData['withInsuredRelationShip'] = this.withInsuredRelationShipItem.value
        this.$parent.$parent.insuredData['ischecked'] = this.ischecked
        this.$parent.$parent.insuredData['insuredPid'] = this.insuredPid
        this.$parent.$parent.insuredData['insuredGender'] = this.insuredGender
        this.$parent.$parent.insuredData['insuredBirthYear'] = this.insuredBirthYear
        this.$parent.$parent.insuredData['insuredBirthMonth'] = this.insuredBirthMonth
        this.$parent.$parent.insuredData['insuredBirthDay'] = this.insuredBirthDay
        this.$parent.$parent.insuredData['insuredBirthdayForCheck'] = this.insuredBirthYear + ',' + this.insuredBirthMonth + ',' + this.insuredBirthDay
        this.$parent.$parent.insuredData['insuredMobile'] = this.insuredMobile
        this.$parent.$parent.insuredData['insuredCity'] = this.insuredCity
        this.$parent.$parent.insuredData['insuredCityId'] = this.insuredCity.id
        this.$parent.$parent.insuredData['insuredDistrict'] = this.insuredDistrict
        this.$parent.$parent.insuredData['insuredDistrictId'] = this.insuredDistrict.id
        this.$parent.$parent.insuredData['insuredZipcode'] = this.insuredDistrict.zipCode
        this.$parent.$parent.insuredData['insuredAddr'] = this.insuredAddr
        this.$parent.$parent.insuredData['insuredEmail'] = this.insuredEmail

        this.userSelectedProduct = this.$parent.userSelectedProduct
        var sendDataBackFirstTime = {}
        sendDataBackFirstTime['productIDFromBackend'] = this.$parent.$parent.dataId
        sendDataBackFirstTime['applicantData'] = this.$parent.$parent.applicantData
        var aYearSlice = this.$parent.$parent.applicantData.applicantBirthYear
        if (aYearSlice.length > 3) {
          var aYearSliceNum = parseInt(aYearSlice.toString().slice(2, 4))
        }
        var aMonthSlice = parseInt(this.$parent.$parent.applicantData.applicantBirthMonth.toString().slice(0, 2))
        var aDaySlice = this.$parent.$parent.applicantData.applicantBirthDay
        var aDaySliceNum = parseInt(aDaySlice.toString().slice(0, 2))
        var applicantYear = aYearSliceNum === undefined ? aYearSlice : aYearSliceNum + 1911
        var applicantMonth = aMonthSlice
        var applicantDay = aDaySliceNum
        sendDataBackFirstTime['applicantData']['applicantBirthYear'] = applicantYear
        sendDataBackFirstTime['applicantData']['applicantBirthMonth'] = applicantMonth
        sendDataBackFirstTime['applicantData']['applicantBirthDay'] = applicantDay
        sendDataBackFirstTime['insuredData'] = this.$parent.$parent.insuredData
        var insuredYear = parseInt(this.insuredBirthYear.toString().slice(2, 4)) + 1911
        var insuredMonth = parseInt(this.insuredBirthMonth.toString().slice(0, 2))
        var insuredDay = parseInt(this.insuredBirthDay.toString().slice(0, 2))
        sendDataBackFirstTime['insuredData']['insuredBirthYear'] = insuredYear
        sendDataBackFirstTime['insuredData']['insuredBirthMonth'] = insuredMonth
        sendDataBackFirstTime['insuredData']['insuredBirthDay'] = insuredDay
        sendDataBackFirstTime['productDetail'] = {}
        sendDataBackFirstTime['productDetail'].productYear = this.userSelectedProduct.year
        sendDataBackFirstTime['productDetail']['productCC'] = this.userSelectedProduct.productCC
        console.log('1', sendDataBackFirstTime)
        try {
          this.$localStorage.set('formStore', JSON.stringify(sendDataBackFirstTime))
        } catch (e) {
        }
        console.log('2', sendDataBackFirstTime)
        if (this.$parent.$parent['isDevMode'] === true) {
          this.$parent.$router.push('/viForm')
        } else {
          axios({
            url: '/CareLineMotor/motorbike-mbr/journey/saveApplicantAndInsured',
            method: 'post',
            params: {
              data: JSON.stringify(sendDataBackFirstTime)
            }
          }).then(response => {
            if (response.data.isEx === true) {
              this.errorMsgOfFailSent = response.data.msgs
              this.visible = true
              return false
            } else {
              console.log(response)
              var dataId = response.data.dataId
              this.$parent.dataId = dataId
              this.$router.push('/viForm')
            }
          }, response => {
            // error callback
          })
        }
      }
    }
  },
  computed: {
    toShowActivity: function () {
      return this.$parent.$parent.isActivityShow
    },
    toComputedData: function () {
      if (this.ischecked) {
        this.ischecked = true
        this.insuredLastName = this.applicantLastName
        this.insuredFirstName = this.applicantFirstName
        this.insuredPid = this.applicantPid
        this.insuredGender = this.gender
        this.insuredBirthYear = this.applicantBirthYear
        this.insuredBirthMonth = this.applicantBirthMonth
        this.insuredBirthDay = this.applicantBirthDay
        this.insuredMobile = this.applicantMobile
        this.insuredCity = this.applicantLivingCity
        this.insuredCityId = this.applicantLivingCityId
        this.insuredDistrict = this.applicantLivingDistrict
        this.insuredDistrictId = this.applicantLivingDistrictId
        this.insuredAddr = this.applicantAddr
        this.insuredEmail = this.applicantEmail
        this.agreementRead = true
        this.relationshipInValid = false
        this.insuredLastNameInValid = false
        this.insuredFirstNameInValid = false
        this.insuredPidInValid = false
        this.insuredBYearInValid = false
        this.insuredBMonthInValid = false
        this.insuredBDayInValid = false
        this.insuredMobileInValid = false
        this.insuredaddrInValid = false
        this.insuredaddrCityInValid = false
        this.insuredaddrAreaInValid = false
        this.insuredEmailInValid = false
        this.withInsuredRelationShipItem = { text: '本人', value: 'SELF' }
        this.withInsuredRelationShip = this.withInsuredRelationShipItem.value
      }

      if (this.applicantLivingCity) {
        this.areaList()
      }
      if (this.insuredCity) {
        this.insuredAreaList()
      }
    },
    alterChangeNav: function () {
      return this.$parent.$parent.secondPageNav
    },
    speedPosition: function () {
      return this.$parent.$parent.motoSpeedPosition
    },
    processNum: function () {
      return this.$parent.$parent.processbarNu
    },
    steps: function () {
      return this.$parent.$parent.steps
    },
    taiwanYear: function () {
      var date = new Date()
      var limitAge = {}
      limitAge = date.getFullYear() - 1929
      var returnVal = []
      returnVal.push(limitAge)
      for (var i = limitAge; i > 1; i--) {
        limitAge--
        returnVal.push(limitAge)
      }

      return returnVal
    },
    taiwanMonth: function () {
      var months = []
      for (var i = 1; i <= 12; i++) {
        months.push(i)
      }
      return months
    },
    getCurrentMonthDay: function () {
      if (this.applicantBirthMonth !== '') {
        var m = parseInt(this.applicantBirthMonth.slice(0, 2))
        var y = parseInt(this.applicantBirthYear.slice(2, 6)) + 1911
        switch (m) {
          case 1: case 3: case 5: case 7: case 8:case 10: case 12:
            return 32
          case 2:
            if ((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0) {
              return 30
            }
            return 29

          default:
            return 31
        }
      }
    },
    getInsuredCurrentMonthDay: function () {
      if (this.insuredBirthMonth !== '') {
        var m = parseInt(this.insuredBirthMonth.slice(0, 2))
        var y = parseInt(this.insuredBirthYear.slice(2, 6)) + 1911
        switch (m) {
          case 1: case 3: case 5: case 7: case 8:case 10: case 12:
            return 32
          case 2:
            if ((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0) {
              return 30
            }
            return 29

          default:
            return 31
        }
      }
    },
    thisInsuredMonthDays: function () {
      var returnVal = []
      for (var i = 1; i < this.getInsuredCurrentMonthDay; i++) {
        returnVal.push(i)
      }
      return returnVal
    },
    thisMonthDays: function () {
      var returnVal = []
      for (var i = 1; i < this.getCurrentMonthDay; i++) {
        returnVal.push(i)
      }
      return returnVal
    },
    cityList: function () {
      return this.$parent.$parent.AcityList
    },
    applicantLivingDistrictId: function () {
      return this.applicantLivingDistrict.id
    },
    applicantLivingZipCode: function () {
      return this.applicantLivingDistrict.zipCode
    },
    relationShipList: function () {
      return this.$parent.$parent.RelatedList
    },
    insuredZipCode: function () {
      return this.insuredDistrict.zipCode
    }
  },
  created () {
  },
  mounted () {
    /* eslint-disable */
    var CE_SNAPSHOT_NAME = "要保人資料 | Care Line英國凱萊 機車強制險 | 立刻投保 | Care Line英國凱萊 機車強制險"
    /* eslint-enable */
    var formData = JSON.parse(this.$localStorage.get('formStore'))
    if (formData) {
      this.$parent.$parent.applicantData = formData.applicantData
      var applicantShownBirth = formData.applicantData['applicantBirthday']
      var applicantbirthForRefill = applicantShownBirth.split(',')
      for (let i = 0; i < applicantbirthForRefill.length; i++) {
        switch (i) {
          case 0 :
            this.applicantBirthYear = applicantbirthForRefill[i]
            break
          case 1 :
            this.applicantBirthMonth = applicantbirthForRefill[i]
            break
          case 2 :
            this.applicantBirthDay = applicantbirthForRefill[i]
            break
          default:
        }
      }
      this.applicantLivingDistrict = formData.applicantData['applicantDistrict']
      this.applicantLivingCity = formData.applicantData['applicantCity']
      this.applicantLivingCityId = formData.applicantData['applicantCityId']
      this.applicantLastName = formData.applicantData['applicantLastName']
      this.applicantFirstName = formData.applicantData['applicantFistName']
      this.applicantPid = formData.applicantData['applicantPid']
      this.gender = formData.applicantData['applicantGender']
      this.applicantMobile = formData.applicantData['applicantMobile']
      this.applicantAddr = formData.applicantData['applicantAddr']
      this.applicantEmail = formData.applicantData['applicantEmail']
      this.$parent.$parent.insuredData = formData.insuredData
      var insuredShownBirth = formData.insuredData['insuredBirthdayForCheck']
      var birthForRefill = insuredShownBirth.split(',')
      for (let i = 0; i < birthForRefill.length; i++) {
        switch (i) {
          case 0 :
            this.insuredBirthYear = birthForRefill[i]
            break
          case 1 :
            this.insuredBirthMonth = birthForRefill[i]
            break
          case 2 :
            this.insuredBirthDay = birthForRefill[i]
            break
          default:
        }
      }
      this.ischecked = formData.insuredData['ischecked']
      this.withInsuredRelationShipItem = formData.insuredData['withInsuredRelationShipItem']
      this.withInsuredRelationShip = formData.insuredData['withInsuredRelationShipItem'].value
      this.insuredLastName = formData.insuredData['insuredLastName']
      this.insuredFirstName = formData.insuredData['insuredFirstName']
      this.insuredPid = formData.insuredData['insuredPid']
      this.insuredGender = formData.insuredData['insuredGender']
      this.insuredMobile = formData.insuredData['insuredMobile']
      this.insuredAddr = formData.insuredData['insuredAddr']
      this.insuredEmail = formData.insuredData['insuredEmail']
      this.insuredDistrict = formData.insuredData['insuredDistrict']
      this.insuredDistrictId = formData.insuredData['insuredDistrict'].id
      this.insuredCity = formData.insuredData['insuredCity']
      this.insuredCityId = formData.insuredData['insuredCity'].id
    } else {
    }
    window.scrollTo(0, 0)
    if (this.$parent.userSelectedProduct === undefined) {
      this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #navbar p {
    color: #777;
    margin: 15px;
    font-weight: bold;
  }
  @media screen and (max-width:415px){
    div.iconErrorMessageBack.specialIcon{
      top: 50px!important;
    }
    #specialAddrShrink {
      font-size: 14px!important;
    }
    .customerForm {
      margin-top:40px;
    }
    .customerForm .contractRules a, .customerForm .contractRules p {
      font-size: 13px!important;
    }
    #showOverScreen {
      padding: 0px;
      padding-left: 20px;
    }
    .gender span {
      font-size:13px;
    }
  }
  @media screen and (max-width:320px){
    .customerForm span {
      font-size: 13px!important;
      left: 60px;
    }
    .col-sm-4.innerClass .fa.fa-check {
      left: 60px!important;
    }

    .col-sm-4.innerClass .fa.fa-check.notActiveBtnAbove {
      color: #ccc!important;
      left: 60px!important;
    }
  }
  .customerForm .gender span {
    white-space: nowrap;
  }

  span#hideInLowScreenID {
    padding-right: 65px!important;
    white-space: nowrap;
  }

  @media screen and (max-width: 1094px) {
    .container .col-sm-12 .col-sm-6 {
      width: 100%!important;
    }
  }

  @media screen and (max-width: 1166px) and (min-width: 550px){
    .col-sm-4.innerClass .fa.fa-check {
      left: 45px!important;
    }

    .col-sm-4.innerClass .fa.fa-check.notActiveBtnAbove {
      color: #ccc!important;
      left: 45px!important;
    }
  }

  .formPage .container {
    padding-right: 0px!important;
    padding-left: 0px!important;
  }

  .col-sm-4.innerClass .fa.fa-check {
    color: white;
    top: 26px;
    position: absolute;
    left: 16px;
    font-size: 18px;
  }

  .col-sm-4.innerClass .fa.fa-check.notActiveBtnAbove {
    color: #ccc!important;
  }

  @media screen and (max-width: 550px) {
    .col-sm-4.innerClass .fa.fa-check {
      top: 15px;
      left: 70px;
    }

    .col-sm-4.innerClass .fa.fa-check.notActiveBtnAbove {
      color: #ccc!important;
      top: 15px;
      left: 70px;
    }
  }

</style>
