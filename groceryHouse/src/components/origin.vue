<template>
  <div class="origin">
     <div id="type-js" ></div>
     <div id="particles-js">
         <div class="arrowDiv" >
           <i class="arrowHead">&#xe639;</i>
          </div>
          <div class="doorDiv">
            <i class="arrowHead">&#xe60b;</i>
          </div>
     </div>
  </div>
</template>

<script>
require('particles.js')
export default {
  name: "origin",
  data() {
    return {
     
    };
  },
  created(){
  },
  mounted(){
      this.$nextTick(() => {
            this.initParticleJS()
        })
            this.initTypeJs()
        
  },
  methods: {
  initTypeJs(){
      var Typed = require('typed.js');
      var typed = new Typed('#type-js', {
        strings: [ "I Just Wanna Do Something Awesome!!!!"],
        typeSpeed: 80,
        loop: true,
        showCursor: false,
      });      
  },
   initParticleJS(){
     particlesJS('particles-js',{
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#000000"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#ffffff"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#000000",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  },
);
},


  },
};
</script>

<style >
.origin{
  height: 100%;
  overflow-y: hidden;
  text-align: center;
  
}

#type-js{ /*打印机效果*/
  color:#fd79a8;
  font-size: 21px;
  margin-top: 30px;
  font-weight: 700;
}
#particles-js{ /*粒子效果*/
  height: 100%;
}
.arrowDiv{
    position: absolute;
    bottom: 20px;
    right: 15%;
    animation: arrowMoveR 2.5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-out;
}
.doorDiv{
     position: absolute;
     bottom:20px;
     right: 6%;
     animation: doorScale 2.5s;
     animation-iteration-count: infinite;
     animation-timing-function: ease-out;

}
.arrowHead{
  font-family: 'arrowHead'!important;
  font-size: 32px;
  color: #fd79a8;
 
}

/*箭头的字体图标样式*/
@font-face {
  font-family: 'arrowHead';  /* project id 635518 */
  src: url('//at.alicdn.com/t/font_635518_ttu5kbzt2sa46lxr.eot');
  src: url('//at.alicdn.com/t/font_635518_ttu5kbzt2sa46lxr.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_635518_ttu5kbzt2sa46lxr.woff') format('woff'),
  url('//at.alicdn.com/t/font_635518_ttu5kbzt2sa46lxr.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_635518_ttu5kbzt2sa46lxr.svg#iconfont') format('svg');
}

/*箭头动画*/
@keyframes arrowMoveR{
  0% {
    right: 15%;
  }
  100% {
    right: 12%;
    transform: scale(1.5,1.5);
  }
}
/*门动画*/ 
@keyframes doorScale {
  0% {

  }
  100% {
    transform: scale(2,2)
  }
}
</style>
