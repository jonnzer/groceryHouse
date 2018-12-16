<template>
	  <div class="movieList">
          <!-- swiper -->
          <swiper :options="swiperOption" ref="mySwiper">
              <swiper-slide class="everySlide">
                <div class="first_screen">
                  <div class="timeBox" v-if="calc_time">
                      <span class="time_day">
                         {{calc_time.time_day}}
                      </span>
                      <span class="mid_line">

                      </span>
                      <span class="right_time_box">
                          <p class="time_year">
                             {{calc_time.time_year}}
                          </p>
                          <p class="time_month">
                             {{calc_time.time_month}}
                          </p>
                      </span>
                  </div>
                  <img :src="first_background_pic" alt="loading..." class="high_pic">
                </div>
              </swiper-slide>
              <swiper-slide class="everySlide">
                  <div class="second_screen">
                    <ul class="movie_detail">
                      <li class="movie_actor">
                        主演： {{latestMovie.movie_actor}}
                      </li>
                      <li class="movie_tag">
                        标签： {{latestMovie.movie_tag}}
                      </li>
                      <li class="movie_content" >
                        剧情：
                          <p>{{latestMovie.movie_content}}</p>
                      </li>
                      <li class="movie_sum">
                        亮点： {{latestMovie.movie_sum}}
                      </li>
                      <li >
                        下载： <input type="text"
                                   :value="latestMovie.movie_seed"
                                   class="movie_seed_input"
                                   ref="seed">
                        <button @click="copy_seed">复制</button>
                      </li>
                    </ul>
                    <!--<img class="high_pic" :src="second_background_pic" alt="">-->
                  </div>
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
          </swiper>

    </div>

</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import {mapActions,mapGetters} from 'vuex'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import { copy_input } from "@/utils/str_operation"

  export default {
		name: "movieList",
    components: {
      swiper,
      swiperSlide
    },
    data(){
		  return {
          swiperOption: {
            direction: 'vertical',
            keyboard : true,
            height:  window.innerHeight,
            mousewheel: true,
            effect : 'slide',
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
          }

      }
    },
    methods: {
      ...mapActions([
        'act_latestMovie'
      ]),
      copy_seed(){      // 复制种子
        let seedInput = this.$refs.seed
        copy_input(seedInput).then(
          () => {
           // alert('success') 放toast
          })
      }
    },
    created(){
      this.act_latestMovie()
    },
    mounted() {
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      console.log('this is current swiper instance object', this.swiper)
      // this.swiper.slideTo(3, 1000, false)
    },
    computed: {
      ...mapGetters([
        'latestMovie'
      ]),
      // swiper() {
      //   return this.$refs.mySwiper.swiper
      // },
      first_background_pic(){     // 第一张背景图
        if (this.latestMovie) {
          return this.latestMovie.movie_high_pic.split(',')[0]
        }
      },

      calc_time(){
        if (this.latestMovie){
          let timeParam = {}
          timeParam.time_day   = this.latestMovie.movie_create_data.split('-')[2]
          timeParam.time_month = this.latestMovie.movie_create_data.split('-')[1]
          timeParam.time_year  = this.latestMovie.movie_create_data.split('-')[0]
          return timeParam
        }
      },

      second_background_pic(){    // 第二张背景图
        if (this.latestMovie) {
          return this.latestMovie.movie_high_pic.split(',')[1]
        }
      },


    },
	}

</script>

<style scoped>
  .movieList{
    font-size: 1.6rem;
    overflow-y: hidden;
  }
  /*电影-- 首屏*/
  .movieList .first_screen{
    width: 100%;
    height: 100%;
    position: relative;
    color: #fff;
  }
  .movieList .first_screen .timeBox {
    position: absolute;
    left: 13.3rem;
    top: 13.3rem;
    border: .1rem solid #fff;
    width: 13.3rem;
    height: 6.8rem;
  }

  .movieList .first_screen .timeBox span{
    float: left;
  }

  .movieList .first_screen .timeBox .time_day{
    display: inline-block;
    width: 49%;
    height: 6.8rem;
    line-height: 6.8rem;
    text-align: center;
    font-size: 3.2rem;
    font-weight: 600;
  }

  .movieList .first_screen .timeBox .mid_line{
    width: .1rem;
    height: 4.8rem;
    line-height: 4.8rem;
    margin-top: 1rem;
    background: #fff;
  }

  .movieList .first_screen .timeBox .right_time_box{
    width: 49%;
    text-align: center;
    font-weight: bolder;
    padding-top: .5rem;
    padding-bottom: .5rem;
    height: 5.8rem;

  }

  .movieList .first_screen .timeBox .right_time_box .time_year{
    height: 2.6rem;
    line-height: 2.6rem;
  }

  .movieList .first_screen .timeBox .right_time_box .time_month{
    height: 2.6rem;
    line-height: 2.6rem;

  }

  /*电影 -- 第二屏*/
  .movieList .second_screen{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .movieList  .second_screen .movie_detail{
    position: absolute;
    left: 13.3rem;
    top: 13.3rem;
    color: #000;
  }

  .movieList  .second_screen .movie_detail li{
    width: 80%;
    height: auto;
    line-height: 4rem;

  }
  .movieList  .second_screen .movie_detail .movie_content p{
    text-indent: 2em;
    margin-left: 2em;
  }

  .movieList  .second_screen .movie_detail li .movie_seed_input{
    width: 25rem;
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .movieList .everySlide{
    margin-bottom: -.1rem;
  }
  .movieList .everySlide .high_pic{
    width: 100%;
    height: 100%;
  }
  .movieList .swiper-pagination{  /*分页器*/
    position: fixed;
  }
  .swiper-container-vertical > .swiper-pagination-bullets{  /*分页器*/
    right: 2rem;
  }
</style>
