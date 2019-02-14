//Създавам функция, която съм въвела в html файла
//Подавам и като аргументи тези които съм перифразирала в html файла

function createCalendar(selector,events){
    //Тук взимам съотвено контейнера за календара container-calendar,
    //но в случая от самата от функция createCalendar го вземам от html файла
    //и не е ясно какъв вид елемент ще е дали клас, id и заради това го достъпвам с querySelector

    var container=document.querySelector(selector);

    //създавам всяка една дата в кутия, като и задавам съответно име на 
    //за конкретната дата и един div елемент, в който ще добавям списъка със събития(events)
    //?strong
    var boxDay=document.createElement('div');
    var boxTitle=document.createElement('strong');
    var boxContent = document.createElement('div');

    //Създавам стилове за самоте кутии
    
    container.style.width = (120 * 7.5) + 'px';

    boxDay.style.margin='0';
    boxDay.style.padding='0';
    boxDay.style.border = '1px solid black';
    boxDay.style.width='120px';
    boxDay.style.height='120px';
    boxDay.style.display = 'inline-block';

    //добавяме в кутиите съответно тяхното заглавие и съдържание


    boxDay.appendChild(boxTitle);
    boxDay.appendChild(boxContent);


    //масив в дните от седмицата

    var weekDays = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

    //създавам си функция, която ще ни пълни с 
    //информация тези създадени кутии,
    //като това ще стане чрез празен масив(boxesDay).
    
    function createBoxesForMonth(events){
        
        var boxesDay=[];
        //правя обхождане, включващо 28 итерации в себе си за генериране на самите кутии
        //като за всяка кутия и задаваме съответни ден от седмицата плюс генерираното
        //число, което ще играе роля на дата
       //cloneNode прави копия на обекта boxDay, коет означава че копира всичко на ново.

        for(var i=0;i<28;i++){
            var wDay = weekDays[i%weekDays.length];
            boxTitle.innerHTML = wDay + ' ' + (i+1) + ' '+ 'February';
            boxesDay.push(boxDay.cloneNode(true));
        }

        return boxesDay;
    }


    //създавам функция която има в себе си аргументите всички създадени кутии (boxes), заедно с масива events
    //генериращ събитията
    //обхождаме този масив events, като създавам променлива присвояваща новата стойност от всяка итерация

    function addEvents(boxes,events){
        for(var i=0;i<events.length;i++){
            var event = events[i];

            //тъй като целия масив от кутии който сме генерирали брой датите
            //от 0, а не от 1, то задавам на променлива за съдържанието
            // да присвоява всички генерирани кутии със съответната дата
            //на събитието, което съм задала като property и му добавям 1

            //lastElementChild ще ни селектира последния елемент от boxes,който в случая е boxContent
            var content = boxes[event.date - 1].lastElementChild;
            content.innerHTML = event.title;
        }
    }

    //създавам променлива boxes, която ще получи функцията createBoxesForMonth(или по точно всички създадени кутиии от тази функция(масива))
    //за целта ще обходим цялата дължина на тази променлива приела масива на тази фунция, и контейнера ни container ще приема всички тези 
    //създадени кутии

    //Тук се опитах да направя така че да ми се визуализира по-съюия начин следващия месец но не ми се получава нищо.
    var boxes=createBoxesForMonth();
    addEvents(boxes, events);
    for(var i=0; i <boxes.length;i++){
        container.appendChild(boxes[i]);
    }
}

        var button=document.getElementById("button1");
        button.addEventListener('click', next);
        
        


       
           function next(selector){
           //create elements
            container.delete;
            var container2=document.querySelector(selector);
            var nextBoxDay=document.createElement('div');
            var nextBoxTitle=document.createElement('strong');
            var nextBoxContent = document.createElement('div');


//style
            container2.style.width = (120 * 7.5) + 'px';
            nextBoxDay.style.margin='0';
            nextBoxDay.style.padding='0';
            nextBoxDay.style.border = '1px solid black';
            nextBoxDay.style.width='120px';
            nextBoxDay.style.height='120px';
            nextBoxDay.style.display = 'inline-block';

//apend     
            nextBoxDay.appendChild(nextBoxTitle);
            nextBoxDay.appendChild(nextBoxContent);
            container2.appendChild(nextBoxDay);
//weekdays

            var weekDays = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
            function createBoxesForNextMonth(){
        
             var nextBoxesDay=[];
   
             for(var i=0;i<31;i++){
                var wDay = weekDays[i%weekDays.length];
                nextBoxTitle.innerHTML = wDay + ' ' + (i+1) + ' '+ 'Mart';
                nextBoxesDay.push(nextBoxDay.cloneNode(true));
                }

             return nextBoxesDay;
            }

            var nextBoxes=createBoxesForNextMonth();
            for(var i=0; i <nextBoxes.length;i++){
                container2.appendChild(nextBoxes[i]);
            }
        }
       
    /* Като цяло този календар го правих по друга логика и заради това съм описала кое за какво се използва. Имам в предвид, че не
    съм го правила по точките, които трябва да изпълним последователно, както е указано е в проекта. */