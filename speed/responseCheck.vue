<template>
  <div>
    <div id="screen" v-bind:class="state" @click="onClickScreen">{{message}}</div>
    <div>
      <p>평균시간 {{result.reduce((a, c) => a + c, 0) / result.length || 0 }}ms</p>
      <button @click="onReset">리셋</button>
    </div>
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