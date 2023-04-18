<script>

 examOne = (first, second) => {
  if(typeof(first) === 'string' && typeof(second) === 'string') {
    console.log('문자열 데이터는 안받아요')
  } else {
   let a = first + second
   return a
  }
  }

  console.log(examOne(2,3))


  examTwo = (first, second, third) => {
    if(typeof(first) === 'number' && typeof(second) === 'number' && typeof(third) === 'number' ) {
    let b = first * second * third 
    return b
  } else {
    console.log('문자열 데이터는 안받아요')
  }
  }

  console.log(examTwo(2,3,4))


  examThree = (str) => {
    if(typeof(str) === 'string'){
      let arr = str.split('');
      let count = 0;
      for (let i = 0; i<arr.indexof('o');i++) {
        ++count
      }
      ++count
      console.log(count)
    } else {
    console.log('숫자 데이터는 안받아요')
    }
  }

  console.log(examThree('hello'))


  examFour = (array) => {
    let min = Math.min.apply(Math, array)
    console.log(min)
  }
  console.log(examFour([3, 1, 4, 2]))
  // apply() 차후 확인


  examFive = (array) => {
    let a = ㅁㅁㅁㅁ(array)
    return a
  }
  console.log(examFive([1, 2, 3]))
// ㅁㅁㅁㅁ???


</script>
