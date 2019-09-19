<template>
  <div>
    <div id="screen" v-bind:class="state" @click="onClickScreen">{{message}}</div>
    <template v-show="result.length">
      <!-- v-if인 경우는 화면에 출력을 안해주지면 v-show는 태그는 있지만 보여주는 않는다.(display:none) -->
      <p>평균시간 {{average}}ms</p>
      <button @click="onReset">리셋</button>
    </template>
    <!-- template 를 태그를 쓸 경우에 임시 태그이다.  -->
  </div>
</template>

<script>
  let startTime = 0
  let endTime = 0
  let timeout = null 
  // 화면이랑 관련이 있는 것만 data, 그렇지 않으면 변수
  export default {
      data(){
        return {
          result : [],
          state: 'waiting',
          message : '클릭해소 시작하세요'
        }
      },
      computed : {
        // computed는 데이터를 가공해서 쓸때 !!!!!!
        average() {
          return this.result.reduce((a, c) => a + c, 0) / this.result.length || 0 
          //값이 캐싱이 된다.
        }
      },
      methods : {
        onReset() {
          this.result = []
        },
        onClickScreen (){ 
          if(this.state === 'waiting') {
            this.state = 'ready'
            this.message = '초록색이 되면 클릭하세요'
            timeout = setTimeout(() => {
              this.state = 'now'
              this.message = '지금 클릭'
              startTime = new Date()
            }, Math.floor(Math.random() * 1000) + 2000)
          } else if (this.state === 'ready') {
            clearTimeout(timeout)
            this.state = 'now'
            this.message = '너무성급 하네요 초록색일떄 클릭'
          } else if (this.state === 'now') {
            endTime = new Date()
            this.state = 'waiting'
            this.message = '클릭해서 시작 하세요'
            this.result.push(endTime - startTime)
          }
        }
      }
  }
</script>
 
<style scoped>
  #screen {
     width: 300px;
     height: 200px;
     text-align: center;
     user-select: none;
   }
  #screen.waiting {
    background-color: aqua;
  }
  #screen.ready {
    background-color: red;
    color: white;
  }
  #screen.now {
    background-color: greenyellow;
  }
</style>