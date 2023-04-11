function gatyaru() {
  var cul = 0
  name1 = document.getElementById('name1')
  name2 = document.getElementById('name2')
  name3 = document.getElementById('name3')
  name4 = document.getElementById('name4')
  name5 = document.getElementById('name5')
  num1 = document.getElementById('num1')
  num2 = document.getElementById('num2')
  num3 = document.getElementById('num3')
  num4 = document.getElementById('num4')
  num5 = document.getElementById('num5')
  if (num1.value == 0) {
    var num1_2 = 0
  } else {
    var num1_2 = Math.floor(num1.value*acc.value)
  }
  if (num2.value == 0) {
    var num2_2 = 0
  } else {
    var num2_2 = Math.floor(num2.value*acc.value)
  }
  if (num3.value == 0) {
    var num3_2 = 0
  } else {
    var num3_2 = Math.floor(num3.value*acc.value)
  }
  if (num4.value == 0) {
    var num4_2 = 0
  } else {
    var num4_2 = Math.floor(num4.value*acc.value)
  }
  if (num5.value == 0) {
    var num5_2 = 0
  } else {
    var num5_2 = Math.floor(num5.value*acc.value)
  }
  
  sum = num1_2 + num2_2 + num3_2 + num4_2 + num5_2
  
  var pr = Math.floor(Math.random() * sum) + 1
  
  if (num1_2 != 0) {
    if (pr > 0) {
      if (pr <= num1_2) {
        var restext = name1.value
      }
    }
  }
  if (num2_2 != 0) {
    if (pr > num1_2) {
      if (pr <= num1_2+num2_2) {
        var restext = name2.value
      }
    }
  }
  if (num3_2 != 0) {
    if (pr > num1_2+num2_2) {
      if (pr <= num1_2+num2_2+num3_2) {
        var restext = name3.value
      }
    }
  }
  if (num4_2 != 0) {
    if (pr > num1_2+num2_2+num3_2) {
      if (pr <= num1_2+num2_2+num3_2+num4_2) {
        var restext = name4.value
      }
    }
  }
  if (num5_2 != 0) {
    if (pr > num1_2+num2_2+num3_2+num4_2) {
      if (pr <= num1_2+num2_2+num3_2+num4_2+num5_2) {
        var restext = name5.value
      }
    }
  }
  
  result1.innerText = sum + ' / ' + (pr)
  result2.innerText = 'アタリは ' + restext
}

function def() {
  name1.value = 'A'
  name2.value = 'B'
  name3.value = 'C'
  name4.value = 'D'
  name5.value = 'E'
  num1.value = '20'
  num2.value = '20'
  num3.value = '20'
  num4.value = '20'
  num5.value = '20'
}

function cl() {
  name1.value = ''
  name2.value = ''
  name3.value = ''
  name4.value = ''
  name5.value = ''
  num1.value = ''
  num2.value = ''
  num3.value = ''
  num4.value = ''
  num5.value = ''
}

function numcl() {
  num1.value = ''
  num2.value = ''
  num3.value = ''
  num4.value = ''
  num5.value = ''
}

function namecl() {
  name1.value = ''
  name2.value = ''
  name3.value = ''
  name4.value = ''
  name5.value = ''
}

function abcde() {
  name1.value = 'A'
  name2.value = 'B'
  name3.value = 'C'
  name4.value = 'D'
  name5.value = 'E'
}

function num() {
  name1.value = '1'
  name2.value = '2'
  name3.value = '3'
  name4.value = '4'
  name5.value = '5'
}

function cl1() {
  name1.value = ''
  num1.value = ''
}

function cl2() {
  name2.value = ''
  num2.value = ''
}

function cl3() {
  name3.value = ''
  num3.value = ''
}

function cl4() {
  name4.value = ''
  num4.value = ''
}

function cl5() {
  name5.value = ''
  num5.value = ''
}
