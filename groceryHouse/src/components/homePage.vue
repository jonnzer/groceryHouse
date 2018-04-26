<template>
    <div class="homePage">
            <div class="allScreenPic"></div>
            <header class="hp_header">
                <span class="myLogo">
                  <i class="lit_house">&#xe8ff;</i>
                    痴谷雨の杂货店
                </span>
                <ul class="allOption">
                  <li>MOIVE</li>
                  <li>MUSIC</li>
                  <li>COMIC</li>
                  <li>TOUR</li>
                  <li>GAME</li>
                </ul>
          </header>
            <p class="oneWord">起风了,唯有努力生存。</p>
    </div>
</template>
<script>
export default {
    name: "homePage",
    data() {
        return {

        }
    }
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
  }

  /*allScreen background Pic*/
  .homePage .allScreenPic{
    position: absolute;
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
    /*text-align: center;*/
    /*top:50%;*/
    /*left:50%;*/
    /*transform:translate(-50%,-50%);*/
    left: 6rem;
    bottom: 10%;
    color: #F2F2F2;
    font-weight: bold;
  }
</style>

