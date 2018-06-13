<template>
    <div class="homePage">
            <div class="allScreenPic"></div>
            <header class="hp_header">
                <span class="myLogo" @click="jumpRoute('origin')">
                  <i class="lit_house">&#xe8ff;</i>
                    痴谷雨の杂货店
                </span>
                <ul class="allOption">
                  <li @click="jumpRoute('movieList')">MOIVE</li>
                  <li>MUSIC</li>
                  <li>COMIC</li>
                  <li>TOUR</li>
                  <li>GAME</li>
                </ul>
          </header>
            <p class="oneWord">
              <span class="leftIcon"> 『 </span>{{oneWObj.hitokoto}}<span class="rightIcon">』</span>
            </p>
            <p class="fromWho">
              <span> -「</span>{{oneWObj.from}}<span>」</span>
            </p>
    </div>
</template>
<script>
  import { mapGetters,mapActions,mapMutations } from 'vuex'

  export default {
    name: "homePage",
    data() {
        return {

        }
    },
  methods: {
    ...mapActions([
      'act_oneWord',
    ]),
    jumpRoute(name){        //  跳转路由
        this.$router.push({name: name})
    }

  },
    created(){
      this.act_oneWord()
    },
    computed: {
      ...mapGetters([
        'oneWObj',      // 一言对象
      ])
    },
}
</script>
<style>
  @font-face {
    font-family: 'headerHouse';  /* project id 635518 */
    src: url('//at.alicdn.com/t/font_635518_6fkh94rr2nkoi529.eot');
    src: url('//at.alicdn.com/t/font_635518_6fkh94rr2nkoi529.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_635518_6fkh94rr2nkoi529.woff') format('woff'),
    url('//at.alicdn.com/t/font_635518_6fkh94rr2nkoi529.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_635518_6fkh94rr2nkoi529.svg#iconfont') format('svg');
  }
  .homePage{
    font-size: 1.6rem;
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  /*allScreen background Pic*/
  .homePage .allScreenPic{
    position: relative;
    width: 100%;
    height: 100%;
    background: url('../assets/pic4.jpg') center center no-repeat;
    background-size: cover;
    transform: matrix(1, 0, 0, 1, 0, 0);
    transition: all 500ms linear;
  }
  .homePage .allScreenPic:hover{
    transform: matrix(1.05, 0, 0, 1.05, 0, 0);

  }
  /*头部 -- start*/
  .homePage .hp_header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-weight: bold;
    height: 5rem;
    width: 100%;
    line-height: 5rem;
    /*border: 0.01rem solid palevioletred;*/
    color: #F2F2F2;
    /*color: #000;*/
    /*background: linear-gradient(to right, #ffe283, #ce94ff);*/
    background: transparent;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 3;
  }
  .homePage .lit_house{
    font-family: 'headerHouse';
    margin-left: 6rem;
    font-size: 2.1rem;

  }
  .homePage .myLogo{
    cursor: pointer;
  }
  .homePage .allOption{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .homePage .allOption li{
    width: 15rem;
    text-align: center;
    cursor: pointer;
  }
  .homePage .allOption li:nth-child(5){
    margin-right: 2rem;
  }
  /*头部 -- end*/
  /*一言 --start*/
  .homePage .oneWord{
    position: absolute;
    left: 6rem;
    bottom: 15%;
    color: #F2F2F2;
    font-weight: bold;
  }
  .homePage .oneWord .leftIcon{
    position: relative;
    left: 0px;
    top: -1rem;
  }

  .homePage .oneWord .rightIcon{
    position: relative;
    right: 0px;
    bottom:  -1rem;
  }
  .homePage .fromWho{
    position: absolute;
    left: 23rem;
    bottom: 8%;
    color: #F2F2F2;
    font-weight: bold;
  }
</style>

