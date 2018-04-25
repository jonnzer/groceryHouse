<template>
    <div class="homePage">
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
    /*left: 0;*/
    /*top: 0;*/
    width: 100%;
    height: 100%;
  }
  .homePage .hp_header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-weight: bold;
    height: 5rem;
    line-height: 5rem;
    /*border: 0.01rem solid palevioletred;*/
    color: #F2F2F2;
    background: linear-gradient(to right, #ffe283, #ce94ff);

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
</style>

