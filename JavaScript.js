document.addEventListener('DOMContentLoaded', function() {

  const classes = ['solar', 'galax', 'nebul', 'comet', 'moon'];
  const buttons = document.getElementsByClassName('bttn');

  if (buttons.length !== classes.length) {
    console.error('Liczba przycisków musi być równa liczbie klas divów z tablicy "classes".');
    return;
  }

  for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener('click', function() {

      classes.forEach(className => {
        const divs = document.getElementsByClassName(className);
        for (let j = 0; j < divs.length; j += 1) 
          {
            divs[j].style.display = 'none';
          }
      });

      const divShow = document.getElementsByClassName(classes[i]);
      for (let j = 0; j < divShow.length; j += 1) 
        {
          divShow[j].style.display = 'block';
        }
    });
  }

});