



function renderCalc(number) {
    functionCalc.renderNumber(number);
};

window.addEventListener('keypress', (e) => {
    if(/^[0-9]*$/.test(e.key)) {
        renderCalc(e.key);
    };
    switch(e.key) {
        case '+':
            functionCalc.sum();
            break;
        case '-':
            functionCalc.sub();
            break;
        case '*':
            functionCalc.multi();
            break;
        case '/':
            functionCalc.div();
            break;
        case 'Backspace':
            console.log(e.key)
            break;
        case 'Enter':
            functionCalc.res();
            break;
    };
});

// Histoy Numbers
var NDP = ''; // Number Display Primary
var NDS = ''; // Number Display Secondary
var tokenOperator;

let displayPrimary = document.querySelector('.currentInput');
let displaySecondary = document.querySelector('.answerScreen');


const functionCalc = {
    renderNumber: function(data) {
        if(NDP.length <= 10) {
            NDP = NDP + data;
            displayPrimary.innerHTML = NDP;
        };
    },
    sum: function() {
        if(NDP.length && !NDS.length) {
            displaySecondary.innerHTML = NDP;
            displayPrimary.innerHTML = "";
            NDS = NDP;
            NDP = '';
            tokenOperator = 'sum';
            this.changeIconOperation('sum');
        };
    },
    sub: function() {
        if(NDP.length && !NDS.length) {
            displaySecondary.innerHTML = NDP;
            displayPrimary.innerHTML = "";
            NDS = NDP;
            NDP = '';
            tokenOperator = 'sub';
            this.changeIconOperation('sub');
        };
    },
    multi: function() {
        if(NDP.length && !NDS.length) {
            displaySecondary.innerHTML = NDP;
            displayPrimary.innerHTML = "";
            NDS = NDP;
            NDP = '';
            tokenOperator = 'multi';
            this.changeIconOperation('multi');
        };
    }, 
    div: function() {
        if(NDP.length && !NDS.length) {
            displaySecondary.innerHTML = NDP;
            displayPrimary.innerHTML = "";
            NDS = NDP;
            NDP = '';
            tokenOperator = 'div';
            this.changeIconOperation('div');
        };
    },
    res: function() {
        if(NDP.length && NDS.length) {
            switch(tokenOperator) {
                case 'sum':
                    NDP = parseInt(NDS) + parseInt(NDP);
                    displayPrimary.innerHTML = NDP;
                    displaySecondary.innerHTML = "0";
                    NDS = "";
                    tokenOperator = "";
                    NDP = NDP.toString();
                    break;
                case 'sub':
                    NDP = parseInt(NDS) - parseInt(NDP);
                    displayPrimary.innerHTML = NDP;
                    displaySecondary.innerHTML = "0";
                    NDS = "";
                    tokenOperator = "";
                    NDP = NDP.toString();
                    break;
                case 'multi':
                    NDP = parseInt(NDS) * parseInt(NDP);
                    displayPrimary.innerHTML = NDP;
                    displaySecondary.innerHTML = "0";
                    NDS = "";
                    tokenOperator = "";
                    NDP = NDP.toString();
                    break;
                case 'div':
                    NDP = parseInt(NDS) / parseInt(NDP);
                    displayPrimary.innerHTML = NDP;
                    displaySecondary.innerHTML = "0";
                    NDS = "";
                    tokenOperator = "";
                    NDP = NDP.toString();
                    break;
            };
        };
    },
    deleteNumber: function() {
        NDP = NDP.substring(0, NDP.length - 1);
        displayPrimary.innerHTML = NDP;
    },
    clean: function() {
        // --- * --- ResetCalc Info --- * ---
        NDP = "";
        NDS = "";
        tokenOperator = "";
        displayPrimary.innerHTML = "";
        displaySecondary.innerHTML = "0";

        this.changeIconOperation('clean');

        
    },
    changeIconOperation: function(data) {
        let iconSub = document.querySelector('#iconSub');
        let iconAdd = document.querySelector('#iconAdd');
        let iconMulti = document.querySelector('#iconMulti');
        let iconDiv = document.querySelector('#iconDiv');

        switch(data) {
            case 'sum':
                    console.log(data);
                    iconAdd.style.display = "none";
                    iconDiv.style.display = "none";
                    iconMulti.style.display = "none";
                    iconSub.style.display = "none";
                    iconAdd.style.display = "block";
                    break;
            case 'sub':
                    iconAdd.style.display = "none";
                    iconDiv.style.display = "none";
                    iconMulti.style.display = "none";
                    iconSub.style.display = "none";
                    iconSub.style.display = "block";
                    break;
            case 'multi':
                    iconAdd.style.display = "none";
                    iconDiv.style.display = "none";
                    iconMulti.style.display = "none";
                    iconSub.style.display = "none";
                    iconMulti.style.display = "block";
                    break;
            case 'div':
                    iconAdd.style.display = "none";
                    iconDiv.style.display = "none";
                    iconMulti.style.display = "none";
                    iconSub.style.display = "none";
                    iconDiv.style.display = "block";
                    break;
            case 'clean':
                    iconAdd.style.display = "none";
                    iconDiv.style.display = "none";
                    iconMulti.style.display = "none";
                    iconSub.style.display = "none";
                    iconSub.style.display = "none";
                break;
        };

    },
};