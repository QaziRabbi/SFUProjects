window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector)
        if (element) element.innerText = text
    }

   for(const type of['chrome', 'mode', 'electron']) {
       replaceText('$(type)-version, procwss.version[type]')
   } 

})
