<template>
    <div>
        <h2>{{result}}</h2>
        <!-- <form action="" v-on:submit="onSubmit"> -->
        <form action="" @submit.prevent="onSubmit">
            <input type="text" v-model="value" ref="answer">
            <button type="submit">click</button>
        </form>
        <div>시도 : {{tries.length}}</div>
        <ul>
            <li v-for="t in tries"> 
                <div>{{t.try}}</div>
                <div>{{t.result}}</div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                answer : this.getNumber(),
                tries : [],
                value : '',
                result : ''
            }
        },
        methods : {
            getNumber(){
                const condidates = [1,2,3,4,5,6,7,8,9]
                const array = []
                for (let index = 0; index < 4; index++) {
                    const ranNum = condidates.splice(Math.floor(Math.random() * (9 - index)), 1)[0]
                    array.push(ranNum)
                }
                return array
            },
            onSubmit(e){
                if (this.value === this.answer.join('')) {
                    this.tries.push({
                        try : this.value,
                        result : '홈런'
                    })
                    this.result = '홈런'
                    alert('다시시작')
                    this.tries = []
                    this.$refs.answer.focus()                    
                } else {
                    if(this.tries.length > 9) {
                        this.result = `10번 넘어서 실패! 답은 ${this.answer.join('')}`
                    }
                    let strike = 0;
                    let ball = 0
                    const answerArray = this.value.split('').map((v) => parseInt(v))
                    console.log(this.answer)
                    for (let i = 0; i < 4; i++) {
                        if(answerArray[i] === this.answer[i]) {
                            strike++
                        } else if (this.answer.includes(answerArray[i])) {
                            ball++
                        }
                    }
                    this.tries.push({
                        try : this.value,
                        result : `${strike} 스크라이크, ${ball} 볼`
                    })
                    this.value = ""
                    this.$refs.answer.focus()
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>