

document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('input');
    const defaultText = document.getElementById("default");
    const debounceText = document.querySelector('#debounce');
    const throttleText = document.querySelector('#throttle');

    // const updatedDebounceText = debounce((text)=>{
    //     debounceText.textContent = text
    // }, 1000);

    // const updateTrottleText = throttle((text)=>{
    //     throttleText.textContent = text;
    // },1000)



    
    const updatedDebounceText = debounce(()=>{
    incrementCount(debounceText);
    }, 1000);

    const updateTrottleText = throttle(()=>{
        incrementCount(throttleText);
    },1000)


    //   input.addEventListener("input", e => {
    //     defaultText.textContent = e.target.value;
    //     updatedDebounceText(e.target.value);
    //     updateTrottleText(e.target.value)
    //   });

      function debounce(cb, delay){
        let timeout
      return (...args)=>{
        clearTimeout(timeout)
       timeout = setTimeout(()=>{
            cb(...args)
        },delay);
      }

      }


      function throttle(cb, delay){
        let shouldWait = false;
        let waitingArgs;

        const timeoutFunc = ()=>{
            if(waitingArgs == null){
                shouldWait = false
               }else{
                cb(...waitingArgs);
                waitingArgs = null;
                setTimeout(timeoutFunc, delay)
               }

        }


          return (...args)=>{
            if(shouldWait){
          waitingArgs = args;
          return;
            } 
            cb(...args);
            shouldWait = true
            setTimeout(timeoutFunc, delay)
          }
      }

      


      document.addEventListener("mousemove", e=>{
        incrementCount(defaultText);
        updatedDebounceText()
        updateTrottleText()
      });

      function incrementCount(element){
        element.textContent = (parseInt(element.innerText) || 0) +1
      }




  });
  