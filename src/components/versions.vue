<template>
  <div class="versions">
    <div class="row" style="background-color:black; margin-top:150px;">
    <h1 class="load">
      <span>0</span>
      <span>0</span>
      <span>1</span>
      <span>.</span>
      <span>0</span>
      <span>0</span>
      <span>1</span>
      <span>.</span>
      <span>0</span>
      <span>0</span>
      <span>1</span>
    </h1>
    </div>
    <div class="row" style="margin-top: 40px;">
      <div class="col-xs-12 text-center">
        <a class="btn-11" href="/">回首頁</a>
      </div> 
    </div>
  </div>
</template>

<script>

var $ = require('jquery')
window.jQuery = $
window.$ = $

export default {
  name: 'versions',
  head: {
    title: {
      inner: '版本 | Care Line英國凱萊 機車強制險'
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
    
  },
  mounted () {
    /* eslint-disable */
    var CE_SNAPSHOT_NAME = "版本 | Care Line英國凱萊 機車強制險 | 立刻投保 | Care Line英國凱萊 機車強制險"
    /* eslint-enable */
    window.scrollTo(0, 0)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body{
  background: #CCD0D4;
}
h1.load{
  text-align: center;
  text-transform: uppercase;
  font-family: 'Nunito', sans-serif;
  font-size: 4.6875em;
  color: transparent;
  letter-spacing: 0.01em;
}
.load span{
  text-shadow:
    0 0 2px rgba(204, 208, 212,0.9),
    0 15px 25px rgba(0, 0, 0, 0.3),
    0 -2px 3px rgba(0, 0, 0, 0.1),
    0 -5px 10px rgba(255, 255, 255, 0.5),
    0 5px 10px rgba(0, 0, 0, 0.3),
    0 3px 4px rgba(255, 255, 255, 0.2),
    0 0 20px rgba(255, 255, 255, 0.45);
  
    animation: loading 1.20s ease-in-out infinite alternate;
}

@keyframes loading {
	to {text-shadow:
    0 0 2px rgba(204, 208, 212,0.2),
    0 0 3px rgba(0, 0, 0, 0.02),
    0 0 0 rgba(0, 0, 0, 0),
    0 0 0 rgba(255, 255, 255, 0),
    0 0 0 rgba(0, 0, 0, 0),
    0 0 0 rgba(255, 255, 255, 0),
    0 0 0 rgba(255, 255, 255, 0);}
}

.load span:nth-child(2){
  animation-delay:0.15s;
}
.load span:nth-child(3){
  animation-delay:0.30s;
}
.load span:nth-child(4){
  animation-delay:0.45s;
}
.load span:nth-child(5){
  animation-delay:0.60s;
}
.load span:nth-child(6){
  animation-delay:0.75s;
}
.load span:nth-child(7){
  animation-delay:0.90s;
}
.load span:nth-child(8){
  animation-delay:1.05s;
}
.load span:nth-child(9){
  animation-delay:1.20s;
}

@import url(https://fonts.googleapis.com/css?family=Open+Sans:400|Raleway:300);
  html {
    padding-top: 50px;
    font-family: 'Open Sans', Helvetica, arial, sans-serif;
    text-align: center;
    background-color: #eeeeee;
  }
  html *,
  html *:before,
  html *:after {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    -webkit-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
  }
  html i, html em,
  html b, html strong,
  html span {
    -webkit-transition: none;
    transition: none;
  }
  
  *:before,
  *:after {
    z-index: -1;
  }
  
  h1,
  h4 {
    font-family: 'Raleway', 'Open Sans', sans-serif;
    margin: 0;
    line-height: 1;
  }
  
  a {
    text-decoration: none;
    line-height: 80px;
    color: black;
  }
  
  .centerer {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  @media (min-width: 600px) {
    .wrap {
      width: 50%;
      float: left;
    }
  }
  [class^="btn-"] {
    position: relative;
    display: block;
    overflow: hidden;
    width: 100%;
    height: 80px;
    max-width: 250px;
    margin: 1rem auto;
    text-transform: uppercase;
    border: 1px solid currentColor;
  }
  
  @-webkit-keyframes criss-cross-left {
    0% {
      left: -20px;
    }
    50% {
      left: 50%;
      width: 20px;
      height: 20px;
    }
    100% {
      left: 50%;
      width: 375px;
      height: 375px;
    }
  }
  
  @keyframes criss-cross-left {
    0% {
      left: -20px;
    }
    50% {
      left: 50%;
      width: 20px;
      height: 20px;
    }
    100% {
      left: 50%;
      width: 375px;
      height: 375px;
    }
  }
  @-webkit-keyframes criss-cross-right {
    0% {
      right: -20px;
    }
    50% {
      right: 50%;
      width: 20px;
      height: 20px;
    }
    100% {
      right: 50%;
      width: 375px;
      height: 375px;
    }
  }
  @keyframes criss-cross-right {
    0% {
      right: -20px;
    }
    50% {
      right: 50%;
      width: 20px;
      height: 20px;
    }
    100% {
      right: 50%;
      width: 375px;
      height: 375px;
    }
  }
  .btn-11 {
    position: relative;
    color: #e84466;
  }
  .btn-11:before, .btn-11:after {
    position: absolute;
    top: 50%;
    content: '';
    width: 20px;
    height: 20px;
    background-color: #e25e78;
    border-radius: 50%;
  }
  .btn-11:before {
    left: -20px;
    -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
  }
  .btn-11:after {
    right: -20px;
    -webkit-transform: translate(50%, -50%);
            transform: translate(50%, -50%);
  }
  .btn-11:hover {
    color: white;
  }
  .btn-11:hover:before {
    -webkit-animation: criss-cross-left 0.8s both;
            animation: criss-cross-left 0.8s both;
    -webkit-animation-direction: alternate;
            animation-direction: alternate;
  }
  .btn-11:hover:after {
    -webkit-animation: criss-cross-right 0.8s both;
            animation: criss-cross-right 0.8s both;
    -webkit-animation-direction: alternate;
            animation-direction: alternate;
  }
</style>
