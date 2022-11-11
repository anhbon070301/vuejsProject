<template>
    <div class="div-tong">
      <input
        type="number"
        v-model="numberA"
        placeholder="Nhập số a"
      />
      <input
        type="text"
        class="toantu"
        v-model="toanTu"
      />
      <input
        type="number"
        v-model="numberB"
        placeholder="Nhập số b"
      />
      <label>=</label>
      <input
        type="number"
        class="toantu"
        v-model="ketqua"
        placeholder="Kết quả"
      />
    </div>
    <label v-if="ketqua > 100">Giá trị lớn hơn 100</label>
    <label v-else>Giá trị nhỏ hơn 100</label> <br>
    <label v-if="Number.isInteger(ketqua) == true">Giá trị là số nguyên</label>
    <label v-else>Giá trị không phải số nguyên</label>
    <label>{{rank}}</label>
  
  </template> 
  
  <script>
  export default {
    data() {
      return {
        numberA: 0,
        numberB: 0,
        ketqua: 0,
        toanTu: "+",
        aaa: 'Test aaaa',
        rank: '',
      };
    },
    
    watch: {
        numberA: function(){
          this.calculateWatch()
        },
        numberB: function(){
          this.calculateWatch()
        },
        toanTu: function(){
          this.calculateWatch()
        }
      },
  
  
    methods: {   
      calculateWatch() {
        if (this.toanTu === "+") {
          this.ketqua = this.numberA + this.numberB;
        } else if (this.toanTu === "-") {
          this.ketqua = this.numberA - this.numberB;
        } else if (this.toanTu === "*") {
          this.ketqua = this.numberA * this.numberB;
        } else if (this.toanTu === "/") {
          this.ketqua = this.numberA / this.numberB;
        } else if (this.toanTu === "1") {
          this.ketqua =
            this.numberA * this.numberA +
            2 * this.numberA * this.numberB +
            this.numberB * this.numberB;
            this.checkRank(50);
        } else if (this.toanTu === "2") {
          this.ketqua =
            this.numberA * this.numberA -
            2 * this.numberA * this.numberB +
            this.numberB * this.numberB;
        } else if (this.toanTu === "3") {
          this.ketqua =
            (this.numberA - this.numberB) * (this.numberA + this.numberB);
        }
      },

      checkRank(ketqua) {
        if (500 < ketqua) {
          this.rank = 'Rank A';
        } else if (201 <= ketqua <= 500) {
          this.rank = 'Rank B';
        } else if (151 <= ketqua <= 200) {
          this.rank = 'Rank C';
        } else if (101 <= ketqua <= 150) {
          this.rank = 'Rank D';
        } else if (ketqua <= 100) {
          this.rank = 'Rank F';
        }
      }
    },
  }
  </script>

  <style scoped>
  .div-tong {
    display: flex;
  }
  .toantu {
    width: 10%;
    text-align: center;
  }
  </style>