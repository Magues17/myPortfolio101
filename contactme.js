


  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function(event) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
      alert("Please fill in all required fields.");
      event.preventDefault();
    }
  });




  const updateUser = (data) => {

  }
  
  const submitForm = () => {
  
      const input1 = document.getElementById('input1')
      console.log('input1:', input1.value)
      
      // const input = document.querySelector('#input1')
      // inputs = Array.from(inputs)
      // for(let index = 0; index < inputs.length; index++) {
      //     let value = inputs[index].value
      //     console.log ('value:', value)
      //     inputVals.push(value)
      // }
      // console.log('inputVals:', inputVals)
      // updateUser(inputVals)
      let inputVals = inputs.map(input =>  {
          return input.value
      // })
      })
  }
  